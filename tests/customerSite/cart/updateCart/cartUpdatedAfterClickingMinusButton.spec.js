import { test } from '../../../_fixtures/fixtures';
import { COFFEE_NAMES, SEVERITY } from '../../../../src/constants';
import * as allure from "allure-js-commons";

test('Cart updated correctly after clicking minus for drinks', async ({
  cartPage,
  menuPage,
}) => {
  await allure.parentSuite(`Customer site`);
  await allure.suite('Cart');
  await allure.subSuite('Cart updated after clicking minus button');
  await allure.epic('Customer site');
  await allure.feature('Cart');
  await allure.story('Cart updated after clicking minus button');
  await allure.severity(`${SEVERITY.CRITICAL}`);
  
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
