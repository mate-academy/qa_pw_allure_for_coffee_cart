import { test } from '../../_fixtures/fixtures';
import { allure } from 'allure-playwright';

test(`New coffee can be added to the  Menu`, async ({}) => {
  await allure.parentSuite('Menu Test');
  await allure.suite('Coffee Menu test');
  await allure.subSuite('Coffee flow');
  await allure.severity(`minor`);
  // This is a fake example test.
});
