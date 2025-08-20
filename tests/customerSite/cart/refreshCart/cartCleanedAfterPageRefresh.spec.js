import { test } from '../../../_fixtures/fixtures';
import { COFFEE_NAMES, SEVERITY , EPIC, FEATURE} from '../../../../src/constants';
import * as allure from "allure-js-commons";

test('Cart cleaned after page refresh', async ({ cartPage, menuPage }) => {
  await allure.severity(SEVERITY.medium);
  await allure.epic(EPIC.customerSite);
  await allure.feature(FEATURE.cart);
  await allure.story('As a customer I want to refresh the cart page so that I can see the cart is cleaned');

  await menuPage.open();
  await menuPage.clickCoffeeCup(COFFEE_NAMES.cappuccino);

  await menuPage.clickCartLink();
  await cartPage.waitForLoading();

  await cartPage.assertCoffeeItemIsVisible(COFFEE_NAMES.cappuccino);

  await cartPage.reload();

  await cartPage.assertCoffeeItemIsHidden(COFFEE_NAMES.cappuccino);
  await cartPage.assertNoCoffeeMessageIsVisible();
});
