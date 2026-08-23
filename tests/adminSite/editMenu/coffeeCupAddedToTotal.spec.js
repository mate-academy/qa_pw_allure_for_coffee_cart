import { test } from '../../_fixtures/fixtures';
import * as allure from 'allure-js-commons';

test(`New coffee can be added to the Menu`, async ({}) => {
  // This is a fake example test.
  await allure.parentSuite('Admin site');
  await allure.suite('Edit Menu');
  await allure.subSuite('Add new coffee');
  await allure.severity(`normal`);
  await allure.epic(`'CoffeeCart' Admin site`);
  await allure.feature('Edit menu');
  await allure.story('Admin can add items to the Menu');
});
