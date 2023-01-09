/// <reference types="cypress" />

import loginUser from "../support/pages/login/Login";

import buscaVagas from "../support/pages/buscaDeVagas/Vagas";

describe("Obrigatório 5 - Um vez na tela de vagas, nosso sistema de teste automatizado terá que buscar por uma empresa onde terá um ou mais resultados de vagas;", () => {
  context("Quando o usuário está logado", function () {
    const user = {
      name: "camila",
      email: "teste.camila@gmail.com",
      password: "Teste1234.",
    };

    beforeEach(() => {
      loginUser.go();
      loginUser.botaoCookie().click();
      loginUser.form(user);
      loginUser.botaoLogar().click();
    });

    it(" Buscando por empresa que exista:", () => {
      buscaVagas.go();
      buscaVagas.buscarVagasExistentes();
      cy.wait(2000);
      buscaVagas.checarVagasDisponiveis();
    });

    it(" Buscar por empresa que não exista:", () => {
      buscaVagas.go();
      buscaVagas.buscarVagasinexistentes();
      cy.wait(2000);
      buscaVagas.checarVagasIndisponiveis();
    });
  });
});
