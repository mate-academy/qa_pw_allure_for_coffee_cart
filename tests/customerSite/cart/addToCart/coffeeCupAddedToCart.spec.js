import { test } from '../../../_fixtures/fixtures';
import { allure } from 'allure-playwright';
import {
  unitPriceFormatStr,
  priceFormatStr,
} from '../../../../src/common/helpers/priceFormatters';
import { COFFEE_NAMES, COFFEE_PRICES } from '../../../../src/constants';

for (const [key, coffee] of Object.entries(COFFEE_NAMES)) {
  const price = COFFEE_PRICES[key];
  test(`The ${coffee} correctly added to the Cart`, async ({ menuPage, cartPage }) => {
    allure.parentSuite('Customer Site');
    allure.suite('Cart');
    allure.subSuite('Add Coffee');
    allure.epic('Shopping Experience');
    allure.feature('Cart Operations');
    allure.story(`Add ${coffee} to Cart`);
    allure.severity('critical');

    const totalPriceStr = priceFormatStr(price);
    const unitPriceStr = unitPriceFormatStr(price, 1);

    await menuPage.open();
    await menuPage.clickCoffeeCup(coffee);
    await menuPage.clickCartLink();
    await cartPage.waitForLoading();

    await cartPage.assertCoffeeNameContainsCorrectText(coffee);
    await cartPage.assertCoffeeUnitContainsCorrectText(coffee, unitPriceStr);
    await cartPage.assertCoffeeTotalCostContainsCorrectText(coffee, totalPriceStr);
  });
}
