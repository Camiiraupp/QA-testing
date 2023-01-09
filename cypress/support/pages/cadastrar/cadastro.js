import { element } from "./elements";

import toast from "../../components/toast/ToastComponent";
import alert from "../../components/alert/AlertComponent";

class cadastro {
  constructor() {
    this.toast = toast;
    this.alert = alert;
  }

  ir() {
    cy.visit("/auth/signup/candidates");
    cy.url().should("contain", "candidates");
  }

  botaoCookies() {
    cy.get(element.COOKIES).click();
  }

  formulario(user) {
    cy.get(element.NOME_ID).type(user.name);
    cy.get(element.EMAIL_ID).type(user.email);
    cy.get(element.SENHA_ID).type(user.password);
  }

  aceitarTermoseCondicoes() {
    cy.get(element.TERMOS_E_CONDICOES)
      .click({ force: true })
      .should("be.checked");
  }

  botaoCadastrar() {
    cy.contains(element.CADASTRO_BOTAO).click();
  }
}

export default new cadastro();
