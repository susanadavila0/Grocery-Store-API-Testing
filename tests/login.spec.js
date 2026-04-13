// tests/login.spec.js
const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../pages/LoginPage'); // Importamos nuestra "página"

test('Login exitoso con Page Object Model', async ({ page }) => {
    const loginPage = new LoginPage(page);

    await page.goto('https://www.saucedemo.com'); // Usamos una web de práctica común
    
    // En lugar de escribir selectores, usamos el método que creamos en el Paso 2
    await loginPage.login('standard_user', 'secret_sauce');

    // Validación final
    await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
});
