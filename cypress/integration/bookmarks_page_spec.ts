import { Bookmark } from "../../services/contentful.types";

describe("Bookmarks", () => {
  let bookmarks: Cypress.Response;

  before(() => {
    cy.visit("/bookmarks");
    cy.request("GET", "/api/bookmarks").then((response) => {
      bookmarks = response;
    });
  });

  context("Hero", () => {
    it("should display the hero", () => {
      cy.get("h2").should("contain.text", "Bookmarks");
      cy.get("a").should("contain.text", "Back");
    });

    it("should display relevant page stats", () => {
      const bookmarkTotal: number = bookmarks.body.length;
      const lastUpdate: string = bookmarks.body[0].publishDate;
      cy.get("td").should("contain.text", `${bookmarkTotal}`);
      cy.get("td").should("contain.text", lastUpdate);
    });
  });

  context("Bookmarks", () => {
    it("should show bookmarks section", () => {
      cy.get("h3").should("contain.text", "All Bookmarks");
    });

    it("should list 10 initial bookmarks", () => {
      cy.request("/api/bookmarks/0").then((response) => {
        const bookmark: Bookmark = response.body[0];
        cy.get("li").should("contain.text", bookmark.title);
      });
    });

    it("should load 100 more bookmarks when button is clicked", () => {
      cy.get("[data-cy='bookmark-loader']")
        .should("exist")
        .click()
        .then(() => {
          cy.request("/api/bookmarks/1").then((response) => {
            const newBookmark: Bookmark = response.body[0];
            cy.get("li").should("contain.text", newBookmark.title);
          });
        });
    });

    it.skip("should disable button when all bookmarks are loaded", () => {
      return null;
    });
  });
});
