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
      const bookmark: Bookmark = bookmarks.body[0];
      cy.get("li").should("contain.text", bookmark.title);
    });

    it("should load 100 more bookmarks when button is clicked", () => {
      cy.intercept("/api/bookmarks/1", { fixture: "bookmarks.json" }).as(
        "getPage"
      );
      cy.visit("/bookmarks");

      cy.wait("@getPage").then((request) => {
        cy.get("[data-cy='bookmark-loader']").click().click();
        const newBookmark: Bookmark = request.response.body[0];
        cy.get("li").should("contain.text", newBookmark.title);
      });
    });

    it("should disable button when all bookmarks are loaded", () => {
      cy.intercept("/api/bookmarks/1", []).as("getPage");
      cy.visit("/bookmarks");

      cy.get("[data-cy='bookmark-loader']").should(
        "contain.text",
        "No more bookmarks"
      );
    });
  });
});
