import { test } from '../../../_fixtures/fixtures';
import { priceFormatStr } from '../../../../src/common/helpers/priceFormatters';
import { COFFEE_NAMES, COFFEE_PRICES } from '../../../../src/constants';

let testParameters = [];

for (const [key, value] of Object.entries(COFFEE_NAMES)) {
  testParameters.push({ coffee: value, price: COFFEE_PRICES[key] });
}

testParameters.forEach(({ coffee, price }) => {
  test(`The ${coffee} cup has correct cost`, async ({ menuPage, allure }) => {
    const priceStr = priceFormatStr(price);

    await allure.severity(`critical`);

    await allure.parentSuite('castomer site');
    await allure.suite('menu');
    await allure.subSuite('view coffee');

    await allure.epic(`'CoffeeCart' Customer site`);
    await allure.feature('Menu');
    await allure.story('The coffee cup has correct cost');

    await menuPage.open();

    await menuPage.assertCoffeeCupCostHasValue(coffee, priceStr);
  });
});
