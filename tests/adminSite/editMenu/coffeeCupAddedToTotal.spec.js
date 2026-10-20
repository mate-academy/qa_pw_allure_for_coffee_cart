import { test } from '../../_fixtures/fixtures';
import * as allure from "allure-js-commons";

test(`New coffee can be added to the  Menu`, async ({ }) => {
  // This is a fake example test.
  await allure.parentSuite('Coffee Cart');
  await allure.suite('Menu');
  await allure.subSuite('Add new coffee');
  await allure.severity('normal');

  await allure.epic('Coffee Cart');
  await allure.feature('Menu');
  await allure.story('Admin adds a new coffee to the Menu');
});
