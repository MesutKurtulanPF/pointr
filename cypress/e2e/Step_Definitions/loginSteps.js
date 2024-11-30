/// <reference types="cypress" />

import HomePage from "../Pages/HomePage";
import AccountPage from "../Pages/AccountPage";

import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";

let homePage, accountPage;

let userCredential;

before(function(){
    cy.fixture('locators').then(locatorsJson => {
        cy.fixture('config').then(configJson => {
            homePage = new HomePage(locatorsJson.homePage, configJson);
            accountPage = new AccountPage(locatorsJson.accountPage, configJson);
        })
    })
})

Given('I navigate to {string}', (url) => {
    cy.viewport(1400, 660)
    cy.visit('/');
    cy.url().should('eq', 'https://www.sefamerve.com/');
    cy.title().should('eq', 'Sefamerve | Tesettür Giyim, Elbise & Abiye');
});

When('I log in with {string} credentials', (credentials) => {

    switch (credentials) {
        case 'valid':
            userCredential = "eyoel.maksim@moonwall.org"
            cy.loginWithCorrectCredentials();
            break;
        case 'valid_parametrized':
            userCredential = accountPage.getConfigData().Username
            cy.loginWithCorrectCredentialsParametrized();
            break;
        case 'invalid':
            userCredential = "eyoel.maksim@moonwall.org"
            cy.loginWithIncorrectCredentials();
            break;
        case 'invalid_parametrized':
            userCredential = accountPage.getConfigData().Username
            cy.loginWithIncorrectCredentialsParametrized();
            break;
    
        default:
            break;
    }
});

Then('I should see the account page', () => {
    cy.url().should('eq', 'https://www.sefamerve.com/account/');
    cy.title().should('eq', 'Sefamerve | Tesettür Giyim, Elbise & Abiye');
    accountPage.getAccountPageAccountName().should('be.visible').and('include.text', userCredential);
});

And('I logout successfully', () => {
    accountPage.getAccountPageSafeLogoutButton().click();
    cy.url().should('eq', 'https://www.sefamerve.com/');
    cy.title().should('eq', 'Sefamerve | Tesettür Giyim, Elbise & Abiye');
});

Then('I should see an error message', () => {
    homePage.getHomePageErrorMessagePopup().should('be.visible');
    homePage.getHomePageErrorMessageTitle().should('have.text', 'Hatalı Giriş');
    homePage.getHomePageErrorMessageDetail().should('have.text', 'Kullanıcı adı ya da parolanız hatalı!');
});

Then('I log the error message to loginerror.txt', () => {
    homePage.getHomePageErrorMessageTitle().invoke('text').then((errorMessageTitle) => {
        homePage.getHomePageErrorMessageDetail().invoke('text').then((errorMessageDetail) => {
            const errorMessage = `${errorMessageTitle}: ${errorMessageDetail}`;
            const newEntry = `Login Error Message: ${errorMessage}\n`;

            cy.readFile('results/loginerror.txt', { timeout: 1000, failOnNonExisting: false })
                .then((content) => {
                    cy.writeFile('results/loginerror.txt', (content || '') + newEntry);
                });
        });
    });
});
