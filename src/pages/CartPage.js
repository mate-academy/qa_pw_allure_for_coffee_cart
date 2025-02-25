const { expect } = require('@playwright/test');

export class CartPage {
  constructor(page) {
    this.page = page;
    this.cartListLocator = page.getByRole('list').nth(1);
    this.discountedMochaItem = this.cartListLocator
      .getByRole('listitem')
      .filter({ hasText: '(Discounted) Mocha' });
    this.discountedMochaName = this.discountedMochaItem.locator('div').nth(0);
    this.discountedMochaUnit = this.discountedMochaItem.locator('div').nth(1);
    this.discountedMochaTotalCost = this.discountedMochaItem
      .locator('div')
      .nth(3);

    this.notCoffeeMessage = page.getByText('No coffee, go add some.');
    this.totalCheckout = page.getByTestId('checkout');
  }

  coffeeItem(name) {
    return this.cartListLocator.getByRole('listitem').filter({ hasText: name });
  }

  coffeeListItemNameCell(name) {
    return this.coffeeItem(name).locator('div').nth(0);
  }

  coffeeListItemUnitCell(name) {
    return this.coffeeItem(name).locator('div').nth(1);
  }

  coffeeListItemTotalCostCell(name) {
    return this.coffeeItem(name).locator('div').nth(3);
  }

  coffeeListItemRemoveAllButton(name) {
    return this.page.getByLabel(`Remove all ${name}`);
  }

  coffeeListItemRemoveOneButton(name) {
    return this.page.getByLabel(`Remove one ${name}`).nth(1);
  }

  coffeeListItemAddOneButton(name) {
    return this.page.getByLabel(`Add one ${name}`).nth(1);
  }

  async open() {
    await this.page.goto('https://coffee-cart.app/cart');
  }

  async waitForLoading() {
    await this.page.waitForURL('/cart');
  }

  async reload() {
    await this.page.reload();
  }

  async clickCoffeeListItemRemoveAllButton(name) {
    await this.coffeeListItemRemoveAllButton(name).click();
  }

  async clickCoffeeListItemRemoveOneButton(name) {
    await this.coffeeListItemRemoveOneButton(name).click();
  }

  async clickCoffeeListItemAddOneButton(name) {
    await this.coffeeListItemAddOneButton(name).click();
  }

  async assertCoffeeItemIsVisible(name) {
    await expect(this.coffeeItem(name)).toBeVisible();
  }

  async assertCoffeeItemIsHidden(name) {
    await expect(this.coffeeItem(name)).toBeHidden();
  }

  async assertCoffeeNameContainsCorrectText(name) {
    await expect(this.coffeeListItemNameCell(name)).toBeVisible();
  }

  async assertCoffeeUnitContainsCorrectText(name, text) {
    await expect(this.coffeeListItemUnitCell(name)).toContainText(text);
  }

  async assertCoffeeTotalCostContainsCorrectText(name, text) {
    await expect(this.coffeeListItemTotalCostCell(name)).toContainText(text);
  }

  async assertNoCoffeeMessageIsVisible() {
    await expect(this.notCoffeeMessage).toBeVisible();
  }

  async assertTotalCheckoutContainsValue(value) {
    await expect(this.totalCheckout).toContainText(value);
  }
}
