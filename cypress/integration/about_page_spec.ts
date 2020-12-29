import { Job } from "../../services/contentful.types";

describe("About Me", () => {
  before(() => {
    cy.visit("/about");
  });

  it("should display the hero", () => {
    cy.get("h2").should("contain.text", "About Me");
    cy.get("a").should("contain.text", "Back");
  });

  it("should display bio", () => {
    cy.get("p").should("contain.text", "I grew up in a small");
  });

  context("Career section", () => {
    it("should display", () => {
      cy.get("h3").should("contain.text", "Career");
    });

    it("should display the resume", () => {
      let resume: Job[];
      cy.get("h4").should("contain.text", "Experience");

      cy.request("GET", "/api/resume").then((response) => {
        resume = response.body;
        resume.forEach((job) => {
          cy.get("li").should("contain.text", job.title);
        });
      });
    });

    it("should display clients", () => {
      cy.get("h4").should("contain.text", "Select Clients");

      cy.fixture("../../data/clients.json").then((data) => {
        data.clients.map((client: string) => {
          cy.get("li").should("contain.text", client);
        });
      });
    });

    it("should display skills", () => {
      cy.get("h4").should("contain.text", "Skills");

      cy.fixture("../../data/skills.json").then((data) => {
        data.skills.map((skill: string) => {
          cy.get("li").should("contain.text", skill);
        });
      });
    });
  });
});
