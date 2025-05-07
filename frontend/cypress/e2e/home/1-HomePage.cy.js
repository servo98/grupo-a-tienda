/// <reference types="cypress" />|

describe("Load empty store", () => {
  it("It should see empty product list text", () => {
    cy.visit("/");
    cy.contains("No hay productos en la base de datos").should("be.visible");
  });
});
