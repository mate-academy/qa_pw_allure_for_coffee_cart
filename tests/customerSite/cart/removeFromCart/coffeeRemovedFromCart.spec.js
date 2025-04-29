import { test } from '../../../_fixtures/fixtures';
import { COFFEE_NAMES, SEVERITY, EPIC, FEATURE } from '../../../../src/constants';
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
    await allure.severity(SEVERITY.medium);
    await allure.epic(EPIC.customerSite);
    await allure.feature(FEATURE.cart);
    await allure.story('As a customer I want to remove coffee from the cart by clicking the remove button so that I don\'t buy it');

    await menuPage.open();
    await menuPage.clickCoffeeCup(coffee);

    await menuPage.clickCartLink();
    await cartPage.waitForLoading();

    await cartPage.clickCoffeeListItemRemoveAllButton(coffee);
    await cartPage.assertNoCoffeeMessageIsVisible();
  });
});
