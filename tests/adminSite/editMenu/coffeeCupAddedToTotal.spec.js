import { test } from '../../_fixtures/fixtures';
import * as allure from 'allure-js-commons';

test(`New coffee can be added to the  Menu`, async ({}) => {
  await allure.parentSuite('Admin site');
  await allure.suite('Edit menu');
  await allure.subSuite('Coffee cup added to total');
  await allure.severity('normal');
  await allure.epic('Coffee Cart');
  await allure.feature('Edit menu');
  await allure.story(`Add ${coffee} cup to total`);
});
