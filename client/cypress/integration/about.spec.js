describe("About", () => {
  it("loads the Profile card", () => {
    cy.visit("/about");
    cy.contains("h1", "Karthick Ramakrishnan");
    cy.contains("button", "Go back");
  });

  it("loads the app changelog", () => {
    cy.visit("/about");
    cy.contains("Next.js GraphQL demo app");
  });

  it("can navigate to Homepage and back", () => {
    cy.visit("/about");
    cy.intercept("POST", /graphql/).as("getUsers");
    cy.contains("button", "Go back").should("be.visible").click();
    cy.wait("@getUsers");
    cy.location("pathname").should("equal", "/");
    cy.contains("button", "About").should("be.visible").click();
    cy.location("pathname").should("equal", "/about");
  });
});
