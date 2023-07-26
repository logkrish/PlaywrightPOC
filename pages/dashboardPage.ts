import { Page, Locator, expect } from "@playwright/test"
export default class DashboardPage {
    readonly page: Page
    readonly products: Locator

    constructor(page: Page) {
        this.page = page      
       
        this.products=this.page.getByText('Products')
    }

    async validateLogin() {
        await expect(this.products).toBeVisible();
    }
}