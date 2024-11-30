// const { config } = require('cypress/types/bluebird')

const cucumber = require('cypress-cucumber-preprocessor').default

/**
 * @type {Cypress.PluginConfig}
 */

module.exports = (on, config) => {
    on('file:preprocessor', cucumber())
}