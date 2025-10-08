import { test } from '../../../_fixtures/fixtures';
import { allure } from 'allure-playwright';
import { priceFormatStr } from '../../../../src/common/helpers/priceFormatters';
import { COFFEE_NAMES, COFFEE_PRICES } from '../../../../src/constants';

for (const [key, coffee] of Object.entries(COFFEE_NAMES)) {
  const price = COFFEE_PRICES[key];
  test(`The ${coffee} cup has correct cost`, async ({ menuPage }) => {
    allure.parentSuite('Customer Site');
    allure.suite('Menu');
    allure.subSuite('View Coffee');
    allure.epic('Shopping Experience');
    allure.feature('Menu Display');
    allure.story(`Correct price shown for ${coffee}`);
    allure.severity('trivial');

    const priceStr = priceFormatStr(price);
    await menuPage.open();
    await menuPage.assertCoffeeCupCostHasValue(coffee, priceStr);
  });
}
