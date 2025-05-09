/// <reference types="cypress" />|

describe("Login user", () => {
  it("It should visit login page and submit login form", () => {
    cy.visit("/");
    cy.get('[data-test="loginLink"]').click();
    cy.url().should("include", "/login");

    cy.fixture("user").then((user) => {
      cy.get('[data-test="email"]').type(user.email);
      cy.get('[data-test="password"]').type(user.password);
    });

    cy.intercept("POST", "/api/auth/login").as("loginRequest");
    cy.get('[data-test="loginSubmit"]').click();

    cy.wait("@loginRequest").then((interception) => {
      expect(interception.response.statusCode).to.equal(200);
      expect(interception.response.body).to.have.property("token");
    });
  });
});
