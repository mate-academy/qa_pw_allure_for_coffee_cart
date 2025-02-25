const { expect } = require('@playwright/test');

export class MenuPage {
  constructor(page) {
    this.page = page;
    this.cappuccinoCup = page.getByTestId('Cappuccino');
    this.cappuccinoCupCost = page
      .getByRole('listitem')
      .filter({ has: this.cappuccinoCup });
    this.espressoCup = page.getByTestId('Espresso');
    this.espressoCupCost = page
      .getByRole('listitem')
      .filter({ has: this.espressoCup });
    this.americanoCup = page.getByTestId('Americano');
    this.cartLink = page.getByLabel('Cart page');
    this.totalCheckout = page.getByTestId('checkout');
    this.promoMessage = page.getByText(
      "It's your lucky day! Get an extra cup of Mocha for $4.",
    );
    this.yesPromoButton = page.getByRole('button', { name: 'Yes, of course!' });
    this.noPromoButton = page.getByRole('button', { name: "Nah, I'll skip." });
  }

  coffeeCupLocator(coffeeName) {
    const testId = coffeeName.replace(' ', '_');

    return this.page.getByTestId(testId);
  }

  coffeeCupCostLocator(coffeeName) {
    const coffeeCup = this.coffeeCupLocator(coffeeName);
    return this.page.getByRole('listitem').filter({ has: coffeeCup });
  }

  async open() {
    await this.page.goto('/');
  }

  async clickCoffeeCup(coffeeName) {
    await this.coffeeCupLocator(coffeeName).click();
  }

  async clickCartLink() {
    await this.cartLink.click();
  }

  async clickYesPromoButton() {
    await this.yesPromoButton.click();
  }

  async clickNoPromoButton() {
    await this.noPromoButton.click();
  }

  async assertTotalCheckoutContainsValue(value) {
    await expect(this.totalCheckout).toContainText(value);
  }

  async assertCoffeeCupCostHasValue(coffee, value) {
    await expect(this.coffeeCupCostLocator(coffee)).toContainText(value);
  }

  async assertPromoMessageIsVisible() {
    await expect(this.promoMessage).toBeVisible();
  }
}
