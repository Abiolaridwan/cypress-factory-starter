// cypress/e2e/navbar.cy.js

describe("Navigation Bar + Branding ✅", () => {
  beforeEach(() => {
    cy.visit("/"); // assumes baseUrl is http://localhost:3000
  });

  it("should display the logo and site name", () => {
    cy.get(".logo").should("exist");
    cy.get(".logo h1").should("contain.text", "Biola.ng");
    cy.get(".logo i").should("have.class", "fa-laptop-code");
  });

  it("should display all navigation links", () => {
    cy.get("#mainNav a").should("have.length", 4);
    cy.get("#mainNav a").eq(0).should("contain.text", "Home");
    cy.get("#mainNav a").eq(1).should("contain.text", "Jobs");
    cy.get("#mainNav a").eq(2).should("contain.text", "About");
    cy.get("#mainNav a").eq(3).should("contain.text", "Contact");
  });

  it("should navigate to correct sections when links are clicked", () => {
    cy.get("#mainNav a").eq(0).click();
    cy.url().should("include", "#home");
    cy.get("#mainNav a").eq(1).click();
    cy.url().should("include", "#jobs");
    cy.get("#mainNav a").eq(2).click();
    cy.url().should("include", "#about");
    cy.get("#mainNav a").eq(3).click();
    cy.url().should("include", "#contact");
  });

  it("should display theme toggle button", () => {
    cy.get("#themeToggle").should("exist").and("have.class", "theme-toggle");
  });

  it("should display login and register buttons", () => {
    cy.get("#showLogin").should("exist").and("contain.text", "Login");
    cy.get("#showRegister").should("exist").and("contain.text", "Register");
  });
});
