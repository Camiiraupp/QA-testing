import { element } from "./elements";

import toast from "../../components/toast/ToastComponent";
import alert from "../../components/alert/AlertComponent";

class OnboardingPersonal {
  constructor() {
    this.toast = toast;
    this.alert = alert;
  }

  comunidades = () => {
    cy.contains("span", element.COMUNIDADE).click();
    cy.get(element.COMUNIDADE_RELACAO).select("Entusiasta");
  };

  causasSociais = () => cy.get(element.CAUSA_SOCIAL);

  racaCor = () => cy.get(element.RAÇA_COR);

  genero = () => cy.get(element.GENERO);

  orientacaoSexual = () => cy.get(element.ORIENTAÇÃO_SEXUAL);

  botaoProximo = () => cy.contains("button", element.PROXIMO);
}

export default new OnboardingPersonal();
