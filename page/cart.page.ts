import { Locator, Page } from "@playwright/test";

export class CartPage {
  readonly cartItem: Locator; 
  readonly itemName: Locator;
  readonly itemPrice: Locator;

  constructor(private page: Page) {
    this.page = page;
    this.cartItem = page.locator('.cart_item');
    this.itemName = page.locator('.inventory_item_name');
    this.itemPrice = page.locator('.inventory_item_price');
  }

  async getCartItemName(): Promise<string> {
    return (await this.itemName.innerText()).toString();
  }

  async getCartItemPrice(): Promise<string> {
    return (await this.itemPrice.innerText()).toString();
  }
}