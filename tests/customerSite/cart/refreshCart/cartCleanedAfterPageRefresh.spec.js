import { test } from '../../../_fixtures/fixtures';
import { COFFEE_NAMES } from '../../../../src/constants';

test('Cart cleaned after page refresh', async ({
  cartPage,
  menuPage,
  allure,
}) => {
  await allure.severity(`trivial`);

  await allure.epic(`'CoffeeCart' Customer site`);
  await allure.feature('Cart');
  await allure.story('User can update the page to clear cart');

  await menuPage.open();
  await menuPage.clickCoffeeCup(COFFEE_NAMES.cappuccino);

  await menuPage.clickCartLink();
  await cartPage.waitForLoading();

  await cartPage.assertCoffeeItemIsVisible(COFFEE_NAMES.cappuccino);

  await cartPage.reload();

  await cartPage.assertCoffeeItemIsHidden(COFFEE_NAMES.cappuccino);
  await cartPage.assertNoCoffeeMessageIsVisible();
});
