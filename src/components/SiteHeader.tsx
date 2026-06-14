import { Link, useRouterState } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X, Globe } from "lucide-react";
import { useI18n } from "@/lib/i18n";
import logo from "@/assets/logo-gatos-urbanos-refinado.png";

const NAV = [
  { to: "/sobre-nos", k: "nav.about" },
  { to: "/o-que-fazemos", k: "nav.what" },
  { to: "/adotar", k: "nav.adopt" },
  { to: "/como-ajudar", k: "nav.help" },
  { to: "/contactos", k: "nav.contact" },
] as const;

export function SiteHeader() {
  const { t, lang, setLang } = useI18n();
  const [open, setOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/85 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-2 lg:px-8">
        <Link to="/" className="shrink-0" aria-label="Gatos Urbanos — página inicial">
          <img src={logo} alt="Gatos Urbanos" className="h-48 w-auto object-contain" width={768} height={384} />
        </Link>

        <nav className="hidden items-center gap-7 lg:flex">
          {NAV.map((item) => {
            const active = pathname.startsWith(item.to);
            return (
              <Link
                key={item.to}
                to={item.to}
                className={`relative text-sm font-medium transition-colors hover:text-primary ${
                  active ? "text-primary" : "text-foreground/80"
                }`}
              >
                {t(item.k)}
                {active && <span className="absolute -bottom-1.5 left-0 right-0 h-0.5 rounded-full bg-primary" />}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <button
            onClick={() => setLang(lang === "pt" ? "en" : "pt")}
            className="inline-flex items-center gap-1.5 rounded-full border border-border bg-card px-3 py-1.5 text-xs font-semibold uppercase tracking-wider text-foreground/80 transition hover:border-primary hover:text-primary"
            aria-label="Toggle language"
          >
            <Globe className="h-3.5 w-3.5" />
            {t("lang.toggle")}
          </button>
          <Link
            to="/adotar"
            className="hidden rounded-full bg-primary px-5 py-2 text-sm font-semibold text-primary-foreground shadow-soft transition hover:opacity-95 sm:inline-flex"
          >
            {t("cta.adopt")}
          </Link>
          <button
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border lg:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-label="Menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-border bg-background lg:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col gap-1 px-5 py-4">
            {NAV.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-2.5 text-sm font-medium text-foreground/80 hover:bg-secondary"
              >
                {t(item.k)}
              </Link>
            ))}
            <Link
              to="/adotar"
              onClick={() => setOpen(false)}
              className="mt-2 rounded-full bg-primary px-4 py-2.5 text-center text-sm font-semibold text-primary-foreground"
            >
              {t("cta.adopt")}
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
