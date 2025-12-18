import { test } from '../../../_fixtures/fixtures';
import { allure } from 'allure-playwright';
import { priceFormatStr } from '../../../../src/common/helpers/priceFormatters';
import { COFFEE_NAMES, COFFEE_PRICES } from '../../../../src/constants';

test('Cart updated correctly after clicking plus for drinks', async ({
  cartPage,
  menuPage,
}) => {
  // Allure metadata
  allure.label({ name: 'parentSuite', value: 'Cart' });
  allure.label({ name: 'suite', value: 'Update Cart' });
  allure.label({ name: 'subSuite', value: 'Add Drinks' });
  allure.severity('critical');
  allure.epic('Customer Site');
  allure.feature('Cart functionality');
  allure.story('Add items to cart using plus button');

  // Test logic
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
