import { test } from '../../../_fixtures/fixtures';
import { COFFEE_NAMES } from '../../../../src/constants';
import * as allure from "allure-js-commons";
  

test('Cart updated correctly after clicking minus for drinks', async ({
  cartPage,
  menuPage,
}) => {
  await allure.parentSuite("Customer site");
  await allure.suite('Cart');
  await allure.story('The user clicks on the minus button for the drink in the cart and sees the correct total cost for it in the checkout');
  await allure.severity(`NORMAL`);
  await allure.subSuite('Total cost in checkout');
    await allure.epic(`'CoffeeCart' Customer site`);
    await allure.feature('Total cost in checkout');

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
