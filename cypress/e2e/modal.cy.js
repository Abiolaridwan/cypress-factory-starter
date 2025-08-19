describe("Modal/Popup 🪟", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("should open and close the Job Details modal properly", () => {
    // Modal starts hidden
    cy.get("#myModal").should("not.be.visible");

    // Open modal
    cy.get("#openModal").click();
    cy.get("#myModal").should("be.visible");

    // Verify modal content
    cy.get("#myModal").contains("Job Details").should("exist");

    // Optional: wait for animation (if you added CSS transitions)
    cy.wait(500);

    // Close modal
    cy.get("#closeModal").click();
    cy.get("#myModal").should("not.be.visible");
  });
});
