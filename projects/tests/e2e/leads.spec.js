// @ts-check
const { test, expect } = require('@playwright/test');
import { LandingPage } from '../pages/LandingPage';
import { Toast } from '../pages/Components';
import { faker } from '@faker-js/faker';

let toast
let landingPage
const randomName = faker.person.fullName()
const randomEmail = faker.internet.email()

test.beforeEach(async ({ page }) => {
  landingPage = new LandingPage(page)
  toast = new Toast(page)
})
test('Deve cadastrar um lead na fila de espera', async ({ page }) => {
  await landingPage.visit()
  await landingPage.openLeadModal()
  await landingPage.SubmiteLeadForm(randomName, randomEmail)
  const expectedMessage = "Agradecemos por compartilhar seus dados conosco. Em breve, nossa equipe entrará em contato!"

  await toast.haveText(expectedMessage)
});
test('Não deve cadastrar um lead na fila de espera com e-mail já existente', async ({ page }) => {
  await landingPage.visit()
  await landingPage.openLeadModal()
  await landingPage.SubmiteLeadForm('Gustavo', 'oigostavo@gmail.com')
  const expectedMessage = "O endereço de e-mail fornecido já está registrado em nossa fila de espera."

  await toast.haveText(expectedMessage)
});

test('Não deve cadastrar um lead na fila de espera com e-mail incorreto', async ({page}) => {
  await landingPage.visit()
  await landingPage.openLeadModal()
  await landingPage.SubmiteLeadForm('Gustavo', 'oigostavo.com')

  await landingPage.alertHaveText('Email incorreto')
})

test('Não deve cadastrar um lead na fila de espera sem preencher os campos', async({page})=>{
  await landingPage.visit()
  await landingPage.openLeadModal()
  await landingPage.SubmiteLeadForm('', '')
  const expectedMessage = "Campo obrigatório"
  await landingPage.alertHaveText([expectedMessage, expectedMessage])
})

test('Não deve cadastrar um lead na fila de espera sem preencher um nome', async ({page}) => {
  await landingPage.visit()
  await landingPage.openLeadModal()
  await landingPage.SubmiteLeadForm('', 'oigostavo@gmail.com')
  await landingPage.alertHaveText('Campo obrigatório')
})

test('Não deve cadastrar um lead na fila de espera sem preencher um email', async ({page}) => {
  await landingPage.visit()
  await landingPage.openLeadModal()
  await landingPage.SubmiteLeadForm('Gustavo', '')
  await page.getByTestId('modal').getByText("Quero entrar na fila!").click();

  await landingPage.alertHaveText("Campo obrigatório")

})
