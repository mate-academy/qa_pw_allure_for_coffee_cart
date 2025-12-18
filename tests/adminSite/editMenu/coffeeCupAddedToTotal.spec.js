import { test } from '../../_fixtures/fixtures';
import { allure } from 'allure-playwright';

test(`New coffee can be added to the Menu`, async ({}) => {
  // Allure metadata
  allure.label({ name: 'parentSuite', value: 'Admin Site' });
  allure.label({ name: 'suite', value: 'Menu Management' });
  allure.label({ name: 'subSuite', value: 'Add Coffee' });
  allure.severity('critical');
  allure.epic('Admin Site');
  allure.feature('Menu functionality');
  allure.story('Add new coffee to menu');

  // Test logic (przykład)
  // tutaj wstaw faktyczny kod testu dodawania kawy do menu
});
