import { test } from '../../_fixtures/fixtures';
import * as allure from "allure-js-commons";


test(`New coffee can be added to the  Menu`, async ({}) => {
  await allure.epic( "Menu Management");
  await allure.feature("Edit Menu");
  await allure.story("Add Coffee Cup to Menu");
  await allure.parentSuite("Menu Management");
  await allure.suite("Edit Menu");
  await allure.subSuite("Coffee Cup Added to Total");
  await allure.severity("critical");
});
