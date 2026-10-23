import { test } from '../../../_fixtures/fixtures';
import { priceFormatStr } from '../../../../src/common/helpers/priceFormatters';
import { COFFEE_NAMES, COFFEE_PRICES, SEVERITY } from '../../../../src/constants';
import * as allure from "allure-js-commons";  

let testParameters = [];

for (const [key, value] of Object.entries(COFFEE_NAMES)) {
  testParameters.push({ coffee: value, price: COFFEE_PRICES[key] });
}

testParameters.forEach(({ coffee, price }) => {
  test(`The ${coffee} cup has correct cost`, async ({ menuPage }) => {
    await allure.parentSuite(`Customer site`);
    await allure.suite('Menu');
    await allure.subSuite('Coffee cup has correct cost');
    await allure.epic('Customer site');
    await allure.feature('Menu');
    await allure.story('Coffee cup has correct cost');
    await allure.severity(`${SEVERITY.CRITICAL}`);
    
    const priceStr = priceFormatStr(price);

    await menuPage.open();

    await menuPage.assertCoffeeCupCostHasValue(coffee, priceStr);
  });
});
