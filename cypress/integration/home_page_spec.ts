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
    let recentPosts: BlogPost[];

    cy.request("GET", "/api/posts").then((response) => {
      recentPosts = response.body.slice(0, 3);
      recentPosts.forEach((post) => {
        cy.get("a").should("contain.text", post.title);
      });
    });
  });

  it("should display recent bookmarks", () => {
    let recentBookmarks: Bookmark[];

    cy.request("GET", "/api/bookmarks").then((response) => {
      recentBookmarks = response.body.slice(0, 3);
      recentBookmarks.forEach((bookmark) => {
        cy.get("a").should("contain.text", bookmark.title);
      });
    });
  });

  it("should display selected projects", () => {
    let projects: Project[];

    cy.request("GET", "/api/projects").then((response) => {
      projects = response.body;
      projects.forEach((project) => {
        cy.get("h3").should("contain.text", project.title);
      });
    });
  });
});
