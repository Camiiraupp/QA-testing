import { element } from "./elements";
import toast from "../../components/toast/ToastComponent";

class OnboardingInformacoesAdicionais {
  constructor() {
    this.toast = toast;
    this.alert = alert;
  }

  addLinguagem() {
    cy.get(element.LINGUA).click();
    cy.get(element.ADICIONAR_LINGUA).click();
    cy.get(element.PROCURAR_LINGUA).type("Inglês {enter}");
    cy.get(element.INTERMEDIARIO).click();
    cy.contains("button", element.SALVAR).click();
  }

  addExperienciaProfissional() {
    cy.get(element.EXPERIENCIA_PROFISSIONAL).click();
    cy.get(element.EMPRESA).type("Coodesh");
    cy.get(element.CARGO).type("QA");
    cy.get(element.LOCALIDADE).click({ force: true }).should("be.checked");
    cy.get(element.INICIO).type("05/01/2023");
    cy.get(element.FIM).type("09/01/2023");
    cy.get(element.DESCRICAO).type("Teste tecnico Coodesh para vaga de QA");
    cy.contains("button", element.ADICIONAR_EXPERIENCIA).click();
    cy.contains("button", element.SALVAR).click();
  }

  addFormacaoAcademica() {
    cy.get(element.FORMAÇAO_ACADEMICA).click();
    cy.get(element.INSTITUICAO).type("Faculdade Coodesh");
    cy.get(element.FORMACAO).type("Analise e desenvolvimento de Sistemas");
    cy.get(element.INICIO).type("15/03/2020");
    cy.get(element.CURSANDO).click({ force: true }).should("be.checked");
    cy.contains("button", element.ADICIONAR_FORMACAO).click();
    cy.contains("button", element.SALVAR).click();
  }

  addProjetos() {
    cy.get(element.PROJETOS).click();
    cy.get(element.NOME).type("Projeto de teste para a vaga de QA");
    cy.get(element.LINK_PROJETO).type(
      "https://lab.coodesh.com/camila10/q-a-challenge-20211029"
    );
    cy.get(element.STACK).type("BDD{enter}");
    cy.get(element.STACK).type("Javascript{enter}");
    cy.get(element.DESCRICAO).type("Testes Automatizados ultilizando cypress");
    cy.contains("button", element.ADICIONAR_PROJETO).click();
    cy.contains("button", element.SALVAR).click();
  }

  addCertificados() {
    cy.get(element.CERTIFICADOS).click();
    cy.get(element.INSTITUICAO).type("Coodesh");
    cy.get(element.NOME).type("Automação de testes");
    cy.get(element.CATEGORIA).type("Quality Assurance");
    cy.get(element.INICIO).type("04/12/2022");
    cy.get(element.FIM).type("02/01/2023");
    cy.get(element.CARGA_HORARIA).type("150");
    cy.contains("button", element.ADICIONAR_FORMACAO).click();
    cy.contains("button", element.SALVAR).click();
  }

  concluirPerfil() {
    cy.contains("a", element.CONCLUIR).click();
  }
}

export default new OnboardingInformacoesAdicionais();
