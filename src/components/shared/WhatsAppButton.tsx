import { MessageCircle } from "lucide-react";

import { whatsappLink } from "@/data/site";

/**
 * Botão de WhatsApp flutuante, fixo no canto inferior direito, em todas as
 * páginas. Identidade própria da BnB (círculo dourado sobre navy) — não usa
 * o verde padrão do WhatsApp.
 */
export function WhatsAppButton() {
  return (
    <a
      href={whatsappLink("Olá! Encontrei o site da BnB Travel e gostaria de falar com vocês.")}
      target="_blank"
      rel="noopener noreferrer"
      className="group fixed bottom-6 right-5 z-40 flex h-14 items-center gap-3 rounded-full bg-navy pl-4 pr-4 text-cream shadow-lg shadow-navy/20 transition-all duration-300 ease-out hover:bg-navy-dark sm:right-8 sm:pl-5 sm:pr-6"
      aria-label="Falar com a BnB Travel no WhatsApp"
    >
      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-gold text-navy transition-colors group-hover:bg-gold-dark">
        <MessageCircle className="h-5 w-5" strokeWidth={2} />
      </span>
      <span className="hidden font-sans text-sm font-medium tracking-wide sm:inline">
        Fale comigo no WhatsApp
      </span>
    </a>
  );
}
