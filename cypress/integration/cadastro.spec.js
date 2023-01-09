/// <reference types="cypress" />

import cadastro from "../support/pages/cadastrar/cadastro";
import onboardingPerfil from "../support/pages/onboardingProfile/onboardingPrimeiraTela";
import OnboardingPersonal from "../support/pages/onboardingPersonal/OnboardingSegundaTela";
import OnboardingTerceiraTela from "../support/pages/onboardingIntrodução/OnboardingTerceiraTela";
import scoredCard from "../support/pages/onboardingScoreCard/ScoredCard";
import OnboardingInformacoesAdicionais from "../support/pages/onboardingComplemento/OnboardingQuartaTela";
import { dadosCadastro } from "../support/factories/cadastro/dadosAcesso";

describe("Criação de conta", () => {
  before(() => {
    cy.fixture("signup").then(function (signup) {
      this.onboarding = signup.onboarding;
      this.onboardingProfile = signup.onboardingProfile;
    });
  });

  context("Efetuando o cadastro", function () {
    it("Obrigatório 3 e 4 - Efetuando o cadastro e finalizando o preenchimento de perfil", function () {
      cadastro.ir();
      cadastro.botaoCookies();
      cadastro.formulario(dadosCadastro);
      cadastro.aceitarTermoseCondicoes();
      cadastro.botaoCadastrar();
      onboardingPerfil.careira().click();
      onboardingPerfil.getHabilidades();
      onboardingPerfil.experiencia().click();
      onboardingPerfil.momentoProfissional();
      onboardingPerfil.whatsApp().type(this.onboarding.whatsApp);
      onboardingPerfil.cidade().type(this.onboarding.city);
      onboardingPerfil.preferenciaPorVaga().check();
      onboardingPerfil.botaoProximo().click();
      OnboardingPersonal.comunidades();
      OnboardingPersonal.causasSociais().type(
        this.onboarding.causaSocial + "{enter}"
      );
      OnboardingPersonal.racaCor().select(this.onboarding.racaCor);
      OnboardingPersonal.genero().select(this.onboarding.genero);
      OnboardingPersonal.orientacaoSexual().select(
        this.onboarding.sexualOrientation
      );
      OnboardingPersonal.botaoProximo().click();
      OnboardingTerceiraTela.responderAgora().click();
      scoredCard.habilidadeUm().click();
      scoredCard.habilidadeDois().click();
      scoredCard.HabilidadeTres().click();
      scoredCard.botaoProximo().click();
      scoredCard.habilidadeQuatro().click();
      scoredCard.habilidadeCinco().click();
      scoredCard.habilidadeSeis().click();
      scoredCard.BotaoEnviar().click();
      OnboardingInformacoesAdicionais.addLinguagem();
      OnboardingInformacoesAdicionais.toast.shouldHaveText(
        "A conta foi atualizada"
      );
      OnboardingInformacoesAdicionais.addExperienciaProfissional();
      OnboardingInformacoesAdicionais.toast.shouldHaveText(
        "A conta foi atualizada"
      );
      OnboardingInformacoesAdicionais.addFormacaoAcademica();
      OnboardingInformacoesAdicionais.toast.shouldHaveText(
        "A conta foi atualizada"
      );
      OnboardingInformacoesAdicionais.addProjetos();
      OnboardingInformacoesAdicionais.toast.shouldHaveText(
        "A conta foi atualizada"
      );
      OnboardingInformacoesAdicionais.addCertificados();
      OnboardingInformacoesAdicionais.toast.shouldHaveText(
        "A conta foi atualizada"
      );
      OnboardingInformacoesAdicionais.concluirPerfil();
    });
  });
});
