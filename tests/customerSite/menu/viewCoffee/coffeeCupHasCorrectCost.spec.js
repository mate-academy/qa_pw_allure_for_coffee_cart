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

    await allure.parentSuite(`Customer Site`);
    await allure.suite('Menu');
    await allure.subSuite('View cost');

    await allure.severity(`normal`);

    await allure.epic(`'Menu' Customer site`);
    await allure.feature('Menu');
    await allure.story('The user should be able to view correct coffee cost');

    const priceStr = priceFormatStr(price);

    await menuPage.open();

    await menuPage.assertCoffeeCupCostHasValue(coffee, priceStr);
  });
});
