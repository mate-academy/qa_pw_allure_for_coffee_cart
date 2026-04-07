import { test } from '../../_fixtures/fixtures';
import { allure } from 'allure-playwright';

test(`New coffee can be added to the  Menu`, async ({}) => {
  await allure.parentSuite(`Admin site`);
  await allure.suite('Edit Menu');
  await allure.subSuite('Coffee cup added to total');
  await allure.severity('critical');
  await allure.epic('Admin site');
  await allure.feature('Edit Menu');
  await allure.story('Coffee cup added to total');
  // This is a fake example test.
});
