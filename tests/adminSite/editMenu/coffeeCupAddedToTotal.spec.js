import { test } from '../../_fixtures/fixtures';
import * as allure from 'allure-js-commons';

test(`New coffee can be added to the  Menu`, async ({}) => {
  await allure.parentSuite('Admin Site');
  await allure.suite('Edit Menu');
  await allure.subSuite('Add Coffee Cup to the Menu');

  await allure.severity('critical');

  await allure.epic('Administration');
  await allure.feature('Edit Menu');
  await allure.story('New coffee can be added to the Menu');

  // This is a fake example test.
});
