import { element } from "./elements";

import toast from "../../components/toast/ToastComponent";
import alert from "../../components/alert/AlertComponent";

class onboardingPerfil {
  constructor() {
    this.toast = toast;
    this.alert = alert;
  }

  careira = () => cy.contains("span", element.CARREIRAS);

  getHabilidades = () => {
    cy.contains("div", element.HABILIDADES).click();
    cy.contains("div", element.HABILIDADES_DOIS).click();
    cy.contains("div", element.HABILIDADES).type("BDD {enter}");
  };

  experiencia = () => cy.get(element.EXPERIÊNCIA);

  momentoProfissional = () => cy.get(element.MOMENTO_PROFISSIONAL);

  whatsApp = () => cy.get(element.WHATSAPP);

  cidade = () => cy.get(element.CIDADE);

  preferenciaPorVaga = () => cy.get(element.PREFERENCIA_VAGA);

  botaoProximo = () => cy.contains("button", element.PROXIMO);

  botaoCookies = () => cy.get(element.COOKIES);

  aceitarTermoseCondicoes = () => cy.get(element.ACEITAR_TERMOS_E_CONDICOES);
}

export default new onboardingPerfil();
