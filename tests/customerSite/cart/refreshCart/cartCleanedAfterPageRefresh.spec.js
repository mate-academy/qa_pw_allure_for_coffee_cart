import { test } from '../../../_fixtures/fixtures';
import { COFFEE_NAMES } from '../../../../src/constants';
import * as allure from "allure-js-commons";

test('Cart cleaned after page refresh', async ({ cartPage, menuPage }) => {

  await allure.parentSuite(`Customer site`);
  await allure.suite('Cart');
  await allure.subSuite('Refresh cart');
  await allure.severity(`minor`);
  
  await allure.epic(`'CoffeeCart' User site`);
  await allure.feature('Cart refresh');
  await allure.story('Cart cleaned after page refresh');

  await menuPage.open();
  await menuPage.clickCoffeeCup(COFFEE_NAMES.cappuccino);

  await menuPage.clickCartLink();
  await cartPage.waitForLoading();

  await cartPage.assertCoffeeItemIsVisible(COFFEE_NAMES.cappuccino);

  await cartPage.reload();

  await cartPage.assertCoffeeItemIsHidden(COFFEE_NAMES.cappuccino);
  await cartPage.assertNoCoffeeMessageIsVisible();
});
