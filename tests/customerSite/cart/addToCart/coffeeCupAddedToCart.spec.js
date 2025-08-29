import { test } from '../../../_fixtures/fixtures';
import {
  unitPriceFormatStr,
  priceFormatStr,
} from '../../../../src/common/helpers/priceFormatters';
import { COFFEE_NAMES, COFFEE_PRICES } from '../../../../src/constants';
import * as allure from 'allure-js-commons';

let testParameters = [];

for (const [key, value] of Object.entries(COFFEE_NAMES)) {
  testParameters.push({ coffee: value, price: COFFEE_PRICES[key] });
}

testParameters.forEach(({ coffee, price }) => {
  test(`The ${coffee} correctly added to the Cart`, async ({
    menuPage,
    cartPage,
  }) => {

    allure.epic(`'CoffeeCart' Customer site`);
    allure.feature('Cart');
    allure.story('The user should be able to add coffee cup to the cart');
    allure.parentSuite(`Customer site`);
    allure.suite('Cart');
    allure.subSuite('Add to cart');
    await allure.severity(`blocker`);

    const totalPriceStr = priceFormatStr(price);
    const unitPriceStr = unitPriceFormatStr(price, 1);

    await menuPage.open();
    await menuPage.clickCoffeeCup(coffee);

    await menuPage.clickCartLink();
    await cartPage.waitForLoading();

    await cartPage.assertCoffeeNameContainsCorrectText(coffee);
    await cartPage.assertCoffeeUnitContainsCorrectText(coffee, unitPriceStr);
    await cartPage.assertCoffeeTotalCostContainsCorrectText(
      coffee,
      totalPriceStr,
    );
  });
});
