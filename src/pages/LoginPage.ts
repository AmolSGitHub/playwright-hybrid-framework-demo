import { BasePage } from '@pages/BasePage';
import { Page } from '@playwright/test';

export class LoginPage extends BasePage {

    constructor(page: Page) {
        super(page);
    }

    async navigateToApp() {
        await this.navigateTo('http://desktop-p4llia9/', 'Navigate to App URL');
    }

    async enterUsername(username: string) {
        await this.fill('input[name="username"]', username, 'Enter username');
    }

    async enterPassword(password: string) {
        await this.fill('input[name="pwd"]', password, 'Enter password');
    }

    async submitLogin() {
        // Wait for navigation after clicking login
        await Promise.all([
            this.page.waitForNavigation({ waitUntil: 'domcontentloaded' }),
            this.click('//a[@id="loginButton"]', 'Click login button')
        ]);
    }

    async login(username: string, password: string) {
        await this.enterUsername(username);
        await this.enterPassword(password);
        await this.submitLogin();
    }
}
