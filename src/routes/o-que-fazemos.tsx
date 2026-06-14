import { createFileRoute } from "@tanstack/react-router";
import { Stethoscope, Home, Users, Megaphone, RefreshCw } from "lucide-react";
import { PageHeader } from "@/components/PageHeader";
import { useI18n } from "@/lib/i18n";

export const Route = createFileRoute("/o-que-fazemos")({
  head: () => ({
    meta: [
      { title: "O Que Fazemos · Gatos Urbanos" },
      { name: "description", content: "CED, resgate, adoção, acolhimento e sensibilização — o trabalho da associação no terreno." },
    ],
  }),
  component: Page,
});

function Page() {
  const { t } = useI18n();

  const items = [
    { icon: RefreshCw, t: "what.ced.t", b: "what.ced.b", featured: true },
    { icon: Stethoscope, t: "what.rescue.t", b: "what.rescue.b" },
    { icon: Users, t: "what.adoption.t", b: "what.adoption.b" },
    { icon: Home, t: "what.foster.t", b: "what.foster.b" },
    { icon: Megaphone, t: "what.community.t", b: "what.community.b" },
  ];

  return (
    <>
      <PageHeader eyebrow="Missão no terreno" title={t("what.title")} lead={t("what.lead")} />

      <section className="px-5 py-20 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-3">
          {items.map(({ icon: Icon, t: tk, b, featured }, idx) => (
            <article
              key={tk}
              className={`group relative overflow-hidden rounded-3xl border border-border p-8 shadow-card transition hover:-translate-y-1 hover:shadow-soft ${
                featured ? "bg-gradient-to-br from-primary to-terracotta text-primary-foreground lg:col-span-3 lg:row-span-1" : "bg-card"
              }`}
            >
              <div className="flex items-start gap-5">
                <div className={`grid h-14 w-14 shrink-0 place-items-center rounded-2xl ${featured ? "bg-white/20 text-white" : "bg-blush text-primary"}`}>
                  <Icon className="h-7 w-7" />
                </div>
                <div className="min-w-0 flex-1">
                  <span className={`text-xs font-semibold uppercase tracking-wider ${featured ? "text-white/80" : "text-primary"}`}>
                    {String(idx + 1).padStart(2, "0")}
                  </span>
                  <h3 className={`mt-1 font-display text-2xl font-bold ${featured ? "" : ""}`}>{t(tk)}</h3>
                  <p className={`mt-3 text-base leading-relaxed ${featured ? "opacity-95" : "text-muted-foreground"}`}>{t(b)}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
