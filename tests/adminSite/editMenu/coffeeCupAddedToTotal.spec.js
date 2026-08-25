import { test } from '../../_fixtures/fixtures';
import * as allure from 'allure-js-commons';

test(`New coffee can be added to the  Menu`, async ({}) => {
await allure.parentSuite('Admin site');  
await allure.suite('Edit Menu');                
await allure.subSuite('Add coffee price to Total');
await allure.severity(`critical`);

await allure.epic(`Admin site`);
await allure.feature('Edit Menu');
await allure.story('Coffee cup price added to Total');

// // This is a fake example test.
});
