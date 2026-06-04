import { test } from '../../../_fixtures/fixtures';
import { priceFormatStr } from '../../../../src/common/helpers/priceFormatters';
import { COFFEE_NAMES, COFFEE_PRICES } from '../../../../src/constants';
import * as allure from "allure-js-commons";


let testParameters = [];

for (const [key, value] of Object.entries(COFFEE_NAMES)) {
  testParameters.push({ coffee: value, price: COFFEE_PRICES[key] });
}

testParameters.forEach(({ coffee, price }) => {
  test(`The ${coffee} cup has correct cost`, async ({ menuPage }) => {

    await allure.severity(`CRITICAL`);
    await allure.parentSuite("Customer site");
    await allure.suite("Menu");
    await allure.story('The user clicks on the coffee cup and sees the correct cost for it');
    await allure.subSuite('Coffee cup cost');
    await allure.epic(`'CoffeeCart' Customer site`);
    await allure.feature('Cooffee cup cost');

    const priceStr = priceFormatStr(price);
    await menuPage.open();
    await menuPage.assertCoffeeCupCostHasValue(coffee, priceStr);
  });
});
