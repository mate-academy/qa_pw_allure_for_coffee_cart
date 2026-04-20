import { test } from '../../_fixtures/fixtures';
import * as allure from "allure-js-commons";

test(`New coffee can be added to the  Menu`, async ({}) => {
  // This is a fake example test.
  await allure.parentSuite(`Admin site`);
  await allure.suite('Menu');
  await allure.subSuite('New coffee been added');
  await allure.severity(`minor`);
});
