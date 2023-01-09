import { element } from "./elements";
import toast from "../../components/toast/ToastComponent";
import alert from "../../components/alert/AlertComponent";

class loginUser {
  constructor() {
    this.toast = toast;
    this.alert = alert;
  }

  go = () => {
    cy.visit("/auth/signin/candidates");
    cy.url().should("contain", "signin");
  };

  botaoCookie = () => cy.get(element.COOKIES);

  form(UserLogin) {
    cy.get(element.EMAIL).clear().type(UserLogin.email);
    cy.get(element.SENHA).clear().type(UserLogin.password);
  }

  email = () => cy.get(element.EMAIL);

  senha = () => cy.get(element.SENHA);

  clickBody = () => cy.get(element.BODY).click();

  botaoLogar = () => cy.get(element.LOGIN);
}

export default new loginUser();
