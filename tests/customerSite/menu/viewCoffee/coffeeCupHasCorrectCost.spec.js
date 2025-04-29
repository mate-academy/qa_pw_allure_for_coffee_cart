import { test } from '../../../_fixtures/fixtures';
import { priceFormatStr } from '../../../../src/common/helpers/priceFormatters';
import { COFFEE_NAMES, COFFEE_PRICES, SEVERITY, EPIC, FEATURE } from '../../../../src/constants';
import * as allure from "allure-js-commons";

let testParameters = [];

for (const [key, value] of Object.entries(COFFEE_NAMES)) {
  testParameters.push({ coffee: value, price: COFFEE_PRICES[key] });
}

testParameters.forEach(({ coffee, price }) => {
  test(`The ${coffee} cup has correct cost`, async ({ menuPage }) => {
    await allure.severity(SEVERITY.critical);
    await allure.epic(EPIC.customerSite);
    await allure.feature(FEATURE.menu);
    await allure.story('As a customer I want to verify the cost of a coffee cup so I can make an informed decision about my purchase');


    const priceStr = priceFormatStr(price);

    await menuPage.open();

    await menuPage.assertCoffeeCupCostHasValue(coffee, priceStr);
  });
});
