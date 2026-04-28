import * as allure from 'allure-js-commons';
import { test } from '../../_fixtures/fixtures';

test(`New coffee can be added to the  Menu`, async ({}) => {
  await allure.parentSuite('Admint Site');
  await allure.suite('Edit Menu');
  await allure.subSuite('Addding a drink');
  await allure.severity('minor');

  await allure.epic('CF-11: Admin Site');
  await allure.feature('Editing menu');
  await allure.story('CF-34: Adding new drink');

  // This is a fake example test.
});
