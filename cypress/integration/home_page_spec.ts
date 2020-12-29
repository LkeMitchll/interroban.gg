import type {
  BlogPost,
  Bookmark,
  Project,
} from "../../services/contentful.types";

describe("Homepage", () => {
  before(() => {
    cy.visit("/");
  });

  it("should display the intro section", () => {
    cy.get("h2").should("contain.text", "About Me");
  });

  it("should display recent posts", () => {
    cy.request("GET", "/api/posts").then((response) => {
      const recentPosts: BlogPost[] = response.body.slice(0, 3);
      recentPosts.forEach((post) => {
        cy.get("a").should("contain.text", post.title);
      });
    });
  });

  it("should display recent bookmarks", () => {
    cy.get("h2").should("contain.text", "Recent Posts");

    cy.request("GET", "/api/bookmarks").then((response) => {
      const recentBookmarks: Bookmark[] = response.body.slice(0, 3);
      recentBookmarks.forEach((bookmark) => {
        cy.get("a").should("contain.text", bookmark.title);
      });
    });
  });

  it("should display selected projects", () => {
    cy.get("h2").should("contain.text", "Recent Bookmarks");

    cy.request("GET", "/api/projects").then((response) => {
      const projects: Project[] = response.body;
      projects.forEach((project) => {
        cy.get("h3").should("contain.text", project.title);
      });
    });
  });
});
