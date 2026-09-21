# Plano de conversão para site institucional

> Plano aprovado em 2026-08-27 após substituição explícita da decisão de landing page única.

## Arquitetura

1. `index.html` — visão geral, hero, informações verificadas e caminhos para as páginas internas.
2. `clinica.html` — ambientes reais, endereço e apresentação institucional factual.
3. `tratamentos.html` — coleção completa dos seis tratamentos confirmados.
4. `avaliacoes.html` — nota pública, avaliações selecionadas e link para o perfil do Google.
5. `convenios.html` — sete convênios credenciados e orientação para contato.
6. `contato.html` — WhatsApp, telefone, e-mail, endereço, horário e rota.

## Regras

- HTML e CSS puros, sem alteração da stack.
- Cabeçalho, navegação e rodapé consistentes em todas as páginas.
- Estado ativo indicado com `aria-current="page"`.
- Página inicial resumida; conteúdo completo permanece nas páginas internas.
- Botões “Agende sua avaliação” apontam diretamente para `https://api.whatsapp.com/send/?phone=4784935122`.
- Nenhum conteúdo clínico, comercial ou profissional será inventado.
- Resultados reais e fotos de atendimento continuam condicionados a material e autorização.

## Ordem de execução

1. Atualizar documentação e escopo.
2. Criar padrões compartilhados para páginas internas.
3. Converter a página inicial em resumo institucional.
4. Criar as cinco páginas internas.
5. Atualizar links globais e estados ativos.
6. Validar recursos, URLs, responsividade e acessibilidade.

