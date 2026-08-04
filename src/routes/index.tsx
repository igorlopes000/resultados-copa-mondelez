import { createFileRoute } from "@tanstack/react-router";
import { Dashboard } from "@/components/dashboard/Dashboard";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Heineken Copa do Mundo · Market4U — Post-mortem" },
      {
        name: "description",
        content:
          "Post-mortem executivo da ativação Heineken Copa do Mundo no Market4U: ROAS 7,79x, GMV/dia +11,0% vs Q1 e Market Share 46,57%.",
      },
      { property: "og:title", content: "Heineken Copa do Mundo · Market4U — Post-mortem" },
      {
        property: "og:description",
        content:
          "Post-mortem executivo da ativação Heineken Copa do Mundo no Market4U: ROAS 7,79x, GMV/dia +11,0% vs Q1 e Market Share 46,57%.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return <Dashboard />;
}
