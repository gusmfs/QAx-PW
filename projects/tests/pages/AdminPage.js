import { expect } from "@playwright/test";

//Criando a classe para representar a pagina de login
export class AdminPage{
    constructor(page){
        this.page = page
    }
    //Criando o metodo para visitar a pagina de login
    async visit(){
        await this.page.goto('http://localhost:3000/admin/login');
        const loginForm =  this.page.locator('.login-form')
        await expect(loginForm).toBeVisible()
    }
    //Criando o metodo para preencher o formulario de login e submeter
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
    //Verificando se esta na pagina de login após falhar no teste
    async isNotLogged(){
        await this.page.waitForLoadState('networkidle')
        await expect(this.page).toHaveURL('http://localhost:3000/admin/login')
    }
    //Verificando o texto do toast exibido quando o login é feito com sucesso
    async toastHaveText(expectedMessage){
        const toast = this.page.locator('.toast')
        await expect(toast).toHaveText(expectedMessage)
      
        await expect(toast).not.toBeVisible({timeout: 5000})
    }

    //Alternativa para pegar o campo de email e senha utilizando um localizador que busca por uma palavra dentro da classe diferente 
    async alertHaveText(expectedMessage){
        const alert = this.page.locator('span[class$=alert]')
        await expect(alert).toHaveText(expectedMessage)
    } 
    //Alternativa para pegar o campo de email e senha com a classe com nome diferente
//
//    async alertEmailHaveText(targetEmail){
//        await expect(this.page.locator('.email-alert')).toHaveText(targetEmail)
//        
//    }
//    async alertPassHaveText(targetPassword){
//        await expect(this.page.locator('.password-alert')).toHaveText(targetPassword)
//        
//    }
}   