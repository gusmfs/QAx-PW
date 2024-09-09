import {expect, test} from "@playwright/test"

test("Deve logar como adm", async ({page}) => {
    await page.goto("http://localhost:3000/admin/login")
    const loginForm =  page.locator('.login-form')
    await expect(loginForm).toBeVisible()
})