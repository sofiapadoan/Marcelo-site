# Plano de implementação — Clínica Renova Odontologia

> **Plano histórico substituído.** A arquitetura atual é multipágina e está registrada em `plano-multipagina.md`. Este arquivo permanece apenas como histórico da implementação inicial da landing page.

> Plano criado em 2026-08-27. Nenhum código de interface foi produzido. As decisões aprovadas em `site.md`, `design.md` e `../memoria.md` prevalecem. Itens indicados como condicionais ou pendentes não devem ser implementados até validação.

## Resumo da direção escolhida

A landing page seguirá uma narrativa editorial, quente e acolhedora: orientar rapidamente, demonstrar que a clínica e os tratamentos são reais, reforçar confiança por meio de ambiente e avaliações públicas e conduzir ao contato. Instrument Serif dará personalidade aos títulos; Montserrat manterá leitura clara. Off-White será o fundo dominante, Dark Chocolate estruturará títulos, CTAs e áreas de contraste, Sage Gray criará pausas visuais e Dark Tan ficará restrito a detalhes com contraste validado.

A referência será traduzida em alternância de escalas, fundos e densidades, não em cópia de layout. Não haverá carrosséis automáticos, parallax, textos inventados, alegações de resultado ou inclusão de tratamentos não confirmados. A primeira implementação continuará em HTML e CSS puros.

## Mapa da página

```text
Página inicial
├── 1. Cabeçalho e navegação
├── 2. Hero
├── 3. Faixa de informações verificadas
├── 4. Clínica e ambiente
├── 5. Tratamentos
├── 6. Experiência de atendimento
├── 7. Resultados reais [condicional]
├── 8. Avaliações públicas
├── 9. Convênios credenciados
├── 10. Contato, localização e horário
└── 11. Rodapé
```

Se forem recebidos nomes, credenciais e retratos autorizados, uma seção “Profissionais” poderá entrar entre “Clínica e ambiente” e “Tratamentos”. Ela não faz parte da primeira versão confirmada.

## Estrutura completa da página

### 1. Cabeçalho e navegação

**Objetivo:** identificar a clínica, permitir acesso rápido às áreas principais e manter a ação de contato visível.

**Conteúdo:** logotipo; links para Clínica, Tratamentos, Avaliações, Convênios e Contato; CTA “Agende sua avaliação” com destino direto para o WhatsApp oficial.

**Imagem:** `assets/images/logo-renova-transparente.png`, versão PNG aprovada. Uma versão vetorial ainda é desejável para usos de maior escala.

**Componentes:** skip link; `<header>`; navegação por âncoras; marca; botão/âncora de CTA; menu móvel baseado em elemento HTML nativo, sem JavaScript.

**Interações:** cabeçalho opcionalmente sticky por CSS; estados de hover, foco e ativo; navegação por âncoras. Rolagem suave somente para quem não solicitar redução de movimento.

### 2. Hero

**Objetivo:** comunicar a proposta principal e oferecer o primeiro caminho de conversão sem exigir rolagem extensa.

**Conteúdo necessário:** rótulo curto; título principal; descrição institucional comprovável; CTA principal; CTA secundária opcional.

**Imagem:** `assets/images/recepcao.png` como solução provisória. Falta uma fotografia hero horizontal de maior impacto e uma versão vertical para celular. Não sobrepor texto diretamente em áreas visualmente ruidosas sem superfície ou contraste sólido.

**Componentes:** bloco editorial; grupo de CTAs; `<picture>` para art direction; indicador discreto de continuidade, se necessário.

**Interações:** transições leves de cor nos botões. Nenhum slideshow ou vídeo automático.

### 3. Faixa de informações verificadas

**Objetivo:** oferecer confiança e utilidade imediatas sem inventar diferenciais.

**Conteúdo:** nota Google 4,9/5 e 178 avaliações, marcadas com data de verificação; bairro/cidade; horário de segunda a sexta; forma de contato. A métrica do Google deve ser atualizada antes da publicação.

**Imagem:** nenhuma fotografia. Ícones SVG originais e funcionais poderão acompanhar os itens.

**Componentes:** lista semântica de informações; link para perfil do Google; link de contato quando o destino for confirmado.

**Interações:** somente links e estados de foco. Sem contadores animados.

### 4. Clínica e ambiente

**Objetivo:** apresentar o espaço real, criar profundidade visual e contextualizar o atendimento.

**Conteúdo necessário:** texto institucional real sobre a clínica; informações de ambiente ou estrutura somente quando confirmadas.

**Imagens:** `assets/images/recepcao.png`, `assets/images/consultorio-01.png` e `assets/images/consultorio-02.png`. A composição deve alternar uma imagem dominante com duas imagens de apoio, sem reproduzir a grade da referência.

**Componentes:** seção dividida; galeria editorial; legenda quando a imagem exigir contexto; bloco de texto com possível CTA para contato.

**Interações:** nenhuma galeria modal na primeira versão; leve mudança de borda/escala apenas se não comprometer desempenho nem redução de movimento.

### 5. Tratamentos

**Objetivo:** permitir reconhecimento rápido das seis áreas confirmadas e conduzir à conversa com a equipe, sem oferecer orientação clínica individual.

**Conteúdo necessário:** nome aprovado de cada tratamento; descrição curta real e validada; CTA geral para avaliação. Não incluir benefícios ou indicações ainda não fornecidos.

**Imagens:** 

- Implantes: `imagens-site/implantes.png`.
- Prótese dentária: `imagens-site/protese-dentaria.png`.
- Estética dental: `imagens-site/estetica-dental.png`.
- Clareamento dental: `imagens-site/clareamento-dental.png`.
- Ortodontia: `imagens-site/ortodontia.png`.
- Odontopediatria: `imagens-site/odontopediatria.png`.

**Componentes:** cabeçalho de seção; grid de seis cards; imagem 4:3; título; descrição; aviso geral de que as imagens são ilustrativas, quando necessário; CTA única após o grid.

**Interações:** cards não serão links vazios nem terão comportamento escondido por hover. Se houver link, o card terá destino claro e foco visível. Sem carrossel horizontal obrigatório.

### 6. Experiência de atendimento

**Objetivo:** humanizar a página e interromper o ritmo de cards com uma composição fotográfica ampla.

**Conteúdo necessário:** texto real sobre acolhimento e processo de atendimento, sem garantir ausência de dor ou resultados.

**Imagens:** `assets/images/atendimento-clinico.png` e `assets/images/atendimento-infantil.png`, ambas condicionadas à confirmação de autorização de uso; a imagem infantil exige autorização do responsável legal.

**Componentes:** duas figuras com texto editorial; alternativa de uma única imagem caso somente uma tenha autorização.

**Interações:** nenhuma interação necessária.

### 7. Resultados reais — condicional

**Objetivo:** demonstrar casos reais com transparência, somente quando houver material e autorização adequados.

**Conteúdo necessário:** pares antes/depois; tratamento; contexto aprovado; aviso de que resultados variam; autorizações aplicáveis.

**Imagens:** arquivos futuros em `meus-resultados/`. A seção não deve ser renderizada vazia e não pode usar imagens de `imagens-site/` como substituição.

**Componentes:** `<figure>` para cada par; rótulos “Antes” e “Depois” textuais; legenda. Em HTML/CSS puros, preferir comparação lado a lado no desktop e empilhada no celular.

**Interações:** não usar slider que dependa de JavaScript. Nenhum autoplay.

### 8. Avaliações públicas

**Objetivo:** adicionar prova social verificável e reforçar os temas de acolhimento e confiança.

**Conteúdo:** nota e quantidade atualizadas; até três avaliações escolhidas; autoria; indicação clara de fonte Google; link para o perfil. A seleção final e o formato de atribuição ainda precisam de aprovação.

**Imagens:** nenhuma foto de perfil do Google será copiada. Usar cards tipográficos com iniciais; um retrato só poderá ser usado se for fornecido e autorizado separadamente.

**Componentes:** resumo da avaliação; três cards; estrelas acompanhadas de texto acessível; link externo identificado.

**Interações:** lista estática responsiva. Sem carrossel automático ou controles desnecessários.

### 9. Convênios credenciados

**Objetivo:** informar rapidamente os convênios aceitos e reduzir dúvidas antes do contato.

**Conteúdo:** OdontoPrev, Bradesco Dental, BB Dental, Dental Uni, Odontolife, Celos e Hapvida; nota curta orientando a confirmar cobertura diretamente com a equipe, se aprovada.

**Imagens:** logotipos oficiais ainda não recebidos. Até que sejam fornecidos e autorizados, usar nomes em texto; não redesenhar marcas nem baixar versões aleatórias.

**Componentes:** lista ou grid de marcas; células com área de respiro consistente.

**Interações:** nenhuma obrigatória.

### 10. Contato, localização e horário

**Objetivo:** transformar interesse em ação e facilitar chegada à clínica.

**Conteúdo:** WhatsApp `(47) 98493-5122`; telefone `(47) 3842-2281`; e-mail `renovaodontologia.renova@gmail.com`; Rua Antônio Jorge Cecyn, 902 — Aventureiro — Joinville, SC; segunda a sexta, 8h–12h e 13h30–18h30.

**Imagem:** fotografia de fachada ainda não recebida. O mapa deve ser link ou integração acessível; não usar captura estática como substituição da navegação.

**Componentes:** lista de contatos; links `tel:` e `mailto:`; link de rota; bloco de horário; mapa somente se a integração for aprovada.

**Interações:** chamadas e e-mail por links nativos. WhatsApp, mapa e fluxo de agendamento dependem de confirmação.

### 11. Rodapé

**Objetivo:** encerrar a navegação com identidade, contatos, horários e acesso rápido às seções.

**Conteúdo:** marca; âncoras principais; contatos; endereço; horário; referência ao perfil público do Google; informações legais quando fornecidas.

**Imagem:** `assets/images/logo-renova-transparente.png`, aplicada sem alteração de proporções.

**Componentes:** `<footer>`; navegação secundária; contatos; área legal.

**Interações:** links nativos com foco visível.

## Componentes compartilhados

- Container responsivo e grid de página.
- Skip link.
- Cabeçalho e navegação por âncoras.
- Botão primário e botão secundário.
- Rótulo editorial, título, texto e lista.
- `<picture>` responsivo e figura com legenda.
- Card de tratamento.
- Card de avaliação.
- Lista de informações verificadas.
- Galeria editorial de ambientes.
- Lista de convênios.
- Bloco de contato e horário.
- Rodapé.

Os componentes serão padrões de HTML e classes CSS reutilizáveis, não componentes de framework.

## Estratégia de interações e animações

- Navegação por âncoras e links nativos.
- Menu móvel com elemento HTML nativo e CSS, sem dependência de JavaScript.
- Cabeçalho sticky somente se não cobrir conteúdo ou foco.
- Transições de 160–320 ms para cor, borda e opacidade.
- Entrada animada de seções não é requisito; sem JavaScript, o conteúdo aparecerá imediatamente.
- `prefers-reduced-motion: reduce` desativará rolagem suave e transições não essenciais.
- Não usar carrosséis, parallax, contadores, sliders automáticos, modais de galeria ou animações contínuas.

## Estratégia responsiva

### Desktop — aproximadamente 72rem ou mais

- Container amplo com largura máxima consistente.
- Hero em duas colunas ou composição editorial assimétrica própria.
- Seção da clínica com uma imagem dominante e duas de apoio.
- Tratamentos em seis colunas compactas, formando uma única faixa visual.
- Avaliações em três colunas.
- Contato dividido entre dados e localização.

### Tablet — aproximadamente 48rem a 71,99rem

- Hero com proporção equilibrada entre texto e imagem ou empilhamento antecipado quando necessário.
- Tratamentos em três colunas.
- Galeria e contato em duas colunas quando houver espaço real.
- Navegação reduzida; menu móvel poderá entrar antes de 48rem se os rótulos não couberem.

### Celular — abaixo de aproximadamente 48rem

- Fluxo de uma coluna e gutters mínimos de 20–24 px.
- Hero empilhado; imagem com recorte vertical ou 4:5.
- CTA principal visível cedo, sem barra flutuante cobrindo conteúdo.
- Tratamentos em duas colunas compactas; avaliações e convênios em grid simples, sem rolagem horizontal obrigatória.
- Corpo mínimo de 16 px e alvos de pelo menos 44 × 44 px.
- Antes/depois empilhado e identificado.

Os breakpoints são baselines propostos e devem ser confirmados pelo conteúdo durante a implementação, não aplicados mecanicamente.

## Estratégia de desempenho

- Manter HTML e CSS puros, sem bibliotecas ou frameworks.
- Preservar originais; criar derivados AVIF/WebP e fallback somente no momento da implementação.
- Usar `<picture>`, `srcset` e `sizes` para entregar dimensões apropriadas.
- Declarar `width`, `height` e `aspect-ratio` para evitar deslocamento de layout.
- Hero com carregamento prioritário e sem lazy loading; imagens abaixo da dobra com `loading="lazy"` e `decoding="async"`.
- Não carregar imagens de seções condicionais antes de existirem.
- Converter fontes aprovadas para WOFF2 e carregar somente Instrument Serif Regular/Italic e Montserrat Regular/Medium/SemiBold; licença deve ser confirmada antes.
- CSS único e pequeno, organizado por camadas lógicas; sem folha de ícones externa.
- SVGs locais e otimizados para ícones e marcas quando autorizados.
- Metas propostas: LCP até 2,5 s, CLS até 0,1 e INP até 200 ms no percentil 75; precisam de aprovação como requisitos formais.
- Verificar em rede móvel simulada e dispositivos reais representativos antes da entrega.

## Estratégia de acessibilidade

- Meta proposta: WCAG 2.2 nível AA; ainda precisa de aprovação formal.
- HTML semântico com `<header>`, `<nav>`, `<main>`, `<section>`, `<figure>`, listas e `<footer>`.
- Um único `<h1>` e hierarquia de títulos sem saltos artificiais.
- Skip link e ordem de foco equivalente à ordem visual.
- Foco visível em todos os elementos interativos.
- Contraste validado para cada combinação; Dark Tan não será usado como texto pequeno quando falhar.
- Links compreensíveis fora de contexto; ícones nunca serão a única identificação da ação.
- Alt text funcional para fotos informativas; `alt=""` para decoração.
- Imagens ilustrativas de tratamentos identificadas no texto próximo quando necessário.
- Estrelas acompanhadas de texto como “4,9 de 5”; não depender apenas do desenho.
- Área mínima de 44 × 44 px para ações.
- Suporte a zoom de 200% sem perda de conteúdo ou rolagem horizontal.
- Sem autoplay, flashes ou movimento obrigatório; respeito a `prefers-reduced-motion`.
- Antes/depois identificado por texto, não apenas posição ou cor.
- Telefone, e-mail, endereço e horário disponíveis como texto selecionável.

## Organização proposta dos arquivos

```text
/
├── index.html                         # futura landing page
├── CLAUDE.md
├── memoria.md
├── specs/
│   ├── site.md
│   ├── design.md
│   └── plano-implementacao.md
├── assets/
│   ├── css/
│   │   └── styles.css                 # futuro CSS único
│   ├── fonts/                         # futuros WOFF2 autorizados
│   ├── icons/                         # futuros SVGs próprios/autorizados
│   └── images/
│       ├── *.png                      # originais já recebidos
│       └── optimized/                 # futuros derivados, sem substituir originais
├── imagens-site/
│   ├── *.png                          # fontes ilustrativas dos tratamentos
│   ├── README.md
│   └── prompts-tratamentos.md
├── meus-resultados/
│   └── README.md                      # futuros resultados reais
└── referencias/                       # ausente; materiais futuros
```

Não será criada pasta `js/` enquanto JavaScript não for autorizado. `imagens-site/` e `meus-resultados/` continuarão como acervos-fonte; versões otimizadas para publicação deverão ir para `assets/images/optimized/`.

## Riscos e inconsistências

1. `imagens.md` não existe; o inventário visual está atualmente em `specs/design.md`.
2. `referencias/` não existe; o print anexado anteriormente foi analisado, mas não está preservado nessa pasta e o link do site de referência não foi recebido.
3. A versão PNG transparente já foi recebida e aplicada; falta apenas uma versão vetorial para usos de maior escala, se disponível.
4. A fotografia atual da recepção pode não ter resolução e composição suficientes para hero amplo e celular.
5. Fotos de atendimento mostram pessoas identificáveis; as autorizações ainda não foram confirmadas, incluindo a de menor de idade.
6. As imagens dos tratamentos são ilustrativas; estética dental e clareamento são visualmente semelhantes e precisam de legendas inequívocas.
7. Resultados reais ainda não foram recebidos; a seção correspondente não pode ser implementada com conteúdo substituto.
8. Logotipos oficiais dos convênios não foram recebidos e não devem ser redesenhados ou obtidos de fonte incerta.
9. Nota e quantidade de avaliações do Google são dinâmicas; precisam de conferência pré-publicação.
10. A seleção final e a atribuição das avaliações ainda não foram aprovadas.
11. Os botões “Agende sua avaliação” já possuem destino direto para o WhatsApp; mapa, analytics e demais fluxos continuam indefinidos.
12. Descrições de tratamentos, proposta de valor, diferenciais e texto institucional estão pendentes.
13. Nomes, credenciais e retratos dos profissionais não foram fornecidos.
14. Licenças das fontes e das imagens ilustrativas precisam de confirmação.
15. HTML/CSS puros limitam interações avançadas; o plano evita dependências que exigiriam alterar a stack.

## Informações ainda faltantes

- Proposta de valor e diferenciais comprováveis.
- Texto institucional real da clínica.
- Descrição aprovada de cada tratamento.
- Profissionais, cargos, credenciais e retratos autorizados.
- Destino das CTAs restantes que não usam “Agende sua avaliação”.
- Decisão sobre formulário, mapa, agenda, analytics e outras integrações.
- Autorizações de uso das fotografias próprias e das pessoas retratadas.
- Licenças das fontes e imagens ilustrativas.
- Logotipo vetorial e favicon oficial; a versão PNG transparente já está disponível.
- Fotografias de hero desktop/celular e fachada.
- Resultados reais e documentação de autorização.
- Seleção final de avaliações e forma de atribuição.
- Logotipos oficiais dos convênios e permissão de uso.
- Textos legais, política de privacidade e identificação regulatória necessária.
- Métricas de sucesso, navegadores suportados e aprovação das metas de desempenho/acessibilidade.
- `imagens.md`, caso seja um documento distinto esperado pelo projeto.
- Pasta `referencias/` e link do site de referência, caso ainda devam ser entregues.

## Ordem de implementação

1. **Fechar conteúdo e autorizações:** resolver CTAs, textos, descrições clínicas, profissionais, licenças e direitos de imagem.
2. **Completar ativos essenciais:** obter hero responsivo, fachada, versão vetorial da logo e marcas dos convênios; receber resultados reais somente se a seção for aprovada.
3. **Preparar ativos para web:** gerar derivados AVIF/WebP, recortes responsivos, SVGs e WOFF2 sem substituir originais.
4. **Montar a base semântica:** criar `index.html` com skip link, cabeçalho, `<main>`, seções aprovadas e rodapé.
5. **Criar fundações visuais:** tokens de cor, tipografia, espaçamento, container, grid, foco e botões em `assets/css/styles.css`.
6. **Implementar do topo ao contato:** cabeçalho, hero, faixa verificada, clínica, tratamentos, experiência, avaliações, convênios, contato e rodapé.
7. **Adicionar seções condicionais:** profissionais e resultados reais somente após conteúdo e autorizações.
8. **Aplicar responsividade:** validar celular primeiro, depois tablet e desktop, ajustando breakpoints pelo conteúdo.
9. **Otimizar desempenho:** fontes, formatos, dimensões, prioridade do hero e carregamento tardio abaixo da dobra.
10. **Executar QA de acessibilidade:** teclado, foco, títulos, contraste, zoom, alt text, redução de movimento e leitores de tela.
11. **Executar QA visual e funcional:** dispositivos reais, links de contato, recortes, dados oficiais e consistência entre seções.
12. **Revisão pré-publicação:** reconfirmar Google, horários, contatos, convênios, consentimentos, textos legais e ausência de conteúdo inventado.

## Condição para iniciar código

O código pode começar após aprovação deste plano, mas as partes que dependem de conteúdo ou autorização continuarão bloqueadas. Para uma primeira implementação completa sem placeholders, os bloqueios mínimos são: CTA/destino, texto institucional, descrições dos seis tratamentos, licença das fontes, autorização das fotos utilizadas e definição sobre avaliações, convênios e mapa.

## Estado da execução

- 2026-08-27 — Implementada a landing page local em `index.html` e `assets/css/styles.css`.
- Implementados: cabeçalho, hero, faixa de informações verificadas, ambientes, seis tratamentos, avaliações públicas, convênios em texto, contato e rodapé. A CTA final foi removida por repetir informações da seção de contato.
- Criados derivados WebP em `assets/images/optimized/`, preservando todos os originais.
- O site usa conteúdo factual disponível e não inclui resultados reais, profissionais ou descrições clínicas ainda não fornecidos.
- A seção de experiência com pessoas foi omitida enquanto as autorizações de imagem permanecem pendentes.
- A publicação externa permanece bloqueada até confirmação das licenças e autorizações necessárias.
