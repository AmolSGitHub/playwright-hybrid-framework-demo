import { BasePage } from '@pages/BasePage';

export class LoginPage extends BasePage {

async navigateToApp() {
  await this.navigateTo('http://desktop-p4llia9/');
}

  async enterUsername(username: string) {
    await this.fill('input[name="username"]', username, 'Enter username');
  }

  async enterPassword(password: string) {
    await this.fill('input[name="pwd"]', password, 'Enter password');
  }

 async submitLogin() {
  // Use BasePage click helper with XPath
  await this.click('//a[@id="loginButton"]', 'Click login button');
}

  async login(username: string, password: string) {
    await this.enterUsername(username);
    await this.enterPassword(password);
    await this.submitLogin();
  }
}
