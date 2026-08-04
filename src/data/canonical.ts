// Frozen canonical numbers — DO NOT recalculate.
export const META = {
  brand: "HEINEKEN",
  actionLabel: "COPA DO MUNDO · MARKET4U",
  channel: "market4u",
  investment: 240000,
  investmentLabel: "R$ 240.000,00",
  actionDays: 39,
  q1Days: 90,
  jmDays: 151,
  periodAction: "11/06 a 19/07",
  claim: "O ESTÁDIO HEINEKEN É A CASA DO CONSUMIDOR.",
  subclaim:
    "ROAS de 7,79x sobre R$240k investidos, com expansão real de base (+34,2% clientes/dia) e Market Share em 46,57%.",
} as const;

export const ROAS_LABEL = "7,79x";

export const TAB1_BIG = [
  {
    value: "7,79x",
    label: "ROAS",
    tooltip: "GMV total da ação ÷ Investimento. GMV R$ 1.869.560,28 ÷ R$ 240.000,00.",
  },
  {
    value: "+11,0%",
    label: "GMV diário vs Q1",
    tooltip: "GMV diário médio da ação ÷ GMV diário médio de Q1/2027 (portfólio da ação).",
  },
  {
    value: "42,3%",
    label: "Participação de Impressões durante a Copa",
    tooltip:
      "Share Heineken nas impressões do ecossistema M4U (Heineken ÷ Heineken + Parceiros) durante o período da ação.",
  },
] as const;

export const TAB1_BEHAVIOR = [
  { label: "Δ Market Share vs Q1", value: "+0,33 p.p." },
  { label: "Δ GMV Diário vs Q1", value: "+11,0%" },
  { label: "Δ Clientes Distintos Diários vs Q1", value: "+34,2%" },
  { label: "Δ Transações Diárias vs Q1", value: "+4,7%" },
  { label: "Δ Frequência vs Q1", value: "−22,2%" },
  { label: "CTR médio", value: "3,24%" },
] as const;

export const TAB1_BEHAVIOR_NOTE =
  "Frequência: queda coerente com expansão de base via entrada promocional (10/15% off) — novos clientes entram na janela de 39 dias com menos ciclos, diluindo a média. Padrão esperado em campanhas de aquisição. Heineken dilui menos que a categoria (ver Resultados Comerciais).";

export const TAB1_ABSOLUTES = [
  { label: "Alcance (usuários únicos)", value: "659.758" },
  { label: "GMV Total (R$)", value: "1.869.560,28" },
  { label: "Impressões Totais", value: "4.686.849" },
  { label: "Clicks Totais", value: "151.987" },
] as const;

// TAB 2
export const SKU_ANCHOR = {
  title: "SKU ÂNCORA",
  sku: "HEINEKEN Lata Sleek 350ml",
  metrics: "+18,0% GMV/dia vs Q1 · +1,70 pp participação no portfólio (27,08% → 28,78%)",
  microcopy: "SKU âncora da ocasião jogo em casa — lidera crescimento absoluto e ganho de mix no portfólio.",
} as const;

export type IndicatorKey = "gmv" | "transacoes" | "ticket" | "clientes" | "frequencia" | "ticketCliente";

export const COMMERCIAL_INDICATORS: Record<
  IndicatorKey,
  {
    chipLabel: string;
    fullLabel: string;
    heineken: number;
    telas: number;
    categoria: number;
    heinekenLabel: string;
    telasLabel: string;
    categoriaLabel: string;
    gapLabel: string;
    note?: string;
  }
> = {
  gmv: {
    chipLabel: "GMV",
    fullLabel: "GMV x Q1",
    heineken: 11.0,
    telas: 16.4,
    categoria: 10.2,
    heinekenLabel: "+11,0%",
    telasLabel: "+16,4%",
    categoriaLabel: "+10,2%",
    gapLabel: "Ação − Cat. = +0,8 pp · Telas − Ação = +5,4 pp",
  },
  transacoes: {
    chipLabel: "Transações",
    fullLabel: "Transações Diárias x Q1",
    heineken: 4.7,
    telas: 5.1,
    categoria: 4.1,
    heinekenLabel: "+4,7%",
    telasLabel: "+5,1%",
    categoriaLabel: "+4,1%",
    gapLabel: "Ação − Cat. = +0,6 pp · Telas − Ação = +0,4 pp",
  },
  ticket: {
    chipLabel: "Ticket",
    fullLabel: "Ticket Médio x Q1",
    heineken: 5.7,
    telas: 6.1,
    categoria: 5.7,
    heinekenLabel: "+5,7%",
    telasLabel: "+6,1%",
    categoriaLabel: "+5,7%",
    gapLabel: "Ação − Cat. = 0 pp · Telas − Ação = +0,4 pp",
  },
  clientes: {
    chipLabel: "Clientes",
    fullLabel: "Clientes Distintos Diários x Q1",
    heineken: 34.2,
    telas: 34.7,
    categoria: 40.1,
    heinekenLabel: "+34,2%",
    telasLabel: "+34,7%",
    categoriaLabel: "+40,1%",
    gapLabel: "Ação − Cat. = −5,9 pp · Telas − Ação = +0,5 pp",
    note: "Nunca ler +34,2% isolado: categoria +40,1%. Telas espelha a ação (+34,7%). Frequência e Ticket/Cliente mostram captura com maior qualidade que o mercado.",
  },
  frequencia: {
    chipLabel: "Frequência",
    fullLabel: "Frequência x Q1",
    heineken: -22.2,
    telas: -22.2,
    categoria: -26.2,
    heinekenLabel: "−22,2%",
    telasLabel: "−22,2%",
    categoriaLabel: "−26,2%",
    gapLabel: "Ação − Cat. = +4,0 pp (dilui menos) · Telas = Ação",
    note: "Queda de frequência = efeito mecânico de aquisição em janela curta (39d) com porta promocional 10/15% off. Telas replica a diluição da ação (−22,2%). Ambos diluem menos que a categoria (−26,2%).",
  },
  ticketCliente: {
    chipLabel: "Ticket/cliente",
    fullLabel: "Ticket / Cliente x Q1",
    heineken: -17.4,
    telas: -17.4,
    categoria: -21.7,
    heinekenLabel: "−17,4%",
    telasLabel: "−17,4%",
    categoriaLabel: "−21,7%",
    gapLabel: "Ação − Cat. = +4,3 pp (dilui menos) · Telas = Ação",
  },
};

export const COMMERCIAL_CALLOUT =
  "GMV e transações Heineken (ação) crescem acima da categoria. Em Telas, o mesmo recorte de indicadores vs Q1 sobe mais no GMV/dia (+16,4% vs +11,0% da ação), com diluição de frequência e ticket-cliente idêntica à ação — mesmo padrão de expansão, teto de receita diária maior no meio Telas.";

export const TOP5_PORTFOLIO_GMV = [
  { sku: "HEINEKEN Lata Sleek 350ml", gmv: "538.059", gmvDia: "13.796", gmvDiaQ1: "11.694", delta: "+18,0%" },
  { sku: "HEINEKEN Long Neck 330ml", gmv: "467.008", gmvDia: "11.975", gmvDiaQ1: "11.357", delta: "+5,4%" },
  { sku: "AMSTEL Lager Sleek Lata 350ml", gmv: "319.321", gmvDia: "8.188", gmvDiaQ1: "7.190", delta: "+13,9%" },
  { sku: "HEINEKEN Garrafa 600ml", gmv: "167.887", gmvDia: "4.305", gmvDiaQ1: "4.081", delta: "+5,5%" },
  { sku: "HEINEKEN 473ml", gmv: "93.665", gmvDia: "2.402", gmvDiaQ1: "2.388", delta: "+0,6%" },
] as const;

export const TOP5_PORTFOLIO_PART = [
  { sku: "HEINEKEN Lata Sleek 350ml", partAcao: "28,78%", partQ1: "27,08%", delta: "+1,70" },
  { sku: "HEINEKEN Long Neck 330ml", partAcao: "24,98%", partQ1: "26,30%", delta: "−1,32" },
  { sku: "AMSTEL Lager Sleek Lata 350ml", partAcao: "17,08%", partQ1: "16,65%", delta: "+0,43" },
  { sku: "HEINEKEN Garrafa 600ml", partAcao: "8,98%", partQ1: "9,45%", delta: "−0,47" },
  { sku: "HEINEKEN 473ml", partAcao: "5,01%", partQ1: "5,53%", delta: "−0,52" },
] as const;

export const TOP5_CAT_GMV = [
  { sku: "HEINEKEN Lata Sleek 350ml", gmv: "537.533", gmvDia: "13.783", gmvDiaQ1: "11.691", delta: "+17,9%" },
  { sku: "HEINEKEN Long Neck 330ml", gmv: "468.083", gmvDia: "12.002", gmvDiaQ1: "11.355", delta: "+5,7%" },
  { sku: "AMSTEL Lager Sleek Lata 350ml", gmv: "317.943", gmvDia: "8.152", gmvDiaQ1: "7.190", delta: "+13,4%" },
  { sku: "STELLA ARTOIS Pure Gold LN 330ml", gmv: "252.107", gmvDia: "6.464", gmvDiaQ1: "4.604", delta: "+40,4%" },
  { sku: "CORONA Long Neck 330ml", gmv: "194.700", gmvDia: "4.992", gmvDiaQ1: "5.285", delta: "−5,5%" },
] as const;

export const TOP5_CAT_MS = [
  { sku: "HEINEKEN Lata Sleek 350ml", shareAcao: "13,39%", shareQ1: "12,52%", delta: "+0,87" },
  { sku: "HEINEKEN Long Neck 330ml", shareAcao: "11,66%", shareQ1: "12,16%", delta: "−0,50" },
  { sku: "AMSTEL Lager Sleek Lata 350ml", shareAcao: "7,92%", shareQ1: "7,70%", delta: "+0,22" },
  { sku: "STELLA ARTOIS Pure Gold LN 330ml", shareAcao: "6,28%", shareQ1: "4,93%", delta: "+1,35" },
  { sku: "CORONA Long Neck 330ml", shareAcao: "4,85%", shareQ1: "5,66%", delta: "−0,81" },
] as const;

export const TAB2_INSIGHTS: Array<{ title: string; body: string }> = [
  {
    title: "Sucesso carrega em ROAS + GMV incremental, não em MS fino.",
    body: "R$240k → GMV R$1,87M (ROAS 7,79×). GMV/dia do portfólio da ação +11,0% vs Q1, +0,8 pp acima da categoria. Market Share +0,33 pp confirma ausência de erosão e ganho leve — suporte, não abertura.",
  },
  {
    title: "Telas ergue o teto de GMV; a ação já batia a categoria.",
    body: "Ação +11,0% GMV/dia vs categoria +10,2% (+0,8 pp). Telas +16,4% vs Q1 — +5,4 pp acima da ação. Mesma mecânica de Copa; no meio Telas o GMV/dia responde mais forte.",
  },
  {
    title: "Comportamento idêntico, receita diferente.",
    body: "Frequência e ticket/cliente iguais em Ação e Telas. O que diverge é o nível de GMV/dia, não o formato da base.",
  },
  {
    title: "Portfólio da ação = 46,57% do GMV cervejeiro do canal na Copa.",
    body: "Quase metade do faturamento da ocasião \u201Cjogo em casa\u201D no Market4U passou por Heineken+Amstel+Eisenbahn da ação. Claim \u201CO estádio Heineken é a casa do consumidor\u201D materializa-se em concentração de GMV de canal.",
  },
  {
    title: "Sleek 350ml é o ace do portfólio.",
    body: "+18,0% GMV/dia e +1,70 pp de participação no portfólio. Long Neck (−1,32 pp de mix) mesmo assim +5,4% GMV/dia; Garrafa 600ml (−0,47 pp) +5,5% GMV/dia. Perda de mix ≠ perda de receita.",
  },
  {
    title: "Aquisição com diluição controlada vs mercado.",
    body: "Clientes/dia Heineken +34,2% vs categoria +40,1% (menos volume de porta). Frequência −22,2% vs −26,2% e ticket/cliente −17,4% vs −21,7%: Heineken preserva melhor o core enquanto a mecânica 10/15% off abre base.",
  },
  {
    title: "Ticket médio +5,7% com desconto ativo.",
    body: "Mesma variação Heineken e categoria. Na ocasião jogo em casa, valor por cupom sobe mesmo com 10/15% off — promoção puxou volume/base sem destruir valor transacional.",
  },
  {
    title: "Competitivo em uma linha:",
    body: "Stella é o outlier (+40,4% GMV/dia, +1,35 pp) por maturidade de nicho — oportunidade de flanco; Corona recua (−5,5% GMV/dia, −0,81 pp). Core Heineken/Amstel estabiliza e lidera via Sleek.",
  },
];

export const STELLA_CALLOUT =
  "Stella +40,4% GMV/dia e +1,35 pp share na Copa — outlier de nicho; sinal de flanco para onda seguinte, sem deslocar a narrativa de sucesso Heineken.";

// TAB 3
export const TAB3_HERO = [
  { value: "3,24%", label: "CTR da ação", tooltip: "Clicks ÷ Impressões no período 11/06–19/07." },
  {
    value: "1,94×",
    label: "CTR vs Parceiros no período",
    tooltip: "3,24% ÷ 1,67% (Parceiros M4U ex-Heineken no mesmo intervalo da ação).",
  },
  { value: "7,10", label: "Impactos por usuário", tooltip: "Impressões totais ÷ Alcance (4.686.849 ÷ 659.758)." },
] as const;

export const TAB3_HERO_MICROCOPY =
  "Eficiência de clique quase 2× a dos demais parceiros no mesmo período, com 7,10 impactos médios por usuário alcançado — pressão contínua na jornada do torcedor (7 estados de comportamento), medida em frequência de exposição.";

export type MediaChip = "ctr" | "impressoesDia" | "clicksDia";

export const MEDIA_ACTORS = [
  "Heineken Copa (ação)",
  "Heineken Jan–Mai/2026",
  "Parceiros M4U Jan–Mai/2026",
  "Parceiros M4U período ação",
] as const;

export const MEDIA_COMPARISON: Record<
  MediaChip,
  {
    title: string;
    unit: "pct" | "num";
    data: { actor: string; value: number; label: string; extra?: string }[];
    note?: string;
  }
> = {
  ctr: {
    title: "CTR",
    unit: "pct",
    data: [
      { actor: "Heineken Copa (ação)", value: 3.24, label: "3,24%" },
      { actor: "Heineken Jan–Mai/2026", value: 1.95, label: "1,95%", extra: "1,66×" },
      { actor: "Parceiros M4U Jan–Mai/2026", value: 1.88, label: "1,88%", extra: "1,72×" },
      { actor: "Parceiros M4U período ação", value: 1.67, label: "1,67%", extra: "1,94×" },
    ],
  },
  impressoesDia: {
    title: "Impressões Totais",
    unit: "num",
    data: [
      { actor: "Heineken Copa (ação)", value: 4686849, label: "4.686.849" },
      { actor: "Heineken Jan–Mai/2026", value: 2121474, label: "2.121.474" },
      { actor: "Parceiros M4U Jan–Mai/2026", value: 12130346, label: "12.130.346" },
      { actor: "Parceiros M4U período ação", value: 6388184, label: "6.388.184" },
    ],
  },
  clicksDia: {
    title: "Clicks Totais",
    unit: "num",
    data: [
      { actor: "Heineken Copa (ação)", value: 151987, label: "151.987" },
      { actor: "Heineken Jan–Mai/2026", value: 41324, label: "41.324" },
      { actor: "Parceiros M4U Jan–Mai/2026", value: 227932, label: "227.932" },
      { actor: "Parceiros M4U período ação", value: 106903, label: "106.903" },
    ],
  },
};

export const MEDIA_FIXED_INSIGHT =
  "CTR da ação superou Heineken pré-Copa e o ambiente de parceiros M4U (antes e durante o torneio). No mesmo intervalo da ação, a marca entregou 1,94× a taxa de clique dos demais parceiros — engajamento de decisão, não só presença.";

export const WEIGHT_COPA = {
  bigImpressoes: "68,8%",
  bigClicks: "78,6%",
  rows: [
    { metric: "Impressões", jm: "2.121.474", copa: "4.686.849", pct: "68,8%" },
    { metric: "Clicks", jm: "41.324", copa: "151.987", pct: "78,6%" },
    { metric: "Dias", jm: "151", copa: "39", pct: "20,5% dos dias" },
  ],
  callout:
    "Em 20,5% da janela de dias (39/190), a Copa concentrou ~69% das impressões e ~79% dos clicks Heineken do recorte Jan–Mai+ação — e elevou o CTR de 1,95% para 3,24%.",
} as const;

export const SHARE_ECO = {
  bigImpressoes: "42,3%",
  bigClicks: "58,7%",
  rows: [
    { metric: "Share impr", jm: "14,9%", copa: "42,3%", delta: "+27,4 pp" },
    { metric: "Share clicks", jm: "15,3%", copa: "58,7%", delta: "+43,4 pp" },
  ],
  callout:
    "Heineken saiu de ~15% da exposição/cliques do ecossistema (Jan–Mai) para 42% das impressões e 59% dos clicks no período da Copa — domínio de atenção no intervalo da ação, não só CTR alto em silo.",
} as const;

export const STACKING = {
  rows: [
    { label: "Impactos por usuário", value: "7,10" },
    { label: "Alcance", value: "659.758" },
    { label: "Impressões totais", value: "4.686.849" },
    { label: "Clicks totais", value: "151.987" },
  ],
  states: [
    "1. Me organizando (Semana) — E-mkt",
    "2. Hora de abastecer (T-120min) — Banner",
    "3. Tá no Jogo (Durante a Partida) — Banner",
    "4. Dia de Jogo — Banner + Pop-up",
    "5. Já vai começar (T-10min) — Push",
    "6. Precisa de refil (Intervalo) — Push",
    "7. Hora de comemorar (Final do Evento) — E-mkt",
  ],
  note: "A arquitetura operacional prevê 7 estados (Me organizando → Hora de comemorar) com E-mkt, Banner, Pop-up e Push; o stacking medido (7,10) é a frequência média de exposição no período — evidência agregada de presença recorrente na jornada do torcedor em casa.",
} as const;

export const TAB3_ABSOLUTES = [
  { label: "Impressões", value: "4.686.849" },
  { label: "Clicks", value: "151.987" },
  { label: "CTR", value: "3,24%" },
  {
    label: "Alcance",
    value: "659.758",
    tooltip: "Usuários únicos impactados no período da ação (base de veiculação).",
  },
  { label: "Impressões/dia", value: "120.176" },
  { label: "Clicks/dia", value: "3.897" },
  { label: "Impactos/usuário", value: "7,10" },
  { label: "Investimento (ref.)", value: "R$ 240.000" },
  { label: "ROAS (ref.)", value: "7,79×" },
  { label: "Push Notification", value: "111 disparos" },
  { label: "E-mkt", value: "6.109.044 envios" },
  { label: "Taxa de Abertura E-mkt", value: "10,62%" },
] as const;

export const TAB3_INSIGHTS: Array<{ title: string; body: string }> = [
  {
    title: "CTR 3,24% é o ace de eficiência.",
    body: "1,66× Heineken Jan–Mai (1,95%), 1,72× Parceiros Jan–Mai (1,88%) e 1,94× Parceiros no mesmo período da ação (1,67%). Engajamento acima de todas as bases disponíveis.",
  },
  {
    title: "Copa = quase 4/5 dos clicks Heineken no recorte Jan–ação.",
    body: "39 dias (20,5% da janela) carregaram 68,8% das impressões e 78,6% dos clicks Heineken vs Jan–Mai somado à ação. O torneio foi o núcleo do entregável de mídia da marca no canal.",
  },
  {
    title: "Share de ecossistema explode na Copa.",
    body: "Heineken vai de 14,9% → 42,3% das impressões e de 15,3% → 58,7% dos clicks frente aos demais parceiros M4U. Presença relativa multiplica junto com a eficiência.",
  },
  {
    title: "Volume diário próprio em outro patamar.",
    body: "vs Heineken pré-Copa: 8,55× impressões/dia e 14,2× clicks/dia. A ação escala saída e conversão de atenção simultaneamente.",
  },
  {
    title: "Stacking 7,10 impactos/usuário sustenta o claim de casa.",
    body: "Frequência alta no período conversa com a jornada de 7 estados e com a ocasião consumo em casa para assistir ao jogo. Mídia recorrente + promo 10/15% off nos dias de jogo = pressão no momento de abastecer.",
  },
  {
    title: "Concentração de impressões da marca no período da Copa.",
    body: "Heineken entregou 4.686.849 impressões nos 39 dias da ação — 120,9% a mais que as 2.121.474 acumuladas nos 151 dias de Jan–Mai/2026 somados. Frente ao ecossistema, a marca deteve 73,4% do volume somado dos demais parceiros M4U no mesmo intervalo (4.686.849 vs 6.388.184) — presença dominante em impressões durante o torneio.",
  },
];

export const FOOTER_NOTE =
  "Variações comerciais em base diária (ação 39d · Q1 90d). Mídia: J–M=151d · ação=39d. Parceiros M4U = ex-Heineken. Participação de portfólio ≠ Market Share de categoria.";
