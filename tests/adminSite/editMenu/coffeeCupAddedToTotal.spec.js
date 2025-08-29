import { test } from '../../_fixtures/fixtures';
import * as allure from 'allure-js-commons';

test(`New coffee can be added to the  Menu`, async ({}) => {
      allure.epic(`'CoffeeCart' Admin site`);
      allure.feature('Edit menu');
      allure.story('The user should be able to add new coffee to the menu');
      allure.parentSuite(`Admin site`);
      allure.suite('Admin edit menu');
      allure.subSuite('Add to menu');
      await allure.severity(`critical`);
});
