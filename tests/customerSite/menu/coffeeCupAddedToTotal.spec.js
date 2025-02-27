import { test } from '../../_fixtures/fixtures';
import * as allure from 'allure-js-commons';
import { totalPriceFormatStr } from '../../../src/common/priceFormatters';
import { COFFEE_NAMES, COFFEE_PRICES } from '../../../src/constants';

let testParameters = [];

for (const [key, value] of Object.entries(COFFEE_NAMES)) {
  testParameters.push({ coffee: value, price: COFFEE_PRICES[key] });
}

testParameters.forEach(({ coffee, price }) => {
  test(`Total cost is updated after clicking the ${coffee} cup`, async ({
    menuPage,
  }) => {
    await allure.parentSuite(`Customer site`);
    await allure.suite('Menu');
    await allure.subSuite('Select the coffee cup');
    await allure.severity('normal');

    const totalPriceStr = totalPriceFormatStr(price);

    await menuPage.open();
    await menuPage.clickCoffeeCup(coffee);

    await menuPage.assertTotalCheckoutContainsValue(totalPriceStr);
  });
});
