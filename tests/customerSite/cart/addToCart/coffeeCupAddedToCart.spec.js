import { test } from '../../../_fixtures/fixtures';
import {
  unitPriceFormatStr,
  priceFormatStr,
} from '../../../../src/common/helpers/priceFormatters';
import { COFFEE_NAMES, COFFEE_PRICES } from '../../../../src/constants';
import * as allure from "allure-js-commons";


let testParameters = [];

for (const [key, value] of Object.entries(COFFEE_NAMES)) {
  testParameters.push({ coffee: value, price: COFFEE_PRICES[key] });
}

testParameters.forEach(({ coffee, price }) => {
  test(`The ${coffee} correctly added to the Cart`, async ({
    menuPage,
    cartPage,
  }) => {
     await allure.severity(`NORMAL`);
    await allure.parentSuite("Customer site");
    await allure.suite('Cart');
    await allure.story('The user clicks on the coffee cup, goes to the cart and sees the correct name, unit price and total cost for it in the checkout');
    await allure.subSuite('Total cost in checkout');
      await allure.epic(`'CoffeeCart' Customer site`);
      await allure.feature('Total cost in checkout');

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
