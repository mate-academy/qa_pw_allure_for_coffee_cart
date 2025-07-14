import { test } from '../../_fixtures/fixtures';
import { COFFEE_NAMES } from '../../../src/constants';
import * as allure from "allure-js-commons";

test('Discounted Mocha Not added to the Cart after promo rejecting', async ({
  cartPage,
  menuPage,
}) => {

  await allure.parentSuite(`Customer site`);
  await allure.suite('Promotions');
  await allure.subSuite('Promotion Decline');
  await allure.severity(`normal`);


  await allure.epic(`'Promotion' User site`);
  await allure.feature('Promotion');
  await allure.story('Discounted Not added to the Cart after promo rejecting`');

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
