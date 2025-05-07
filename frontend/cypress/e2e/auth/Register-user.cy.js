/// <reference types="cypress" />|

describe("Register user", () => {
  it("It should visit register page and register a new user", () => {
    cy.visit("/");
    cy.get('[data-test="registerLink"]').click();
    cy.url().should("include", "/register");

    cy.fixture("user").then((user) => {
      cy.get('[data-test="firstName"]').type(user.firstName);
      cy.get('[data-test="lastName"]').type(user.lastName);
      cy.get('[data-test="email"]').type(user.email);
      cy.get('[data-test="password"]').type(user.password);
    });

    cy.get('[data-test="registerSubmit"]').click();
  });
});
