import { test } from '../../../_fixtures/fixtures';
import { allure } from 'allure-playwright';
import { priceFormatStr } from '../../../../src/common/helpers/priceFormatters';
import { COFFEE_NAMES, COFFEE_PRICES } from '../../../../src/constants';

let testParameters = [];

for (const [key, value] of Object.entries(COFFEE_NAMES)) {
  testParameters.push({ coffee: value, price: COFFEE_PRICES[key] });
}

testParameters.forEach(({ coffee, price }) => {
  test(`The ${coffee} cup has correct cost`, async ({ menuPage }) => {
    // Allure metadata
    allure.label({ name: 'parentSuite', value: 'Menu' });
    allure.label({ name: 'suite', value: 'View Coffee' });
    allure.label({ name: 'subSuite', value: coffee });
    allure.severity('critical');
    allure.epic('Customer Site');
    allure.feature('Menu functionality');
    allure.story(`Check that ${coffee} cup has correct cost`);

    // Test logic
    const priceStr = priceFormatStr(price);

    await menuPage.open();
    await menuPage.assertCoffeeCupCostHasValue(coffee, priceStr);
  });
});
