import { test } from '../../_fixtures/fixtures';
import * as allure from "allure-js-commons";

test(`New coffee can be added to the  Menu`, async ({}) => {
  // This is a fake example test.
  await allure.parentSuite(`admin site`);
  await allure.suite('Edit menu');
  await allure.subSuite('Cup addet to total');

  await allure.severity(`minor`);

  await allure.epic("Admin panel");
  await allure.feature("Edit menu");
  await allure.story("Adding coffee to the menu");
});
