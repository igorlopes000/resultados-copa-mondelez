// Frozen canonical numbers — DO NOT recalculate.
export const META = {
  brand: "MONDELEZ",
  actionLabel: "COPA DO MUNDO · MARKET4U",
  channel: "market4u",
  investment: 200000,
  investmentLabel: "R$ 200.000,00",
  actionDays: 39,
  q1Days: 90,
  jmDays: 151,
  periodAction: "11/06 a 19/07",
  claim: "O ESTÁDIO MONDELEZ É A CASA DO CONSUMIDOR.",
  subclaim: "ROAS de 5,72x sobre R$ 200.000 investidos, com GMV diário +30,5% vs Q1 e market share +0,46 p.p.",
  portfolioLabel: "Oreo, Trident, Club Social e Bis",
} as const;

export const ROAS_LABEL = "5,72x";

export const TAB1_BIG = [
  {
    value: "5,72x",
    label: "ROAS",
    tooltip: "GMV total da ação ÷ Investimento. GMV R$ 1.143.835 ÷ R$ 200.000,00.",
  },
  {
    value: "+30,5%",
    label: "GMV diário vs Q1",
    tooltip: "GMV diário médio da ação ÷ GMV diário médio de Q1 (portfólio da ação: Oreo, Trident, Club Social e Bis).",
  },
  {
    value: "43.239",
    label: "Novos Compradores",
    tooltip: "Foram atraídos 43.239 novos compradores para as marcas, sem compras nos últimos 90 dias",
  },
] as const;

export const TAB1_BEHAVIOR = [
  { label: "Δ Market Share vs Q1", value: "+0,46 p.p." },
  { label: "Δ GMV Diário vs Q1", value: "+30,5%" },
  { label: "Δ Clientes Distintos Diários vs Q1", value: "+57,7%" },
  { label: "Δ Transações Diárias vs Q1", value: "+24,0%" },
  { label: "Δ Frequência vs Q1", value: "−0,53 p.p." },
  { label: "CTR médio", value: "3,04%" },
] as const;

export const TAB1_BEHAVIOR_NOTE =
  "Frequência: recuo de −0,53 p.p. vs Q1 (2,5 → 1,97), efeito esperado de janela curta (39 dias) com base ampliada (+57,7% em clientes/dia). Em Categorias Acumuladas a queda é −1,7 p.p. (5,4 → 3,7). A Mondelez dilui menos a recorrência e entrega GMV/dia e share acima da base.";

export const TAB1_ABSOLUTES = [
  { label: "Alcance (usuários únicos)", value: "535.083" },
  { label: "GMV Total (R$)", value: "1.143.835" },
  { label: "Impressões Totais", value: "3.801.067" },
  { label: "Clicks Totais", value: "115.416" },
] as const;

// TAB 2
export type IndicatorKey = "gmv" | "transacoes" | "ticket" | "clientes" | "frequencia" | "ticketCliente";

export const COMMERCIAL_INDICATORS: Record<
  IndicatorKey,
  {
    chipLabel: string;
    fullLabel: string;
    mondelez: number;
    categorias: number;
    mondelezLabel: string;
    categoriasLabel: string;
    gapLabel: string;
    unit: "pct" | "pp";
    note?: string;
  }
> = {
  gmv: {
    chipLabel: "GMV",
    fullLabel: "GMV x Q1",
    mondelez: 30.5,
    categorias: 23.8,
    mondelezLabel: "+30,5%",
    categoriasLabel: "+23,8%",
    gapLabel: "Mondelez − Cat. = +6,7 p.p.",
    unit: "pct",
  },
  transacoes: {
    chipLabel: "Transações",
    fullLabel: "Transações Diárias x Q1",
    mondelez: 24.0,
    categorias: 18.8,
    mondelezLabel: "+24,0%",
    categoriasLabel: "+18,8%",
    gapLabel: "Mondelez − Cat. = +5,2 p.p.",
    unit: "pct",
  },
  ticket: {
    chipLabel: "Ticket",
    fullLabel: "Ticket Médio x Q1",
    mondelez: 5.8,
    categorias: 4.3,
    mondelezLabel: "+5,8%",
    categoriasLabel: "+4,3%",
    gapLabel: "Mondelez − Cat. = +1,5 p.p.",
    unit: "pct",
  },
  clientes: {
    chipLabel: "Clientes",
    fullLabel: "Clientes Distintos Diários x Q1",
    mondelez: 57.7,
    categorias: 73.5,
    mondelezLabel: "+57,7%",
    categoriasLabel: "+73,5%",
    gapLabel: "Mondelez − Cat. = −15,8 p.p.",
    unit: "pct",
    note: "Nunca ler +57,7% isolado: Categorias Acumuladas +73,5%. A Mondelez expande a base com força, mesmo abaixo do ritmo do mercado agregado, os demais indicadores apontam que tras base mais qualificada.",
  },
  frequencia: {
    chipLabel: "Frequência",
    fullLabel: "Frequência x Q1",
    mondelez: -0.53,
    categorias: -1.7,
    mondelezLabel: "−0,53 p.p.",
    categoriasLabel: "−1,7 p.p.",
    gapLabel: "Mondelez − Cat. = +1,17 p.p. (dilui menos)",
    unit: "pp",
    note: "Queda de frequência em pontos percentuais = efeito de janela curta (39d) com base ampliada. Não ler como perda de hábito do core. Mondelez dilui menos que Categorias Acumuladas (−0,53 p.p. vs −1,7 p.p.).",
  },
  ticketCliente: {
    chipLabel: "Ticket/cliente",
    fullLabel: "Ticket / Cliente x Q1",
    mondelez: -17.2,
    categorias: -29.2,
    mondelezLabel: "−17,2%",
    categoriasLabel: "−29,2%",
    gapLabel: "Mondelez − Cat. = +12,0 p.p. (dilui menos)",
    unit: "pct",
  },
};

export const COMMERCIAL_CALLOUT =
  "Mondelez supera Categorias Acumuladas em GMV (+6,7 p.p.), transações (+5,2 p.p.) e ticket (+1,5 p.p.); preserva melhor ticket/cliente (gap +12,0 p.p.) e dilui menos a frequência (−0,53 p.p. vs −1,7 p.p.) na ocasião de consumo em casa.";

export const COMMERCIAL_SUBTITLE =
  "Comparação self Mondelez (ação vs Q1) contra Categorias Acumuladas (ação vs Q1). Fluxos (GMV, transações, clientes) normalizados por dia (ação 39d · Q1 90d). Ticket e ticket/cliente em %. Frequência em p.p.";

export const TAB2_INSIGHTS: Array<{ title: string; body: string }> = [
  {
    title: "ROAS 5,72x com GMV acima do mercado.",
    body: "Com R$ 200.000 investidos, a ativação gerou R$ 1.143.835 em GMV — ROAS 5,72x. O GMV diário do portfólio Mondelez (Oreo, Trident, Club Social e Bis) subiu +30,5% vs Q1 e superou Categorias Acumuladas (+23,8%) por +6,7 p.p. Crescimento com retorno, acima do mercado, no mesmo canal e na mesma janela.",
  },
  {
    title: "Tríade de demanda: GMV, transações e ticket.",
    body: "Nos três vetores de qualidade de demanda, a Mondelez fica à frente de Categorias Acumuladas: GMV/dia +30,5% vs +23,8% · transações/dia +24,0% vs +18,8% · ticket +5,8% vs +4,3%. Gaps de +6,7 · +5,2 · +1,5 p.p. — mais demanda e mais valor por ato de compra do que o referencial do mercado.",
  },
  {
    title: "Share com conversão e valor.",
    body: "O market share do portfólio avançou de 8,35% para 8,81% (+0,46 p.p.). No mesmo período, ticket médio e transações diárias também superam Categorias Acumuladas. Ganho de participação com conversão e valor — não é share oco.",
  },
  {
    title: "O Estádio Mondelez vira resultado.",
    body: "Na ocasião de assistir ao jogo em casa, Oreo, Trident, Club Social e Bis entregam ROAS 5,72x, GMV/dia +30,5% e share +0,46 p.p., com performance acima de Categorias Acumuladas em GMV, transação e ticket. O claim se materializa: o estádio é a casa do consumidor — e o snack da casa performa.",
  },
  {
    title: "Valor por comprador mais resiliente que o mercado.",
    body: "Ticket por cliente recua −17,2% vs Q1, contra −29,2% em Categorias Acumuladas (gap +12,0 p.p.). Com ticket por transação em alta (+5,8% vs +4,3%), a Mondelez preserva melhor o rendimento por comprador do que o agregado do mercado — expansão com mais qualidade relativa de valor.",
  },
];

// TAB 3
export const TAB3_HERO = [
  { value: "3,04%", label: "CTR da ação", tooltip: "Clicks ÷ Impressões no período 11/06–19/07." },
  {
    value: "1,88×",
    label: "CTR vs Parceiros no período",
    tooltip: "3,04% ÷ 1,61% (Parceiros M4U ex-Mondelez no mesmo intervalo da ação).",
  },
  { value: "7,10", label: "Impactos por usuário", tooltip: "Impressões totais ÷ Alcance (3.801.067 ÷ 535.083)." },
] as const;

export const TAB3_HERO_MICROCOPY =
  "Eficiência de clique 1,88× a dos demais parceiros no mesmo período, com 7,10 impactos médios por usuário alcançado — pressão contínua na jornada do consumidor em casa (7 estados de comportamento), medida em frequência de exposição.";

export type MediaChip = "ctr" | "impressoesDia" | "clicksDia";

export const MEDIA_ACTORS = [
  "Mondelez Copa (ação)",
  "Mondelez Jan–Mai/2026",
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
      { actor: "Mondelez Copa (ação)", value: 3.04, label: "3,04%" },
      { actor: "Mondelez Jan–Mai/2026", value: 3.36, label: "3,36%", extra: "0,90×" },
      { actor: "Parceiros M4U Jan–Mai/2026", value: 2.22, label: "2,22%", extra: "1,37×" },
      { actor: "Parceiros M4U período ação", value: 1.61, label: "1,61%", extra: "1,88×" },
    ],
  },
  impressoesDia: {
    title: "Impressões/dia",
    unit: "num",
    data: [
      { actor: "Mondelez Copa (ação)", value: 97463, label: "97.463" },
      { actor: "Mondelez Jan–Mai/2026", value: 12833, label: "12.833", extra: "7,6×" },
      { actor: "Parceiros M4U Jan–Mai/2026", value: 112621, label: "112.621" },
      { actor: "Parceiros M4U período ação", value: 250470, label: "250.470" },
    ],
    note: "Parceiros no período da ação somam mais impressões/dia que a Mondelez isolada (250.470 vs 97.463). O ganho da ação não é maior volume absoluto que todo o ambiente, e sim eficiência (CTR vs parceiros) + share de ecossistema + peso no recorte da marca.",
  },
  clicksDia: {
    title: "Clicks/dia",
    unit: "num",
    data: [
      { actor: "Mondelez Copa (ação)", value: 2959, label: "2.959" },
      { actor: "Mondelez Jan–Mai/2026", value: 431, label: "431", extra: "6,9×" },
      { actor: "Parceiros M4U Jan–Mai/2026", value: 2506, label: "2.506" },
      { actor: "Parceiros M4U período ação", value: 4044, label: "4.044" },
    ],
  },
};

export const MEDIA_FIXED_INSIGHT =
  "No mesmo intervalo da ação, a Mondelez entregou 1,88× a taxa de clique dos demais parceiros M4U (3,04% vs 1,61%) e 1,37× vs Parceiros Jan–Mai/2026 (2,22%). Engajamento de decisão no ecossistema, com escala de saída vs o próprio pré-Copa (7,6× impressões/dia e 6,9× clicks/dia).";

export const WEIGHT_COPA = {
  bigImpressoes: "66,2%",
  bigClicks: "63,9%",
  rows: [
    { metric: "Impressões", jm: "1.937.851", copa: "3.801.067", pct: "66,2%" },
    { metric: "Clicks", jm: "65.156", copa: "115.416", pct: "63,9%" },
    { metric: "Dias", jm: "151", copa: "39", pct: "20,5% dos dias" },
  ],
  callout:
    "Em 20,5% da janela de dias (39/190), a Copa concentrou 66,2% das impressões e 63,9% dos clicks Mondelez do recorte Jan–Mai+ação — poucas semanas carregam a maior parte da atenção da marca no canal.",
} as const;

export const SHARE_ECO = {
  bigImpressoes: "28,0%",
  bigClicks: "42,3%",
  rows: [
    { metric: "Share impr", jm: "10,2%", copa: "28,0%", delta: "+17,8 pp" },
    { metric: "Share clicks", jm: "14,7%", copa: "42,3%", delta: "+27,6 pp" },
  ],
  callout:
    "Mondelez saiu de 10,2% das impressões e 14,7% dos clicks do ecossistema (Jan–Mai) para 28,0% das impressões e 42,3% dos clicks no período da Copa — domínio relativo de atenção e resposta no intervalo da ação.",
} as const;

export const STACKING = {
  rows: [
    { label: "Impactos por usuário", value: "7,10" },
    { label: "Alcance", value: "535.083" },
    { label: "Impressões totais", value: "3.801.067" },
    { label: "Clicks totais", value: "115.416" },
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
  note: "A arquitetura operacional prevê 7 estados (Me organizando → Hora de comemorar) com E-mkt, Banner, Pop-up e Push; o stacking medido (7,10) é a frequência média de exposição no período — evidência agregada de presença recorrente na jornada do consumidor em casa.",
} as const;

export const TAB3_ABSOLUTES = [
  { label: "Impressões", value: "3.801.067" },
  { label: "Clicks", value: "115.416" },
  { label: "CTR", value: "3,04%" },
  {
    label: "Alcance",
    value: "535.083",
    tooltip: "Usuários únicos impactados no período da ação (base de veiculação).",
  },
  { label: "Impressões/dia", value: "97.463" },
  { label: "Clicks/dia", value: "2.959" },
  { label: "Impactos/usuário", value: "7,10" },
  { label: "Investimento (ref.)", value: "R$ 200.000" },
  { label: "ROAS (ref.)", value: "5,72×" },
  { label: "Push Notification", value: "103 disparos" },
  { label: "E-mkt", value: "3.678.591 envios" },
  { label: "Taxa de Abertura E-mkt", value: "10,2%" },
] as const;

export const TAB3_INSIGHTS: Array<{ title: string; body: string }> = [
  {
    title: "CTR 3,04% em outro patamar no ecossistema.",
    body: "CTR da Copa em 3,04% — 1,88× o CTR dos Parceiros M4U no mesmo período (1,61%) e 1,37× o dos Parceiros em Jan–Mai/2026 (2,22%). Em atenção que responde, a Mondelez opera acima do ambiente de parceiros.",
  },
  {
    title: "Domínio de share na janela da Copa.",
    body: "Share de impressões Mondelez no ecossistema M4U sobe de 10,2% (Jan–Mai) para 28,0% na ação (+17,8 p.p.). Em clicks, de 14,7% para 42,3% (+27,6 p.p.). Na Copa, a marca deixa de ser presença residual e captura fatia decisiva da atenção e da resposta.",
  },
  {
    title: "Poucas semanas, a maior parte da atenção.",
    body: "A Copa é 20,5% dos dias do recorte Jan–Mai + ação, mas concentra 66,2% das impressões e 63,9% dos clicks Mondelez nesse intervalo. A ativação carrega o ano de atenção da marca no canal.",
  },
  {
    title: "Mídia que vira retorno.",
    body: "Com CTR 3,04% (1,88× vs Parceiros no período), 7,10 impactos por usuário e 115.416 clicks em 39 dias, a pressão de mídia sustenta ROAS 5,72x sobre R$ 200.000. Topo de funil com ponte clara para resultado de negócio.",
  },
  {
    title: "Ecossistema completo na casa do consumidor.",
    body: "Além de 3.801.067 impressões e 115.416 clicks, a ativação soma 103 disparos de push, 3.678.591 envios de e-mkt e 10,2% de abertura. Não é só display: é coordenação de canais no Market4U para a ocasião de consumo em casa ao longo da Copa.",
  },
];

export const FOOTER_NOTE =
  "Variações comerciais em base diária (ação 39d · Q1 90d). Frequência em p.p.; demais deltas de fluxo/ticket em %. Mídia: J–M=151d · ação=39d. Parceiros M4U = ex-Mondelez.";
