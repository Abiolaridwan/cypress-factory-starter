// cypress/e2e/tabs.cy.js

describe("Tabs/Navigation 🗂️", () => {
  beforeEach(() => {
    cy.visit("/"); // assumes baseUrl is http://localhost:3000
  });

  it("should display the first tab content by default", () => {
    cy.get("#tab1").should("have.class", "active");
    cy.get("#tab2").should("not.have.class", "active");
    cy.get("#tab3").should("not.have.class", "active");
  });

  it("should switch to Tab 2 when clicked", () => {
    cy.get('.tab-btn[data-tab="tab2"]').click();
    cy.get("#tab2").should("have.class", "active");
    cy.get("#tab1").should("not.have.class", "active");
    cy.get("#tab3").should("not.have.class", "active");
  });

  it("should switch to Tab 3 when clicked", () => {
    cy.get('.tab-btn[data-tab="tab3"]').click();
    cy.get("#tab3").should("have.class", "active");
    cy.get("#tab1").should("not.have.class", "active");
    cy.get("#tab2").should("not.have.class", "active");
  });

  it("should display correct content for each tab", () => {
    cy.get('#tab1').should('contain.text', 'Latest Job Opportunities');
    cy.get('.tab-btn[data-tab="tab2"]').click();
    cy.get('#tab2').should('contain.text', 'Featured Employers');
    cy.get('.tab-btn[data-tab="tab3"]').click();
    cy.get('#tab3').should('contain.text', 'Career Development Resources');
  });
});
