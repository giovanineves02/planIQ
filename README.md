# CTI Insights (PlanIQ)

Sistema de importação e análise de planilhas, desenvolvido na disciplina Projeto CTI Insights.

## Objetivo da Sprint 2

Desenvolver e organizar o Front-End do sistema (Vue 3 navegável, com as telas Home, Login,
Dashboard, Upload e Relatórios) e preparar o projeto Spring Boot para que ele seja criado e
inicie corretamente.

## Tecnologias utilizadas

- **Front-End:** Vue 3, Vite, Vue Router, Pinia, Tailwind CSS, biblioteca `xlsx` (leitura de
  planilhas no navegador).
- **Back-End:** Java, Spring Boot (Web, Data JPA, Security, Validation), banco H2 em memória
  para desenvolvimento.
- **Ciência de Dados (futuro):** Python / Pandas.

## Versões principais

- Node.js 18+ / npm 9+
- Vue 3.5
- Vite 8
- Java 17
- Spring Boot 4.1.1 (via `spring-boot-starter-parent`)

## Como instalar as dependências do Front-End

```bash
cd FrontEnd
npm install
```

## Como executar o Front-End

```bash
cd FrontEnd
npm run dev
```

A aplicação sobe por padrão em `http://localhost:5173`.

## Como iniciar o projeto Spring Boot

```bash
cd BackEnd
./mvnw spring-boot:run
```

No Windows, use `mvnw.cmd spring-boot:run`. Nesta Sprint, o Back-End usa um banco H2 em
memória (configurado em `src/main/resources/application.properties`) apenas para garantir que
a aplicação inicie sem depender de um PostgreSQL externo.

## Telas entregues

| Tela | Rota | Descrição |
| --- | --- | --- |
| Home pública | `/` | Apresentação do CTI Insights, funcionalidades e botão "Entrar no Sistema". |
| Login | `/login` | Formulário de e-mail e senha para simular o acesso (sem autenticação real). |
| Dashboard | `/dashboard` | Cards de indicadores e gráfico de processamento com dados simulados. |
| Upload | `/upload` | Seleção/arraste de planilha (XLSX, XLS, CSV), com resumo e pré-visualização. |
| Relatórios | `/relatorios` | Cards e tabela com resumo de registros, vazios e duplicidades (dados simulados). |

A navegação entre Dashboard, Upload e Relatórios é feita pela Sidebar, disponível em toda a
área interna.

## Integrantes do grupo e responsabilidades

> Preencher com os nomes dos integrantes e a responsabilidade de cada um nesta entrega.

| Integrante | Responsabilidade |
| --- | --- |
| — | — |

## Tag ou commit da entrega

> Preencher com a tag (ex.: `sprint-2`) ou o hash do commit correspondente a esta entrega.
