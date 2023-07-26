import { Page, Locator } from "@playwright/test"
export default class LoginPage {
    readonly page: Page
    readonly userName: Locator
    readonly pwd: Locator
    readonly loginBtn: Locator

    constructor(page: Page) {
        this.page = page
        this.userName = this.page.locator('[data-test="username"]')
        this.pwd = this.page.locator('[data-test="password"]')
        this.loginBtn = this.page.locator('[data-test="login-button"]')
    }
    async enterUsername(strUser: string) {
        await this.userName.type(strUser)
    }
    async enterPassword(strPwd: string) {
        await this.pwd.type(strPwd)
    }
    async clickLoginBtn() {
        await this.loginBtn.click()
    }
    async validLogin(strUser: string, strPwd: string) {
        await this.enterUsername(strUser)
        await this.enterPassword(strPwd)
        await this.clickLoginBtn();
    }
}