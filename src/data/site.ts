// Dados de contato oficiais da BnB Travel — reais, não são placeholder.
export const SITE = {
  nome: "BnB Travel",
  assinatura: "Basic, Not Basic Journeys",
  telefone: "+55 17 99119-6226",
  telefoneExibicao: "+55 17 99119-6226",
  whatsappNumero: "5517991196226",
  instagramHandle: "@bnbtravel_",
  instagramUrl: "https://instagram.com/bnbtravel_",
  diagnosticoUrl: "https://forms.cloud.microsoft/r/qrBWuB5nL9",
};

/**
 * Monta um link de WhatsApp com mensagem pré-preenchida específica do contexto.
 * Cada CTA do site deve usar uma mensagem própria em vez de um texto genérico único.
 */
export function whatsappLink(mensagem: string) {
  const texto = encodeURIComponent(mensagem);
  return `https://wa.me/${SITE.whatsappNumero}?text=${texto}`;
}

// Palavra-chave reservada usada no CTA final da Home, conforme briefing da marca.
export const whatsappLinkJornada = () => `https://wa.me/${SITE.whatsappNumero}?text=JORNADA`;

export const NAV_LINKS = [
  { label: "Sobre", href: "/sobre" },
  { label: "Serviços", href: "/servicos" },
  { label: "Milhas", href: "/milhas" },
  { label: "Roteiros", href: "/roteiros" },
  { label: "FAQ", href: "/faq" },
  { label: "Contato", href: "/contato" },
];
