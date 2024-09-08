import { expect } from "@playwright/test";

export class LandingPage{
    constructor(page){
        this.page = page
    }
    async visit(){
        await this.page.goto('http://localhost:3000');
    }
    async openLeadModal(){
        await this.page.getByRole('button', {name: /Aperte o play.../}).click();
        await expect(
            this.page.getByTestId('modal').getByRole('heading')
        ).toHaveText("Fila de espera")
    }
    async SubmiteLeadForm(name, email){
        await this.page.getByPlaceholder("Informe seu nome").fill(name)
        await this.page.getByPlaceholder("Informe seu email").fill(email)
        await this.page.getByTestId('modal').getByText("Quero entrar na fila!").click();
    }
    async toastHaveText(expectedMessage){
        const toast = this.page.locator('.toast')
        await expect(toast).toHaveText(expectedMessage)
      
        await expect(toast).not.toBeVisible({timeout: 5000})}

    async alertHaveText(target){
        await expect(this.page.locator('.alert')).toHaveText(target)
    }
}