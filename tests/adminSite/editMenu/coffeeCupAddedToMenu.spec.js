import { EPIC, FEATURE, SEVERITY } from '../../../src/constants';
import { test } from '../../_fixtures/fixtures';
import * as allure from "allure-js-commons";

test(`New coffee can be added to the  Menu`, async ({}) => {
  await allure.severity(SEVERITY.high);
  await allure.epic(EPIC.adminSite);
  await allure.feature(FEATURE.editMenu);
  await allure.story('As a admin I want to add new coffee to the menu to increase the variety of coffee');
  // This is a fake example test.
});
