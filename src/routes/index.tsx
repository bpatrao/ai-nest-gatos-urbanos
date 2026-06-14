import { createFileRoute, Link } from "@tanstack/react-router";
import { Heart, PawPrint, Home, HandHeart } from "lucide-react";
import { HeroCarousel } from "@/components/HeroCarousel";
import { useI18n } from "@/lib/i18n";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Gatos Urbanos · Proteção animal em Coimbra" },
      { name: "description", content: "Associação de proteção animal dedicada ao resgate, adoção, acolhimento e programas CED." },
    ],
  }),
  component: Index,
});

function Index() {
  const { t } = useI18n();

  const cards = [
    { icon: PawPrint, k: "nav.adopt", to: "/adotar", b: "adopt.lead" },
    { icon: Home, k: "help.foster.t", to: "/como-ajudar", b: "help.foster.b" },
    { icon: HandHeart, k: "nav.help", to: "/como-ajudar", b: "help.lead" },
    { icon: Heart, k: "what.ced.t", to: "/o-que-fazemos", b: "what.ced.b" },
  ];

  return (
    <>
      <HeroCarousel />

      {/* Intro */}
      <section className="px-5 py-20 lg:px-8 lg:py-28">
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Gatos Urbanos · Coimbra</span>
          <h2 className="mt-3 font-display text-3xl font-bold sm:text-4xl lg:text-5xl">{t("home.title")}</h2>
          <p className="mt-5 text-base text-muted-foreground sm:text-lg">{t("home.sub")}</p>
        </div>
      </section>

      {/* Action cards */}
      <section className="px-5 pb-20 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {cards.map(({ icon: Icon, k, to, b }) => (
            <Link
              key={k}
              to={to}
              className="group relative overflow-hidden rounded-3xl border border-border bg-card p-7 shadow-card transition hover:-translate-y-1 hover:shadow-soft"
            >
              <div className="grid h-12 w-12 place-items-center rounded-2xl bg-blush text-primary">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="mt-5 font-display text-lg font-bold">{t(k)}</h3>
              <p className="mt-2 line-clamp-3 text-sm text-muted-foreground">{t(b)}</p>
              <span className="mt-4 inline-flex text-sm font-semibold text-primary group-hover:underline">{t("cta.learn")} →</span>
            </Link>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="px-5 py-20 lg:px-8">
        <div className="mx-auto max-w-5xl overflow-hidden rounded-[2rem] bg-gradient-to-br from-primary to-terracotta px-8 py-14 text-center text-primary-foreground shadow-soft sm:px-12">
          <Heart className="mx-auto h-10 w-10 fill-current" />
          <h2 className="mt-4 font-display text-3xl font-bold sm:text-4xl">{t("adoptPopup.title")}</h2>
          <p className="mx-auto mt-3 max-w-xl text-base opacity-95">{t("adoptPopup.body")}</p>
          <Link
            to="/adotar"
            className="mt-7 inline-flex items-center gap-2 rounded-full bg-white px-7 py-3 text-sm font-semibold text-primary shadow-soft transition hover:opacity-95"
          >
            {t("adoptPopup.cta")} →
          </Link>
        </div>
      </section>
    </>
  );
}
