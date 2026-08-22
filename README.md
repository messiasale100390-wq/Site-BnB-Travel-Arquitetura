# BnB Travel — Site Institucional

Site institucional da BnB Travel, consultoria boutique de viagens com especialização em milhas.
React + Vite + TypeScript + Tailwind CSS + shadcn/ui.

## Como rodar

```bash
npm install
npm run dev
```

Abre em `http://localhost:5173`. Para gerar a build de produção:

```bash
npm run build
npm run preview
```

## Onde trocar as imagens

Todas as imagens ficam em `public/images/`, organizadas por página/seção
(`hero/`, `sobre/`, `milhas/`, `servicos/`, `roteiros/`, `geral/`). São fotos
reais da BnB Travel (viagens da fundadora) — para trocar, basta substituir o
arquivo mantendo o mesmo nome, ou atualizar o caminho referenciado em
`src/data/roteiros.ts` e nas páginas de `src/pages/`.

O logotipo original (arquivo de marca) está em `public/logo/`. O logotipo
exibido no cabeçalho e rodapé, porém, é reconstruído em código em
`src/components/shared/Logo.tsx` (arco entre dois "B" + "TRAVEL"), para poder
alternar entre versão clara e escura conforme o fundo — ajuste as cores ali
se a identidade visual mudar.

## Onde trocar os dados mockados

Tudo em `src/data/`:

- `servicos.ts` — catálogo de serviços (nomes, descrições e preços de referência já reais, validados com a fundadora).
- `roteiros.ts` — portfólio de roteiros/curadorias (conteúdo ilustrativo, placeholder).
- `blog.ts` — posts do blog (conteúdo ilustrativo, placeholder).
- `faq.ts` — perguntas frequentes (baseadas em regras já confirmadas, mas revisar antes de publicar).
- `institucional.ts` — textos institucionais reais (história, valores, mensagens de marca).
- `site.ts` — dados de contato reais (WhatsApp, Instagram, link de Diagnóstico).

Todo conteúdo que ainda é placeholder está sinalizado com comentário no topo do arquivo.

## Formulário de contato

O formulário em `/contato` (`src/pages/Contato.tsx`) está pronto para enviar
por e-mail via [FormSubmit](https://formsubmit.co) — sem servidor próprio e
**sem precisar criar conta em nenhum serviço**: o e-mail de destino (ex:
Gmail da empresa) já funciona como endpoint.

1. Troque `SEU_EMAIL_AQUI@gmail.com` pelo e-mail real no topo de `src/pages/Contato.tsx` (constante `CONTATO_EMAIL`).
2. Envie o formulário do site uma vez (pode ser um teste).
3. O FormSubmit manda, só na primeira vez, um e-mail de "Confirm your email" para essa caixa — clique no link de confirmação.
4. A partir daí, todo envio do formulário chega direto na caixa de entrada, com os dados organizados em tabela.

Enquanto o e-mail não for trocado, o envio fica simulado (aparece só no
console do navegador) para não quebrar o formulário para quem visitar o site.

## Estrutura

```
src/
  components/
    layout/   → Header, Footer, Layout
    shared/   → WhatsAppButton, Reveal (animação), Logo, RoteiroCard etc.
    ui/       → primitivos de UI (Button, Input, Accordion...) no estilo shadcn/ui
  data/       → dados mockados e conteúdo institucional
  pages/      → uma página por rota
  types/      → interfaces TypeScript (Roteiro, Servico, Post, PerguntaFrequente)
```
