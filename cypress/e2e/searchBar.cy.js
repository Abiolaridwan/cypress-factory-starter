// cypress/e2e/search.cy.js

describe("Search Bar 🔍", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("allows typing in the search input", () => {
    cy.get("#searchInput")
      .type("Software Engineer")
      .should("have.value", "Software Engineer");
  });

  it("clicking search button triggers search results", () => {
    cy.get("#searchInput").type("Marketing");
    cy.get("#searchBtn").click();
    cy.get("#searchResults").should("exist");
  });

  it("clicking suggestion tags fills the search input", () => {
    cy.get(".suggestion-tag").contains("Finance").click();
    cy.get("#searchInput")
      .invoke("val")
      .then((val) => {
        expect(val.toLowerCase()).to.eq("finance");
      });
  });
});
