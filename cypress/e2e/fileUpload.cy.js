/// <reference types="cypress" />
import 'cypress-file-upload';

describe("File Upload Component", () => {
  beforeEach(() => {
    cy.visit("index.html"); // adjust path if needed
  });

  it("should allow a user to upload a file", () => {
    // File input exists
    cy.get("#fileInput").should("exist");

    // Attach a sample file (make sure you have one in cypress/fixtures/)
    cy.get("#fileInput").attachFile("ridwan.cv.pdf"); 

    // Verify file info is displayed
    cy.get("#fileInfo").should("contain.text", "ridwan.cv.pdf");
  });
});
