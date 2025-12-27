import { BasePage } from '@pages/BasePage';
import { Page } from '@playwright/test';
 import { Timeouts } from '@constants/Timeouts'; // adjust path if needed

export class LoginPage extends BasePage {

    // Declare locators as class properties
    private usernameInput = 'input[name="username"]';
    private passwordInput = 'input[name="pwd"]';
    private loginButton = '#loginButton'; // You can also keep XPath if needed
    private taskTabElemet = 'xpath=//*[@id="topnav"]/tbody/tr[1]/td[5]/a/img';   
    private projectandCustomerTab = 'xpath=//a[.="Projects & Customers"]';
    private createNewCustomerButton = 'xpath=//*[@id="customersProjectsForm"]/table/tbody/tr/td/table/tbody/tr[1]/td/table/tbody/tr/td[2]/input[1]';
    private customerName = 'xpath=//input[@name="name"]';
    private customerDescription = 'xpath=//textarea[@name="description"]';
    private createNewProjectRB = 'xpath=//input[@id="add_project_action"]';
    private createCustomerButton = 'xpath=//input[@name="createCustomerSubmit"]';


    constructor(page: Page) {
        super(page);
    }

    async navigateToApp() {
        await this.navigateTo('http://desktop-p4llia9/', 'Navigate to App URL');
    }

    async enterUsername(username: string) {
        await this.fill(this.usernameInput, username, 'Enter username');
    }

    async enterPassword(password: string) {
        await this.fill(this.passwordInput, password, 'Enter password');
    }

    async submitLogin() {
        await Promise.all([
            this.page.waitForNavigation({ waitUntil: 'domcontentloaded' }),
            this.click(this.loginButton, 'Click login button')
        ]);
    }

    async clickOnTaskTab() {
        await this.click(this.taskTabElemet,'Click on task tab');
    }

     async clickOnProjectAndCustomer() {
        await this.click(this.projectandCustomerTab,'Click on project and Customer tab');
       
    }

    async clickOnCreateNewCustomerButton() {
    const element = this.page.locator(this.createNewCustomerButton);
    await element.waitFor({ state: 'visible', timeout: Timeouts.ELEMENT_WAIT });
    await element.click();
    console.log('Clicked on create new customer button');
}


     async enterCustomerName(name: string) {
        await this.fill(this.customerName,name);
        console.log('Customer name is : '+name);
    }

     async enterCustomerDescription(description: string) {
        await this.fill(this.customerDescription,'Customer description is : '+description);
    }

     async clickOnCreateNewProjectRB() {
        await this.click(this.createNewProjectRB,'Click on create new project radio button');
    }

     async clickOnCreateCustomerBtn() {
        await this.click(this.createCustomerButton,'Click on create customer button');
    }


}
