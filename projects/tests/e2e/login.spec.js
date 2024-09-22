import { AdminPage } from "../pages/AdminPage"
import { Toast } from "../pages/Components"
import { test } from "@playwright/test"

let adminPage
let toast
test.beforeEach(async ({page}) => {
    adminPage = new AdminPage(page)
    toast = new Toast(page)
})
test("Deve logar como adm", async ({page}) => {
    await adminPage.visit()
    await adminPage.submitLoginForm('admin@zombieplus.com', 'pwd123')
    await adminPage.isLoggedIn()
})

test("Não deve logar com senha incorreta", async ({page}) => {
    await adminPage.visit()
    await adminPage.submitLoginForm('admin@zombieplus.com', 'pwd12366')
    await adminPage.isNotLogged()
    const message = "Oops!Ocorreu um erro ao tentar efetuar o login. Por favor, verifique suas credenciais e tente novamente."
    await adminPage.toastHaveText(message)
})

test("Não deve logar com campos vazios", async ({page}) => {
    await adminPage.visit()
    await adminPage.submitLoginForm('', '')
    await adminPage.isNotLogged()
    const expectedMessage = "Campo obrigatório"
    await adminPage.alertEmailHaveText(expectedMessage)
    await adminPage.alertPassHaveText(expectedMessage)

})