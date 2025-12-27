import { test, expect } from '@fixtures/testFixture';
import { ExtentManager } from '@utils/ExtentManager';
import { ActitimeFlow } from '@flows/ActitimeFlow';

test('Login Test using Flow', async ({ page }) => {
    // Initialize the flow class
    const actitimeFlow = new ActitimeFlow(page);

    // Call the loginWithSeparateSteps method
    await actitimeFlow.login('admin', 'manager');
    await actitimeFlow.AdminCreateCustomer('Test','Test Descripton');

    await ExtentManager.getReporter()?.logTest('Login Test', 'PASS', 'Login successful');
});

