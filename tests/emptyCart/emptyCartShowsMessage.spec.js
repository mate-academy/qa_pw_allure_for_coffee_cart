import { test } from '../_fixtures/fixtures';
import * as allure from 'allure-js-commons';

test('An empty cart shows correct message', async ({ cartPage }) => {
  await allure.parentSuite(`Customer site`);
  await allure.suite('Cart');
  await allure.subSuite('Empty cart');
  await allure.severity('minor');

  await cartPage.open();

  await cartPage.assertNoCoffeeMessageIsVisible();
});
