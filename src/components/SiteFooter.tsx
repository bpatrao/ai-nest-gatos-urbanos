import { Link } from "@tanstack/react-router";
import { Facebook, Instagram, Mail, MapPin } from "lucide-react";
import { useI18n } from "@/lib/i18n";
import logo from "@/assets/logo-gatos-urbanos-refinado.png";

export function SiteFooter() {
  const { t } = useI18n();
  return (
    <footer className="mt-24 border-t border-border bg-secondary/40">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 sm:grid-cols-2 lg:grid-cols-4 lg:px-8">
        <div>
          <Link to="/" aria-label="Gatos Urbanos — página inicial">
            <img src={logo} alt="Gatos Urbanos" loading="lazy" className="h-16 w-auto object-contain" width={256} height={128} />
          </Link>
          <p className="mt-2 text-sm text-muted-foreground">{t("footer.tag")}</p>
        </div>
        <div>
          <p className="mb-3 font-semibold">{t("nav.contact")}</p>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li className="flex items-center gap-2"><MapPin className="h-4 w-4 text-primary" /> Coimbra, Portugal</li>
            <li className="flex items-center gap-2"><Mail className="h-4 w-4 text-primary" /> gatos.urbanos@gmail.com</li>
          </ul>
        </div>
        <div>
          <p className="mb-3 font-semibold">{t("contact.social")}</p>
          <div className="flex gap-3">
            <a href="https://www.facebook.com/GrupoGatosUrbanos" target="_blank" rel="noreferrer" aria-label="Facebook"
               className="grid h-10 w-10 place-items-center rounded-full bg-card text-foreground/70 shadow-card transition hover:text-primary">
              <Facebook className="h-4 w-4" />
            </a>
            <a href="https://www.instagram.com/grupogatosurbanos/" target="_blank" rel="noreferrer" aria-label="Instagram — @grupogatosurbanos"
               className="grid h-10 w-10 place-items-center rounded-full bg-card text-foreground/70 shadow-card transition hover:text-primary">
              <Instagram className="h-4 w-4" />
            </a>
          </div>
        </div>
        <div>
          <p className="mb-3 font-semibold">{t("nav.help")}</p>
          <ul className="space-y-2 text-sm">
            <li><Link to="/adotar" className="text-muted-foreground hover:text-primary">{t("nav.adopt")}</Link></li>
            <li><Link to="/como-ajudar" className="text-muted-foreground hover:text-primary">{t("nav.help")}</Link></li>
            <li><Link to="/contactos" className="text-muted-foreground hover:text-primary">{t("nav.contact")}</Link></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border/60 py-5 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} Gatos Urbanos · {t("footer.rights")}
      </div>
    </footer>
  );
}
