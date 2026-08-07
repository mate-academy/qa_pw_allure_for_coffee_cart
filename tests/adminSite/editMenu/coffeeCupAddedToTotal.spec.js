import { test } from '../../_fixtures/fixtures';
import * as allure from 'allure-js-commons';

test(`New coffee can be added to the  Menu`, async ({}) => {
  await allure.parentSuite('Admin Site');
  await allure.suite('Edit Menu');
  await allure.subSuite('Menu Management');
  await allure.severity('normal');
  await allure.epic('Admin Portal');
  await allure.feature('Menu Management');
  await allure.story('Add new coffee to the menu');
});
