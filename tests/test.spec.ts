import { test, expect } from '@playwright/test';
import { LoginPage } from '../page/login.page';
import { ProductPage } from '../page/product.page';
import { CartPage } from '../page/cart.page';
import { testData } from '../Utils/test-data';

test.describe('Product Selection & Cart Addition Tests', () => {
  let loginPage: LoginPage;
  let productPage: ProductPage;
  let cartPage: CartPage;

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    productPage = new ProductPage(page);
    cartPage = new CartPage(page);

    await loginPage.navigateTo(testData.urls.baseUrl);
    await loginPage.login(testData.standardUser.username, testData.standardUser.password);
    
    await page.waitForLoadState('networkidle');
    await expect(page.locator('[data-test="title"]')).toHaveText('Products');
  });

  test('should check the URL & Title after login', async ({ page }) => {
    await loginPage.verifyPageUrl(testData.urls.productUrl);
    await expect(page).toHaveTitle('Swag Labs');
  });

  test('should find and add highest priced product to cart', async ({ page }) => {
    let productName: string;
    let productPrice: number;
    let highestPricedProduct: any;

    await test.step('Find and add highest priced product to cart', async () => {
      const result = await productPage.findProductWithHighestPrice();
      highestPricedProduct = result.highestPricedProduct;
      productName = result.productName;
      productPrice = result.highestPrice;  
      await productPage.addProductToCart(highestPricedProduct);    
      const cartBadge = page.locator('.shopping_cart_badge');
      await expect(cartBadge).toBeVisible();
      await expect(cartBadge).toHaveText('1');
    });

    await test.step('Open cart and verify the product is in the cart', async () => {
      await productPage.cartButton.click();
      await page.waitForLoadState('networkidle');
      await expect(cartPage.cartItem).toBeVisible();
    });

    await test.step('Verify the product name and price in the cart', async () => {
      const cartItemName = await cartPage.getCartItemName();
      const cartItemPrice = await cartPage.getCartItemPrice();     
      expect(cartItemName).toBe(productName);
      expect(cartItemPrice).toBe(`$${productPrice}`);
    });
  });
}); 