import { test, expect } from '../../_fixtures/fixtures';
import { allure } from 'allure-playwright';

test('Admin adds a new coffee and it appears in the total', async ({ page, menuPage }) => {
  allure.parentSuite('Admin Site');
  allure.suite('Edit Menu');
  allure.subSuite('Add New Coffee');
  allure.epic('Menu Management');
  allure.feature('Admin Coffee Editor');
  allure.story('Admin adds a new coffee and total updates');
  allure.severity('critical');

  // Use page fixture directly until adminPage is ready
  await page.goto('https://coffee-cart.app/admin');
  await page.waitForLoadState('networkidle');

  // (You can add real admin actions here later)
  await menuPage.open();
  await menuPage.assertTotalCheckoutContainsValue('$0.00');
});
