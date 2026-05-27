# Organize & Compre

App para gerenciar sua lista de compras com foco em praticidade, organização e velocidade no dia a dia. Ele permite adicionar itens, marcar o que já foi comprado (ou pendente), visualizar totais e manter o histórico de listas.

> **Nome do app:** Organize & Compre

---

## Funcionalidades

- **Adicionar itens** à lista (nome e valor)
- **Quantidade por item** (controle com botões `+` e `-`)
- **Marcar itens como checados** (no carrinho) ou **pendentes**
- **Filtros/abas**:
  - Todos
  - No carrinho
  - Pendentes
- **Totais e indicadores**:
  - Total geral
  - Valor pendente
  - Quantidade de itens por estado
- **Salvar lista no navegador** via `localStorage`
- **Histórico de listas** (página dedicada)

---

## Tecnologias

- **HTML/CSS/JavaScript (front-end)**
- **Vite** (build/servidor de desenvolvimento)
- Bibliotecas externas usadas no layout:
  - Font Awesome
  - Remix Icon
  - jQuery + jQuery Mask (para máscara de valor)

---

## Como rodar o projeto

### Pré-requisitos

- Node.js instalado
- npm (normalmente vem junto com o Node.js)

### Instalação

```bash
npm install
```

### Desenvolvimento

```bash
npm run dev
```

O app será servido pelo Vite (default `http://localhost:5173`).

### Build (produção)

```bash
npm run build
```

---

## Estrutura do projeto (visão geral)

- `src/` — código do front-end
  - `src/pages/` — páginas do app (bem-vindo, login, lista, histórico etc.)
    - `src/pages/lista/` — página do carrinho/lista de compras
    - `src/pages/historico/` — página de histórico
  - `src/navigation/` — lógica de navegação
  - `src/styles/` — estilos globais e componentes
  - `src/script/` — scripts gerais (ex.: splash screen)

---

## Uso (passo a passo)

1. Abra a página do **Carrinho/Lista**.
2. Digite:
   - **Nome do item**
   - **Valor** (formato com máscara para moeda)
3. Ajuste a **quantidade** do item (se necessário).
4. Clique em **Adicionar (+)**.
5. Marque os itens com checkbox para alternar entre **pendente** e **no carrinho**.
6. Use as abas para filtrar e acompanhar os **totais**.
7. Clique em **Salvar** (quando disponível na interface) para persistir no `localStorage`.

---

## Observações sobre persistência (localStorage)

A lista é salva no navegador usando `localStorage` com a chave `minhaLista`. Isso significa:

- Funciona bem para uso local e testes
- Ao limpar dados do navegador, a lista pode ser removida

---

## Contribuindo

- Siga o padrão do projeto para IDs e classes no HTML
- Prefira manter as funções de renderização e cálculo coesas (ex.: `renderizarItensValor`, `atualizarTotal`)
- Caso altere rotas/links, revise os `href` das páginas (alguns exemplos atuais apontam para URLs fixas de servidor).

---

## TODO / Melhorias futuras

Consulte o arquivo `TODO.md` na raiz do projeto para acompanhar correções e melhorias em andamento.

---

## Licença

Sem licença definida no projeto até o momento. Se necessário, defina uma licença (MIT, Apache-2.0 etc.).
