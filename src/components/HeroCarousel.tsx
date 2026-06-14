import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useI18n } from "@/lib/i18n";
import hero1 from "@/assets/hero-1.jpg";
import hero2 from "@/assets/hero-2.jpg";
import hero3 from "@/assets/hero-3.jpg";
import familia from "@/assets/familia-acolhimento-gato.jpg";

export function HeroCarousel() {
  const { t } = useI18n();
  const slides = [
    { img: hero1, title: t("home.slide1.t"), sub: t("home.slide1.s"), to: "/adotar", cta: t("cta.adopt") },
    { img: hero2, title: t("home.slide3.t"), sub: t("home.slide3.s"), to: "/o-que-fazemos", cta: t("cta.learn") },
    { img: familia, title: t("home.slide4.t"), sub: t("home.slide4.s"), to: "/como-ajudar", cta: t("cta.help") },
    { img: hero3, title: t("home.slide2.t"), sub: t("home.slide2.s"), to: "/como-ajudar", cta: t("cta.help") },
  ];

  const [i, setI] = useState(0);
  const n = slides.length;

  useEffect(() => {
    const id = setInterval(() => setI((p) => (p + 1) % n), 6000);
    return () => clearInterval(id);
  }, [n]);

  return (
    <section className="relative h-[78vh] min-h-[520px] w-full overflow-hidden">
      {slides.map((s, idx) => (
        <div
          key={idx}
          className={`absolute inset-0 transition-opacity duration-1000 ${idx === i ? "opacity-100" : "opacity-0"}`}
          aria-hidden={idx !== i}
        >
          <img src={s.img} alt="" className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-cocoa/70 via-cocoa/40 to-transparent" />
        </div>
      ))}

      <div className="relative z-10 mx-auto flex h-full max-w-7xl items-end px-5 pb-20 lg:px-8 lg:pb-28">
        <div className="max-w-2xl text-white">
          <span className="inline-flex items-center rounded-full bg-white/15 px-3 py-1 text-xs font-medium uppercase tracking-wider backdrop-blur">
            {t("home.tag")}
          </span>
          <h1 className="mt-4 font-display text-4xl font-bold leading-[1.05] sm:text-5xl lg:text-6xl">
            {slides[i].title}
          </h1>
          <p className="mt-4 max-w-xl text-base text-white/90 sm:text-lg">{slides[i].sub}</p>
          <Link
            to={slides[i].to}
            className="mt-7 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-soft transition hover:opacity-95"
          >
            {slides[i].cta} →
          </Link>
        </div>
      </div>

      <button
        onClick={() => setI((p) => (p - 1 + n) % n)}
        className="absolute left-4 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white/20 p-2.5 text-white backdrop-blur transition hover:bg-white/30"
        aria-label="Previous"
      >
        <ChevronLeft className="h-5 w-5" />
      </button>
      <button
        onClick={() => setI((p) => (p + 1) % n)}
        className="absolute right-4 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white/20 p-2.5 text-white backdrop-blur transition hover:bg-white/30"
        aria-label="Next"
      >
        <ChevronRight className="h-5 w-5" />
      </button>

      <div className="absolute bottom-6 left-1/2 z-10 flex -translate-x-1/2 gap-2">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setI(idx)}
            className={`h-1.5 rounded-full transition-all ${idx === i ? "w-8 bg-white" : "w-4 bg-white/50"}`}
            aria-label={`Slide ${idx + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
