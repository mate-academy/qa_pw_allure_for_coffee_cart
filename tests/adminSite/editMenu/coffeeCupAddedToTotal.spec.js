import { test } from '../../_fixtures/fixtures';

test(`New coffee can be added to the Menu`, async ({ allure }) => {
  await allure.severity(`critical`);

  await allure.parentSuite('adminSite/editMenu');
  await allure.suite('cart');
  await allure.subSuite('added to total');

  await allure.epic('adminSite/editMenu');
  await allure.feature('Cart');
  await allure.story('New coffee can be added to the Menu');
});
