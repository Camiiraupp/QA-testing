import { element } from "./elements";

class ScoredCard {
  habilidadeUm = () => cy.get(element.HABILDADE_AVANCADO);

  habilidadeDois = () => cy.get(element.HABILDADE_PRATICANTE);

  HabilidadeTres = () => cy.get(element.HABILDADE_BASICO);

  habilidadeQuatro = () => cy.get(element.HABILDADE_PRATICANTE_DOIS);

  habilidadeCinco = () => cy.get(element.HABILDADE_AVANCADO_DOIS);

  habilidadeSeis = () => cy.get(element.HABILDADE_BASICO_DOIS);

  botaoProximo = () => cy.contains("button", element.PROXIMO);

  BotaoEnviar = () => cy.contains("button", element.ENVIAR);
}

export default new ScoredCard();
