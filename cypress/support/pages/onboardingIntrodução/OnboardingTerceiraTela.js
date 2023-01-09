import { element } from "./elements";

class onboardingIntroducao {
  responderAgora = () => cy.contains("a", element.BOTAO_RESPONDER_AGORA);
}

export default new onboardingIntroducao();
