import { test } from '@playwright/test';
import { LoginPage } from '../../src/pages/LoginPage';

test('Login Test using POM', async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.navigateToApp();
  await loginPage.login('admin', 'manager');
});
