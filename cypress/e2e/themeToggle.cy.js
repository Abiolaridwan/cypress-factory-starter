describe("Theme Toggle", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000"); // adjust if your server runs elsewhere
  });

  it("should toggle between light and dark mode", () => {
    // Initially check body does not have dark mode
    cy.get("body").should("not.have.class", "dark-mode");

    // Click the theme toggle
    cy.get("#themeToggle").click();

    // Body should now have dark mode
    cy.get("body").should("have.class", "dark-mode");

    // Click again to toggle back
    cy.get("#themeToggle").click();

    // Body should not have dark mode again
    cy.get("body").should("not.have.class", "dark-mode");
  });
});
