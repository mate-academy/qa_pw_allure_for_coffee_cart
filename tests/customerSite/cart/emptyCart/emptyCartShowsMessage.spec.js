import { test } from '../../../_fixtures/fixtures';
import * as allure from "allure-js-commons";

test('An empty cart shows correct message', async ({ cartPage }) => {
  await allure.parentSuite(`User site`);
  await allure.suite('Cart');
  await allure.subSuite('Empty cart');
  await allure.severity(`normal`);

  await allure.epic(`'CoffeeCart' User site`);
  await allure.feature('Cart empty');
  await allure.story('An empty cart shows correct message');

  await cartPage.open();

  await cartPage.assertNoCoffeeMessageIsVisible();
});
