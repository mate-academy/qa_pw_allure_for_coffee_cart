import { test } from '../../../_fixtures/fixtures';
import * as allure from "allure-js-commons";
import { COFFEE_NAMES } from '../../../../src/constants';

test('Cart updated correctly after clicking minus for drinks', async ({
  cartPage,
  menuPage,
}) => {
  allure.parentSuite(`Customer Site`);
  allure.suite(`Cart`);
  allure.subSuite(`Update Cart`);

  allure.epic(`'Coffee Cart' Customer Site`);
  allure.feature(`Cart`);
  allure.story(`The user is able to remove a coffee from the cart`);

  allure.severity(`critical`);

  await menuPage.open();
  await menuPage.clickCoffeeCup(COFFEE_NAMES.cappuccino);
  await menuPage.clickCoffeeCup(COFFEE_NAMES.espresso);

  await menuPage.clickCartLink();
  await cartPage.waitForLoading();

  await cartPage.assertCoffeeItemIsVisible(COFFEE_NAMES.espresso);

  await cartPage.clickCoffeeListItemRemoveOneButton(COFFEE_NAMES.espresso);

  await cartPage.assertCoffeeItemIsHidden(COFFEE_NAMES.espresso);
  await cartPage.assertCoffeeItemIsVisible(COFFEE_NAMES.cappuccino);

  await cartPage.clickCoffeeListItemRemoveOneButton(COFFEE_NAMES.cappuccino);

  await cartPage.assertCoffeeItemIsHidden(COFFEE_NAMES.cappuccino);
  await cartPage.assertNoCoffeeMessageIsVisible();
});
