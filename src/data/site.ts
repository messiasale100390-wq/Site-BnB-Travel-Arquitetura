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

// Dados legais reais (Cadastro Nacional da Pessoa Jurídica e Cadastur —
// Ministério do Turismo). Endereço comercial completo não é exibido
// publicamente por se tratar do endereço residencial da fundadora (MEI
// operado de casa) — só cidade/UF ficam visíveis, por prudência.
export const DADOS_LEGAIS = {
  razaoSocial: "Natassia Majuda Carvalho",
  cnpj: "68.138.606/0001-21",
  cidadeUf: "São José do Rio Preto/SP",
  cadastur: "68.138.606/0001-21",
  cadasturValidade: "22/07/2028",
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
