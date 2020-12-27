describe("Homepage", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("should display the intro section", () => {
    cy.get("h2").should("contain.text", "About Me");
  });
});
