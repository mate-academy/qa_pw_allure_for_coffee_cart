import { test } from '../../../_fixtures/fixtures';
import * as allure from 'allure-js-commons';
import { priceFormatStr } from '../../../../src/common/helpers/priceFormatters';
import { COFFEE_NAMES, COFFEE_PRICES } from '../../../../src/constants';

let testParameters = [];

for (const [key, value] of Object.entries(COFFEE_NAMES)) {
  testParameters.push({ coffee: value, price: COFFEE_PRICES[key] });
}

testParameters.forEach(({ coffee, price }) => {
  test(`The ${coffee} cup has correct cost`, async ({ menuPage }) => {
    await allure.severity(`normal`);

    await allure.epic('Customer Site');
    await allure.feature('Cart');
    await allure.story('Add To Cart');

    await allure.parentSuite('Customer Site');
    await allure.suite('Cart');
    await allure.subSuite('Add To Cart');

    const priceStr = priceFormatStr(price);

    await menuPage.open();

    await menuPage.assertCoffeeCupCostHasValue(coffee, priceStr);
  });
});
