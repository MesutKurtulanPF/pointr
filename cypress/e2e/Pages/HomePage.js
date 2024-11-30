class HomePage {

    constructor(locators, config) {
        this.locators = locators
        this.config = config
    }

    getConfigData() {
        return this.config
    }

    getHomePageMyAccountButton() {
        return cy.get(this.locators.myAccountButton)
    }

    getHomePageEmailRadioButton() {
        return cy.get(this.locators.emailRadioButton)
    }

    getHomePageEmailTextArea() {
        return cy.get(this.locators.emailTextArea)
    }

    getHomePagePasswordTextArea() {
        return cy.get(this.locators.passwordTextArea)
    }

    getHomePageLoginButton() {
        return cy.get(this.locators.loginButton)
    }

    getHomePageErrorMessagePopup() {
        return cy.get(this.locators.errorMessagePopup)
    }

    getHomePageErrorMessageTitle() {
        return cy.get(this.locators.errorMessageTitle)
    }

    getHomePageErrorMessageDetail() {
        return cy.get(this.locators.errorMessageDetail)
    }
}

export default HomePage;