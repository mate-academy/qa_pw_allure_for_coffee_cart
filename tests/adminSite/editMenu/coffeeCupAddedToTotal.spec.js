import { test } from '../../_fixtures/fixtures';
import * as allure from 'allure-js-commons';

test(`New coffee can be added to the  Menu`, async ({}) => {
  await allure.parentSuite(`Admin Side`);
  await allure.suite('Edit Menu');

  await allure.severity('Critical');

  await allure.epic('Admin');
  await allure.feature('Edit Menu');
  // This is a fake example test.
});
