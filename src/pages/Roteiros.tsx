import { useMemo, useState } from "react";

import { Reveal } from "@/components/shared/Reveal";
import { SectionEyebrow } from "@/components/shared/SectionEyebrow";
import { RoteiroCard } from "@/components/shared/RoteiroCard";
import { ROTEIROS } from "@/data/roteiros";
import type { CategoriaRoteiro } from "@/types";
import { cn } from "@/lib/utils";
import { useSeo } from "@/hooks/useSeo";

const CATEGORIAS: (CategoriaRoteiro | "Todos")[] = [
  "Todos",
  "Internacional",
  "Cidades",
  "Natureza",
  "Casais",
];

export function Roteiros() {
  useSeo({
    title: "Roteiros",
    description:
      "Um portfólio de roteiros e curadorias que ilustram a forma como a BnB Travel pensa uma viagem — do ritmo ao roteiro, por destino e estilo.",
  });

  const [filtro, setFiltro] = useState<(typeof CATEGORIAS)[number]>("Todos");

  const roteirosFiltrados = useMemo(() => {
    if (filtro === "Todos") return ROTEIROS;
    return ROTEIROS.filter((r) => r.categorias.includes(filtro));
  }, [filtro]);

  return (
    <>
      <section className="pt-36 pb-16 sm:pt-44 sm:pb-20">
        <div className="container text-center">
          <SectionEyebrow>Portfólio</SectionEyebrow>
          <h1 className="mx-auto mt-4 max-w-xl font-display text-4xl sm:text-5xl">Roteiros</h1>
          <p className="mx-auto mt-5 max-w-lg font-sans text-sm leading-relaxed text-navy/80">
            Uma seleção de curadorias e destinos que ilustram a forma como a BnB Travel pensa
            uma viagem — do ritmo ao roteiro.
          </p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-x-6 gap-y-3">
            {CATEGORIAS.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setFiltro(cat)}
                className={cn(
                  "font-sans text-xs font-medium uppercase tracking-widest transition-colors",
                  filtro === cat ? "text-gold-deep" : "text-navy/80 hover:text-navy/80",
                )}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-24 sm:pb-32">
        <div className="container">
          <div className="grid grid-cols-1 gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
            {roteirosFiltrados.map((roteiro, i) => (
              <Reveal key={roteiro.slug} delay={Math.min(i * 60, 240)}>
                <RoteiroCard roteiro={roteiro} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
