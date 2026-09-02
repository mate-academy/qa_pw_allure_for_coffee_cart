import { test } from '../../_fixtures/fixtures';
import * as allure from "allure-js-commons";

test(`New coffee can be added to the  Menu`, async ({}) => {
   await allure.parentSuite(`Admin Site`);
   await allure.suite('Edit Menu');
   await allure.subSuite('New coffee');

   await allure.severity(`critical`);

  await allure.epic(`'CoffeeCart' Admin site`);
  await allure.feature('Cart');
  await allure.story('The Admin should be able to add new coffee to the Menu');

   
});
