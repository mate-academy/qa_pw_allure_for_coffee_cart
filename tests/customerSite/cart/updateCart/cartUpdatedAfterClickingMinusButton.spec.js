import { test } from '../../../_fixtures/fixtures';
import { COFFEE_NAMES } from '../../../../src/constants';
import {
  parentSuite,
  suite,
  subSuite,
  severity,
  epic,
  feature,
  story,
} from 'allure-js-commons';

test('Cart updated correctly after clicking minus for drinks', async ({
  cartPage,
  menuPage,
}) => {

  await parentSuite(`Customer site`);
  await suite('Cart');
  await subSuite('Update cart');
  await severity('normal');

  await epic('Customer site');
  await feature('Cart');
  await story('User is able to remove a coffee from cart by clicking minus');

  await menuPage.open();
  await menuPage.clickCoffeeCup(COFFEE_NAMES.cappuccino);
  await menuPage.clickCoffeeCup(COFFEE_NAMES.espresso);

  await menuPage.clickCartLink();
  await cartPage.waitForLoading();

  await cartPage.assertCoffeeItemIsVisible(COFFEE_NAMES.espresso);

  await cartPage.clickCoffeeListItemRemoveOneButton(COFFEE_NAMES.espresso);

  await cartPage.assertCoffeeItemIsHidden(COFFEE_NAMES.espresso);
  await cartPage.assertCoffeeItemIsVisible(COFFEE_NAMES.cappuccino);

  await cartPage.clickCoffeeListItemRemoveOneButton(COFFEE_NAMES.cappuccino);

  await cartPage.assertCoffeeItemIsHidden(COFFEE_NAMES.cappuccino);
  await cartPage.assertNoCoffeeMessageIsVisible();
});
