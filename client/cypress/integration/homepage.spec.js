describe("Homepage", () => {
  it("loads the Hero card", () => {
    cy.visit("/");
    cy.contains("h1", "Welcome!");
    cy.contains("button", "About");
  });

  it("loads the user cards", () => {
    cy.visit("/");
    cy.get(".user-card-item").should("have.length.gt", 5).and("be.visible");
  });

  it("can navigate to About page and back", () => {
    cy.visit("/");
    cy.contains("button", "About").should("be.visible").click();
    cy.location("pathname").should("equal", "/about");
    cy.contains("button", "Go back").should("be.visible").click();
    cy.location("pathname").should("equal", "/");
  });

  it("can load more users when requested", () => {
    cy.visit("/");
    cy.contains("button", "Load more").should("be.visible").click();
    cy.get(".user-card-item").should("have.length.gt", 15).and("be.visible");
  });
});
