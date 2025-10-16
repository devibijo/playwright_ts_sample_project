import { expect, Page } from '@playwright/test';

export class BasePage {
  protected readonly page: Page;
  constructor(page: Page) {
    this.page = page;
  }

  async navigateTo(url: string) {
    await this.page.goto(url, { waitUntil: 'networkidle' });
  }

  async verifyPageUrl(expectedUrl: string): Promise<void> {
    expect(this.page.url()).toContain(expectedUrl);
  }

}