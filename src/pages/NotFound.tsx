import { Link } from "react-router-dom";

import { ArchDivider } from "@/components/shared/ArchDivider";
import { Button } from "@/components/ui/button";
import { useSeo } from "@/hooks/useSeo";

export function NotFound() {
  useSeo({ title: "Página não encontrada" });

  return (
    <section className="flex min-h-[70vh] flex-col items-center justify-center px-6 text-center">
      <ArchDivider className="mb-8 text-gold" />
      <p className="label-eyebrow">Erro 404</p>
      <h1 className="mt-4 font-display text-3xl sm:text-4xl">Essa página saiu de rota.</h1>
      <p className="mt-4 max-w-sm font-sans text-sm text-navy/80">
        A página que você procura não existe ou foi movida.
      </p>
      <Button asChild className="mt-8">
        <Link to="/">Voltar para a Home</Link>
      </Button>
    </section>
  );
}
