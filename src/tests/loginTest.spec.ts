import { test, expect } from '@fixtures/testFixture';
import { ExtentManager } from '@utils/ExtentManager';

test('Login Test using POM', async ({ loginPage, page }) => {
    await loginPage.navigateToApp();
    await loginPage.login('admin', 'manager');

    // Wait for the dashboard page title
    await expect(page).toHaveTitle(/Enter Time-Track/);

    // Log in Extent Report
    await ExtentManager.getReporter()?.logTest('Login Test', 'PASS', 'Login successful');
});
