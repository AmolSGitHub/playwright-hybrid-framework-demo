import { Page } from '@playwright/test';
import { allure } from 'allure-playwright';

export class BasePage {
  protected page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async navigateTo(url: string) {
    await allure.step(`Navigate to URL: ${url}`, async () => {
      await this.page.goto(url);
    });
  }

  async click(selector: string, description?: string) {
    await allure.step(description || `Click element: ${selector}`, async () => {
      await this.page.click(selector);
    });
  }

  async fill(selector: string, value: string, description?: string) {
    await allure.step(description || `Fill element: ${selector} with ${value}`, async () => {
      await this.page.fill(selector, value);
    });
  }
}
