import { test } from '../../_fixtures/fixtures';
import { priceFormatStr } from '../../../src/common/helpers/priceFormatters';
import { COFFEE_NAMES, COFFEE_PRICES, SEVERITY, FEATURE, EPIC } from '../../../src/constants';
import * as allure from "allure-js-commons";

test('Discounted Mocha added to the Cart after promo accepting', async ({
  cartPage,
  menuPage,
}) => {
  await allure.severity(SEVERITY.medium);
  await allure.epic(EPIC.customerSite);
  await allure.feature(FEATURE.promotions);
  await allure.story('As a customer I want to verify that the discounted Mocha is added to the cart after accepting the promo message so I can take  additional coffee with discount');
  
  const espressoPrice = priceFormatStr(COFFEE_PRICES.espresso);
  const discMochaPrice = priceFormatStr(COFFEE_PRICES.discountedMocha);
  const cappuccinoPrice = priceFormatStr(COFFEE_PRICES.cappuccino);
  const americanoPrice = priceFormatStr(COFFEE_PRICES.americano);

  await menuPage.open();
  await menuPage.clickCoffeeCup(COFFEE_NAMES.cappuccino);
  await menuPage.clickCoffeeCup(COFFEE_NAMES.espresso);
  await menuPage.clickCoffeeCup(COFFEE_NAMES.americano);

  await menuPage.assertPromoMessageIsVisible();

  await menuPage.clickYesPromoButton();

  await menuPage.clickCartLink();
  await cartPage.waitForLoading();

  await cartPage.assertCoffeeTotalCostContainsCorrectText(
    COFFEE_NAMES.espresso,
    espressoPrice,
  );
  await cartPage.assertCoffeeTotalCostContainsCorrectText(
    '(Discounted) Mocha',
    discMochaPrice,
  );
  await cartPage.assertCoffeeTotalCostContainsCorrectText(
    COFFEE_NAMES.cappuccino,
    cappuccinoPrice,
  );
  await cartPage.assertCoffeeTotalCostContainsCorrectText(
    COFFEE_NAMES.americano,
    americanoPrice,
  );
});
