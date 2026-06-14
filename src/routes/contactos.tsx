import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Facebook, Instagram, Mail, MapPin, Send } from "lucide-react";
import { PageHeader } from "@/components/PageHeader";
import { useI18n } from "@/lib/i18n";

export const Route = createFileRoute("/contactos")({
  head: () => ({
    meta: [
      { title: "Contactos · Gatos Urbanos" },
      { name: "description", content: "Contacte o Grupo Gatos Urbanos por email ou através das redes sociais." },
    ],
  }),
  component: Page,
});

function Page() {
  const { t } = useI18n();
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [status, setStatus] = useState<string | null>(null);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const body = `Nome: ${form.name}\nEmail: ${form.email}\n\n${form.message}`;
    const url = `mailto:gatos.urbanos@gmail.com?subject=${encodeURIComponent(form.subject || "Contacto via site")}&body=${encodeURIComponent(body)}`;
    window.location.href = url;
    setStatus(t("contact.form.sent"));
  };

  const set = (k: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm((f) => ({ ...f, [k]: e.target.value }));

  return (
    <>
      <PageHeader eyebrow={t("nav.contact")} title={t("contact.title")} lead={t("contact.lead")} />

      <section className="px-5 py-20 lg:px-8">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[1fr_1.3fr]">
          <aside className="space-y-5">
            <div className="rounded-3xl border border-border bg-card p-7 shadow-card">
              <div className="flex items-center gap-3">
                <MapPin className="h-5 w-5 text-primary" />
                <p className="text-xs font-semibold uppercase tracking-wider text-primary">{t("contact.area")}</p>
              </div>
              <p className="mt-2 font-display text-2xl font-bold">{t("contact.area.b")}</p>
            </div>

            <div className="rounded-3xl border border-border bg-card p-7 shadow-card">
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-primary" />
                <p className="text-xs font-semibold uppercase tracking-wider text-primary">{t("contact.email")}</p>
              </div>
              <a href="mailto:gatos.urbanos@gmail.com" className="mt-2 inline-block font-display text-lg font-semibold hover:text-primary">
                gatos.urbanos@gmail.com
              </a>
            </div>

            <div className="rounded-3xl border border-border bg-card p-7 shadow-card">
              <p className="text-xs font-semibold uppercase tracking-wider text-primary">{t("contact.social")}</p>
              <div className="mt-3 flex gap-3">
                <a href="https://www.facebook.com/GrupoGatosUrbanos" target="_blank" rel="noreferrer"
                   className="inline-flex items-center gap-2 rounded-full bg-blush px-4 py-2.5 text-sm font-semibold text-cocoa transition hover:bg-primary hover:text-primary-foreground">
                  <Facebook className="h-4 w-4" /> Facebook
                </a>
                <a href="https://www.instagram.com/grupogatosurbanos/" target="_blank" rel="noreferrer"
                   className="inline-flex items-center gap-2 rounded-full bg-blush px-4 py-2.5 text-sm font-semibold text-cocoa transition hover:bg-primary hover:text-primary-foreground">
                  <Instagram className="h-4 w-4" /> @grupogatosurbanos
                </a>
              </div>
            </div>
          </aside>

          <form onSubmit={onSubmit} className="rounded-3xl border border-border bg-card p-7 shadow-card sm:p-9">
            <h2 className="font-display text-2xl font-bold">{t("contact.form.title")}</h2>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <Field label={t("contact.form.name")} required value={form.name} onChange={set("name")} />
              <Field label={t("contact.form.email")} type="email" required value={form.email} onChange={set("email")} />
            </div>
            <div className="mt-4">
              <Field label={t("contact.form.subject")} value={form.subject} onChange={set("subject")} />
            </div>
            <div className="mt-4">
              <label className="block text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                {t("contact.form.message")}
              </label>
              <textarea
                required
                rows={5}
                value={form.message}
                onChange={set("message")}
                className="mt-1.5 w-full rounded-2xl border border-input bg-background px-4 py-3 text-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
              />
            </div>
            <button type="submit" className="mt-6 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-soft transition hover:opacity-95">
              <Send className="h-4 w-4" />
              {t("contact.form.send")}
            </button>
            {status && <p className="mt-4 text-sm text-primary">{status}</p>}
          </form>
        </div>
      </section>
    </>
  );
}

function Field({ label, ...props }: React.InputHTMLAttributes<HTMLInputElement> & { label: string }) {
  return (
    <label className="block">
      <span className="block text-xs font-semibold uppercase tracking-wider text-muted-foreground">{label}</span>
      <input
        {...props}
        className="mt-1.5 w-full rounded-2xl border border-input bg-background px-4 py-3 text-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
      />
    </label>
  );
}
