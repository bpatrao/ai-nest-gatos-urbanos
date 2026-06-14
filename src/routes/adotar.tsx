import { createFileRoute } from "@tanstack/react-router";
import { ClipboardList, Heart, Stethoscope, MessageCircle } from "lucide-react";
import { PageHeader } from "@/components/PageHeader";
import { useI18n } from "@/lib/i18n";
import imgAnaTiago from "@/assets/testimonial-ana-tiago.jpg";
import imgMaria from "@/assets/testimonial-maria.jpg";
import imgCosta from "@/assets/testimonial-costa.jpg";

export const Route = createFileRoute("/adotar")({
  head: () => ({
    meta: [
      { title: "Adotar \u00b7 Gatos Urbanos" },
      { name: "description", content: "Adopta um gato em Coimbra. Conhece o nosso compromisso de ado\u00e7\u00e3o." },
    ],
  }),
  component: Page,
});

function Page() {
  const { t } = useI18n();

  const steps = [
    { icon: ClipboardList, t: "adopt.reg.1.t", b: "adopt.reg.1.b" },
    { icon: MessageCircle, t: "adopt.reg.2.t", b: "adopt.reg.2.b" },
    { icon: Stethoscope, t: "adopt.reg.3.t", b: "adopt.reg.3.b" },
    { icon: Heart, t: "adopt.reg.4.t", b: "adopt.reg.4.b" },
  ];

  const testimonials = [
    { img: imgAnaTiago, nameKey: "adopt.testimonial.1.name", textKey: "adopt.testimonial.1.text" },
    { img: imgMaria, nameKey: "adopt.testimonial.2.name", textKey: "adopt.testimonial.2.text" },
    { img: imgCosta, nameKey: "adopt.testimonial.3.name", textKey: "adopt.testimonial.3.text" },
  ];

  return (
    <>
      <PageHeader eyebrow={t("nav.adopt")} title={t("adopt.title")} lead={t("adopt.lead")}>
        <a
          href="https://www.facebook.com/media/set/?vanity=GrupoGatosUrbanos&set=a.590042106491951"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-soft transition hover:opacity-95"
        >
          {t("adopt.cta")} →
        </a>
      </PageHeader>

      <section className="px-5 py-20 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="font-display text-3xl font-bold sm:text-4xl">{t("adopt.reg.title")}</h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-muted-foreground sm:text-lg">{t("adopt.reg.lead")}</p>
        </div>

        <div className="mx-auto mt-12 grid max-w-5xl gap-5 sm:grid-cols-2">
          {steps.map(({ icon: Icon, t: tk, b }, i) => (
            <div key={tk} className="relative overflow-hidden rounded-3xl border border-border bg-card p-7 shadow-card">
              <div className="relative">
                <div className="grid h-12 w-12 place-items-center rounded-2xl bg-blush text-primary">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 font-display text-xl font-bold">{t(tk)}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{t(b)}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mx-auto mt-14 max-w-3xl rounded-3xl bg-gradient-to-br from-blush/60 to-cream p-8 text-center sm:p-10">
          <p className="font-display text-2xl italic text-cocoa sm:text-3xl">
            "E depois é só amor..."
          </p>
          <a
            href="https://www.facebook.com/media/set/?vanity=GrupoGatosUrbanos&set=a.590042106491951"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-soft transition hover:opacity-95"
          >
            {t("adopt.cta")} →
          </a>
        </div>

        <div className="mx-auto mt-20 max-w-5xl">
          <div className="text-center">
            <h2 className="font-display text-3xl font-bold sm:text-4xl">{t("adopt.testimonials.title")}</h2>
            <p className="mx-auto mt-4 max-w-2xl text-base text-muted-foreground sm:text-lg">{t("adopt.testimonials.sub")}</p>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-3">
            {testimonials.map(({ img, nameKey, textKey }, i) => (
              <div key={i} className="overflow-hidden rounded-3xl border border-border bg-card shadow-card">
                <div className="relative">
                  <img src={img} alt="Imagem ilustrativa de uma adoção" className="h-48 w-full object-cover opacity-75" loading="lazy" width={512} height={512} />
                  <span className="absolute bottom-3 left-3 rounded-full bg-card/90 px-3 py-1 text-xs font-semibold text-muted-foreground">Imagem ilustrativa</span>
                </div>
                <div className="p-7">
                  <p className="text-sm leading-relaxed text-muted-foreground">"{t(textKey)}"</p>
                  <p className="mt-5 font-display text-sm font-bold text-cocoa">{t(nameKey)}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
