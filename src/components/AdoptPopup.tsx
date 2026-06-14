import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { FileText, X } from "lucide-react";
import { useI18n } from "@/lib/i18n";

export function AdoptPopup() {
  const { t } = useI18n();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (sessionStorage.getItem("adoptDismissed")) return;
    const id = setTimeout(() => setOpen(true), 4500);
    return () => clearTimeout(id);
  }, []);

  const dismiss = () => {
    setOpen(false);
    if (typeof window !== "undefined") sessionStorage.setItem("adoptDismissed", "1");
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-end justify-center bg-cocoa/40 p-4 backdrop-blur-sm sm:items-center">
      <div className="relative w-full max-w-md overflow-hidden rounded-3xl bg-card shadow-soft">
        <button
          onClick={dismiss}
          className="absolute right-3 top-3 grid h-8 w-8 place-items-center rounded-full bg-background/80 text-foreground/70 hover:text-foreground"
          aria-label="Close"
        >
          <X className="h-4 w-4" />
        </button>
        <div className="bg-muted/60 px-6 pb-2 pt-8 text-center">
          <div className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-secondary text-foreground shadow-soft">
            <FileText className="h-7 w-7" />
          </div>
          <h3 className="mt-4 font-display text-2xl font-bold leading-tight">{t("adoptPopup.title")}</h3>
        </div>
        <div className="px-6 pb-7 pt-4 text-center">
          <p className="text-sm text-muted-foreground">{t("adoptPopup.body")}</p>
          <div className="mt-5 flex flex-col gap-2 sm:flex-row sm:justify-center">
            <Link
              to="/adotar"
              onClick={dismiss}
              className="rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-soft transition hover:opacity-95"
            >
              {t("adoptPopup.cta")} →
            </Link>
            <button onClick={dismiss} className="rounded-full px-5 py-2.5 text-sm font-medium text-muted-foreground hover:text-foreground">
              {t("adoptPopup.later")}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
