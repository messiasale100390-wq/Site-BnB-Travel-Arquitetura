import { Link } from "react-router-dom";
import { MessageCircle, Phone } from "lucide-react";

import { Logo } from "@/components/shared/Logo";
import { InstagramIcon } from "@/components/shared/icons";
import { ArchDivider } from "@/components/shared/ArchDivider";
import { DADOS_LEGAIS, NAV_LINKS, SITE, whatsappLink } from "@/data/site";

export function Footer() {
  return (
    <footer className="bg-navy-dark text-cream/80">
      <div className="container py-16">
        <div className="flex flex-col items-center text-center">
          <Link to="/" aria-label="BnB Travel — página inicial">
            <Logo tone="light" />
          </Link>
          <p className="mt-4 font-display text-sm italic text-cream/60">
            Basic, Not Basic Journeys
          </p>
        </div>

        <ArchDivider className="my-10 text-cream/30" />

        <div className="grid grid-cols-1 gap-10 text-center sm:grid-cols-3 sm:text-left">
          <div>
            <p className="label-eyebrow !text-cream/65">Navegação</p>
            <ul className="mt-4 space-y-2">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="font-sans text-sm text-cream/75 transition-colors hover:text-gold"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="label-eyebrow !text-cream/65">Contato</p>
            <ul className="mt-4 space-y-3">
              <li>
                <a
                  href={whatsappLink("Olá! Encontrei o site da BnB Travel e gostaria de falar com vocês.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 font-sans text-sm text-cream/75 transition-colors hover:text-gold"
                >
                  <MessageCircle className="h-4 w-4" />
                  WhatsApp
                </a>
              </li>
              <li>
                <a
                  href={`tel:${SITE.telefone.replace(/\s/g, "")}`}
                  className="inline-flex items-center gap-2 font-sans text-sm text-cream/75 transition-colors hover:text-gold"
                >
                  <Phone className="h-4 w-4" />
                  {SITE.telefoneExibicao}
                </a>
              </li>
              <li>
                <a
                  href={SITE.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 font-sans text-sm text-cream/75 transition-colors hover:text-gold"
                >
                  <InstagramIcon className="h-4 w-4" />
                  {SITE.instagramHandle}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <p className="label-eyebrow !text-cream/65">Diagnóstico</p>
            <p className="mt-4 font-sans text-sm leading-relaxed text-cream/75">
              Ainda não sabe por onde começar? Conte pra gente sobre a sua próxima
              viagem no formulário de Diagnóstico.
            </p>
            <a
              href={SITE.diagnosticoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-block font-sans text-sm font-medium text-gold underline-offset-4 hover:underline"
            >
              Preencher diagnóstico →
            </a>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center gap-3 border-t border-cream/10 pt-8 text-center">
          <p className="font-sans text-xs leading-relaxed text-cream/65">
            BnB Travel — {DADOS_LEGAIS.razaoSocial} · CNPJ {DADOS_LEGAIS.cnpj} ·{" "}
            {DADOS_LEGAIS.cidadeUf}
            <br className="hidden sm:inline" /> Cadastur nº {DADOS_LEGAIS.cadastur} (Ministério
            do Turismo)
          </p>
          <p className="font-sans text-xs text-cream/65">
            © {new Date().getFullYear()} BnB Travel. Todos os direitos reservados. ·{" "}
            <Link to="/privacidade" className="underline-offset-2 hover:underline">
              Política de Privacidade
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
