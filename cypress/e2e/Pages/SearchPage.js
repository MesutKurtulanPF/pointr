class SearchPage {

    constructor(locators, config) {
        this.locators = locators
        this.config = config
    }

    getConfigData() {
        return this.config
    }

    getSearchPageSearchTextBox() {
        return cy.get(this.locators.searchTextBox)
    }
    
    getSearchPageSearchButton() {
        return cy.get(this.locators.searchButton)
    }

    getSearchPageSearchedText() {
        return cy.get(this.locators.searchedText)
    }

    getSearchPageSearchNumberFoundText() {
        return cy.get(this.locators.searchNumberFoundText)
    }

    getSearchPageNoProductFoundText() {
        return cy.get(this.locators.noProductFoundText)
    }
}

export default SearchPage;