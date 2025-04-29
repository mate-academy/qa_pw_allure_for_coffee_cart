import { test } from '../../_fixtures/fixtures';
import { COFFEE_NAMES, SEVERITY, EPIC, FEATURE } from '../../../src/constants';
import * as allure from "allure-js-commons";

test('Discounted Mocha Not added to the Cart after promo rejecting', async ({
  cartPage,
  menuPage,
}) => {
  await allure.severity(SEVERITY.medium);
  await allure.epic(EPIC.customerSite);
  await allure.feature(FEATURE.promotions);
  await allure.story('As a customer I want to verify that the discounted Mocha is not added to the cart after rejecting the promo so I can ensure that I am not charged for it');
  
  await menuPage.open();
  await menuPage.clickCoffeeCup(COFFEE_NAMES.cappuccino);
  await menuPage.clickCoffeeCup(COFFEE_NAMES.espresso);
  await menuPage.clickCoffeeCup(COFFEE_NAMES.americano);

  await menuPage.assertPromoMessageIsVisible();
  await menuPage.clickNoPromoButton();

  await menuPage.clickCartLink();
  await cartPage.waitForLoading();

  await cartPage.assertCoffeeItemIsVisible(COFFEE_NAMES.espresso);
  await cartPage.assertCoffeeItemIsHidden('(Discounted) Mocha');

  await cartPage.assertCoffeeItemIsVisible(COFFEE_NAMES.cappuccino);
  await cartPage.assertCoffeeItemIsVisible(COFFEE_NAMES.americano);
});
