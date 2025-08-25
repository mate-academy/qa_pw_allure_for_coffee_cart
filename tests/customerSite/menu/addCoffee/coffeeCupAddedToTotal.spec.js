import { test } from '../../../_fixtures/fixtures';
import { totalPriceFormatStr } from '../../../../src/common/helpers/priceFormatters';
import { COFFEE_NAMES, COFFEE_PRICES } from '../../../../src/constants';

let testParameters = [];

for (const [key, value] of Object.entries(COFFEE_NAMES)) {
  testParameters.push({ coffee: value, price: COFFEE_PRICES[key] });
}

testParameters.forEach(({ coffee, price }) => {
  test(`Total cost is updated after clicking the ${coffee} cup`, async ({
    menuPage,
    allure,
  }) => {
    const totalPriceStr = totalPriceFormatStr(price);

    await allure.severity(`critical`);

    await allure.parentSuite('castomer site');
    await allure.suite('menu');
    await allure.subSuite('add coffee');

    await allure.epic(`'CoffeeCart' Customer site`);
    await allure.feature('Menu');
    await allure.story('Total cost is updated after clicking the coffee cup');

    await menuPage.open();
    await menuPage.clickCoffeeCup(coffee);

    await menuPage.assertTotalCheckoutContainsValue(totalPriceStr);
  });
});
