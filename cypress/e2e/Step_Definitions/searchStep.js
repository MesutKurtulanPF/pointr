/// <reference types="cypress" />

import { config } from "chai";
import SearchPage from "../Pages/SearchPage";

import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";

let searchPage;

let searchText;

before(function(){
    cy.fixture('locators').then(locatorsJson => {
        cy.fixture('config').then(configJson => {
            searchPage = new SearchPage(locatorsJson.searchPage, configJson);
        })
    })
})

When('I search for a {string}', (keyword) => {
    searchText = keyword;
    searchPage.getSearchPageSearchTextBox().type(keyword);
    searchPage.getSearchPageSearchButton().click();
});

When('I search for a {string} search term',  (searchTerm) => {
    switch (searchTerm) {
        case 'valid':
            searchText = searchPage.getConfigData().SearchTermValid;
            searchPage.getSearchPageSearchTextBox().type(searchPage.getConfigData().SearchTermValid);
            searchPage.getSearchPageSearchButton().click();
            searchPage.getSearchPageSearchButton().click();
            break;
        
        case 'invalid':
            searchText = searchPage.getConfigData().SearchTermInvalid;
            searchPage.getSearchPageSearchTextBox().type(searchPage.getConfigData().SearchTermInvalid);
            searchPage.getSearchPageSearchButton().click();
            searchPage.getSearchPageSearchButton().click();
            break;
    
        default:
            break;
    }
});

Then('I should see search results', () => {
    cy.url().should('include', `https://www.sefamerve.com/product/category/search/?keyword=${searchText}&q=${searchText}`); 
    searchPage.getSearchPageSearchedText().should('be.visible').and('include.text', searchText);
});

Then('I should see a no results message', () => {
    cy.get('[id=product_list]').then($productList => {
        const productCount = $productList.find('div[class*=product_thumb]').length;
        expect(productCount).to.eq(0);
    });
});


Then('I save the results to results.txt', () => {
    searchPage.getSearchPageSearchNumberFoundText().invoke('text').then((results) => {
        const newEntry = `Search Term: ${searchText} Results: ${results} product found\n`;

        cy.readFile('results/results.txt', { timeout: 1000, failOnNonExisting: false })
            .then((content) => {
                cy.writeFile('results/results.txt', content + newEntry);
            });
    });
});


Then('I save the message to results.txt', () => {
    const newEntry = `Search Term: ${searchText} Results: Aradığınız kriterlerde ürün bulunamadı!\n`;

    cy.readFile('results/results.txt', { timeout: 1000, failOnNonExisting: false })
        .then((content) => {
            cy.writeFile('results/results.txt', content + newEntry);
    });
});

Then('I take a screenshot', () => {
    cy.screenshot(`screenshots/${Cypress.currentTest.title}`);
});