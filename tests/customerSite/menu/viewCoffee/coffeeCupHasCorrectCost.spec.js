import { test } from '../../../_fixtures/fixtures';
import { allure } from 'allure-playwright';
import { priceFormatStr } from '../../../../src/common/helpers/priceFormatters';
import { COFFEE_NAMES, COFFEE_PRICES } from '../../../../src/constants';

const testParameters = [];

for (const [key, value] of Object.entries(COFFEE_NAMES)) {
  testParameters.push({ coffee: value, price: COFFEE_PRICES[key] });
}

testParameters.forEach(({ coffee, price }) => {
  test(`The ${coffee} cup has correct cost`, async ({ menuPage }) => {
    await allure.parentSuite('CoffeeCart');
    await allure.suite('Customer Site');
    await allure.subSuite('View Coffee');
    await allure.severity('normal');

    await allure.epic('CoffeeCart Customer');
    await allure.feature('Menu');
    await allure.story('Display correct coffee price');

    const priceStr = priceFormatStr(price);

    await menuPage.open();

    await menuPage.assertCoffeeCupCostHasValue(coffee, priceStr);
  });
});
