import { useEffect } from "react";

interface SeoOptions {
  /** Título específico da página — o sufixo " — BnB Travel" é adicionado automaticamente. */
  title: string;
  description?: string;
  /** Use na Home: o título já vem completo, sem sufixo adicional. */
  semSufixo?: boolean;
}

const SITE_TITLE_SUFFIX = " — BnB Travel";
const DEFAULT_DESCRIPTION =
  "BnB Travel — consultoria boutique de viagens com especialização em milhas. Basic, Not Basic Journeys.";

/**
 * Define o <title> e a meta description da página a cada troca de rota.
 *
 * Isso resolve o título da aba do navegador, o histórico/favoritos e é lido
 * por crawlers que executam JavaScript (como o do Google). Não resolve,
 * porém, o preview de link (Open Graph) em apps que NÃO executam JS ao
 * desempacotar um link — como o WhatsApp e o Instagram — já que este é um
 * site renderizado no cliente (SPA), sem HTML pré-gerado por rota. Resolver
 * isso por completo exigiria pré-renderização (SSG) ou um servidor com SSR
 * por trás de cada URL, o que fica para uma etapa futura.
 */
export function useSeo({ title, description, semSufixo }: SeoOptions) {
  useEffect(() => {
    document.title = semSufixo ? title : `${title}${SITE_TITLE_SUFFIX}`;

    const meta = document.querySelector('meta[name="description"]');
    if (meta) {
      meta.setAttribute("content", description ?? DEFAULT_DESCRIPTION);
    }

    return () => {
      document.title = "BnB Travel — Basic, Not Basic Journeys";
      if (meta) meta.setAttribute("content", DEFAULT_DESCRIPTION);
    };
  }, [title, description, semSufixo]);
}
