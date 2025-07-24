import { test } from '../../_fixtures/fixtures';
import * as allure from 'allure-js-commons';

test(`New coffee can be added to the  Menu`, async ({}) => {
  await allure.severity(`normal`);

  await allure.epic(`'CoffeeCart' Admin site`);
  await allure.feature('Coffee menu');
  await allure.story('Admin can add/remove coffee');

  // This is a fake example test.
});
