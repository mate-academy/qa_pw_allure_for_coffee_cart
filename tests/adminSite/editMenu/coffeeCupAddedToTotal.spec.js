import { test } from '@playwright/test';
import { allure } from 'allure-playwright';

test(`New coffee can be added to the  Menu`, async ({}) => {
  // This is a fake example test.

  await allure.severity(`normal`);
  await allure.epic(`'CoffeeCart' Admin site`);
  await allure.feature('Menu');
  await allure.story('New coffee can be added to the  Menu');
});
