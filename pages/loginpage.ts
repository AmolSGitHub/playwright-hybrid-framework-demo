import { Page } from '@playwright/test';
import { allure } from 'allure-playwright';

export class LoginPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async openApp(url: string) {
    await allure.step('Open application URL : '+url, async () => {
      await this.page.goto(url);
    });
  }

  async enterUsername(username: string) {
    await allure.step('Enter username : '+username, async () => {
      await this.page.locator('input[name="username"]').fill(username);
    });
  }

  async enterPassword(password: string) {
    await allure.step('Enter password : '+password, async () => {
      await this.page.locator('input[name="pwd"]').fill(password);
    });
  }

  async clickLogin() {
    await allure.step('Click Login link', async () => {
      await this.page.getByRole('link', { name: 'Login' }).click();
    });
  }

  async createTask(taskName: string) {
    await allure.step('Wait for popup and create task', async () => {
      const page1Promise = this.page.waitForEvent('popup');

      await allure.step('Click Create new tasks link', async () => {
        await this.page.getByRole('link', { name: 'Create new tasks' }).click();
      });

      const page1 = await page1Promise;

      await allure.step('Select customer', async () => {
        await page1.locator('select[name="customerId"]').selectOption('206');
      });

      await allure.step('Select project', async () => {
        await page1.locator('select[name="projectId"]').selectOption('-2');
      });

      await allure.step('Click task name field', async () => {
        await page1.locator('input[name="task[0].name"]').click();
      });

      await allure.step('Enter task name', async () => {
        await page1.locator('input[name="task[0].name"]').fill(taskName);
      });

      await allure.step('Click task deadline field', async () => {
        await page1.locator('#taskDeadline0').click();
      });

      await allure.step('Click Create Tasks button', async () => {
        await page1.getByRole('button', { name: 'Create Tasks' }).click();
      });
    });
  }
}
