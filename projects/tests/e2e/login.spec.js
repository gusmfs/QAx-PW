import {expect, test} from "@playwright/test"
import { AdminPage } from "../pages/AdminPage"

let adminPage
test.beforeEach(async ({page}) => {
    adminPage = new AdminPage(page)
})
test("Deve logar como adm", async ({page}) => {
    await adminPage.visit()
    await adminPage.submitLoginForm('admin@zombieplus.com', 'pwd123')
    
})