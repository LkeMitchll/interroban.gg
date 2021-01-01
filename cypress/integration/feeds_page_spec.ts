import { formattedDate } from "../../helpers/date";
import type { Feed } from "../../services/feedbin.types";

describe("Feeds", () => {
  let feeds: Cypress.Response;

  before(() => {
    cy.visit("/feeds");
    cy.request("GET", "/api/feeds").then((response) => {
      feeds = response;
    });
  });

  context("Hero", () => {
    it("should display the hero", () => {
      cy.get("h2").should("contain.text", "Feeds");
      cy.get("a").should("contain.text", "Back");
    });

    it("should display relevant page stats", () => {
      const feedTotal: number = feeds.body.length;
      const lastUpdate: Date = feeds.body[0].created_at;
      cy.get("td").should("contain.text", feedTotal);
      cy.get("td").should(
        "contain.text",
        formattedDate(lastUpdate, {
          day: "numeric",
          month: "numeric",
          year: "numeric",
        }),
      );
    });
  });

  it("should display feeds", () => {
    feeds.body.forEach((feed: Feed) => {
      cy.get("li").should("contain.text", feed.title);
    });
  });
});
