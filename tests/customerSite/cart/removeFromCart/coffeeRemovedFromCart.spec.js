import { test } from '../../../_fixtures/fixtures';
import { COFFEE_NAMES } from '../../../../src/constants';

let testParameters = [];

for (const [key] of Object.entries(COFFEE_NAMES)) {
  testParameters.push({ coffee: COFFEE_NAMES[key] });
}

testParameters.forEach(({ coffee }) => {
  test(`The ${coffee} removed from Cart after clicking remove`, async ({
    cartPage,
    menuPage,
    allure,
  }) => {
    await allure.severity(`normal`);

    await allure.parentSuite('castomer site');
    await allure.suite('cart');
    await allure.subSuite('remove coffee from cart');

    await allure.epic(`'CoffeeCart' Customer site`);
    await allure.feature('Cart');
    await allure.story('The coffee removed from Cart after clicking remove');

    await menuPage.open();
    await menuPage.clickCoffeeCup(coffee);

    await menuPage.clickCartLink();
    await cartPage.waitForLoading();

    await cartPage.clickCoffeeListItemRemoveAllButton(coffee);
    await cartPage.assertNoCoffeeMessageIsVisible();
  });
});
