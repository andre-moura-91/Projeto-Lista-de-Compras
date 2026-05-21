# TODO - Correção do erro de MIME ao carregar CSS

- [ ] Levantar origem do request que está retornando `text/html` no lugar do CSS (via Network/console)
- [x] Corrigir o `link` do `pre-lista.html` para apontar para o caminho correto do CSS servido pelo Vite
- [x] Corrigir `@import` em `pre-lista.css` para caminhos resolvíveis (evitar retornos HTML por rota não encontrada)

- [ ] Re-testar no navegador e confirmar que o console não mostra mais erro de MIME
- [ ] (Opcional) ajustar também `index-lista.html` e outras páginas com o mesmo padrão

