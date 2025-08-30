import { test } from '../../_fixtures/fixtures';
import * as allure from "allure-js-commons";

test(`New coffee can be added to the Menu`, async ({}) => {
  await allure.severity(`minor`);

  await allure.parentSuite(`Admin site`);
  await allure.suite('Edit Menu');
  await allure.subSuite('Add Coffee');

  await allure.epic(`Admin site`);
  await allure.feature('Edit Menu');
  await allure.story('Add Coffee');
  // This is a fake example test.
});
