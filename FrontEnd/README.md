# PlanIQ — Front-end

Plataforma web para transformar planilhas em insights: o usuário envia um arquivo, confere os dados tratados e acompanha os indicadores em um dashboard.

## Telas

| Rota          | Tela        | Descrição                                                                 |
| ------------- | ----------- | ------------------------------------------------------------------------- |
| `/`           | Landing     | Apresentação do PlanIQ, recursos e "como funciona"                        |
| `/login`      | Login       | Acesso à plataforma                                                       |
| `/upload`     | Upload      | Envio de planilha (arraste e solte) com pré-visualização dos dados tratados |
| `/dashboard`  | Dashboard   | Evolução da carteira (clientes A, B e C), distribuição por nível e segmento |
| `/relatorios` | Relatórios  | Resumo das planilhas processadas e duplicidades                           |

Formatos aceitos no upload: `.xlsx`, `.xls` e `.csv`.

## Tecnologias

- [Vue 3](https://vuejs.org/) (`<script setup>`) + [Vite](https://vite.dev/)
- [Vue Router](https://router.vuejs.org/) — navegação entre telas
- [Pinia](https://pinia.vuejs.org/) — estado do upload (`src/store/uploadStore.js`)
- [Tailwind CSS](https://tailwindcss.com/) — estilização
- [SheetJS (xlsx)](https://sheetjs.com/) — leitura das planilhas

## Como rodar

```bash
npm install
npm run dev       # servidor de desenvolvimento
npm run build     # build de produção
npm run preview   # pré-visualiza o build
```

## Estrutura

```
src/
├── assets/       # logo e imagens
├── components/   # Header, Footer, Sidebar, BrandMark, CardIndicador
├── router/       # rotas da aplicação
├── store/        # stores Pinia
└── views/        # telas (Landing, Login, Upload, Dashboard, Relatórios)
```
