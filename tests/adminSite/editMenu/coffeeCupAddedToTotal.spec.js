import { test } from '../../_fixtures/fixtures';
import * as allure from 'allure-js-commons';

test(`New coffee can be added to the  Menu`, async ({}) => {
  await allure.epic('Admin side');
  await allure.feature('Menu');
  await allure.story('The user should be able to add coffee to the card');
  await allure.parentSuite('Admin side');
  await allure.suite('Menu');
  await allure.subSuite('The user should be able to add coffee to the card');
  await allure.severity(`blocker`);
});
