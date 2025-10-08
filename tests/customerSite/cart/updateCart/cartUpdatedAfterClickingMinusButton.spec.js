import { test } from '../../../_fixtures/fixtures';
import { allure } from 'allure-playwright';
import { COFFEE_NAMES } from '../../../../src/constants';

test('Cart updated correctly after clicking minus for drinks', async ({ cartPage, menuPage }) => {
  allure.parentSuite('Customer Site');
  allure.suite('Cart');
  allure.subSuite('Update Cart');
  allure.epic('Shopping Experience');
  allure.feature('Cart Update');
  allure.story('Decrement coffee quantity in cart');
  allure.severity('critical');

  await menuPage.open();
  await menuPage.clickCoffeeCup(COFFEE_NAMES.cappuccino);
  await menuPage.clickCoffeeCup(COFFEE_NAMES.espresso);

  await menuPage.clickCartLink();
  await cartPage.waitForLoading();

  await cartPage.clickCoffeeListItemRemoveOneButton(COFFEE_NAMES.espresso);
  await cartPage.clickCoffeeListItemRemoveOneButton(COFFEE_NAMES.cappuccino);

  await cartPage.assertNoCoffeeMessageIsVisible();
});
