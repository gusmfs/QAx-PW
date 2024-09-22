import { expect } from "@playwright/test"

export class Toast{
    constructor(page){
        this.page = page
    }
    async haveText(expectedMessage){
        const toast = this.page.locator('.toast')
        await expect(toast).toHaveText(expectedMessage)
      
        await expect(toast).not.toBeVisible({timeout: 5000})}
}