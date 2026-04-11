import { test } from '../../../_fixtures/fixtures';
import { totalPriceFormatStr } from '../../../../src/common/helpers/priceFormatters';
import { COFFEE_NAMES, COFFEE_PRICES } from '../../../../src/constants';
import * as allure from 'allure-js-commons';

let testParameters = [];

for (const [key, value] of Object.entries(COFFEE_NAMES)) {
  testParameters.push({ coffee: value, price: COFFEE_PRICES[key] });
}

testParameters.forEach(({ coffee, price }) => {
  test(`Total cost is updated after clicking the ${coffee} cup`, async ({
    menuPage,
  }) => {
    await allure.epic('Customer side');
    await allure.feature('Manu');
    await allure.story('The total cost is based on the price of the coffee');
    await allure.severity(`blocker`);
    await allure.parentSuite('Customer side');
    await allure.suite('Manu');
    await allure.subSuite('The total cost is based on the price of the coffee');

    const totalPriceStr = totalPriceFormatStr(price);

    await menuPage.open();
    await menuPage.clickCoffeeCup(coffee);

    await menuPage.assertTotalCheckoutContainsValue(totalPriceStr);
  });
});
