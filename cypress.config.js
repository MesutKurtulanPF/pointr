const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      return require('./cypress/plugin/index')(on, config)
    },
    baseUrl: 'https://www.sefamerve.com',
    specPattern: 'cypress/e2e/Features/*.feature',
    failOnStatusCode: false,
    watchForFileChanges: false,
    defaultCommandTimeout: 15000,
    requestTimeout: 10000,
    responseTimeout: 30000,
    retries: {
      runMode: 1,
      openMode: 1
    },
  }
});