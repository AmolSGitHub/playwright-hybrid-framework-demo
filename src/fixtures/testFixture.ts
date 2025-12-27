import { test as baseTest } from '@playwright/test';
import { LoginPage } from '@pages/LoginPage';
import { ExtentManager } from '@utils/ExtentManager';

type MyFixtures = {
    loginPage: LoginPage;
};

export const test = baseTest.extend<MyFixtures>({
    loginPage: async ({ page }, use) => {
        const loginPage = new LoginPage(page);
        await use(loginPage);
    },
});

test.beforeAll(async () => {
    await ExtentManager.initReports();
});

test.afterAll(async () => {
    await ExtentManager.flushReports();
});

export { expect } from '@playwright/test';
