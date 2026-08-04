# Resultados Copa Mondelez

# PROMPT LOVABLE — POST-MORTEM HEINEKEN COPA DO MUNDO (Market4U)
# DASHBOARD 3 TABS · AUTOCONTIDO · NÚMEROS CONGELADOS · ZERO INFERÊNCIA NUMÉRICA

---

## 0. PAPEL DO LOVABLE (LEIA ANTES DE GERAR QUALQUER COISA)

Você é um executor de UI/front-end. **NÃO** é analista, **NÃO** é estrategista, **NÃO** recalcula KPIs, **NÃO** “melhora” métricas, **NÃO** inventa bases de controle, **NÃO** completa lacunas com ordem de grandeza, **NÃO** renomeia indicadores canônicos, **NÃO** cria 4ª tab, **NÃO** adiciona ROAS Full Market, **NÃO** adiciona calculadora, **NÃO** adiciona heatmap, **NÃO** adiciona evidências comportamentais além do que está escrito aqui.

### Regras absolutas
1. **Todo número deste prompt é CONGELADO.** Copie literalmente. Se um número aparece em mais de um lugar, use o valor da seção **NÚMEROS CANÔNICOS** como fonte única.
2. **Proibido derivar** novos KPIs (ex.: converter % em pp, inventar uplift, arredondar de forma diferente da especificada, recalcular ROAS).
3. **Proibido** usar dados de conversa, memória ou “boas práticas de mercado” para preencher comércios/mídia.
4. Se algo não estiver especificado (ex.: split por estado de comportamento, recompra, Eisenbahn no Top 5, concorrente de mídia), **NÃO existir no produto**.
5. Textos de insight, tooltips, microcopies e proibições de copy são **copy lock** — use-os como estão (pode apenas quebrar linha para layout).
6. Idioma da UI: **Português do Brasil**.
7. Stack preferida: React + TypeScript + Tailwind + shadcn/ui + Recharts (Barras horizontais). Fonte: **Montserrat** (títulos/KPIs) + sistema sans para corpo.
8. Responsivo: desktop-first (dashboard executivo); tablets ok; mobile legível em coluna única.
9. Header fixo com: logo/marca **HEINEKEN**, title da ação, logo/texto **market4u**, investimento.
10. Navegação por **tabs** no topo (estilo underline), exatamente 3:
    - Visão Executiva
    - Resultados Comerciais
    - Resultados de Mídia

---

## 1. CONTEXTO DA AÇÃO (SÓ PARA LABELS — NÃO INVENTAR ALÉM DISSO)

| Campo | Valor congelado |
|---|---|
| Marca foco | Heineken (portfólio da ação: Heineken + Amstel + Eisenbahn SKUs da ação) |
| Ação | Copa do Mundo — ativação Market4U |
| Claim | **O ESTÁDIO HEINEKEN É A CASA DO CONSUMIDOR.** |
| Canal | Market4U |
| Mecânica promocional | 15% off em dias de jogos do Brasil · 10% off em dias de jogos de outras seleções |
| Investimento | **R$ 240.000,00** |
| Período da ação | **11/06 a 19/07** · **39 dias** |
| Base comercial de comparação | **Q1/2027** · **90 dias** |
| Base de mídia pré-ação Heineken | **Jan–Mai/2026** · **151 dias** |
| Ocasião (única permitida em copy) | Consumo **em casa** para assistir ao jogo |
| Objetivo de negócio exibido | Aumento de **GMV** e **Market Share** (MS é suporte, não hero) |

---

## 2. IDENTIDADE VISUAL HEINEKEN (OBRIGATÓRIA)

### 2.1 Tokens de cor (usar exatamente)

```text
--hein-green-900: #003C28;
--hein-green-800: #005536;
--hein-green-700: #007A33;
--hein-green-600: #008C3A;   /* primary */
--hein-green-500: #0AA84A;
--hein-red:       #C8102E;   /* star / alert / uplift label */
--hein-red-dark:  #9E0E24;
--ink:            #0A0A0A;
--ink-2:          #1F2937;
--muted:          #6B7280;
--line:           #E5E7EB;
--surface:        #FFFFFF;
--surface-2:      #F6F8F7;
--surface-3:      #EEF5F0;
--categoria:      #9CA3AF;   /* série controle categoria */
--parceiros:      #6B7280;   /* série parceiros mídia */
--hein-soft:      #7CB89A;   /* Heineken pré-copa / secundário */
--positive:       #007A33;
--white:          #FFFFFF;


2.2 Regras de marca

Fundo geral: --surface-2; cards: --surface com borda --hein-green-600 (grossa nos blocos herói, 4–8px como “frame”).

Primário de botões/chips ativos: verde Heineken (--hein-green-600) com texto branco.

KPIs positivos / destaques numéricos: verde --positive ou branco sobre fundo verde.

Labels de uplift em gráficos: --hein-red (bold), padrão benchmark de legibilidade.

Proibido estética Amstel-vermelha dominante, neon cyberpunk, roxo genérico SaaS, gradientes blue-purple.

Estrela Heineken: pode usar um acento vermelho discreto no header (SVG estrela simples) — não poluir.

Faixa de claim na Visão Executiva: fundo verde escuro ou verde primary, tipografia branca uppercase.

Charts: Heineken ação = --hein-green-600 ou --hein-red para a barra da marca foco somente se precisar de alto contraste; preferência barra da marca foco em verde Heineken e bases em cinzas. Uplift text em vermelho.

NÃO usar verde low-contrast sobre verde.

2.3 Tipografia

Títulos de página: Montserrat Bold/ExtraBold, uppercase tracking tight quando for claim.

Labels de seção: Montserrat semibold uppercase tracking-wide, 12–14px.

Números grandes: Montserrat Bold, 36–48px.

Corpo/insights: 14px, line-height confortável, cor --ink-2 / --muted.

2.4 Componentes recorrentes

BigNumberCard: fundo verde primary, texto branco, ícone Info (tooltip).

FrameCard: fundo branco, borda verde 4px ou 8px.

InsightPanel: sticky à direita (desktop), borda verde 8px, title “INSIGHTS GERAIS”.

Chip/Selector: pills; ativo = green solid; inativo = muted.

Badge: Participação ≠ Market Share (âmbar/cinza escuro, não ignorar).

Tooltips: max-width 280–320px, texto exatamente como especificado.

3. NÚMEROS CANÔNICOS (FONTE ÚNICA DA VERDADE — COPIAR, NÃO RECALCULAR)

3.1 Investimento e ROAS

MétricaValorInvestimentoR$ 240.000,00ROAS7,79xGMV total ação (portfólio da ação)R$ 1.869.560,28

3.2 Portfólio da ação — Heineken (SKUs da ação) vs Q1

MétricaAçãoQ1Δ canônicoGMV total (R$)1.869.560,283.886.352—GMV/dia (R$)47.93743.182+11,0%Clientes distintos32.62356.097—Clientes/dia836,5623,3+34,2%Transações76.793169.265—Transações/dia1.9691.881+4,7%Ticket médio (R$)24,323,0+5,7%Frequência2,353,02−22,2%Ticket / cliente (R$)5769−17,4%Market Share46,57%46,24%+0,33 p.p.

3.3 Categoria cervejas (Market4U) vs Q1

MétricaAçãoQ1Δ canônicoGMV total (R$)4.014.436,088.404.402,58—GMV/dia (R$)102.93493.382+10,2%Clientes distintos61.347101.047—Clientes/dia1.573,01.122,7+40,1%Transações167.268371.022—Transações/dia4.2894.122+4,1%Ticket médio (R$)24,022,7+5,7%Frequência2,733,70−26,2%Ticket / cliente (R$)6583−21,7%

3.4 Deltas relativos Heineken − Categoria (barra de leitura)

IndicadorHeinekenCategoriaHeineken − CategoriaGMV diário+11,0%+10,2%+0,8 ppTransações diárias+4,7%+4,1%+0,6 ppTicket médio+5,7%+5,7%0 ppClientes distintos diários+34,2%+40,1%−5,9 ppFrequência−22,2%−26,2%+4,0 pp (dilui menos)Ticket médio / cliente−17,4%−21,7%+4,3 pp (dilui menos)

3.5 Mídia — ação

MétricaValorImpressões4.686.849Clicks151.987CTR3,24%Alcance659.758Impressões/dia120.176Clicks/dia3.897Impactos por usuário7,10

3.6 Mídia — bases e atores do gráfico

AtorCTRImpressõesClicksDiasImpr/diaClicks/diaHeineken Copa (ação)3,24%4.686.849151.98739120.1763.897Heineken Jan–Mai/20261,95%2.121.47441.32415114.050274Parceiros M4U Jan–Mai/20261,88%12.130.346227.93215180.3331.510Parceiros M4U período ação1,67%6.388.184106.90339163.8002.741

3.7 Múltiplos CTR (Copa ÷ base)

BaseMúltiploHeineken Jan–Mai/20261,66×Parceiros M4U Jan–Mai/20261,72×Parceiros M4U período ação1,94×

3.8 Múltiplos volume/dia (Copa vs Heineken Jan–Mai)

MétricaMúltiploImpressões/dia8,55×Clicks/dia14,2×

3.9 Peso da Copa no recorte Heineken (Jan–Mai + ação)

MétricaJan–MaiCopaTotal% CopaImpressões2.121.4744.686.8496.808.32368,8%Clicks41.324151.987193.31178,6%Dias1513919020,5%CTR período1,95%3,24%2,84% (ref. total)—

3.10 Share de ecossistema = Heineken ÷ (Heineken + Parceiros), Parceiros ex-Heineken

PeríodoShare imprShare clicksJan–Mai/202614,9%15,3%Ação (Copa)42,3%58,7%Δ (Copa − J–M)+27,4 pp+43,4 pp

3.11 Chip âncora SKU

SKUGMV/dia vs Q1Participação GMV portfólioHEINEKEN Lata Sleek 350ml+18,0%+1,70 pp (27,08% → 28,78%)

3.12 Top 5 Portfólio da ação — Toggle GMV

Universo GMV ação: Q R$ 1.869.560,28

#SKUGMV Ação (R$)GMV/dia AçãoGMV/dia Q1Δ GMV/dia1HEINEKEN Lata Sleek 350ml538.05913.79611.694+18,0%2HEINEKEN Long Neck 330ml467.00811.97511.357+5,4%3AMSTEL Lager Sleek Lata 350ml319.3218.1887.190+13,9%4HEINEKEN Garrafa 600ml167.8874.3054.081+5,5%5HEINEKEN 473ml93.6652.4022.388+0,6%

3.13 Top 5 Portfólio da ação — Toggle Participação GMV do portfólio

#SKUPart. AçãoPart. Q1Δ pp1HEINEKEN Lata Sleek 350ml28,78%27,08%+1,702HEINEKEN Long Neck 330ml24,98%26,30%−1,323AMSTEL Lager Sleek Lata 350ml17,08%16,65%+0,434HEINEKEN Garrafa 600ml8,98%9,45%−0,475HEINEKEN 473ml5,01%5,53%−0,52

3.14 Top 5 Categoria — Toggle GMV

Universo GMV categoria ação: R$ 4.014.436,08

#SKUGMV Ação (R$)GMV/dia AçãoGMV/dia Q1Δ GMV/dia1HEINEKEN Lata Sleek 350ml537.53313.78311.691+17,9%2HEINEKEN Long Neck 330ml468.08312.00211.355+5,7%3AMSTEL Lager Sleek Lata 350ml317.9438.1527.190+13,4%4STELLA ARTOIS Pure Gold LN 330ml252.1076.4644.604+40,4%5CORONA Long Neck 330ml194.7004.9925.285−5,5%

3.15 Top 5 Categoria — Toggle Market Share (categoria)

#SKUShare AçãoShare Q1Δ pp1HEINEKEN Lata Sleek 350ml13,39%12,52%+0,872HEINEKEN Long Neck 330ml11,66%12,16%−0,503AMSTEL Lager Sleek Lata 350ml7,92%7,70%+0,224STELLA ARTOIS Pure Gold LN 330ml6,28%4,93%+1,355CORONA Long Neck 330ml4,85%5,66%−0,81

3.16 Arquitetura operacional (qualitativa — SEM números por estado)

Estados de comportamento (labels only, Tab 3 stacking note):

Me organizando (Semana) — E-MKT

Dia de Jogo — Banner + Pop-up

Preciso me abastecer (T-120min) — Banner + Pop-up

Já vai começar (T-10min) — Push

Tô no Jogo (Durante a Partida) — Banner

Preciso de refill (Intervalo) — Push

Hora de comemorar (Final do Evento) — E-MKT

Proibido inventar impressões/clicks/CTR por estado.

4. ESTRUTURA DO APP

App
├── Header
│   ├── Left: marca HEINEKEN + subtítulo "COPA DO MUNDO  ·  MARKET4U"
│   ├── Center: market4u
│   └── Right: "Investimento: R$ 240.000,00"
├── TabNav
│   ├── Visão Executiva
│   ├── Resultados Comerciais
│   └── Resultados de Mídia
└── TabContent


Footer global (miúdo, uma linha, em todas as tabs): Variações comerciais em base diária (ação 39d · Q1 90d). Mídia: J–M=151d · ação=39d. Parceiros M4U = ex-Heineken. Participação de portfólio ≠ Market Share de categoria.

5. TAB 1 — VISÃO EXECUTIVA

5.1 Layout (topo → baixo)

Claim block (centro)

Subclaim

3 Big Number cards

Frame: Indicadores de Comportamento (tabela)

Grid 2 colunas:

Indicadores Absolutos

ROAS (card único, sem Full Market)

5.2 Copy lock — Claim

H1: O ESTÁDIO HEINEKEN É A CASA DO CONSUMIDOR.

Sub: ROAS de 7,79x sobre R$240k investidos, com expansão real de base (+34,2% clientes/dia) e Market Share em 46,57%.

5.3 Big Numbers (exatamente 3)

valuelabeltooltip7,79xROASGMV total da ação ÷ Investimento. GMV R$ 1.869.560,28 ÷ R$ 240.000,00.+11,0%GMV diário vs Q1GMV diário médio da ação ÷ GMV diário médio de Q1/2027 (portfólio da ação).+0,33 p.p.Market ShareMarket Share do portfólio da ação no canal: 46,57% na ação vs 46,24% em Q1. Suporte, não prova principal.

5.4 Indicadores de Comportamento (tabela)

IndicadorValorΔ Market Share vs Q1+0,33 p.p.Δ GMV Diário vs Q1+11,0%Δ Clientes Distintos Diários vs Q1+34,2%Δ Transações Diárias vs Q1+4,7%Δ Frequência vs Q1−22,2%CTR médio3,24%

Nota obrigatória abaixo da tabela (não omitir): Frequência: queda coerente com expansão de base via entrada promocional (10/15% off) — novos clientes entram na janela de 39 dias com menos ciclos, diluindo a média. Padrão esperado em campanhas de aquisição. Heineken dilui menos que a categoria (ver Resultados Comerciais).

5.5 Indicadores Absolutos

IndicadorValorAlcance (usuários únicos)659.758GMV Total (R$)1.869.560,28Impressões Totais4.686.849Clicks Totais151.987

5.6 ROAS (card único — SEM Full Market, SEM segunda linha de ROAS)

Label: ROAS

Valor grande: 7,79x

Microcopy: GMV da ação no Market4U dividido pelo investimento de mídia/ativação (R$ 240.000,00).

NÃO renderizar “ROAS Bruto” + “ROAS Full Market”. Só um ROAS.

5.7 Proibições Tab 1

Não heroizar visualmente MS acima de ROAS/GMV.

Não mostrar +37,9% de clientes (valor obsoleto).

Não mostrar +13,9% de GMV (valor obsoleto).

Não mostrar +7,4% de transações (valor obsoleto).

Não mencionar ROAS Full Market.

6. TAB 2 — RESULTADOS COMERCIAIS

6.1 Layout

[ Chip âncora Sleek ]

[ Grid principal: 1fr + 320/340px ]
  LEFT:
    [ Seção 1 — Controles de indicador + callout ]
    [ Seção 1 — Gráfico barras horizontais Heineken vs Categoria ]
    [ Seção 1b — Frequência on-demand (chip secundário) ]
    [ Seção 2 — Top 5 Portfólio da ação (toggles GMV | Participação) ]
    [ Seção 3 — Top 5 Categoria (toggles GMV | Market Share) ]
  RIGHT sticky:
    [ Insights Gerais ]


6.2 Chip âncora (acima da dobra)

Card destacado:

Título: SKU ÂNCORA

HEINEKEN Lata Sleek 350ml

Métricas: +18,0% GMV/dia vs Q1 · +1,70 pp participação no portfólio (27,08% → 28,78%)

Microcopy: SKU âncora da ocasião jogo em casa — lidera crescimento absoluto e ganho de mix no portfólio.

6.3 Seção 1 — Uplift diário vs Q1 (Heineken × Categoria)

Controles (chips de indicador)

First paint ATIVOS (ordem):

GMV (default)

Transações

Ticket

Clientes

Chip secundário (visualmente separado, label “Mais” ou linha 2): 5. Frequência 6. Ticket / cliente (opcional; se coachar espaço, Frequência sozinha + ticket/cliente só no tooltip/painel da frequência)

Labels completos dos chips:

GMV → GMV x Q1

Transações → Transações Diárias x Q1

Ticket → Ticket Médio x Q1

Clientes → Clientes Distintos Diários x Q1

Frequência → Frequência x Q1

Ticket/cliente → Ticket / Cliente x Q1

Callout fixo (acima do gráfico, sempre)

GMV e transações Heineken crescem acima da categoria. Captação de clientes fica abaixo do mercado em volume, com diluição de frequência e de ticket-cliente menor que a categoria — expansão com melhor preservação do core.

Gráfico — RECHARTS BarChart layout vertical (barras horizontais)

Para o indicador selecionado, sempre 2 barras:

Heineken (portfólio da ação)

Categoria Cervejas

Eixo de valor em %.

Label externo na ponta da barra com o valor canônico do Δ (ex.: +11,0%).

Cor Heineken: --hein-green-600

Cor Categoria: --categoria

Título do chart: UPLIFT COMERCIAL vs Q1 — {INDICADOR}

Subtítulo italic: Comparação self Heineken (ação vs Q1) contra crescimento da categoria (ação vs Q1). Valores normalizados por dia.

Data binding do gráfico (congelado)

GMV (default)

Heineken: +11,0%

Categoria: +10,2%

Leitura auxiliar (badge): Heineken − Categoria = +0,8 pp

Transações

Heineken: +4,7%

Categoria: +4,1%

Badge: +0,6 pp

Ticket

Heineken: +5,7%

Categoria: +5,7%

Badge: 0 pp

Clientes

Heineken: +34,2%

Categoria: +40,1%

Badge: −5,9 pp

Microcopy obrigatória sob o chart quando Clientes ativo: Nunca ler +34,2% isolado: categoria +40,1%. Heineken captura menos volume de porta e dilui menos o core (ver Frequência).

Frequência

Heineken: −22,2%

Categoria: −26,2%

Badge: +4,0 pp (dilui menos)

Tooltip/nota: Queda de frequência = efeito mecânico de aquisição em janela curta (39d) com porta promocional 10/15% off. Cliente novo entra com menos ciclos no período. Não ler como perda de hábito do core. Heineken dilui menos que a categoria (−22,2% vs −26,2%).

Ticket / cliente

Heineken: −17,4%

Categoria: −21,7%

Badge: +4,3 pp (dilui menos)

6.4 Seção 2 — Top 5 Portfólio da ação

Header: TOP 5 — PORTFÓLIO DA AÇÃO

Badge obrigatório: Participação ≠ Market Share

Subheader: Label do mix: Participação GMV do portfólio da ação

Toggle default: GMV

Toggle options: GMV | Participação

Toggle GMV: tabela com colunas exatas da §3.12
Leitura fixa sob a tabela GMV:
Todos os Top 5 crescem em GMV/dia. Queda de participação (toggle Participação) ≠ queda de receita.

Toggle Participação: tabela §3.13
Microcopy:
“Participação GMV do portfólio da ação” = peso do SKU no faturamento do portfólio da ação. Variação negativa de participação não implica queda de GMV — cruzar com toggle GMV.

NÃO incluir Eisenbahn forçado.

NÃO chamar isso de Market Share.

6.5 Seção 3 — Top 5 Categoria

Header: TOP 5 — CATEGORIA CERVEJAS (Market4U)

Toggle default: GMV

Toggle options: GMV | Market Share

Toggle GMV: §3.14
Toggle Market Share: §3.15
Microcopy Market Share:
Aqui o termo correto é Market Share de categoria no canal. Stella acelera no flanco premium; Corona recua; Heineken Sleek e Amstel Sleek sustentam o core.

Callout competitivo (1 linha, não-hero):
Stella +40,4% GMV/dia e +1,35 pp share na Copa — outlier de nicho; sinal de flanco para onda seguinte, sem deslocar a narrativa de sucesso Heineken.

6.6 Insights Gerais Tab 2 (painel lateral — ordem fixa, textos lock)

Sucesso carrega em ROAS + GMV incremental, não em MS fino.
R$240k → GMV R$1,87M (ROAS 7,79×). GMV/dia do portfólio da ação +11,0% vs Q1, +0,8 pp acima da categoria. Market Share +0,33 pp confirma ausência de erosão e ganho leve — suporte, não abertura.

Portfólio da ação = 46,57% do GMV cervejeiro do canal na Copa.
Quase metade do faturamento da ocasião “jogo em casa” no Market4U passou por Heineken+Amstel+Eisenbahn da ação. Claim “O estádio Heineken é a casa do consumidor” materializa-se em concentração de GMV de canal.

Sleek 350ml é o ace do portfólio.
+18,0% GMV/dia e +1,70 pp de participação no portfólio. Long Neck (−1,32 pp de mix) mesmo assim +5,4% GMV/dia; Garrafa 600ml (−0,47 pp) +5,5% GMV/dia. Perda de mix ≠ perda de receita.

Aquisição com diluição controlada vs mercado.
Clientes/dia Heineken +34,2% vs categoria +40,1% (menos volume de porta). Frequência −22,2% vs −26,2% e ticket/cliente −17,4% vs −21,7%: Heineken preserva melhor o core enquanto a mecânica 10/15% off abre base.

Ticket médio +5,7% com desconto ativo.
Mesma variação Heineken e categoria. Na ocasião jogo em casa, valor por cupom sobe mesmo com 10/15% off — promoção puxou volume/base sem destruir valor transacional.

Competitivo em uma linha:
Stella é o outlier (+40,4% GMV/dia, +1,35 pp) por maturidade de nicho — oportunidade de flanco; Corona recua (−5,5% GMV/dia, −0,81 pp). Core Heineken/Amstel estabiliza e lidera via Sleek.

6.7 Proibições de copy Tab 2

Não abrir com MS +0,33 pp como prova principal.

Não dizer ocasião fora de casa / estádio físico / AFH.

Não usar “crescimento simultâneo de base, ticket e recompra”.

Não rotular mix interno como Market Share.

Não isolar “clientes +34,2%” sem comparativo de diluição.

Não esconder frequência negativa.

Não forçar Eisenbahn no Top 5.

7. TAB 3 — RESULTADOS DE MÍDIA

7.1 Layout

[ Hero strip 3 cards ]

[ Grid 1fr + 340px ]
  LEFT:
    [ Bloco A — Comparativo c/ chips CTR | Impr/dia | Clicks/dia  + barras horizontais ]
    [ Bloco B — Peso da Copa no ano Heineken ]
    [ Bloco C — Share de ecossistema M4U ]
    [ Bloco D — Stacking de impactos ]
    [ Absolutos de apoio ]
  RIGHT sticky:
    [ Insights Gerais ]


7.2 Hero strip (3 cards)

valuelabeltooltip3,24%CTR da açãoClicks ÷ Impressões no período 11/06–19/07.1,94×CTR vs Parceiros no período3,24% ÷ 1,67% (Parceiros M4U ex-Heineken no mesmo intervalo da ação).7,10Impactos por usuárioImpressões totais ÷ Alcance (4.686.849 ÷ 659.758).

Microcopy sob strip:
Eficiência de clique quase 2× a dos demais parceiros no mesmo período, com 7,10 impactos médios por usuário alcançado — pressão contínua na jornada do torcedor (7 estados de comportamento), medida em frequência de exposição.

7.3 Bloco A — Comparativo (padrão tabs/chips + barras horizontais)

Chips

CTR (default)

Impressões/dia

Clicks/dia

Título

COMPARATIVO — {INDICADOR}

Insight fixo sob título (CTR default; manter também nos outros chips como nota de eficiência quando CTR):

CTR da ação superou Heineken pré-Copa e o ambiente de parceiros M4U (antes e durante o torneio). No mesmo intervalo da ação, a marca entregou 1,94× a taxa de clique dos demais parceiros — engajamento de decisão, não só presença.

Atores do gráfico (SEMPRE estes 4, nesta ordem)

Heineken Copa (ação)

Heineken Jan–Mai/2026

Parceiros M4U Jan–Mai/2026

Parceiros M4U período ação

Cores:

Heineken Copa: --hein-green-600

Heineken J–M: --hein-soft

Parceiros J–M: #9CA3AF

Parceiros ação: #6B7280

Valores por chip (congelados)

CTR (eixo em %; labels de múltiplo nas bases, não na barra da ação)

Atorvaluelabel extraHeineken Copa3,24—Heineken J–M1,951,66×Parceiros J–M1,881,72×Parceiros ação1,671,94×

Impressões/dia

Atorvaluelabel extraHeineken Copa120176—Heineken J–M140508,55×Parceiros J–M80333—Parceiros ação163800—

Clicks/dia

Atorvaluelabel extraHeineken Copa3897—Heineken J–M27414,2×Parceiros J–M1510—Parceiros ação2741—

Formatação: CTR com 2 casas e %; volumes com toLocaleString('pt-BR').
Labels extras (múltiplos) em --hein-red, bold, fora da barra.

Nota de leitura obrigatória quando chip Impr/dia ativo:
Parceiros no período da ação somam mais impressões/dia que Heineken isolada (163,8k vs 120,2k). O ganho da ação não é maior volume absoluto que todo o ambiente, e sim eficiência (CTR) + share de ecossistema + peso no ano Heineken.

7.4 Bloco B — Peso da Copa no resultado de mídia Heineken

Título: PESO DA COPA NO RECORTE HEINEKEN (JAN–MAI + AÇÃO)

Dois big numbers lado a lado:

68,8% — das impressões Heineken do recorte

78,6% — dos clicks Heineken do recorte

Apoio em tabela ou barras empilhadas 100%:

MétricaJan–MaiCopa% CopaImpressões2.121.4744.686.84968,8%Clicks41.324151.98778,6%Dias1513920,5% dos dias

Callout:
Em 20,5% da janela de dias (39/190), a Copa concentrou ~69% das impressões e ~79% dos clicks Heineken do recorte Jan–Mai+ação — e elevou o CTR de 1,95% para 3,24%.

7.5 Bloco C — Share de ecossistema M4U

Título: PARTICIPAÇÃO HEINEKEN NO ECOSSISTEMA M4U (ex-parceiros)
Fórmula visível: Share = Heineken ÷ (Heineken + Parceiros) no mesmo período

Before/After (duas colunas ou slope):

Share imprShare clicksJan–Mai/202614,9%15,3%Copa (ação)42,3%58,7%Δ+27,4 pp+43,4 pp

Callout:
Heineken saiu de ~15% da exposição/cliques do ecossistema (Jan–Mai) para 42% das impressões e 59% dos clicks no período da Copa — domínio de atenção no intervalo da ação, não só CTR alto em silo.

Implementação visual preferida: barras horizontais pareadas (J–M vs Copa) para impressões e para clicks; ou grouped bars.

7.6 Bloco D — Stacking de impactos

Título: STACKING DE IMPACTOS

KPIValorImpactos por usuário7,10Alcance659.758Impressões totais4.686.849Clicks totais151.987

Nota qualitativa (sem número por estado):
A arquitetura operacional prevê 7 estados (Me organizando → Hora de comemorar) com E-mkt, Banner, Pop-up e Push; o stacking medido (7,10) é a frequência média de exposição no período — evidência agregada de presença recorrente na jornada do torcedor em casa.

Opcional UI: timeline visual dos 7 estados somente com labels (sem métricas). Se implementar timeline, usar os nomes da §3.16.

7.7 Absolutos de apoio

IndicadorValorImpressões4.686.849Clicks151.987CTR3,24%Alcance659.758Impressões/dia120.176Clicks/dia3.897Impactos/usuário7,10Investimento (ref.)R$ 240.000ROAS (ref.)7,79×

Alcance: exibir como apurado. Tooltip: Usuários únicos impactados no período da ação (base de veiculação).
NÃO escrever “estimado”, “aproximado”, “proxy”.

7.8 Insights Gerais Tab 3 (ordem fixa)

CTR 3,24% é o ace de eficiência.
1,66× Heineken Jan–Mai (1,95%), 1,72× Parceiros Jan–Mai (1,88%) e 1,94× Parceiros no mesmo período da ação (1,67%). Engajamento acima de todas as bases disponíveis.

Copa = quase 4/5 dos clicks Heineken no recorte Jan–ação.
39 dias (20,5% da janela) carregaram 68,8% das impressões e 78,6% dos clicks Heineken vs Jan–Mai somado à ação. O torneio foi o núcleo do entregável de mídia da marca no canal.

Share de ecossistema explode na Copa.
Heineken vai de 14,9% → 42,3% das impressões e de 15,3% → 58,7% dos clicks frente aos demais parceiros M4U. Presença relativa multiplica junto com a eficiência.

Volume diário próprio em outro patamar.
vs Heineken pré-Copa: 8,55× impressões/dia e 14,2× clicks/dia. A ação escala saída e conversão de atenção simultaneamente.

Stacking 7,10 impactos/usuário sustenta o claim de casa.
Frequência alta no período conversa com a jornada de 7 estados e com a ocasião consumo em casa para assistir ao jogo. Mídia recorrente + promo 10/15% off nos dias de jogo = pressão no momento de abastecer.

Leitura honesta de teto de volume vs parceiros no período.
Demais parceiros ainda somam mais impr/dia no intervalo da ação (163,8k vs 120,2k). O domínio Heineken aparece em CTR, share de clicks (58,7%) e concentração no ano da marca — não na tese falsa de maior impressão absoluta do ambiente inteiro.

7.9 Proibições Tab 3

Não rotular alcance como estimado.

Não inventar CTR/impr por estado 1–7.

Não criar benchmark de concorrente de mídia.

Não reintroduzir ROAS Full Market.

Não afirmar que Heineken teve o maior volume absoluto de impressões do ambiente.

Não tratar Parceiros como se incluísse Heineken.

Não usar recompra.

Não inferir ocasião fora de casa.

Não inventar múltiplos tipo “9,76×”; canônicos = 1,66 / 1,72 / 1,94 (CTR) e 8,55 / 14,2 (volume/dia vs Heineken J–M).

8. DATA LAYER (IMPLEMENTAÇÃO)

Criar src/data/canonical.ts (ou equivalente) com todos os números das seções 3.x exportados como constantes as const.
Componentes apenas leem constantes.

Pseudocontrato:

export const META = {
  investment: 240000,
  investmentLabel: "R$ 240.000,00",
  actionDays: 39,
  q1Days: 90,
  jmDays: 151,
  periodAction: "11/06 a 19/07",
  claim: "O ESTÁDIO HEINEKEN É A CASA DO CONSUMIDOR.",
  channel: "Market4U",
} as const;

export const ROAS = 7.79; // exibir 7,79x

export const TAB1 = { /* big numbers, behavior rows, absolutes — strings de display prontas */ } as const;

export const COMMERCIAL = {
  indicators: {
    gmv: { heineken: 11.0, categoria: 10.2, gapPp: 0.8, labels: ["+11,0%","+10,2%"] },
    transacoes: { heineken: 4.7, categoria: 4.1, gapPp: 0.6, labels: ["+4,7%","+4,1%"] },
    ticket: { heineken: 5.7, categoria: 5.7, gapPp: 0, labels: ["+5,7%","+5,7%"] },
    clientes: { heineken: 34.2, categoria: 40.1, gapPp: -5.9, labels: ["+34,2%","+40,1%"] },
    frequencia: { heineken: -22.2, categoria: -26.2, gapPp: 4.0, labels: ["−22,2%","−26,2%"] },
    ticketCliente: { heineken: -17.4, categoria: -21.7, gapPp: 4.3, labels: ["−17,4%","−21,7%"] },
  },
  // top5 action / category tables with DISPLAY STRINGS already formatted in pt-BR
} as const;

export const MEDIA = {
  // actors, multiples, share, weight, stacking — display strings frozen
} as const;


Regra: formate em pt-BR nos próprios campos label (3,24%, 1,66×, +11,0%, 1.869.560,28) para o front não “reinterpretar” com locale errado.

9. INTERAÇÕES

Troca de tabs do topo (3 apenas).

Tab 2: chips de indicador trocam SOMENTE o dataset do gráfico de barras horizontais e badges/notas ligadas.

Tab 2: toggles GMV/Participação e GMV/Market Share trocam SOMENTE a tabela correspondente.

Tab 3: chips CTR / Impr/dia / Clicks/dia trocam SOMENTE o dataset do comparativo.

Tooltips nos big numbers e ícones Info.

Insight panels sticky em desktop (lg+).

Sem login, sem filtros de data editáveis, sem upload, sem calculadora, sem dark mode toggle obrigatório.

Sem animações que atrapalhem leitura executiva (transições leves ok).

10. ACCEPTANCE CRITERIA (QA OBRIGATÓRIA ANTES DE ENTREGAR)

Marque mentalmente cada item:

Existem exatamente 3 tabs com os nomes corretos

Header mostra investimento R$ 240.000,00

Claim exatamente: O ESTÁDIO HEINEKEN É A CASA DO CONSUMIDOR.

Tab 1 big numbers: 7,79x · +11,0% · +0,33 p.p. (nenhum outro trio)

Tab 1 comportamento inclui −22,2% frequência com nota de aquisição

Tab 1 clientes = +34,2% (não +37,9%)

Tab 1 SEM ROAS Full Market

Tab 2 default chart = GMV Heineken +11,0% vs Categoria +10,2% em barras horizontais

Tab 2 chips incluem bases de controle Categoria em todos os indicadores listados

Tab 2 Top 5 portfólio default GMV com 5 SKUs e deltas congelados

Badge “Participação ≠ Market Share” visível na seção de portfólio

Tab 2 insights = 6 textos lock

Tab 3 hero: 3,24% · 1,94× · 7,10

Tab 3 comparativo tem 4 atores e chips CTR/Impr/dia/Clicks/dia

Múltiplos CTR 1,66× · 1,72× · 1,94× visíveis no modo CTR

Bloco peso Copa: 68,8% e 78,6%

Share eco: 14,9→42,3 e 15,3→58,7 com deltas +27,4 pp e +43,4 pp

Stacking 7,10 e alcance 659.758 sem a palavra “estimado”

Identidade predominantemente verde Heineken (não vermelho Amstel dominante)

Nenhum número “redondo chutado” fora da lista canônica

Nenhum gráfico de pizza obrigatório; comparativos principais = barras horizontais

Footer de método presente

11. ORDEM DE CONSTRUÇÃO (PARA O LOVABLE)

Scaffold + tema Heineken + Header + TabNav

canonical.ts com TODOS os números (display strings)

Tab 1 completa

Tab 2: chart + chips + insights

Tab 2: Top 5 ambas seções

Tab 3: hero + comparativo chips

Tab 3: blocos B, C, D + insights

QA contra seção 10

Ajustes de espaçamento desktop 1440px

12. O QUE NÃO FAZER (LISTA FINAL DE BLOQUEIO)

Recalcular qualquer KPI

Trocar base Q1 por YTD / Q4 / “mercado geral” não especificado

Adicionar aba Calculadora / Evidências Comportamentais / Full Market

Adicionar base “Amstel Carnaval” ou qualquer resquício de outra ação

Inventar dados de Eisenbahn no Top 5

Inventar split Brasil 15% vs outras 10% (não fornecido contábil)

Suavizar números negativos (frequência, ticket/cliente, clientes vs categoria)

Traduzir claim para inglês na UI

Usar inglês nos labels principais

Colocar MS como maior card visual da Tab 1

Usar footprint visual de outra cervejaria como primário

13. DEFINIÇÃO DE PRONTO

O dashboard está pronto quando um diretor consegue apresentar 60 minutos apenas clicando nas 3 tabs e nos chips, sem nenhum número divergente entre telas, com história:

ROAS 7,79× + GMV/dia acima da categoria + Sleek âncora + CTR 3,24% com share de ecossistema dominante na Copa, ocasião jogo em casa, Market4U.

FIM DO PROMPT — EXECUTAR FIDELIDADE TOTAL AOS NÚMEROS CONGELADOS

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/88f9d3c6-3090-4b34-bccb-c37afe925aa9).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
