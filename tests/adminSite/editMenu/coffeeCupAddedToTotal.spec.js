import { test } from '../../_fixtures/fixtures';
import * as allure from 'allure-js-commons';

test(`New coffee can be added to the  Menu`, async ({}) => {
  await allure.parentSuite(`Admin site`);
  await allure.suite('Menu');
  await allure.subSuite('Edit menu');

  await allure.epic('Admin site');
  await allure.feature('Menu');
  await allure.story('Add new coffee to menu');

  await allure.severity('normal');

  // This is a fake example test.
});
