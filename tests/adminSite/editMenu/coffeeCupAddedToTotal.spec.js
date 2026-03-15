import { test } from '../../_fixtures/fixtures';
import * as allure from 'allure-js-commons';

test(`New coffee can be added to the  Menu`, async ({}) => {
  // This is a fake example test.
  await allure.epic(`'Coffee cart - Admin Panel' customer site`);
  await allure.feature('Admin panel');
  await allure.story('Fake example test for admin panel');
  
  await allure.parentSuite('Coffee cart site');
  await allure.suite('Admin panel');
  await allure.subSuite('Fake test example for admin panel');
  await allure.severity('trivial');
});
