import { test } from '../../_fixtures/fixtures';
import * as allure from "allure-js-commons";

test(`New coffee can be added to the  Menu`, async ({}) => {
    await allure.parentSuite(`Admin site`);
    await allure.suite('Edit menu');
    await allure.subSuite('Coffee cup added to total');
    await allure.epic(`'CoffeeCart' Admin site`);
    await allure.feature('Edit menu');
    await allure.story('Coffee cup added to total');
    await allure.severity('normal');
  // This is a fake example test.
});
