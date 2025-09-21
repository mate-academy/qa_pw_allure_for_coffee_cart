import { test } from '../../../_fixtures/fixtures';
import * as allure from "allure-js-commons";
import { COFFEE_NAMES } from '../../../../src/constants';

test('Cart updated correctly after clicking minus for drinks', async ({
  cartPage,
  menuPage,
}) => {
  await allure.severity(`minor`);

  await allure.parentSuite(`Customer site`);
  await allure.suite('Cart');
  await allure.subSuite('Update Cart - Minus');

  await allure.epic(`Customer site`);
  await allure.feature('Cart');
  await allure.story('Update Cart - Minus');

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
