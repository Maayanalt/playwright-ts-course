import { expect, Locator, Page } from "@playwright/test";
import UserCredentials from "../helpers/UserCredentials";
import ApplicationURL from "../helpers/ApplicationURL";

export default class LoginPage {

    usernameField: Locator;
    passwordField: Locator;
    logginButton: Locator;

    constructor(protected page: Page) {
        this.usernameField = this.page.locator('[data-test="username"]')
        this.passwordField = this.page.locator('[data-test="password"]')
        this.logginButton = this.page.locator('[data-test="login-button"]')
    }

    public async loginToApplication(username = UserCredentials.STANDARD_USER, password = UserCredentials.CORRECT_PASSWORD,url = ApplicationURL.BASE_URL) {
        await this.page.goto(url);
        await this.validatePageURL(ApplicationURL.BASE_URL)
        await this.usernameField.fill(username);
        await this.passwordField.fill(password);
        await this.logginButton.click();
        await this.validatePageURL(`${ApplicationURL.BASE_URL}inventory.html`)
    }

    public async validatePageURL(url: string) {
        await expect(this.page).toHaveURL(url)
    }
}