import { test } from '../../../_fixtures/fixtures';

test('An empty cart shows correct message', async ({ cartPage, allure }) => {
  await allure.severity(`minor`);

  await allure.parentSuite('castomer site');
  await allure.suite('cart');
  await allure.subSuite('empty cart');

  await allure.epic(`'CoffeeCart' Customer site`);
  await allure.feature('Cart');
  await allure.story('An empty cart shows correct message');

  await cartPage.open();

  await cartPage.assertNoCoffeeMessageIsVisible();
});
