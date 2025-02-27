import { test } from '../../../_fixtures/fixtures';
import * as allure from 'allure-js-commons';
import { COFFEE_NAMES } from '../../../../src/constants';

test('Cart cleaned after page refresh', async ({ cartPage, menuPage }) => {
  await allure.severity('normal');

  await menuPage.open();
  await menuPage.clickCoffeeCup(COFFEE_NAMES.cappuccino);

  await menuPage.clickCartLink();
  await cartPage.waitForLoading();

  await cartPage.assertCoffeeItemIsVisible(COFFEE_NAMES.cappuccino);

  await cartPage.reload();

  await cartPage.assertCoffeeItemIsHidden(COFFEE_NAMES.cappuccino);
  await cartPage.assertNoCoffeeMessageIsVisible();
});
