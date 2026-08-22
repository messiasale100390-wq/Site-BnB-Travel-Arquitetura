import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

import { Logo } from "@/components/shared/Logo";
import { NAV_LINKS } from "@/data/site";
import { cn } from "@/lib/utils";

// Páginas cujo topo é um hero em tela cheia com foto escura — nessas, o
// header nasce transparente com texto claro e só ganha fundo sólido ao rolar.
// Nas demais páginas (sem hero de fundo escuro) o header é sempre sólido,
// para manter contraste sobre o fundo cream.
function paginaTemHeroEscuro(pathname: string) {
  if (["/", "/sobre", "/servicos", "/milhas"].includes(pathname)) return true;
  if (/^\/roteiros\/[^/]+$/.test(pathname)) return true;
  return false;
}

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  const temHeroEscuro = paginaTemHeroEscuro(location.pathname);
  const solid = scrolled || menuOpen || !temHeroEscuro;
  const light = !solid;

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300 ease-out",
        solid
          ? "bg-cream/90 backdrop-blur-md shadow-[0_1px_0_0_rgba(47,62,70,0.08)]"
          : "bg-transparent",
      )}
    >
      <div className="container flex h-20 items-center justify-between">
        <Link to="/" aria-label="BnB Travel — página inicial">
          <Logo tone={light ? "light" : "dark"} className="scale-90 sm:scale-100" />
        </Link>

        <nav className="hidden items-center gap-9 md:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className={cn(
                "font-sans text-xs font-medium uppercase tracking-widest transition-colors hover:text-gold-dark",
                light ? "text-cream/90" : "text-navy/80",
                location.pathname === link.href && "text-gold-dark",
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <button
          type="button"
          className={cn("md:hidden", light ? "text-cream" : "text-navy")}
          onClick={() => setMenuOpen((v) => !v)}
          aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {menuOpen && (
        <nav className="border-t border-sand/60 bg-cream md:hidden">
          <div className="container flex flex-col gap-1 py-4">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className={cn(
                  "py-3 font-sans text-sm font-medium uppercase tracking-widest text-navy/80 transition-colors hover:text-gold-dark",
                  location.pathname === link.href && "text-gold-dark",
                )}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}
