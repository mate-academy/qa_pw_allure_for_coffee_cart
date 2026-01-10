import { test } from '../../../_fixtures/fixtures';
import * as allure from "allure-js-commons";
import { priceFormatStr } from '../../../../src/common/helpers/priceFormatters';
import { COFFEE_NAMES, COFFEE_PRICES } from '../../../../src/constants';

test('Cart updated correctly after clicking plus for drinks', async ({
  cartPage,
  menuPage,
}) => {
  allure.parentSuite(`Customer Site`);
  allure.suite(`Cart`);
  allure.subSuite(`Update Cart`);

  allure.epic(`'Coffee Cart' Customer Site`);
  allure.feature(`Cart`);
  allure.story(`The user is able to increase the quantity of a coffee in the cart`);
  
  allure.severity(`critical`);

  const oneCappuccinoPrice = priceFormatStr(COFFEE_PRICES.cappuccino);
  const twoCappuccinoPrice = priceFormatStr(COFFEE_PRICES.cappuccino * 2);
  const oneEspressoPrice = priceFormatStr(COFFEE_PRICES.espresso);
  const twoEspressoPrice = priceFormatStr(COFFEE_PRICES.espresso * 2);
  const totalPriceNum =
    COFFEE_PRICES.cappuccino * 2 + COFFEE_PRICES.espresso * 2;
  const totalPrice = priceFormatStr(totalPriceNum);

  await menuPage.open();
  await menuPage.clickCoffeeCup(COFFEE_NAMES.cappuccino);
  await menuPage.clickCoffeeCup(COFFEE_NAMES.espresso);

  await menuPage.clickCartLink();
  await cartPage.waitForLoading();

  await cartPage.assertCoffeeTotalCostContainsCorrectText(
    COFFEE_NAMES.espresso,
    oneEspressoPrice,
  );

  await cartPage.clickCoffeeListItemAddOneButton(COFFEE_NAMES.espresso);

  await cartPage.assertCoffeeTotalCostContainsCorrectText(
    COFFEE_NAMES.espresso,
    twoEspressoPrice,
  );
  await cartPage.assertCoffeeTotalCostContainsCorrectText(
    COFFEE_NAMES.cappuccino,
    oneCappuccinoPrice,
  );

  await cartPage.clickCoffeeListItemAddOneButton(COFFEE_NAMES.cappuccino);

  await cartPage.assertCoffeeTotalCostContainsCorrectText(
    COFFEE_NAMES.cappuccino,
    twoCappuccinoPrice,
  );
  await cartPage.assertCoffeeTotalCostContainsCorrectText(
    COFFEE_NAMES.espresso,
    twoEspressoPrice,
  );

  await cartPage.assertTotalCheckoutContainsValue(totalPrice);
});
