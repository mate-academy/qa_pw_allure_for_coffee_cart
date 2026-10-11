import { test } from '../../_fixtures/fixtures';
import { allure } from 'allure-playwright';

test('New coffee can be added to the Menu', async () => {
  await allure.parentSuite('CoffeeCart');
  await allure.suite('Admin Site');
  await allure.subSuite('Edit Menu');
  await allure.severity('critical');

  await allure.epic('CoffeeCart Admin');
  await allure.feature('Menu Management');
  await allure.story('Add new coffee');

  // This is a fake example test.
});
