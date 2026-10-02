
# AS64A — Projeto 1: React.js

Projeto desenvolvido para a disciplina **Programação Web Full Stack (AS64A)**, da UTFPR, com foco no desenvolvimento de uma aplicação web utilizando **React.js**, consumo de **APIs JSON**, **Fetch API** e conceitos de **SPA (Single Page Application)**.

A aplicação consiste em um conversor de moedas que permite converter valores entre diferentes moedas, consultando taxas de câmbio por meio de uma API externa e atualizando a interface dinamicamente, sem recarregamento da página.

---

## 👥 Integrantes

- Diogo Calegari dos Reis — 2766973
- João Antonio Carboni Gomes — 2767058

---

## 🎯 Objetivo do projeto

Desenvolver uma aplicação web funcional utilizando React.js capaz de:

- Consumir dados de uma API JSON;
- Apresentar e manipular dados dinamicamente;
- Utilizar requisições assíncronas com Fetch API;
- Aplicar Hooks do React.js;
- Desenvolver uma aplicação no modelo SPA;
- Permitir a conversão entre diferentes moedas.

---

## 🛠️ Tecnologias utilizadas

- **React.js** — desenvolvimento da interface;
- **JavaScript** — lógica da aplicação;
- **HTML5** — estrutura da página;
- **CSS3** — estilização;
- **Vite** — ambiente de desenvolvimento e execução;
- **Fetch API** — comunicação com a API externa;
- **Frankfurter API** — obtenção das taxas de câmbio;
- **Git e GitHub** — versionamento e colaboração;
- **Visual Studio Code** — ambiente de desenvolvimento.

### Hook do React.js

O projeto utiliza o Hook `useState` para gerenciar os estados da aplicação, incluindo:

- Valor informado pelo usuário;
- Moeda de origem;
- Moeda de destino;
- Resultado da conversão;
- Mensagens de erro;
- Estado de carregamento.

---

## 🌐 API utilizada

**Frankfurter API — Taxas de câmbio**

https://frankfurter.dev/

A Frankfurter API é utilizada para consultar taxas de câmbio entre diferentes moedas.

A aplicação realiza requisições diretamente pelo React, utilizando a Fetch API, e recebe os dados no formato JSON.

A conversão é realizada com base na taxa retornada pela API e no valor informado pelo usuário.

---

## 💱 Funcionalidades

- Inserção do valor a ser convertido;
- Seleção da moeda de origem;
- Seleção da moeda de destino;
- Consulta de taxas de câmbio pela API;
- Exibição do resultado formatado de acordo com a moeda selecionada;
- Validação de valores inválidos;
- Exibição de mensagens de erro;
- Indicação de carregamento durante a conversão.

### Moedas disponíveis

As moedas suportadas pela Frankfurter são carregadas automaticamente pela aplicação.

---

## 🧩 Estrutura do projeto

```text
AS64A---React/
├── public/
├── src/
│   ├── assets/
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   └── main.jsx
├── .gitignore
├── .onlintrc.json
├── index.html
├── package.json
├── package-lock.json
├── README.md
└── vite.config.js
```

---

## ▶️ Como executar o projeto

### 1. Clonar o repositório

```bash
git clone https://github.com/DiogoCalegari/AS64A---React.git
```

### 2. Acessar a pasta do projeto

```bash
cd AS64A-React
```

### 3. Instalar as dependências

```bash
npm install
```

### 4. Executar a aplicação

```bash
npm run dev
```

### 5. Acessar no navegador

Abra o endereço disponibilizado pelo Vite, geralmente:

```text
http://localhost:5173
```

---

## 🔄 Desenvolvimento

O projeto é desenvolvido de forma colaborativa utilizando Git e GitHub.

Cada integrante registra suas alterações por meio de commits, mantendo o histórico do desenvolvimento e facilitando a colaboração entre os membros da equipe.

### Fluxo de desenvolvimento

```text
Desenvolvimento
      ↓
Testes
      ↓
Commit
      ↓
Push
      ↓
GitHub
```

---

## 📚 Requisitos da disciplina

O projeto contempla os seguintes requisitos:

- Repositório público no GitHub;
- Desenvolvimento em equipe;
- Utilização de React.js;
- Consumo de uma API JSON;
- Utilização de Hook do React.js (`useState`);
- Comunicação assíncrona com Fetch API;
- Desenvolvimento de uma aplicação funcional;
- Utilização do conceito de SPA;
- Registro das atividades por meio de commits;
- Documentação do uso de ferramentas de apoio, incluindo IA.

---

## 👩‍🏫 Disciplina

**Programação Web Full Stack — AS64A**

**Professora:** Dra. Juliana Costa Silva  
**Instituição:** Universidade Tecnológica Federal do Paraná (UTFPR)

---

## 📅 Projeto

**Projeto 1 — React.js**

Período de desenvolvimento: setembro/outubro de 2026.

---

## 🤖 Utilização de Inteligência Artificial

Durante o desenvolvimento do projeto, foram utilizadas ferramentas de Inteligência Artificial como apoio à programação, à resolução de problemas e à documentação.

As sugestões fornecidas foram analisadas e testadas pelos integrantes antes de serem incorporadas ao projeto.

### Registro de utilização

| Data | Integrante | Ferramenta | Finalidade | Utilização |
|---|---|---|---|---|
| 30/09/2026 | João Antonio | ChatGPT | Desenvolvimento da interface | Apoio na criação da interface inicial do conversor utilizando React |
| 30/09/2026 | Diogo | GitHub Copilot | Desenvolvimento | Apoio na escrita do código do servidor e configuração inicial da API |
| 02/10/2026 | João Antonio | ChatGPT | Integração com API | Apoio na adaptação do código para consumir diretamente a Frankfurter API pelo React |
| 02/10/2026 | João Antonio | ChatGPT | Documentação | Atualização do README de acordo com as tecnologias e funcionalidades utilizadas |
| 02/10/2026 | Diogo | GitHub Copilot | Desenvolvimento | Mudança da API Fixer para Frankfurter e aumento de moedas disponiveis para conversãoe ordenação alfabética |

### Responsabilidade sobre o código

Os integrantes são responsáveis por compreender, revisar e testar o código utilizado no projeto, independentemente de ter sido desenvolvido manualmente ou com auxílio de ferramentas de Inteligência Artificial.

---

## 📄 Licença

Projeto acadêmico desenvolvido para fins educacionais no contexto da disciplina **Programação Web Full Stack — AS64A**, da UTFPR.