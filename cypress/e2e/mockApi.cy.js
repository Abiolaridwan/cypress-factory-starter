// cypress/e2e/mockApi.cy.js

describe("Mock API - Job Recommendations", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000"); // adjust port if different
  });

  it("should mock job recommendation API and display data", () => {
    // Mock the API call
    cy.intercept("GET", "/api/recommendations", { fixture: "mockData.json" }).as("getRecommendations");

    // Click the fetch button
    cy.get("#fetchData").click();

    // Wait for API response
    cy.wait("@getRecommendations").its("response.statusCode").should("eq", 200);

    // Assert success message is visible
    cy.get("#apiSuccess").should("be.visible");

    // Assert mocked job titles show up
    cy.get("#apiResult").then($el => {
    cy.log("API Result:", $el.text());
    });
  });
});
