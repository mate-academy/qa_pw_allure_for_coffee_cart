import { test } from '../../../_fixtures/fixtures';
import * as allure from 'allure-js-commons';

test('An empty cart shows correct message', async ({ cartPage }) => {
  await allure.severity(`trivial`);

  await allure.epic(`'CoffeeCart' Customer site`);
  await allure.feature('Cart');
  await allure.story('User can see tha his cart is empty');

  await cartPage.open();

  await cartPage.assertNoCoffeeMessageIsVisible();
});
