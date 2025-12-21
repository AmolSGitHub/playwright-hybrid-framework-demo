const { chromium } = require('playwright');
import { test, Browser, Page } from '@playwright/test';
import { allure } from 'allure-playwright';
import { LoginPage } from '../pages/loginpage';

test('Login Test using POM', async () => {
  const browser: Browser = await chromium.launch({ headless: false, channel: 'chrome' });
  const page: Page = await browser.newPage();

  const loginPage = new LoginPage(page);

  await loginPage.openApp('http://desktop-p4llia9/');
  await loginPage.enterUsername('admin');
  await loginPage.enterPassword('manager');
  await loginPage.clickLogin();

  // Call task creation method
  await loginPage.createTask('Test');

  await browser.close();
});
