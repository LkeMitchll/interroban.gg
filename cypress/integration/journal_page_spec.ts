import type { BlogPost } from "../../services/contentful.types";
import type { Track } from "../../services/spotify.types";

describe("Journal", () => {
  let posts: Cypress.Response;

  before(() => {
    cy.visit("/journal");
    cy.request("GET", "/api/posts").then((response) => {
      posts = response;
    });
  });

  context("Hero", () => {
    it("should display the hero", () => {
      cy.get("h2").should("contain.text", "Journal");
      cy.get("a").should("contain.text", "Back");
    });

    it("should display relevant page stats", () => {
      const postTotal: number = posts.body.length;
      const lastUpdate: string = posts.body[0].date;
      cy.get("td").should("contain.text", `${postTotal} Posts`);
      cy.get("td").should("contain.text", lastUpdate);
    });
  });

  it("should display recent posts", () => {
    cy.get("h3").should("contain.text", "Recent Posts");

    const recentPosts: BlogPost[] = posts.body;
    recentPosts.forEach((post: BlogPost) => {
      cy.get("a").should("contain.text", post.title);
    });
  });

  it("should display 'now' section", () => {
    cy.get("h3").should("contain.text", "What I'm doing now");
    cy.get("[data-cy=now-content]").should("not.be.empty");
  });

  context("Listening", () => {
    it("should display listening section", () => {
      cy.get("h3").should("contain.text", "Listening");
    });

    it("should show recent listing stats", () => {
      cy.request("/api/music").then((response) => {
        const songs: number = response.body.tracks;
        const albums: number = response.body.albums;
        cy.get("a").should(
          "contain.text",
          `${songs} songs, on ${albums} albums`,
        );
      });
    });

    it("should show a list of top tracks", () => {
      cy.request("/api/music/top").then((response) => {
        const tracks = response.body;
        tracks.forEach((track: Track) => {
          cy.get("li").should("contain.text", track.title);
          cy.get("li").should("contain.text", track.artist);
          cy.get(`img[src='${track.cover.url}']`).should("exist");
        });
      });
    });
  });

  it("should show recently read items", () => {
    cy.get("h3").should("contain.text", "Reading & Recently Read");
    cy.get("[data-cy='Reading & Recently Read items']").should("not.be.empty");
  });
});
