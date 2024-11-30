// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

import locators from '../fixtures/locators.json';
import data from '../fixtures/config.json';

Cypress.Commands.add("loginWithCorrectCredentials", () => {
    cy.get(locators.homePage.myAccountButton).click();
    cy.get(locators.homePage.emailRadioButton).click();
    cy.get(locators.homePage.emailTextArea).type("eyoel.maksim@moonwall.org");
    cy.get(locators.homePage.passwordTextArea).type("Pointr06");
    cy.get(locators.homePage.loginButton).click();
  });

Cypress.Commands.add("loginWithIncorrectCredentials", () => {
  cy.get(locators.homePage.myAccountButton).click();
  cy.get(locators.homePage.emailRadioButton).click();
  cy.get(locators.homePage.emailTextArea).type("eyoel.maksim@moonwall.org");
  cy.get(locators.homePage.passwordTextArea).type("Pointr0");
  cy.get(locators.homePage.loginButton).click();
});

Cypress.Commands.add("loginWithCorrectCredentialsParametrized", () => {
  cy.get(locators.homePage.myAccountButton).click();
  cy.get(locators.homePage.emailRadioButton).click();
  cy.get(locators.homePage.emailTextArea).type(data.Username);
  cy.get(locators.homePage.passwordTextArea).type(data.CorrectPassword);
  cy.get(locators.homePage.loginButton).click();
});

Cypress.Commands.add("loginWithIncorrectCredentialsParametrized", () => {
  cy.get(locators.homePage.myAccountButton).click();
  cy.get(locators.homePage.emailRadioButton).click();
  cy.get(locators.homePage.emailTextArea).type(data.Username);
  cy.get(locators.homePage.passwordTextArea).type(data.WrongPassword);
  cy.get(locators.homePage.loginButton).click();
});