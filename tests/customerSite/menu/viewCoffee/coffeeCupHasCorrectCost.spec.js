import { test } from '../../../_fixtures/fixtures';
import * as allure from "allure-js-commons";
import { priceFormatStr } from '../../../../src/common/helpers/priceFormatters';
import { COFFEE_NAMES, COFFEE_PRICES } from '../../../../src/constants';

let testParameters = [];

for (const [key, value] of Object.entries(COFFEE_NAMES)) {
  testParameters.push({ coffee: value, price: COFFEE_PRICES[key] });
}

testParameters.forEach(({ coffee, price }) => {
  test(`The ${coffee} cup has correct cost`, async ({ menuPage }) => {
    allure.parentSuite(`Customer Site`);
    allure.suite(`Menu`);
    allure.subSuite(`View Coffee`);

    allure.epic(`'Coffee Cart' Customer Site`);
    allure.feature(`Menu`);
    allure.story(`The user is able to view a coffee from the Menu and the cost is displayed correctly`);

    allure.severity(`critical`);

    const priceStr = priceFormatStr(price);

    await menuPage.open();

    await menuPage.assertCoffeeCupCostHasValue(coffee, priceStr);
  });
});
