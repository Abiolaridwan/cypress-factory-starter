describe("Counter Component 🔢", () => {
  beforeEach(() => cy.visit("/"));

  it("increments the counter", () => {
    cy.get("#increment").click();
    cy.get("#countValue").should("contain.text", "1");
  });

  it("decrements the counter", () => {
    cy.get("#decrement").click();
    cy.get("#countValue").should("contain.text", "0");
  });

  it("resets the counter", () => {
    cy.get("#increment").click();
    cy.get("#reset").click();
    cy.get("#countValue").should("contain.text", "0");
  });
});
