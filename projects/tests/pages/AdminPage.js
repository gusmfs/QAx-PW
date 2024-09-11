import { expect } from "@playwright/test";

export class AdminPage{
    constructor(page){
        this.page = page
    }
    
    async visit(){
        await this.page.goto('http://localhost:3000/admin/login');
        const loginForm =  this.page.locator('.login-form')
        await expect(loginForm).toBeVisible()
    }

    async submitLoginForm(email, pass){
        await this.page.getByPlaceholder("E-mail").fill(email)
        await this.page.getByPlaceholder("Senha").fill(pass)
        await this.page.locator("button").getByText("Entrar").click()
    }


    //Alternativa para verificar se esta logada//

    // async isLoggedIn() {
    //      const buttonLogout = await this.page.locator('a[href="/logout"]')
    //      await expect(buttonLogout).toBeVisible()
    // }

    async isLoggedIn(){
        await this.page.waitForLoadState('networkidle')
        await expect(this.page).toHaveURL('http://localhost:3000/admin/movies')
    }
}