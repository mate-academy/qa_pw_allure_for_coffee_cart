import { test } from '../../_fixtures/fixtures';
import * as allure from 'allure-js-commons';

test(`New coffee can be added tothe  Menu`, async ({}) => {
  await allure.parentSuite(`Admin site`);
  await allure.suite('Edit Menu');
  await allure.subSuite('The admin should be able to add new coffee type');
});
