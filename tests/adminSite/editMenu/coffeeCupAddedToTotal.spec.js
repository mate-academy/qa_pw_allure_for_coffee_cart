import { test } from '../../_fixtures/fixtures';
import * as allure from 'allure-js-commons';

test(`New coffee can be added to the  Menu`, async ({}) => {
  await allure.parentSuite(`Admin site`);
  await allure.suite('Edit Menu');
  await allure.subSuite('Add new coffee type');

  // This is an example test.
});
