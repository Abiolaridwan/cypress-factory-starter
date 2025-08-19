// cypress/support/commands.js

// ***********************************************
// This file is processed and loaded automatically
// before your test files. 
//
// You can add custom commands here to simplify 
// repetitive tasks across your test suite.
//
// Project: cypress-factory-starter
// Purpose: To align Cypress tests with Biola.ng’s 
// frontend app (HTML, CSS, JS).
// ***********************************************

import "cypress-file-upload";


// Example: Login command (extend for your app if needed)
Cypress.Commands.add("login", (username, password) => {
  cy.get("[data-test=username]").type(username);
  cy.get("[data-test=password]").type(password);
  cy.get("[data-test=login-btn]").click();
});

// Example: Register new user
Cypress.Commands.add("register", (name, email, password) => {
  cy.get("[data-test=name]").type(name);
  cy.get("[data-test=email]").type(email);
  cy.get("[data-test=password]").type(password);
  cy.get("[data-test=register-btn]").click();
});

// Example: Add product to cart
Cypress.Commands.add("addToCart", (productName) => {
  cy.contains(productName).parents(".product-card").within(() => {
    cy.get("[data-test=add-to-cart]").click();
  });
});

// Example: Verify logo presence (Biola.ng brand)
Cypress.Commands.add("verifyLogo", () => {
  cy.get(".logo").should("contain.text", "Biola.ng");
});

// Example: Smooth navigation
Cypress.Commands.add("navigateTo", (page) => {
  cy.get("nav").contains(page).click();
  cy.url().should("include", page.toLowerCase());
});

// Example: Clear and type into any field
Cypress.Commands.add("clearAndType", (selector, text) => {
  cy.get(selector).clear().type(text);
});

// Example: Validate success message
Cypress.Commands.add("validateSuccessMessage", (message) => {
  cy.get(".success-message").should("contain.text", message);
});
