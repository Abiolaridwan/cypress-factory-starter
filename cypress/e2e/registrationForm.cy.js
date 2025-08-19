// cypress/e2e/registrationForm.cy.js

describe("User Registration Form 📝", () => {
  beforeEach(() => {
    cy.visit("/"); // assumes baseUrl is http://localhost:3000
    cy.get("#showRegister").click(); // open the register modal
  });

  it("should fill in the registration form correctly", () => {
    cy.get("#regFirstName").type("Yusuf");
    cy.get("#regLastName").type("Abiola");
    cy.get("#regEmail").type("yusuf@example.com");
    cy.get("#regPhone").type("+2348012345678");
    cy.get("#regLocation").select("Lagos");
    cy.get("#regIndustry").select("Technology");
    cy.get("#regPassword").type("StrongPass123!");
    cy.get("#regConfirmPassword").type("StrongPass123!");
  });

  it("should display success message upon submission", () => {
    // Fill form
    cy.get("#regFirstName").type("Yusuf");
    cy.get("#regLastName").type("Abiola");
    cy.get("#regEmail").type("yusuf@example.com");
    cy.get("#regPhone").type("+2348012345678");
    cy.get("#regLocation").select("Lagos");
    cy.get("#regIndustry").select("Technology");
    cy.get("#regPassword").type("StrongPass123!");
    cy.get("#regConfirmPassword").type("StrongPass123!");

    // Submit form
    cy.get("#registerSubmit").click();

    // Assert success message
    cy.get("#registerSuccess").should("be.visible")
      .and("contain.text", "Account created successfully");
  });

  it("should show error messages if fields are empty", () => {
    cy.get("#registerSubmit").click();
    cy.get("#regFirstNameError").should("be.visible");
    cy.get("#regLastNameError").should("be.visible");
    cy.get("#regEmailError").should("be.visible");
    cy.get("#regPhoneError").should("be.visible");
    cy.get("#regLocationError").should("be.visible");
    cy.get("#regIndustryError").should("be.visible");
    cy.get("#regPasswordError").should("be.visible");
    cy.get("#regConfirmPasswordError").should("be.visible");
  });
});
