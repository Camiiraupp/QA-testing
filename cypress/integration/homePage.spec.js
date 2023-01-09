/// <reference types="cypress" />

describe("Validando home page e acessado a tela de login;", () => {
  it("Obrigatório 1 - Se a home está carregando corretamente;", () => {
    cy.visit("/");
    cy.get("#onetrust-accept-btn-handler").click();
    cy.wait(1000);
    cy.contains(
      "Valide seu potencial para alcançar as melhores oportunidades tech"
    ).should("to.have.length", 1);
    cy.url().should("be.equal", `${Cypress.config("baseUrl")}`);
  });

  it("Obrigatório 2 - Navegar pela página de login no menu superior;", () => {
    cy.visit("/");
    cy.url().should("be.equal", `${Cypress.config("baseUrl")}`);
    cy.get("#onetrust-accept-btn-handler").click();
    cy.get('a[title="Login"]').click();
  });
});
