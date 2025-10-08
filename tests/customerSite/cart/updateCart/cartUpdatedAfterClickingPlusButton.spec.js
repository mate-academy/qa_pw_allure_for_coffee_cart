import { test } from '../../../_fixtures/fixtures';
import { allure } from 'allure-playwright';
import { priceFormatStr } from '../../../../src/common/helpers/priceFormatters';
import { COFFEE_NAMES, COFFEE_PRICES } from '../../../../src/constants';

test('Cart updated correctly after clicking plus for drinks', async ({ cartPage, menuPage }) => {
  allure.parentSuite('Customer Site');
  allure.suite('Cart');
  allure.subSuite('Update Cart');
  allure.epic('Shopping Experience');
  allure.feature('Cart Update');
  allure.story('Increment coffee quantity in cart');
  allure.severity('major');

  const cappuccinoPrice = COFFEE_PRICES.cappuccino;
  const espressoPrice = COFFEE_PRICES.espresso;

  await menuPage.open();
  await menuPage.clickCoffeeCup(COFFEE_NAMES.cappuccino);
  await menuPage.clickCoffeeCup(COFFEE_NAMES.espresso);
  await menuPage.clickCartLink();
  await cartPage.waitForLoading();

  await cartPage.clickCoffeeListItemAddOneButton(COFFEE_NAMES.espresso);
  await cartPage.clickCoffeeListItemAddOneButton(COFFEE_NAMES.cappuccino);

  const totalPrice = priceFormatStr((cappuccinoPrice + espressoPrice) * 2);
  await cartPage.assertTotalCheckoutContainsValue(totalPrice);
});
