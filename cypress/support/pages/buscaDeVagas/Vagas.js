import { element } from "./elements";

class buscaVagas {
  go = () => {
    cy.visit("/vagas");
    cy.url().should("contain", "vagas");
  };

  buscarVagasExistentes() {
    cy.get(element.BUSCAR_VAGA).type("Xavier - Moraes Comércio");
    cy.contains("button", element.BUSCAR).click();
  }

  buscarVagasinexistentes() {
    cy.get(element.BUSCAR_VAGA).type("Uma Empresa");
    cy.contains("button", element.BUSCAR).click();
  }

  checarVagasDisponiveis() {
    cy.get(element.VAGAS, { timeout: 20000 })
      .should("be.visible")
      .should("not.be.empty");
  }

  checarVagasIndisponiveis() {
    cy.get(element.VAGAS, { timeout: 20000 }).should("not.exist");
  }
}

export default new buscaVagas();
