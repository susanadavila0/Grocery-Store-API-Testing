// pages/LoginPage.js
class LoginPage {
    constructor(page) {
        this.page = page;
        // 1. Aquí guardas los selectores (los IDs o clases de los botones)
        this.usernameInput = page.locator('#user-name');
        this.passwordInput = page.locator('#password');
        this.loginButton = page.locator('#login-button');
    }

    // 2. Aquí creas el método (la acción que se repite)
    async login(user, pass) {
        await this.usernameInput.fill(user);
        await this.passwordInput.fill(pass);
        await this.loginButton.click();
    }
}
module.exports = { LoginPage };
