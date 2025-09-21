import { test } from '../../_fixtures/fixtures';
import * as allure from 'allure-js-commons';

test(`New coffee can be added to the  Menu`, async ({}) => {
  await allure.severity('critical');

  await allure.parentSuite('Admin Site');
  await allure.suite('Edit Menu');
  await allure.subSuite('Add Coffee');

  await allure.epic('Admin Site');
  await allure.feature('Edit Menu');
  await allure.story('Add Coffee');
});
