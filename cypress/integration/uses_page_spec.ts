describe("Uses", () => {
  before(() => {
    cy.visit("/uses");
  });

  it("should display the hero", () => {
    cy.get("h2").should("contain.text", "Uses");
    cy.get("a").should("contain.text", "Back");
  });

  it("should display the page content", () => {
    cy.get("[data-cy='content']").should("exist");
    cy.get("[data-cy='content']").should("not.be.empty");
  });
});
