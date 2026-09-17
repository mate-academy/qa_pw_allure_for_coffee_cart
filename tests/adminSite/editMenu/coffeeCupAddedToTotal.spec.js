import { test } from '../../_fixtures/fixtures';
import * as allure from 'allure-js-commons';

test(`New coffee can be added to the  Menu`, async ({}) => {
  // This is a fake example test.
  await allure.severity(`critical`);

  await allure.parentSuite('Customer Site');
  await allure.suite('Cart');
  await allure.subSuite('Add To Cart');
});
