import { test } from '../../../_fixtures/fixtures';
import { COFFEE_NAMES } from '../../../../src/constants';
import * as allure from "allure-js-commons";

let testParameters = [];

for (const [key] of Object.entries(COFFEE_NAMES)) {
  testParameters.push({ coffee: COFFEE_NAMES[key] });
}

testParameters.forEach(({ coffee }) => {
  test(`The ${coffee} removed from Cart after clicking remove`, async ({
    cartPage,
    menuPage,
  }) => {

    await allure.parentSuite(`Customer site`);
    await allure.suite('Cart');
    await allure.subSuite('Remove cart');
    await allure.severity(`normal`);

    await allure.epic(`'CoffeeCart' User site`);
    await allure.feature('Cart remove');
    await allure.story('The coffee removed from Cart after clicking remove');

    await menuPage.open();
    await menuPage.clickCoffeeCup(coffee);

    await menuPage.clickCartLink();
    await cartPage.waitForLoading();

    await cartPage.clickCoffeeListItemRemoveAllButton(coffee);
    await cartPage.assertNoCoffeeMessageIsVisible();
  });
});
