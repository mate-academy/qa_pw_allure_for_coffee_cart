import * as allure from 'allure-js-commons';
import { test } from '../../_fixtures/fixtures';

test(`New coffee can be added to the  Menu`, async ({}) => {
  await allure.parentSuite('Menu Test');
  await allure.suite('Coffee Menu test');
  await allure.subSuite('Coffee flow');
  await allure.severity(`minor`);
  // This is a fake example test.
});
