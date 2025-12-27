import { FullConfig } from '@playwright/test';
import { ExtentManager } from '@utils/ExtentManager';

async function globalSetup(config: FullConfig) {
    console.log('Global setup: Initializing Extent Reports');
    await ExtentManager.initReports();
}

export default globalSetup;
