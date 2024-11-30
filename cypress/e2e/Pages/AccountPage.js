class AccountPage {

    constructor(locators, config) {
        this.locators = locators
        this.config = config
    }

    getConfigData() {
        return this.config
    }

    getAccountPageAccountName() {
        return cy.get(this.locators.accountName)
    }

    getAccountPageSafeLogoutButton() {
        return cy.get(this.locators.safeLogoutButton)
    }
}

export default AccountPage;