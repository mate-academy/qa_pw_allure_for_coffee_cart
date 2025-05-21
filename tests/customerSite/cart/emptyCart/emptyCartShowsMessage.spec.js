import { test } from '../../../_fixtures/fixtures';
import { allure } from 'allure-playwright';

test('An empty cart shows correct message', async ({ cartPage }) => {
  await allure.parentSuite('Cart Test');
  await allure.suite(' No coffee cart test');
  await allure.subSuite('Coffee flow');
  await allure.severity(`minor`);

  await cartPage.open();

  await cartPage.assertNoCoffeeMessageIsVisible();
});
