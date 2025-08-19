describe("Error Boundary Component", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/errorBoundary.html"); 
  });

  it("should render the normal UI when no error occurs", () => {
    cy.get("#normalUI").should("be.visible");
    cy.get("#errorUI").should("not.be.visible");
  });

  it("should show the error UI when an error is triggered", () => {
    cy.get("#triggerError").click();
    cy.get("#normalUI").should("not.be.visible");
    cy.get("#errorUI").should("be.visible");
  });
});
