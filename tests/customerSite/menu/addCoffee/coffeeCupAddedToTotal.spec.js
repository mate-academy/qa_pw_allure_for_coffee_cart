import { test } from '../../../_fixtures/fixtures';
import { allure } from 'allure-playwright';
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
    // Allure metadata
    allure.label({ name: 'parentSuite', value: 'Cart' });
    allure.label({ name: 'suite', value: 'Add Coffee' });
    allure.label({ name: 'subSuite', value: coffee });
    allure.severity('critical');
    allure.epic('Customer Site');
    allure.feature('Cart functionality');
    allure.story(`Total cost updated after adding ${coffee}`);

    // Test logic
    const totalPriceStr = totalPriceFormatStr(price);

    await menuPage.open();
    await menuPage.clickCoffeeCup(coffee);

    await menuPage.assertTotalCheckoutContainsValue(totalPriceStr);
  });
});
