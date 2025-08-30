import { test } from '../../_fixtures/fixtures';
import * as allure from "allure-js-commons";

test(`New coffee can be added to the Menu`, async ({}) => {
  await allure.severity(`minor`);
  await allure.epic(`Admin site`);
  await allure.feature('Admin panel');
  await allure.story('Add new coffee to the Menu');
  // This is a fake example test.
});
