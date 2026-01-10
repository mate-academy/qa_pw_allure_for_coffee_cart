import { test } from '../../../_fixtures/fixtures';
import * as allure from "allure-js-commons";
import { totalPriceFormatStr } from '../../../../src/common/helpers/priceFormatters';
import { COFFEE_NAMES, COFFEE_PRICES } from '../../../../src/constants';

let testParameters = [];

for (const [key, value] of Object.entries(COFFEE_NAMES)) {
  testParameters.push({ coffee: value, price: COFFEE_PRICES[key] });
}

testParameters.forEach(({ coffee, price }) => {
  test(`Total cost is updated after clicking the ${coffee} cup`, async ({
    menuPage,
  }) => {
    allure.parentSuite(`Customer Site`);
    allure.suite(`Menu`);
    allure.subSuite(`Add Coffee`);
    
    allure.epic(`'Coffee Cart' Customer Site`);
    allure.feature(`Menu`);
    allure.story(`The user is able to add a coffee from the Menu and the total cost is updated`);
    
    allure.severity(`critical`);

    const totalPriceStr = totalPriceFormatStr(price);

    await menuPage.open();
    await menuPage.clickCoffeeCup(coffee);

    await menuPage.assertTotalCheckoutContainsValue(totalPriceStr);
  });
});
