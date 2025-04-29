import { SEVERITY, EPIC, FEATURE } from '../../../../src/constants';
import { test } from '../../../_fixtures/fixtures';
import * as allure from "allure-js-commons";

test('An empty cart shows correct message', async ({ cartPage }) => {
  await allure.severity(SEVERITY.low);
  await allure.epic(EPIC.customerSite);
  await allure.feature(FEATURE.cart);
  await allure.story('As a customer I want to see a message when the cart is empty so that I know I can add coffee to it');

  await cartPage.open();

  await cartPage.assertNoCoffeeMessageIsVisible();
});
