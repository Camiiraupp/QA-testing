import { faker } from "@faker-js/faker";

exports.dadosCadastro = {
  name: faker.name.firstName(),
  email: faker.internet.email(),
  password: "Teste1234#",
};

exports.dadosLogin = {
  name: "camila",
  email: "teste.camila@gmail.com",
  password: "Teste1234#",
};
