import { test } from '../../../_fixtures/fixtures';
import * as allure from 'allure-js-commons';

test('An empty cart shows correct message', async ({ cartPage }) => {
  await allure.parentSuite('Cart Test');
  await allure.suite(' No coffee cart test');
  await allure.subSuite('Coffee flow');
  await allure.severity(`minor`);

  await cartPage.open();

  await cartPage.assertNoCoffeeMessageIsVisible();
});
