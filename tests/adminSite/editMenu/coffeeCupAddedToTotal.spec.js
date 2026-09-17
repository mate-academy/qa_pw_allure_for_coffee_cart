import { test } from '../../_fixtures/fixtures';
import * as allure from 'allure-playwright';

test(`New coffee can be added to the  Menu`, async ({}) => {
  await allure.parentSuite('Admin Site - Edit Menu');
  await allure.suite('Edit Menu Tests');
  await allure.subSuite('New coffee can be added to the Menu');
  await allure.epic('Admin Site - Edit Menu');
  await allure.feature('Edit Menu Tests');
  await allure.story('New coffee can be added to the Menu');
  await allure.severity(`minor`);
});
