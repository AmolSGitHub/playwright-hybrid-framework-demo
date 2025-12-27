import { Page } from '@playwright/test';
import { Timeouts } from '@constants/Timeouts';
import { ExtentManager } from '@utils/ExtentManager';

export class BasePage {
    protected page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async navigateTo(url: string, actionName?: string) {
        if (actionName) {
            console.log(`Action: ${actionName}`);
            await ExtentManager.getReporter()?.logTest(actionName, 'PASS');
        }
        await this.page.goto(url, { timeout: Timeouts.PAGE_LOAD });
    }

    async click(selector: string, actionName?: string) {
        if (actionName) {
            console.log(`Action: ${actionName}`);
            await ExtentManager.getReporter()?.logTest(actionName, 'PASS');
        }
        await this.page.waitForSelector(selector, { state: 'visible', timeout: Timeouts.ELEMENT_WAIT });
        await this.page.click(selector);
    }

    async fill(selector: string, value: string, actionName?: string) {
        if (actionName) {
            console.log(`Action: ${actionName}`);
            await ExtentManager.getReporter()?.logTest(actionName, 'PASS', value);
        }
        await this.page.waitForSelector(selector, { state: 'visible', timeout: Timeouts.ELEMENT_WAIT });
        await this.page.fill(selector, value);
    }
}
