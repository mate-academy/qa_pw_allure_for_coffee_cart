import { test } from '../../_fixtures/fixtures';
import * as allure from 'allure-js-commons';

test(`New coffee can be added to the  Menu`, async ({}) => {
  // This is a fake example test.
  await allure.parentSuite(`Admin coffee site`);
  await allure.suite('Menu');
  await allure.subSuite('Coffee cup');
  await allure.severity(`normal`);

  await allure.epic(`'CoffeeCart' Admin site`);
  await allure.feature('Menu');
  await allure.story('New coffee can be added to the  Menu');
});
