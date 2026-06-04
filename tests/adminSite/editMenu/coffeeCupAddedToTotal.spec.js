import { test } from '../../_fixtures/fixtures';
import * as allure from "allure-js-commons";


test(`New coffee can be added to the  Menu`, async ({}) => {
    await allure.parentSuite("Admin site");  
    await allure.suite('Edit menu');
    await allure.story('The admin adds a new coffee to the menu and sees it in the menu list');
      await allure.severity(`CRITICAL`);
      await allure.subSuite('Edit menu');
        await allure.epic(`'CoffeeCart' Admin site`);
        await allure.feature('Edit menu');
  // T his is a fake example test.
});
