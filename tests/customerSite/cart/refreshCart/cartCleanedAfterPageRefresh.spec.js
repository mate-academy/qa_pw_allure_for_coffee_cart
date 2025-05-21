import { test } from '../../../_fixtures/fixtures';
import { COFFEE_NAMES } from '../../../../src/constants';
import { allure } from 'allure-playwright';

test('Cart cleaned after page refresh', async ({ cartPage, menuPage }) => {
  await allure.parentSuite('Refresh Test');
  await allure.suite(' No coffee cart test');
  await allure.subSuite('Coffee flow');
  await allure.severity(`minor`);

  await menuPage.open();
  await menuPage.clickCoffeeCup(COFFEE_NAMES.cappuccino);

  await menuPage.clickCartLink();
  await cartPage.waitForLoading();

  await cartPage.assertCoffeeItemIsVisible(COFFEE_NAMES.cappuccino);

  await cartPage.reload();

  await cartPage.assertCoffeeItemIsHidden(COFFEE_NAMES.cappuccino);
  await cartPage.assertNoCoffeeMessageIsVisible();
});
