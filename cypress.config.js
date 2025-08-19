const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "http://localhost:3000", // Default app URL for tests
    specPattern: "cypress/e2e/**/*.cy.{js,jsx,ts,tsx}", // e2e test location
    supportFile: "cypress/support/commands.js", // Global commands
    fixturesFolder: "cypress/fixtures", // Fixture files
    downloadsFolder: "cypress/downloads", // Downloaded files
    screenshotsFolder: "cypress/screenshots", // Screenshots storage
    videosFolder: "cypress/videos", // Videos storage
    
    setupNodeEvents(on, config) {
      // Import custom plugins
      return require("./cypress/plugins/index.js")(on, config);
    },
  },

  env: {
    apiUrl: "http://localhost:4000/api", // Backend API
    defaultUser: {
      email: "testuser@example.com",
      password: "password123"
    }
  },

  retries: {
    runMode: 2, // Retry twice in CI mode
    openMode: 0, // No retry when debugging locally
  },

  viewportWidth: 1280, // Standard screen width
  viewportHeight: 720, // Standard screen height
  video: true, // Keep videos for CI debugging
  screenshotOnRunFailure: true, // Capture screenshots on failures
});
