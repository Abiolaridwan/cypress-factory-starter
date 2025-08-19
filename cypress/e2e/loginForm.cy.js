// cypress/e2e/loginForm.cy.js

describe("User Login Form 🔑", () => {
  beforeEach(() => {
    cy.visit("/"); // assumes baseUrl is http://localhost:3000
    cy.get("#showLogin").click(); // open the login modal
  });

  it("should fill in the login form correctly", () => {
    cy.get("#loginEmail").type("yusuf@example.com");
    cy.get("#loginPassword").type("StrongPass123!");
  });

  it("should display success message upon successful login", () => {
    // Fill form
    cy.get("#loginEmail").type("yusuf@example.com");
    cy.get("#loginPassword").type("StrongPass123!");
    
    // Submit form
    cy.get("#loginSubmit").click();

    // Assert success message
    cy.get("#loginSuccess").should("be.visible")
      .and("contain.text", "Login successful");
  });

  it("should show error messages if fields are empty", () => {
    cy.get("#loginSubmit").click();
    cy.get("#loginEmailError").should("be.visible");
    cy.get("#loginPasswordError").should("be.visible");
  });
});
