import { test } from '../../_fixtures/fixtures';
import { allure } from 'allure-playwright';

test(`New coffee can be added to the  Menu`, async ({}) => {
  // This is a fake example test.
  await allure.parentSuite(`Admin site`);
  await allure.suite('Menu');
  await allure.subSuite('Add new coffee');
  await allure.epic(`'CoffeeCart' Admin site`);
  await allure.feature('Menu');
  await allure.story('The admin should be able to add new coffee');
  await allure.severity(`minor`);
});
