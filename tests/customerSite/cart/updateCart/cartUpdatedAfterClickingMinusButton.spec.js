import { test } from '../../../_fixtures/fixtures';
import { COFFEE_NAMES } from '../../../../src/constants';
import * as allure from "allure-js-commons";

test('Cart updated correctly after clicking minus for drinks', async ({
  cartPage,
  menuPage,
}) => {
  await allure.parentSuite('Coffee Cart');
  await allure.suite('Cart');
  await allure.subSuite('Remove coffee from cart');
  await allure.severity('normal');

  await allure.epic('Coffee Cart');
  await allure.feature('Cart');
  await allure.story('User removes coffee from cart');

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
