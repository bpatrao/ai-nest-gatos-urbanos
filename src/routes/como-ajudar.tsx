import { createFileRoute } from "@tanstack/react-router";
import { Banknote, Home, HandHeart, Package, UserRound, Copy, Check } from "lucide-react";
import { useState } from "react";
import { PageHeader } from "@/components/PageHeader";
import { useI18n } from "@/lib/i18n";

export const Route = createFileRoute("/como-ajudar")({
  head: () => ({
    meta: [
      { title: "Como Ajudar · Gatos Urbanos" },
      { name: "description", content: "Donativos, acolhimento, voluntariado e doação de bens — várias formas de ajudar os gatos urbanos." },
    ],
  }),
  component: Page,
});

const IBAN = "PT50 0033 0000 4544 1811 8400 5";
const PAYPAL = "gatos.urbanos@gmail.com";
const MBWAY = "925 735 728";

function Page() {
  const { t } = useI18n();
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    await navigator.clipboard.writeText(IBAN);
    setCopied(true);
    setTimeout(() => setCopied(false), 1800);
  };

  const ways = [
    { icon: Banknote, t: "help.donate.t", b: "help.donate.b" },
    { icon: Package, t: "help.supplies.t", b: "help.supplies.b" },
    { icon: UserRound, t: "help.member.t", b: "help.member.b", href: "https://forms.gle/DT2f62fGuoF31DpQA", cta: "help.member.cta" },
    { icon: Home, t: "help.foster.t", b: "help.foster.b", href: "https://docs.google.com/forms/d/e/1FAIpQLSdk1R4-ivwZm6ap6L9PX26TZNuQyBXJqarrwA8t6PKnLotDZQ/viewform", cta: "help.foster.cta" },
    { icon: HandHeart, t: "help.volunteer.t", b: "help.volunteer.b" },
  ];

  return (
    <>
      <PageHeader eyebrow={t("nav.help")} title={t("help.title")} lead={t("help.lead")} />

      <section className="px-5 py-20 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {ways.map(({ icon: Icon, t: tk, b, href, cta }) => (
            <div key={tk} className="rounded-3xl border border-border bg-card p-7 shadow-card transition hover:-translate-y-1 hover:shadow-soft">
              <div className="grid h-12 w-12 place-items-center rounded-2xl bg-blush text-primary">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="mt-5 font-display text-xl font-bold">{t(tk)}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{t(b)}</p>
              {href && cta && (
                <a href={href} target="_blank" rel="noreferrer" className="mt-5 inline-flex text-sm font-semibold text-primary underline-offset-4 hover:underline">
                  {t(cta)}
                </a>
              )}
            </div>
          ))}
        </div>

        <div className="mx-auto mt-12 max-w-3xl rounded-3xl bg-gradient-to-br from-primary to-terracotta p-8 text-primary-foreground shadow-soft sm:p-10">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] opacity-90">{t("help.iban")}</p>
          <div className="mt-3 flex flex-wrap items-center gap-3">
            <code className="rounded-xl bg-white/15 px-4 py-3 font-mono text-sm sm:text-base">{IBAN}</code>
            <button onClick={copy} className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2.5 text-sm font-semibold text-primary transition hover:opacity-95">
              {copied ? <><Check className="h-4 w-4" /> {t("help.copied")}</> : <><Copy className="h-4 w-4" /> {t("help.copy")}</>}
            </button>
          </div>
          <div className="mt-6 grid gap-4 border-t border-primary-foreground/20 pt-6 sm:grid-cols-2">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider opacity-80">{t("help.paypal")}</p>
              <a href={`mailto:${PAYPAL}`} className="mt-1 inline-block font-semibold hover:underline">{PAYPAL}</a>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider opacity-80">{t("help.mbway")}</p>
              <p className="mt-1 font-semibold">{MBWAY}</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
