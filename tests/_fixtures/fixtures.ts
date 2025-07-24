import { test as base } from '@playwright/test';
import { MenuPage } from '../../src/pages/MenuPage';
import { CartPage } from '../../src/pages/CartPage';
import { Logger } from '../../src/common/logger/Logger';
import { allure } from 'allure-playwright';

export const test = base.extend<{
  cartPage;
  menuPage;
  logger;
  allure;
}>({
  cartPage: async ({ page }, use) => {
    const cartPage = new CartPage(page);

    await use(cartPage);
  },
  menuPage: async ({ page }, use) => {
    const menuPage = new MenuPage(page);

    await use(menuPage);
  },
  allure: async ({}, use) => {
    await use(allure);
  },
  logger: [
    async ({}, use) => {
      const logger = new Logger('error');

      await use(logger);
    },
    { scope: 'worker' },
  ],
});
