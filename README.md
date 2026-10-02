# AS64A — Projeto 1: React.js

Projeto desenvolvido para a disciplina **Programação Web Full Stack (AS64A)**, da UTFPR, com foco no desenvolvimento de uma aplicação web utilizando **React.js**, **AJAX**, consumo de **APIs JSON** e integração com **Node.js**.

A aplicação segue o conceito de **SPA (Single Page Application)**, concentrando as funcionalidades em uma única página e atualizando a interface dinamicamente, sem recarregamentos ou redirecionamentos entre páginas.

---

## 👥 Integrantes

- Diogo Calegari dos Reis — 2766973
- João Antonio Carboni Gomes — 2767058

---

## 🎯 Objetivo do projeto

Desenvolver uma aplicação web funcional utilizando React.js capaz de:

- Consumir dados de uma **API JSON**;
- Apresentar e manipular os dados dinamicamente na interface;
- Utilizar **AJAX** para comunicação com a API;
- Aplicar conceitos de componentes e funcionalidades do React.js;
- Utilizar um **Hook ou funcionalidade específica do React.js**;
- Integrar uma **biblioteca externa** ao React.js;
- Utilizar Node.js para disponibilizar um backend de apoio à aplicação;
- Funcionar como uma **Single Page Application (SPA)**.

---

## 🛠️ Tecnologias utilizadas

- **React.js** — desenvolvimento da interface;
- **JavaScript** — lógica da aplicação;
- **HTML5** — estrutura da página;
- **CSS3** — estilização;
- **Node.js** — ambiente de execução do backend;
- **Express.js** — criação do servidor e das rotas;
- **AJAX / Fetch API** — comunicação entre frontend e backend;
- **API JSON** — obtenção de dados externos;
- **dotenv** — gerenciamento de variáveis de ambiente;
- **CORS** — configuração de acesso entre frontend e backend;
- **Git e GitHub** — versionamento e colaboração;
- **Visual Studio Code** — ambiente de desenvolvimento.

### Hook / funcionalidade do React.js

> A definir conforme a implementação do projeto.

Opções previstas pela disciplina:

- `useMemo`
- `useReducer`
- `react-redux`
- `useRef`
- `forwardRef`
- `memo`
- `lazy`
- `createPortal`

### Biblioteca externa

> A definir conforme a implementação do projeto.

Algumas possibilidades:

- Material UI
- React Hook Form
- Swiper
- Yup
- Formik
- React Bootstrap
- Styled Components
- React Router

---

## 🌐 API utilizada

**Fixer API — Conversão de Moedas**

https://fixer.io/

A aplicação utilizará a Fixer API para obter informações sobre taxas de câmbio e realizar conversões entre diferentes moedas.

A comunicação com a API será intermediada pelo backend Node.js, responsável por realizar as requisições externas e proteger a chave de autenticação.

Fonte para consulta de APIs públicas:

- [Public APIs](https://github.com/public-apis/public-apis)

---

## 🖥️ Backend

O projeto utiliza **Node.js com Express.js** para disponibilizar um backend responsável pela comunicação com a API externa.

O backend atua como intermediário entre a interface React e a API de conversão de moedas, evitando a exposição direta da chave de autenticação no frontend.

### Responsabilidades

- Disponibilizar rotas para comunicação com o frontend;
- Realizar requisições à API de conversão de moedas;
- Processar e retornar os dados no formato JSON;
- Gerenciar a chave da API por meio de variáveis de ambiente;
- Permitir a comunicação entre frontend e backend utilizando CORS.

### Segurança

A chave de autenticação da API é armazenada em um arquivo `.env`, que não deve ser enviado ao repositório GitHub.

O arquivo `.gitignore` é configurado para impedir o versionamento de informações sensíveis.

---

## 🧩 Estrutura do projeto

A estrutura poderá seguir uma organização semelhante a:

```text
AS64A---React/
├── backend/
│   ├── node_modules/
│   ├── package.json
│   ├── package-lock.json
│   └── server.js
├── public/
├── src/
│   ├── components/
│   ├── pages/
│   ├── services/
│   ├── assets/
│   ├── App.jsx
│   ├── App.css
│   └── main.jsx
├── .env
├── .gitignore
├── index.html
├── package.json
├── package-lock.json
└── README.md
```

O arquivo `.env` é utilizado localmente e não deve ser incluído no GitHub.

A organização dos arquivos poderá ser modificada conforme as necessidades da aplicação.

---

## ▶️ Como executar o projeto

### 1. Clonar o repositório

```bash
git clone https://github.com/DiogoCalegari/AS64A---React.git
```

### 2. Acessar a pasta do projeto

```bash
cd AS64A---React
```

### 3. Instalar as dependências do frontend

```bash
npm install
```

### 4. Configurar as variáveis de ambiente

Crie um arquivo `.env` na raiz do projeto e configure a chave da API:

```env
CURRENCYLAYER_API_KEY=sua_chave_aqui
```

Substitua o valor pela chave correspondente à API configurada no backend.

**Atenção:** não compartilhe o arquivo `.env` nem envie sua chave de autenticação ao GitHub.

### 5. Instalar as dependências do backend

Acesse a pasta do backend:

```bash
cd backend
```

Instale as dependências:

```bash
npm install
```

### 6. Executar o backend

Ainda dentro da pasta `backend`, execute:

```bash
node server.js
```

O servidor será iniciado no endereço:

```text
http://localhost:3001
```

### 7. Executar o frontend

Abra um **segundo terminal** no VS Code, na pasta raiz do projeto, e execute:

```bash
npm run dev
```

O Vite disponibilizará o endereço local para acessar a aplicação, geralmente:

```text
http://localhost:5173
```

O frontend e o backend devem permanecer em execução simultaneamente durante o desenvolvimento.

---

## 🔄 Desenvolvimento

O projeto é desenvolvido de forma colaborativa utilizando **Git e GitHub**.

Cada integrante deve registrar suas atividades por meio de commits, mantendo um histórico de desenvolvimento que permita identificar a participação de cada membro da equipe.

### Fluxo básico

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

Os commits devem representar alterações reais realizadas no projeto, mantendo uma evolução contínua da aplicação.

---

## 📚 Requisitos da disciplina

O projeto segue as orientações propostas para o **Projeto 1 — React.js** da disciplina **Programação Web Full Stack**:

- Repositório público no GitHub;
- Desenvolvimento em equipe de até 3 integrantes;
- Utilização de React.js;
- Consumo de uma API JSON;
- Utilização de um Hook ou funcionalidade do React.js;
- Utilização de uma biblioteca externa;
- Desenvolvimento de uma aplicação funcional;
- Aplicação do conceito de SPA;
- Registro das atividades por meio de commits;
- Documentação do uso de ferramentas de apoio, incluindo IA quando utilizada.

---

## 👩‍🏫 Disciplina

**Programação Web Full Stack — AS64A**

**Professora:** Profa. Dra. Juliana Costa Silva  
**Instituição:** Universidade Tecnológica Federal do Paraná (UTFPR)

---

## 📅 Projeto

**Projeto 1 — React.js**

Período de desenvolvimento: **setembro/outubro de 2026**

---

## 🤖 Utilização de Inteligência Artificial

Durante o desenvolvimento do projeto, ferramentas de Inteligência Artificial poderão ser utilizadas como **apoio ao processo de desenvolvimento**.

Todo uso relevante de IA será registrado nesta seção, permitindo documentar como as ferramentas foram utilizadas, por quem e em qual parte do projeto.

A utilização de IA não substitui a responsabilidade dos integrantes sobre o código desenvolvido. Todo código, sugestão ou conteúdo gerado deverá ser analisado, testado e compreendido pela equipe antes de ser incorporado ao projeto.

### 📝 Como registrar

A cada utilização relevante de IA, registrar:

- **Data:** quando a ferramenta foi utilizada;
- **Integrante:** quem utilizou a ferramenta;
- **Ferramenta:** ChatGPT, GitHub Copilot, Gemini, Claude, entre outras;
- **Finalidade:** qual era o objetivo da utilização;
- **Utilização:** explicar brevemente o que foi solicitado e como o resultado foi aproveitado no projeto.

### 💡 Registro de utilização

| Data | Integrante | Ferramenta | Finalidade | Utilização |
|---|---|---|---|---|
| 29/09/2026 | João Antonio | ChatGPT | Criação do README.md | Elaboração da documentação inicial do projeto |
| 30/09/2026 | João Antonio | ChatGPT | Desenvolvimento da interface | Apoio na criação da interface inicial do conversor de moedas com React e CSS |
| 01/10/2026 | João Antonio | ChatGPT | Configuração do backend | Apoio na configuração do Node.js, Express, variáveis de ambiente e estrutura do servidor |
| 30/09/2026 | Diogo | GitHub Copilot | Desenvolvimento do backend | Apoio na criação do `server.js` e na configuração do uso da chave da API |

### ⚠️ Responsabilidade sobre o código

A equipe é responsável por compreender e validar todo código incorporado ao projeto, independentemente de ter sido produzido manualmente ou com auxílio de ferramentas de Inteligência Artificial.

O uso de IA será documentado de forma transparente durante o desenvolvimento.

---

## 📄 Licença

Projeto acadêmico desenvolvido para fins educacionais no contexto da disciplina **Programação Web Full Stack — AS64A**.