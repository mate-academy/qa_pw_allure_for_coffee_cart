import { test } from '../../../_fixtures/fixtures';
import { totalPriceFormatStr } from '../../../../src/common/helpers/priceFormatters';
import { COFFEE_NAMES, COFFEE_PRICES } from '../../../../src/constants';
import { allure } from 'allure-playwright';

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
    await allure.subSuite('Add to total');

    await allure.epic(`'CoffeeCart' Customer site`);
    await allure.feature('Menu');
    await allure.story('The user should be able to see coffee cost updating');
    await allure.severity(`critical`);
    
    const totalPriceStr = totalPriceFormatStr(price);

    await menuPage.open();
    await menuPage.clickCoffeeCup(coffee);

    await menuPage.assertTotalCheckoutContainsValue(totalPriceStr);
  });
});
