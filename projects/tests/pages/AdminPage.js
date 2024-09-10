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

    async openFormLogin(){
        
    }

    async submitLoginForm(email, pass){
        await this.page.getByPlaceholder("E-mail").fill(email)
        await this.page.getByPlaceholder("Senha").fill(pass)
        await this.page.locator("buton").getByText("Entrar").click()
    }
}