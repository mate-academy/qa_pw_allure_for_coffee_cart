import { test } from '../../../_fixtures/fixtures';
import { allure } from 'allure-playwright';
import { totalPriceFormatStr } from '../../../../src/common/helpers/priceFormatters';
import { COFFEE_NAMES, COFFEE_PRICES } from '../../../../src/constants';

for (const [key, coffee] of Object.entries(COFFEE_NAMES)) {
  const price = COFFEE_PRICES[key];
  test(`Total cost updates after clicking ${coffee} cup`, async ({ menuPage }) => {
    allure.parentSuite('Customer Site');
    allure.suite('Menu');
    allure.subSuite('Add Coffee');
    allure.epic('Shopping Experience');
    allure.feature('Menu Interaction');
    allure.story(`Click ${coffee} updates total`);
    allure.severity('minor');

    const totalPriceStr = totalPriceFormatStr(price);
    await menuPage.open();
    await menuPage.clickCoffeeCup(coffee);
    await menuPage.assertTotalCheckoutContainsValue(totalPriceStr);
  });
}
