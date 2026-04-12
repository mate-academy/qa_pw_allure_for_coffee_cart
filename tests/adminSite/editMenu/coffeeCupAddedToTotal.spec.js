import { test } from '../../_fixtures/fixtures';
import {
  feature,
  parentSuite,
  severity,
  subSuite,
  suite,
  epic,
  story,
} from 'allure-js-commons';

test(`New coffee can be added to the  Menu`, async ({}) => {
  // This is a fake example test.

  await parentSuite(`Admin site`);
  await suite('Menu');
  await subSuite('Edit menu');
  await severity('blocker');

  await epic('Admin site');
  await feature('Menu');
  await story('Admin is able to edit menu');
});
