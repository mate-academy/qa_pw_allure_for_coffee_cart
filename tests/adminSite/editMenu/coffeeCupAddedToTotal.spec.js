import { test } from '../../_fixtures/fixtures';
import * as allure from 'allure-js-commons';

test(`New coffee can be added to the  Menu`, async ({}) => {
  // This is a fake example test.
  await allure.parentSuite(`Customer site`);
  await allure.suite('Cart');
  await allure.subSuite('Empty cart');
  await allure.severity(`minor`);
  await allure.epic('Epic title');
  await allure.feature('Feature title');
  await allure.story('User story title');
});
