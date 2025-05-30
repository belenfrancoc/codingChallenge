import loginPageLocators from "../selectors/loginPageSelectors";

class LoginPage {

    constructor() {
        this.userNameInput = loginPageLocators.user_name;
        this.passwordInput = loginPageLocators.password;
        this.loginButton = loginPageLocators.login_button;
        this.errorMessage = loginPageLocators.error_message;
        this.homePageTitle = loginPageLocators.home_page_title;
    }
    
    goTo(url)
    {
        cy.visit(url)
    }

    login(username,password){
        cy.get(this.userNameInput).type(username)
        cy.get(this.passwordInput).type(password)
        cy.get(this.loginButton).click()
        cy.url().should('include', '/inventory.html')
        cy.get(this.homePageTitle).should('have.text', 'Products')   
    }

    invalidLogin(invalidUsername, invalidPassword) {
        cy.get(this.userNameInput).type(invalidUsername)
        cy.get(this.passwordInput).type(invalidPassword)
        cy.get(this.loginButton).click()
        cy.get(this.errorMessage).should('be.visible')
    }
 
}

export default LoginPage;