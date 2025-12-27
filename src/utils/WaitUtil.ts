import { Page } from '@playwright/test';
import { Timeouts } from '@constants/Timeouts';

export class WaitUtil {
    static async waitForTimeout(page: Page, ms: number = Timeouts.SHORT_WAIT) {
        await page.waitForTimeout(ms);
    }

    static async waitForElement(page: Page, selector: string) {
        await page.waitForSelector(selector, { timeout: Timeouts.ELEMENT_WAIT });
    }
}
