import { createFileRoute } from "@tanstack/react-router";
import { Compass, Eye, Heart, Users } from "lucide-react";
import { PageHeader } from "@/components/PageHeader";
import { useI18n } from "@/lib/i18n";

export const Route = createFileRoute("/sobre-nos")({
  head: () => ({
    meta: [
      { title: "Sobre Nós · Gatos Urbanos" },
      { name: "description", content: "Missão, visão, valores e órgãos sociais da associação Gatos Urbanos." },
    ],
  }),
  component: SobreNos,
});

const ORGAOS = [
  { role: "Assembleia Geral", names: ["Cristina Isabel Monteiro da Silva — Presidente", "Catarina Isabel Pratas Banaco Reis dos Santos", "Maria José Gonçalves Carneiro Antunes"] },
  { role: "Direção", names: ["Cristina Paula Martinho Leite da Silva — Presidente", "Maria Paula Ribeiro de Almeida Campos", "Ana Cristina Gatões Duarte Couceiro", "Maria Augusta Reis Januário", "Marlene Sofia da Silva Taveira", "Maria das Dores Gomes Loureiro", "Márcia Joana Nascimento Teixeira", "Débora Flávia Pereira Machado"] },
  { role: "Conselho Fiscal", names: ["Isabel Maria Ferreira da Costa Monteiro", "Olga Maia Seco", "Diogo Filipe Rodrigues Antunes da Costa"] },
];

function SobreNos() {
  const { t } = useI18n();

  const pillars = [
    { icon: Compass, t: "about.mission.t", b: "about.mission.b" },
    { icon: Eye, t: "about.vision.t", b: "about.vision.b" },
    { icon: Heart, t: "about.values.t", b: "about.values.b" },
  ];

  return (
    <>
      <PageHeader eyebrow="Gatos Urbanos" title={t("about.title")} lead={t("about.lead")} />

      <section className="px-5 py-20 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-3">
          {pillars.map(({ icon: Icon, t: tk, b }) => (
            <div key={tk} className="rounded-3xl border border-border bg-card p-8 shadow-card">
              <div className="grid h-12 w-12 place-items-center rounded-2xl bg-blush text-primary">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="mt-5 font-display text-xl font-bold">{t(tk)}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{t(b)}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Team / Órgãos */}
      <section className="bg-secondary/40 px-5 py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <Users className="mx-auto h-8 w-8 text-primary" />
            <h2 className="mt-3 font-display text-3xl font-bold sm:text-4xl">{t("about.team.title")}</h2>
            <p className="mx-auto mt-3 max-w-2xl text-muted-foreground">{t("about.team.sub")}</p>
          </div>

          <h3 className="mt-12 text-center font-display text-2xl font-bold">{t("about.org.title")}</h3>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {ORGAOS.map((o) => (
              <div key={o.role} className="rounded-2xl bg-card p-5 shadow-card">
                <p className="text-xs font-semibold uppercase tracking-wider text-primary">{o.role}</p>
                 <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                   {o.names.map((name) => <li key={name}>{name}</li>)}
                 </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
