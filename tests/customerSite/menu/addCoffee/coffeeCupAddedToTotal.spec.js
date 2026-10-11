import { test } from '../../../_fixtures/fixtures';
import { allure } from 'allure-playwright';
import { totalPriceFormatStr } from '../../../../src/common/helpers/priceFormatters';
import { COFFEE_NAMES, COFFEE_PRICES } from '../../../../src/constants';

const testParameters = [];

for (const [key, value] of Object.entries(COFFEE_NAMES)) {
  testParameters.push({ coffee: value, price: COFFEE_PRICES[key] });
}

testParameters.forEach(({ coffee, price }) => {
  test(`Total cost is updated after clicking the ${coffee} cup`, async ({
    menuPage,
  }) => {
    await allure.parentSuite('CoffeeCart');
    await allure.suite('Customer Site');
    await allure.subSuite('Add Coffee');
    await allure.severity('normal');

    await allure.epic('CoffeeCart Customer');
    await allure.feature('Menu');
    await allure.story('Update total after selecting coffee');

    const totalPriceStr = totalPriceFormatStr(price);

    await menuPage.open();
    await menuPage.clickCoffeeCup(coffee);

    await menuPage.assertTotalCheckoutContainsValue(totalPriceStr);
  });
});
