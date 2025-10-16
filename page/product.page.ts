import { Locator, Page } from "@playwright/test";
import { BasePage } from "./base.page";

export class ProductPage extends BasePage {
  readonly addToCartButton: string;
  readonly title: Locator;
  readonly products: Locator;
  readonly cartButton: Locator;
  readonly cartText: Locator;

  constructor(page: Page) {
    super(page);
    this.title = page.locator('[data-test="title"]');
    this.addToCartButton = '[data-test^="add-to-cart-"]';
    this.products = page.locator('.inventory_item');
    this.cartButton = page.locator('[data-test="shopping-cart-link"]');
    this.cartText = page.locator('.shopping_cart_badge');
  }

  async verifyProductsCount(): Promise<number> {
    const products = await this.products.all();
    console.log(`Total products found: ${products.length}`);
    return products.length;
  }

async findProductWithHighestPrice(): Promise<{ highestPricedProduct: Locator; highestPrice: number; productName: string }> {
  await this.products.first().waitFor({ state: 'visible' });
  const productCount = await this.verifyProductsCount();
  let highestPrice = 0;
  let highestPricedProduct: Locator | null = null;
  let productName = '';
  for (let i = 0; i < productCount; i++) {
    const product = this.products.nth(i);
    await product.locator('.inventory_item_price').waitFor({ state: 'visible' });
    const priceText = await product.locator('.inventory_item_price').innerText();
    const price = parseFloat(priceText.replace('$', ''));
    if (price > highestPrice) {
      highestPrice = price;
      highestPricedProduct = product;
      productName = await product.locator('.inventory_item_name').innerText();
    }
  }
  if (!highestPricedProduct) {
    throw new Error('No products found');
  }
  return { highestPricedProduct, highestPrice, productName };
}

  async addProductToCart(product: Locator): Promise<void> {
    const addToCartButton = product.locator(this.addToCartButton);
    const productName = await product.locator('.inventory_item_name').textContent();
    await addToCartButton.click();
  }

  async findAndAddHighestPricedProductToCart(): Promise<void> {
    const { highestPricedProduct } = await this.findProductWithHighestPrice();
    await this.addProductToCart(highestPricedProduct);
  }
}

