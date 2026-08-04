import { useState, type ReactNode } from "react";
import { Info } from "lucide-react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
  LabelList,
  Cell,
} from "recharts";
import {
  META,
  ROAS_LABEL,
  TAB1_BIG,
  TAB1_BEHAVIOR,
  TAB1_BEHAVIOR_NOTE,
  TAB1_ABSOLUTES,
  SKU_ANCHOR,
  COMMERCIAL_INDICATORS,
  COMMERCIAL_CALLOUT,
  TOP5_PORTFOLIO_GMV,
  TOP5_PORTFOLIO_PART,
  TOP5_CAT_GMV,
  TOP5_CAT_MS,
  TAB2_INSIGHTS,
  STELLA_CALLOUT,
  TAB3_HERO,
  TAB3_HERO_MICROCOPY,
  MEDIA_COMPARISON,
  MEDIA_FIXED_INSIGHT,
  WEIGHT_COPA,
  SHARE_ECO,
  STACKING,
  TAB3_ABSOLUTES,
  TAB3_INSIGHTS,
  FOOTER_NOTE,
  type IndicatorKey,
  type MediaChip,
} from "@/data/canonical";

type TabKey = "executiva" | "comercial" | "midia";

// Delta color: green when positive, red when negative, black when zero.
function deltaClass(delta: string): string {
  const s = delta.trim();
  // strip common prefixes and units, keep sign + digits
  const cleaned = s.replace(/pp|p\.p\.|%|\s/gi, "");
  if (/^[−-]/.test(cleaned)) return "text-[var(--color-hein-red)]";
  const num = parseFloat(cleaned.replace(",", ".").replace(/^\+/, ""));
  if (!isNaN(num) && num === 0) return "text-black";
  if (/^\+/.test(cleaned) || (!isNaN(num) && num > 0)) return "text-[var(--color-hein-600)]";
  return "text-[var(--color-ink)]";
}

// ---------- Shared primitives ----------

function InfoTip({ text }: { text: string }) {
  return (
    <span className="relative inline-block group align-middle">
      <Info className="inline h-3.5 w-3.5 opacity-70 cursor-help" />
      <span className="pointer-events-none absolute left-1/2 top-full z-50 mt-1 hidden w-72 -translate-x-1/2 rounded-md bg-[var(--color-ink)] p-2 text-xs font-normal leading-snug text-white shadow-lg group-hover:block">
        {text}
      </span>
    </span>
  );
}

function BigNumberCard({
  value,
  label,
  tooltip,
  variant = "green",
}: {
  value: string;
  label: string;
  tooltip?: string;
  variant?: "green" | "white";
}) {
  const isGreen = variant === "green";
  return (
    <div
      className={`relative rounded-xl p-6 shadow-sm ${
        isGreen
          ? "bg-[var(--color-hein-600)] text-white"
          : "bg-white text-[var(--color-ink)] border border-[var(--color-line-soft)]"
      }`}
    >
      <div className="flex items-start justify-between">
        <span className="text-[11px] font-semibold uppercase tracking-widest opacity-90">
          {label}
        </span>
        {tooltip && <InfoTip text={tooltip} />}
      </div>
      <div className="mt-2 font-display text-4xl font-extrabold leading-tight md:text-5xl">
        {value}
      </div>
    </div>
  );
}

function FrameCard({
  children,
  title,
  className = "",
}: {
  children: ReactNode;
  title?: string;
  className?: string;
}) {
  return (
    <section
      className={`rounded-xl bg-white border-[3px] border-[var(--color-hein-600)] shadow-sm ${className}`}
    >
      {title && (
        <header className="border-b border-[var(--color-line-soft)] px-5 py-3">
          <h2 className="font-display text-sm font-bold uppercase tracking-wider text-[var(--color-ink)]">
            {title}
          </h2>
        </header>
      )}
      <div className="p-5">{children}</div>
    </section>
  );
}

function InsightPanel({ insights }: { insights: Array<{ title: string; body: string }> }) {
  return (
    <aside className="lg:sticky lg:top-24 rounded-xl bg-white border-l-8 border-[var(--color-hein-600)] shadow-sm">
      <header className="px-5 py-3 border-b border-[var(--color-line-soft)]">
        <h3 className="font-display text-sm font-bold uppercase tracking-wider text-[var(--color-ink)]">
          Insights Gerais
        </h3>
      </header>
      <ol className="divide-y divide-[var(--color-line-soft)]">
        {insights.map((it, i) => (
          <li key={i} className="px-5 py-4">
            <p className="font-display text-sm font-bold text-[var(--color-hein-800)] leading-snug">
              {it.title}
            </p>
            <p className="mt-1 text-[13px] text-[var(--color-ink-2)] leading-relaxed">
              {it.body}
            </p>
          </li>
        ))}
      </ol>
    </aside>
  );
}

function Chip({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: ReactNode;
}) {
  return (
    <button
      onClick={onClick}
      className={`rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-wide transition-colors ${
        active
          ? "bg-[var(--color-hein-600)] text-white shadow"
          : "bg-white text-[var(--color-ink-2)] border border-[var(--color-line-soft)] hover:border-[var(--color-hein-600)]"
      }`}
    >
      {children}
    </button>
  );
}

function Badge({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-md bg-[var(--color-surface-3)] px-2 py-1 text-[11px] font-semibold uppercase tracking-wide text-[var(--color-hein-800)]">
      {children}
    </span>
  );
}

// ---------- Header + TabNav ----------

function StarIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5 fill-[var(--color-hein-red)]" aria-hidden>
      <path d="M12 2l2.9 6.9L22 10l-5.5 4.6L18.2 22 12 18l-6.2 4 1.7-7.4L2 10l7.1-1.1L12 2z" />
    </svg>
  );
}

function Header() {
  return (
    <header className="sticky top-0 z-40 bg-[var(--color-hein-900)] text-white">
      <div className="mx-auto flex max-w-[1440px] items-center justify-between gap-4 px-6 py-4">
        <div className="flex items-center gap-3">
          <StarIcon />
          <div className="leading-tight">
            <div className="font-display text-lg font-extrabold uppercase tracking-wider">
              {META.brand}
            </div>
            <div className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white/70">
              {META.actionLabel}
            </div>
          </div>
        </div>
        <div className="hidden md:block font-display text-sm font-semibold uppercase tracking-widest text-white/90">
          {META.channel}
        </div>
        <div className="text-right leading-tight">
          <div className="text-[10px] font-semibold uppercase tracking-widest text-white/70">
            Investimento
          </div>
          <div className="font-display text-base font-bold">{META.investmentLabel}</div>
        </div>
      </div>
    </header>
  );
}

function TabNav({ tab, setTab }: { tab: TabKey; setTab: (t: TabKey) => void }) {
  const items: { key: TabKey; label: string }[] = [
    { key: "executiva", label: "Visão Executiva" },
    { key: "comercial", label: "Resultados Comerciais" },
    { key: "midia", label: "Resultados de Mídia" },
  ];
  return (
    <nav className="sticky top-[68px] z-30 border-b border-[var(--color-line-soft)] bg-white">
      <div className="mx-auto flex max-w-[1440px] items-center gap-2 px-6">
        {items.map((it) => {
          const active = tab === it.key;
          return (
            <button
              key={it.key}
              onClick={() => setTab(it.key)}
              className={`relative px-4 py-4 text-sm font-semibold uppercase tracking-wider transition-colors ${
                active ? "text-[var(--color-hein-700)]" : "text-[var(--color-ink-2)]/70 hover:text-[var(--color-ink)]"
              }`}
            >
              {it.label}
              {active && (
                <span className="absolute inset-x-3 bottom-0 h-[3px] rounded-full bg-[var(--color-hein-600)]" />
              )}
            </button>
          );
        })}
      </div>
    </nav>
  );
}

// ---------- TAB 1 ----------

function Tab1() {
  return (
    <div className="mx-auto max-w-[1440px] px-6 py-8 space-y-6">
      <section className="rounded-2xl bg-[var(--color-hein-800)] px-8 py-10 text-center text-white shadow-md">
        <h1 className="font-display text-3xl md:text-5xl font-extrabold uppercase tracking-tight leading-tight">
          {META.claim}
        </h1>
        <p className="mx-auto mt-4 max-w-3xl text-sm md:text-base font-medium text-white/90">
          {META.subclaim}
        </p>
      </section>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {TAB1_BIG.map((b) => (
          <BigNumberCard key={b.label} value={b.value} label={b.label} tooltip={b.tooltip} />
        ))}
      </div>

      <FrameCard title="Indicadores de Comportamento">
        <div className="overflow-hidden rounded-lg border border-[var(--color-line-soft)]">
          <table className="w-full text-sm">
            <tbody>
              {TAB1_BEHAVIOR.map((r, i) => (
                <tr
                  key={r.label}
                  className={i % 2 === 0 ? "bg-white" : "bg-[var(--color-surface-2)]"}
                >
                  <td className="px-4 py-3 text-[var(--color-ink-2)]">{r.label}</td>
                  <td className={`px-4 py-3 text-right font-display font-bold ${/^[+−-]/.test(r.value.trim()) ? deltaClass(r.value) : "text-[var(--color-ink)]"}`}>
                    {r.value}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-4 text-[13px] leading-relaxed text-[var(--color-ink-2)]">
          {TAB1_BEHAVIOR_NOTE}
        </p>
      </FrameCard>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <FrameCard title="Indicadores Absolutos" className="lg:col-span-2">
          <div className="grid grid-cols-2 gap-3">
            {TAB1_ABSOLUTES.map((a) => (
              <div
                key={a.label}
                className="rounded-lg bg-[var(--color-surface-2)] p-4 border border-[var(--color-line-soft)]"
              >
                <div className="text-[11px] font-semibold uppercase tracking-widest text-[var(--color-ink-2)]/70">
                  {a.label}
                </div>
                <div className="mt-1 font-display text-2xl font-extrabold text-[var(--color-ink)]">
                  {a.value}
                </div>
              </div>
            ))}
          </div>
        </FrameCard>
        <FrameCard title="ROAS">
          <div className="flex h-full flex-col items-center justify-center py-4">
            <div className="font-display text-6xl font-extrabold text-[var(--color-hein-700)]">
              {ROAS_LABEL}
            </div>
            <p className="mt-3 text-center text-xs text-[var(--color-ink-2)]/80 leading-relaxed">
              GMV da ação no Market4U dividido pelo investimento de mídia/ativação
              (R$ 240.000,00).
            </p>
          </div>
        </FrameCard>
      </div>
    </div>
  );
}

// ---------- TAB 2 ----------

const INDICATOR_ORDER: IndicatorKey[] = [
  "gmv",
  "transacoes",
  "ticket",
  "clientes",
];
const INDICATOR_MORE: IndicatorKey[] = ["frequencia", "ticketCliente"];

function UpliftChart({ ind }: { ind: IndicatorKey }) {
  const cfg = COMMERCIAL_INDICATORS[ind];
  const data = [
    {
      name: "Heineken Ação",
      value: cfg.heineken,
      label: cfg.heinekenLabel,
      fill: "#008C3A",
    },
    {
      name: "Heineken Telas",
      value: cfg.telas,
      label: cfg.telasLabel,
      fill: "#7CB89A",
    },
    {
      name: "Categoria Cervejas",
      value: cfg.categoria,
      label: cfg.categoriaLabel,
      fill: "#9CA3AF",
    },
  ];
  const values = data.map((d) => d.value);
  const min = Math.min(0, ...values);
  const max = Math.max(0, ...values);
  const pad = Math.max(4, (max - min) * 0.25);
  return (
    <div className="h-[300px] w-full">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data} layout="vertical" margin={{ left: 24, right: 80, top: 12, bottom: 12 }}>
          <CartesianGrid horizontal={false} stroke="#E5E7EB" />
          <XAxis
            type="number"
            domain={[min - pad, max + pad]}
            tickFormatter={(v) => `${v}%`}
            stroke="#6B7280"
            fontSize={11}
          />
          <YAxis
            type="category"
            dataKey="name"
            stroke="#1F2937"
            fontSize={12}
            width={150}
          />
          <Bar dataKey="value" barSize={38} radius={[4, 4, 4, 4]}>
            {data.map((d, i) => (
              <Cell key={i} fill={d.fill} />
            ))}
            <LabelList
              dataKey="label"
              content={(props: any) => {
                const { x, y, width, height, value, index } = props;
                const v = data[index]?.value ?? 0;
                const color = v > 0 ? "#008C3A" : v < 0 ? "#C8102E" : "#000000";
                const isNeg = v < 0;
                const tx = isNeg ? (x ?? 0) - 6 : (x ?? 0) + (width ?? 0) + 6;
                const anchor = isNeg ? "end" : "start";
                return (
                  <text
                    x={tx}
                    y={(y ?? 0) + (height ?? 0) / 2}
                    dy={4}
                    textAnchor={anchor}
                    fill={color}
                    fontWeight={800}
                    fontSize={13}
                  >
                    {value}
                  </text>
                );
              }}
            />
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

function Tab2() {
  const [ind, setInd] = useState<IndicatorKey>("gmv");
  const [portToggle, setPortToggle] = useState<"gmv" | "part">("gmv");
  const [catToggle, setCatToggle] = useState<"gmv" | "ms">("gmv");
  const cfg = COMMERCIAL_INDICATORS[ind];

  return (
    <div className="mx-auto max-w-[1440px] px-6 py-8">
      {/* SKU anchor */}
      <div className="mb-6 rounded-xl bg-gradient-to-r from-[var(--color-hein-800)] to-[var(--color-hein-600)] p-6 text-white shadow-md">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <div className="text-[11px] font-semibold uppercase tracking-[0.2em] text-white/80">
              {SKU_ANCHOR.title}
            </div>
            <div className="mt-1 font-display text-2xl font-extrabold">
              {SKU_ANCHOR.sku}
            </div>
            <div className="mt-1 text-sm text-white/90">{SKU_ANCHOR.metrics}</div>
          </div>
          <p className="max-w-md text-xs text-white/85 leading-relaxed">
            {SKU_ANCHOR.microcopy}
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-[1fr_340px] gap-6">
        <div className="space-y-6">
          {/* Section 1 - Uplift */}
          <FrameCard title={`Uplift Comercial vs Q1 — ${cfg.chipLabel}`}>
            <div className="flex flex-wrap gap-2">
              {INDICATOR_ORDER.map((k) => (
                <Chip key={k} active={ind === k} onClick={() => setInd(k)}>
                  {COMMERCIAL_INDICATORS[k].fullLabel}
                </Chip>
              ))}
              <div className="mx-1 h-6 w-px bg-[var(--color-line-soft)]" />
              {INDICATOR_MORE.map((k) => (
                <Chip key={k} active={ind === k} onClick={() => setInd(k)}>
                  {COMMERCIAL_INDICATORS[k].fullLabel}
                </Chip>
              ))}
            </div>
            <p className="mt-4 rounded-md bg-[var(--color-surface-3)] p-3 text-[13px] text-[var(--color-ink-2)] leading-relaxed">
              {COMMERCIAL_CALLOUT}
            </p>
            <p className="mt-3 text-[11px] italic text-[var(--color-ink-2)]/70">
              Comparação self Heineken Ação vs Q1, Heineken Telas vs Q1 e categoria vs Q1. Fluxos (GMV, transações, clientes) normalizados por dia (ação 39d · Q1 90d). Ticket, frequência e ticket/cliente em razão direta.
            </p>
            <UpliftChart ind={ind} />
            <div className="mt-2 flex flex-wrap items-center gap-2">
              <Badge>{cfg.gapLabel}</Badge>
            </div>
            {cfg.note && (
              <p className="mt-3 text-[13px] text-[var(--color-ink-2)] leading-relaxed">
                {cfg.note}
              </p>
            )}
          </FrameCard>

          {/* Section 2 - Top 5 portfolio */}
          <FrameCard title="Top 5 — Portfólio da Ação">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div className="flex gap-2">
                <Chip active={portToggle === "gmv"} onClick={() => setPortToggle("gmv")}>
                  GMV
                </Chip>
                <Chip active={portToggle === "part"} onClick={() => setPortToggle("part")}>
                  Participação
                </Chip>
              </div>
              <Badge>Participação ≠ Market Share</Badge>
            </div>
            <p className="mt-3 text-xs text-[var(--color-ink-2)]/80">
              Label do mix: Participação GMV do portfólio da ação
            </p>

            {portToggle === "gmv" ? (
              <>
                <div className="mt-4 overflow-x-auto rounded-lg border border-[var(--color-line-soft)]">
                  <table className="w-full text-sm">
                    <thead className="bg-[var(--color-surface-2)] text-[11px] uppercase tracking-wider text-[var(--color-ink-2)]">
                      <tr>
                        <th className="px-3 py-2 text-left">#</th>
                        <th className="px-3 py-2 text-left">SKU</th>
                        <th className="px-3 py-2 text-right">GMV Ação (R$)</th>
                        <th className="px-3 py-2 text-right">GMV/dia Ação</th>
                        <th className="px-3 py-2 text-right">GMV/dia Q1</th>
                        <th className="px-3 py-2 text-right">Δ GMV/dia</th>
                      </tr>
                    </thead>
                    <tbody>
                      {TOP5_PORTFOLIO_GMV.map((r, i) => (
                        <tr key={r.sku} className={i % 2 === 0 ? "bg-white" : "bg-[var(--color-surface-2)]"}>
                          <td className="px-3 py-2 font-bold">{i + 1}</td>
                          <td className="px-3 py-2">{r.sku}</td>
                          <td className="px-3 py-2 text-right">{r.gmv}</td>
                          <td className="px-3 py-2 text-right">{r.gmvDia}</td>
                          <td className="px-3 py-2 text-right text-[var(--color-ink-2)]/70">{r.gmvDiaQ1}</td>
                          <td className={`px-3 py-2 text-right font-bold ${deltaClass(r.delta)}`}>{r.delta}</td>

                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <p className="mt-3 text-[13px] text-[var(--color-ink-2)]">
                  Todos os Top 5 crescem em GMV/dia. Queda de participação (toggle Participação) ≠ queda de receita.
                </p>
              </>
            ) : (
              <>
                <div className="mt-4 overflow-x-auto rounded-lg border border-[var(--color-line-soft)]">
                  <table className="w-full text-sm">
                    <thead className="bg-[var(--color-surface-2)] text-[11px] uppercase tracking-wider text-[var(--color-ink-2)]">
                      <tr>
                        <th className="px-3 py-2 text-left">#</th>
                        <th className="px-3 py-2 text-left">SKU</th>
                        <th className="px-3 py-2 text-right">Part. Ação</th>
                        <th className="px-3 py-2 text-right">Part. Q1</th>
                        <th className="px-3 py-2 text-right">Δ pp</th>
                      </tr>
                    </thead>
                    <tbody>
                      {TOP5_PORTFOLIO_PART.map((r, i) => (
                        <tr key={r.sku} className={i % 2 === 0 ? "bg-white" : "bg-[var(--color-surface-2)]"}>
                          <td className="px-3 py-2 font-bold">{i + 1}</td>
                          <td className="px-3 py-2">{r.sku}</td>
                          <td className="px-3 py-2 text-right">{r.partAcao}</td>
                          <td className="px-3 py-2 text-right text-[var(--color-ink-2)]/70">{r.partQ1}</td>
                          <td className={`px-3 py-2 text-right font-bold ${deltaClass(r.delta)}`}>

                            {r.delta}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <p className="mt-3 text-[13px] text-[var(--color-ink-2)] leading-relaxed">
                  "Participação GMV do portfólio da ação" = peso do SKU no faturamento do portfólio da ação. Variação negativa de participação não implica queda de GMV — cruzar com toggle GMV.
                </p>
              </>
            )}
          </FrameCard>

          {/* Section 3 - Top 5 category */}
          <FrameCard title="Top 5 — Categoria Cervejas (Market4U)">
            <div className="flex gap-2">
              <Chip active={catToggle === "gmv"} onClick={() => setCatToggle("gmv")}>
                GMV
              </Chip>
              <Chip active={catToggle === "ms"} onClick={() => setCatToggle("ms")}>
                Market Share
              </Chip>
            </div>

            {catToggle === "gmv" ? (
              <div className="mt-4 overflow-x-auto rounded-lg border border-[var(--color-line-soft)]">
                <table className="w-full text-sm">
                  <thead className="bg-[var(--color-surface-2)] text-[11px] uppercase tracking-wider text-[var(--color-ink-2)]">
                    <tr>
                      <th className="px-3 py-2 text-left">#</th>
                      <th className="px-3 py-2 text-left">SKU</th>
                      <th className="px-3 py-2 text-right">GMV Ação (R$)</th>
                      <th className="px-3 py-2 text-right">GMV/dia Ação</th>
                      <th className="px-3 py-2 text-right">GMV/dia Q1</th>
                      <th className="px-3 py-2 text-right">Δ GMV/dia</th>
                    </tr>
                  </thead>
                  <tbody>
                    {TOP5_CAT_GMV.map((r, i) => (
                      <tr key={r.sku} className={i % 2 === 0 ? "bg-white" : "bg-[var(--color-surface-2)]"}>
                        <td className="px-3 py-2 font-bold">{i + 1}</td>
                        <td className="px-3 py-2">{r.sku}</td>
                        <td className="px-3 py-2 text-right">{r.gmv}</td>
                        <td className="px-3 py-2 text-right">{r.gmvDia}</td>
                        <td className="px-3 py-2 text-right text-[var(--color-ink-2)]/70">{r.gmvDiaQ1}</td>
                        <td className={`px-3 py-2 text-right font-bold ${deltaClass(r.delta)}`}>

                          {r.delta}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            ) : (
              <>
                <div className="mt-4 overflow-x-auto rounded-lg border border-[var(--color-line-soft)]">
                  <table className="w-full text-sm">
                    <thead className="bg-[var(--color-surface-2)] text-[11px] uppercase tracking-wider text-[var(--color-ink-2)]">
                      <tr>
                        <th className="px-3 py-2 text-left">#</th>
                        <th className="px-3 py-2 text-left">SKU</th>
                        <th className="px-3 py-2 text-right">Share Ação</th>
                        <th className="px-3 py-2 text-right">Share Q1</th>
                        <th className="px-3 py-2 text-right">Δ pp</th>
                      </tr>
                    </thead>
                    <tbody>
                      {TOP5_CAT_MS.map((r, i) => (
                        <tr key={r.sku} className={i % 2 === 0 ? "bg-white" : "bg-[var(--color-surface-2)]"}>
                          <td className="px-3 py-2 font-bold">{i + 1}</td>
                          <td className="px-3 py-2">{r.sku}</td>
                          <td className="px-3 py-2 text-right">{r.shareAcao}</td>
                          <td className="px-3 py-2 text-right text-[var(--color-ink-2)]/70">{r.shareQ1}</td>
                          <td className={`px-3 py-2 text-right font-bold ${deltaClass(r.delta)}`}>
                            {r.delta}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <p className="mt-3 text-[13px] text-[var(--color-ink-2)] leading-relaxed">
                  Aqui o termo correto é Market Share de categoria no canal. Stella acelera no flanco premium; Corona recua; Heineken Sleek e Amstel Sleek sustentam o core.
                </p>
              </>
            )}

            <p className="mt-4 rounded-md border-l-4 border-[var(--color-hein-red)] bg-[var(--color-surface-2)] p-3 text-[12px] text-[var(--color-ink-2)] leading-relaxed">
              {STELLA_CALLOUT}
            </p>
          </FrameCard>
        </div>

        <InsightPanel insights={TAB2_INSIGHTS} />
      </div>
    </div>
  );
}

// ---------- TAB 3 ----------

const MEDIA_COLORS: Record<string, string> = {
  "Heineken Copa (ação)": "#008C3A",
  "Heineken Jan–Mai/2026": "#7CB89A",
  "Parceiros M4U Jan–Mai/2026": "#9CA3AF",
  "Parceiros M4U período ação": "#6B7280",
};

function MediaChart({ chip }: { chip: MediaChip }) {
  const cfg = MEDIA_COMPARISON[chip];
  const data = cfg.data.map((d) => ({
    name: d.actor,
    value: d.value,
    label: cfg.unit === "pct" ? d.label : d.label,
    extra: d.extra ?? "",
    fill: MEDIA_COLORS[d.actor],
  }));

  return (
    <div className="h-[340px] w-full">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data} layout="vertical" margin={{ left: 24, right: 110, top: 12, bottom: 12 }}>
          <CartesianGrid horizontal={false} stroke="#E5E7EB" />
          <XAxis
            type="number"
            stroke="#6B7280"
            fontSize={11}
            tickFormatter={(v) =>
              cfg.unit === "pct" ? `${v}%` : Number(v).toLocaleString("pt-BR")
            }
          />
          <YAxis
            type="category"
            dataKey="name"
            stroke="#1F2937"
            fontSize={11}
            width={200}
          />
          <Bar dataKey="value" barSize={26} radius={[4, 4, 4, 4]}>
            {data.map((d, i) => (
              <Cell key={i} fill={d.fill} />
            ))}
            <LabelList
              dataKey="label"
              position="right"
              fill="#1F2937"
              fontWeight={700}
              fontSize={12}
            />
            <LabelList
              dataKey="extra"
              position="right"
              offset={70}
              fill="#C8102E"
              fontWeight={800}
              fontSize={12}
            />
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

function Tab3() {
  const [chip, setChip] = useState<MediaChip>("ctr");
  const cfg = MEDIA_COMPARISON[chip];

  return (
    <div className="mx-auto max-w-[1440px] px-6 py-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {TAB3_HERO.map((h) => (
          <BigNumberCard key={h.label} value={h.value} label={h.label} tooltip={h.tooltip} />
        ))}
      </div>
      <p className="mt-3 text-[13px] text-[var(--color-ink-2)] leading-relaxed">
        {TAB3_HERO_MICROCOPY}
      </p>

      <div className="mt-6 grid grid-cols-1 lg:grid-cols-[1fr_340px] gap-6">
        <div className="space-y-6">
          <FrameCard title={`Comparativo — ${cfg.title}`}>
            <div className="flex flex-wrap gap-2">
              <Chip active={chip === "ctr"} onClick={() => setChip("ctr")}>CTR</Chip>
              <Chip active={chip === "impressoesDia"} onClick={() => setChip("impressoesDia")}>Impressões Totais</Chip>
              <Chip active={chip === "clicksDia"} onClick={() => setChip("clicksDia")}>Clicks Totais</Chip>

            </div>
            <p className="mt-4 rounded-md bg-[var(--color-surface-3)] p-3 text-[13px] text-[var(--color-ink-2)] leading-relaxed">
              {MEDIA_FIXED_INSIGHT}
            </p>
            <MediaChart chip={chip} />
            {cfg.note && (
              <p className="mt-3 rounded-md border-l-4 border-[var(--color-hein-600)] bg-[var(--color-surface-2)] p-3 text-[13px] text-[var(--color-ink-2)] leading-relaxed">
                {cfg.note}
              </p>
            )}
          </FrameCard>

          <FrameCard title="Peso da Copa no Recorte Heineken (Jan–Mai + Ação)">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="rounded-lg bg-[var(--color-hein-600)] p-6 text-white">
                <div className="text-[11px] font-semibold uppercase tracking-widest opacity-90">
                  Das impressões Heineken
                </div>
                <div className="mt-1 font-display text-5xl font-extrabold">{WEIGHT_COPA.bigImpressoes}</div>
              </div>
              <div className="rounded-lg bg-[var(--color-hein-700)] p-6 text-white">
                <div className="text-[11px] font-semibold uppercase tracking-widest opacity-90">
                  Dos clicks Heineken
                </div>
                <div className="mt-1 font-display text-5xl font-extrabold">{WEIGHT_COPA.bigClicks}</div>
              </div>
            </div>
            <div className="mt-4 overflow-hidden rounded-lg border border-[var(--color-line-soft)]">
              <table className="w-full text-sm">
                <thead className="bg-[var(--color-surface-2)] text-[11px] uppercase tracking-wider text-[var(--color-ink-2)]">
                  <tr>
                    <th className="px-3 py-2 text-left">Métrica</th>
                    <th className="px-3 py-2 text-right">Jan–Mai</th>
                    <th className="px-3 py-2 text-right">Copa</th>
                    <th className="px-3 py-2 text-right">% Copa</th>
                  </tr>
                </thead>
                <tbody>
                  {WEIGHT_COPA.rows.map((r, i) => (
                    <tr key={r.metric} className={i % 2 === 0 ? "bg-white" : "bg-[var(--color-surface-2)]"}>
                      <td className="px-3 py-2">{r.metric}</td>
                      <td className="px-3 py-2 text-right text-[var(--color-ink-2)]/70">{r.jm}</td>
                      <td className="px-3 py-2 text-right">{r.copa}</td>
                      <td className={`px-3 py-2 text-right font-bold ${deltaClass(r.pct)}`}>{r.pct}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-3 text-[13px] text-[var(--color-ink-2)] leading-relaxed">
              {WEIGHT_COPA.callout}
            </p>
          </FrameCard>

          <FrameCard title="Participação Heineken no Ecossistema M4U (ex-parceiros)">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="rounded-lg bg-[var(--color-hein-600)] p-6 text-white">
                <div className="text-[11px] font-semibold uppercase tracking-widest opacity-90">
                  Share de impressões na Copa
                </div>
                <div className="mt-1 font-display text-5xl font-extrabold">{SHARE_ECO.bigImpressoes}</div>
              </div>
              <div className="rounded-lg bg-[var(--color-hein-700)] p-6 text-white">
                <div className="text-[11px] font-semibold uppercase tracking-widest opacity-90">
                  Share de clicks na Copa
                </div>
                <div className="mt-1 font-display text-5xl font-extrabold">{SHARE_ECO.bigClicks}</div>
              </div>
            </div>
            <p className="mt-4 text-xs text-[var(--color-ink-2)]/80">
              Share = Heineken ÷ (Heineken + Parceiros) no mesmo período
            </p>
            <div className="mt-4 overflow-hidden rounded-lg border border-[var(--color-line-soft)]">
              <table className="w-full text-sm">
                <thead className="bg-[var(--color-surface-2)] text-[11px] uppercase tracking-wider text-[var(--color-ink-2)]">
                  <tr>
                    <th className="px-3 py-2 text-left">Métrica</th>
                    <th className="px-3 py-2 text-right">Jan–Mai/2026</th>
                    <th className="px-3 py-2 text-right">Copa (ação)</th>
                    <th className="px-3 py-2 text-right">Δ</th>
                  </tr>
                </thead>
                <tbody>
                  {SHARE_ECO.rows.map((r, i) => (
                    <tr key={r.metric} className={i % 2 === 0 ? "bg-white" : "bg-[var(--color-surface-2)]"}>
                      <td className="px-3 py-2">{r.metric}</td>
                      <td className="px-3 py-2 text-right text-[var(--color-ink-2)]/70">{r.jm}</td>
                      <td className="px-3 py-2 text-right font-bold text-[var(--color-hein-700)]">{r.copa}</td>
                      <td className={`px-3 py-2 text-right font-bold ${deltaClass(r.delta)}`}>{r.delta}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-3 text-[13px] text-[var(--color-ink-2)] leading-relaxed">
              {SHARE_ECO.callout}
            </p>
          </FrameCard>

          <FrameCard title="Stacking de Impactos">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {STACKING.rows.map((r) => (
                <div key={r.label} className="rounded-lg bg-[var(--color-surface-2)] p-4 border border-[var(--color-line-soft)]">
                  <div className="text-[11px] font-semibold uppercase tracking-widest text-[var(--color-ink-2)]/70">
                    {r.label}
                  </div>
                  <div className="mt-1 font-display text-2xl font-extrabold text-[var(--color-ink)]">
                    {r.value}
                  </div>
                </div>
              ))}
            </div>
            <p className="mt-4 text-[13px] text-[var(--color-ink-2)] leading-relaxed">
              {STACKING.note}
            </p>
          </FrameCard>

          <FrameCard title="Absolutos de Apoio">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {TAB3_ABSOLUTES.map((a) => (
                <div key={a.label} className="rounded-lg bg-[var(--color-surface-2)] p-4 border border-[var(--color-line-soft)]">
                  <div className="flex items-center gap-1 text-[11px] font-semibold uppercase tracking-widest text-[var(--color-ink-2)]/70">
                    <span>{a.label}</span>
                    {"tooltip" in a && a.tooltip && <InfoTip text={a.tooltip} />}
                  </div>
                  <div className="mt-1 font-display text-xl font-extrabold text-[var(--color-ink)]">
                    {a.value}
                  </div>
                </div>
              ))}
            </div>
          </FrameCard>
        </div>

        <InsightPanel insights={TAB3_INSIGHTS} />
      </div>
    </div>
  );
}

// ---------- Root ----------

export function Dashboard() {
  const [tab, setTab] = useState<TabKey>("executiva");
  return (
    <div className="min-h-screen bg-[var(--color-surface-2)] font-sans text-[var(--color-ink)]">
      <Header />
      <TabNav tab={tab} setTab={setTab} />
      {tab === "executiva" && <Tab1 />}
      {tab === "comercial" && <Tab2 />}
      {tab === "midia" && <Tab3 />}
      <footer className="border-t border-[var(--color-line-soft)] bg-white">
        <div className="mx-auto max-w-[1440px] px-6 py-4 text-[11px] text-[var(--color-ink-2)]/70">
          {FOOTER_NOTE}
        </div>
      </footer>
    </div>
  );
}
