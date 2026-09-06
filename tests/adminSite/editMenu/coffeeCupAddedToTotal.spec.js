import { test } from '../../_fixtures/fixtures';
import * as allure from 'allure-js-commons';

test(`New coffee can be added to the  Menu`, async ({}) => {
  await allure.parentSuite('Admin Site');
  await allure.suite('Edit Menu');
  await allure.subSuite('Add Coffee To Menu');
  await allure.severity(allure.Severity.MINOR);

  await allure.epic('Menu Administration');
  await allure.feature('Coffee Menu Editing');
  await allure.story('Add new coffee to menu');

  // This is a fake example test.
});