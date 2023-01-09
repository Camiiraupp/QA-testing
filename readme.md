<h2> :small_orange_diamond: Descrição do teste </h2>
<p align="justify"> O teste consiste em acessar a página da Coodesh e verificar os seguintes passos: </p>
 
- ` Se a página está carregando corretamente a home page`

- ` Navegar pela página de login no menu superior;`

- `Agora o seu sistema de teste automatizado deverá criar uma conta para o perfil de pessoas candidatas;`

- `Ao criar a conta você será direcionado ao sistema para o preenchimento do perfil. O seu teste automatizado 
deverá testar os formulários que estarão em cada etapa do preenchimento do perfil;`

- `Um vez na tela de vagas, nosso sistema de teste automatizado terá que buscar por uma empresa onde terá um
ou mais resultados de vagas;`

<h2> :small_orange_diamond: Instalação </h2>
<h3 align="justify" >:rocket: Tecnologias </h3>

- ` Node.js - Plataforma de desenvolvimento`
- ` NPM -  Gerenciador de pacotes do node.js`
- ` Cypress - Framework de testes automatizados`
- `Faker - Gerador de dados fakes`

<h3 align="justify" >:rocket: Instalando </h3>
<p align="justify">No terminal clone o repositorio  </p>

```
git clone https://github.com/Camiiraupp/QA-testing.git
```

<p align="justify">instale as dependencias </p>

```
 cd QA-testing
 npm init -y
```


<h3 align="justify" >:rocket: Rodando os testes:</h3>

```
npx cypress open
```


 - `Rodando em modo headless:`
 
```
npx cypress run
```




<h2> :small_orange_diamond: Descrição do Projeto </h2>

<p align="justify"> Dentro do projeto tera as seguintes pastas: </p>

- Cypress

  - `Fixtures` Utilizada para os arquivos de dados fixos

    - signup.json

  - `Integration` Utilizada para os arquivos de testes
    - Dentro dela tera três arquivos de teste, sendo eles:
      - cadastro.spec.js
      - homePage.spec.js
      - vagas.spec.js
  - `Support` Utilizada para arquivos de importação e comandos personalizados.
    - Nesta pasta coloquei as etapas, scripts e mapeamento de elementos dos testes.


<h2> :small_orange_diamond: Links de apresentação: </h2>


```
https://www.loom.com/embed/a529e10a6de643a7ab78a7950d9d9a8e
```
