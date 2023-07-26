import { Given, When, Then } from '@cucumber/cucumber'
import { Browser, Page, chromium } from "@playwright/test"
import LoginPage from "../../../pages/loginPage"
import DashboardPage from "../../../pages/dashboardPage"

const userName = "standard_user"
const pwd = "secret_sauce"


let loginPage: LoginPage
let dashboardPage: DashboardPage
let page: Page
let browser: Browser

Given('I go to the login page', async function () {
    browser = await chromium.launch({ headless: false })
    const context = await browser.newContext()
    page = await context.newPage()
    await page.goto('https://www.saucedemo.com/')
    dashboardPage = new DashboardPage(page)
    loginPage = new LoginPage(page)    
});

When('I enter valid credentials', async function () {
    await loginPage.validLogin(userName, pwd)
});

Then('I am sucessfully logged in', async function () {
    await dashboardPage.validateLogin();
});

Given('I enter username {string} and password {string}', async function (uname, pword) {
    await loginPage.validLogin(uname, pword)
  });