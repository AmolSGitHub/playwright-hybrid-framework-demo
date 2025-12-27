import { LoginPage } from "@pages/LoginPage";
import { Page } from "@playwright/test";
import { DateUtil } from "@utils/DateUtil";

export class ActitimeFlow {
    private page: Page;
    private loginPage: LoginPage;

    constructor(page: Page) {
        this.page = page;
        this.loginPage = new LoginPage(this.page); // Create instance of LoginPage
    }

    // You can also call individual methods if needed
    async login(username: string, password: string) {
        await this.loginPage.navigateToApp();
        await this.loginPage.enterUsername(username);
        await this.loginPage.enterPassword(password);
        await this.loginPage.submitLogin();
    }
     async AdminCreateCustomer(customerName:string,customerDescription:string) {
    
        await this.loginPage.clickOnTaskTab();
        await this.loginPage.clickOnProjectAndCustomer();
        await this.loginPage.clickOnCreateNewCustomerButton();
        await this.loginPage.enterCustomerName(DateUtil.generateCustomerName());
        await this.loginPage.enterCustomerDescription(customerDescription);
        await this.loginPage.clickOnCreateNewProjectRB();
        await this.loginPage.clickOnCreateCustomerBtn();
     }
}
