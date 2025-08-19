/// <reference types="cypress" />

/**
 * cypress-factory-starter
 * Plugins configuration file
 * 
 * Purpose: To extend and enhance Cypress functionality 
 * while keeping tests simple, maintainable, and scalable.
 */

const path = require("path");

/**
 * @type {Cypress.PluginConfig}
 */
module.exports = (on, config) => {
  // Example: Register custom tasks for debugging or logging
  on("task", {
    log(message) {
      console.log("🟢 CYPRESS LOG:", message);
      return null;
    },
    error(message) {
      console.error("🔴 CYPRESS ERROR:", message);
      return null;
    },
  });

  // Example: Allow importing of environment-specific configuration
  const environment = config.env.ENVIRONMENT || "local";
  console.log(`🟢 Running in ENV: ${environment}`);

  const configFile = path.resolve("cypress", "config", `${environment}.json`);
  config.env = {
    ...config.env,
    environmentConfig: configFile,
  };

  // Return the updated configuration to Cypress
  return config;
};
