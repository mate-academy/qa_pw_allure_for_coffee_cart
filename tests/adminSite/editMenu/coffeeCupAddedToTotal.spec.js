import * as allure from 'allure-js-commons';
import { test } from '../../_fixtures/fixtures';

test(`New coffee can be added to the  Menu`, async ({}) => {
  await allure.epic('Admin Site');
  await allure.feature('Menu');
  await allure.story('Edit Menu');

  await allure.parentSuite('Admin Site');
  await allure.suite('Menu');
  await allure.subSuite('Edit Menu');

  await allure.severity('critical');
  // This is a fake example test.
});
