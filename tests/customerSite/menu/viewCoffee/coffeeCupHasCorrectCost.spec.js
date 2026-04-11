import { test } from '../../../_fixtures/fixtures';
import { priceFormatStr } from '../../../../src/common/helpers/priceFormatters';
import { COFFEE_NAMES, COFFEE_PRICES } from '../../../../src/constants';
import * as allure from 'allure-js-commons';

let testParameters = [];

for (const [key, value] of Object.entries(COFFEE_NAMES)) {
  testParameters.push({ coffee: value, price: COFFEE_PRICES[key] });
}

testParameters.forEach(({ coffee, price }) => {
  test(`The ${coffee} cup has correct cost`, async ({ menuPage }) => {
    await allure.epic('Customer side');
    await allure.feature('Manu');
    await allure.story('The cost is updated accordingly to the coffee price');
    await allure.severity(`blocker`);
    await allure.parentSuite('Customer side');
    await allure.suite('Manu');
    await allure.subSuite(
      'The cost is updated accordingly to the coffee price',
    );

    const priceStr = priceFormatStr(price);

    await menuPage.open();

    await menuPage.assertCoffeeCupCostHasValue(coffee, priceStr);
  });
});
