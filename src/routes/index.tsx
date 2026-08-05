import { createFileRoute } from "@tanstack/react-router";
import { Dashboard } from "@/components/dashboard/Dashboard";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Mondelez Copa do Mundo · Market4U — Post-mortem" },
      {
        name: "description",
        content:
          "Post-mortem executivo da ativação Mondelez Copa do Mundo no Market4U: ROAS 5,72x, GMV/dia +30,5% vs Q1 e market share +0,46 p.p.",
      },
      { property: "og:title", content: "Mondelez Copa do Mundo · Market4U — Post-mortem" },
      {
        property: "og:description",
        content:
          "Post-mortem executivo da ativação Mondelez Copa do Mundo no Market4U: ROAS 5,72x, GMV/dia +30,5% vs Q1 e market share +0,46 p.p.",
      },

    ],
  }),
  component: Index,
});

function Index() {
  return <Dashboard />;
}
