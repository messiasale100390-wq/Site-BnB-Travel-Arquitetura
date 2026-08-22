import { Link, Navigate, useParams } from "react-router-dom";
import { ArrowRight } from "lucide-react";

import { Reveal } from "@/components/shared/Reveal";
import { SectionEyebrow } from "@/components/shared/SectionEyebrow";
import { Button } from "@/components/ui/button";
import { ROTEIROS } from "@/data/roteiros";
import { whatsappLink } from "@/data/site";

export function RoteiroDetail() {
  const { slug } = useParams<{ slug: string }>();
  const index = ROTEIROS.findIndex((r) => r.slug === slug);

  if (index === -1) {
    return <Navigate to="/roteiros" replace />;
  }

  const roteiro = ROTEIROS[index];
  const proximo = ROTEIROS[(index + 1) % ROTEIROS.length];

  return (
    <>
      <section className="relative flex h-[75vh] min-h-[460px] items-end overflow-hidden bg-navy-dark">
        <img
          src={roteiro.imagemCapa}
          alt={`${roteiro.nome} — ${roteiro.destino}, ${roteiro.pais}`}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-dark/90 via-navy-dark/25 to-navy-dark/10" />
        <div className="container relative z-10 pb-16 text-cream">
          <SectionEyebrow className="text-cream/80">
            {roteiro.destino} · {roteiro.pais}
          </SectionEyebrow>
          <h1 className="mt-4 max-w-2xl font-display text-4xl leading-tight sm:text-5xl">
            {roteiro.nome}
          </h1>
        </div>
      </section>

      <section className="py-20 sm:py-28">
        <div className="container grid grid-cols-1 gap-12 lg:grid-cols-12">
          <aside className="lg:col-span-3">
            <Reveal className="space-y-6 lg:sticky lg:top-28">
              <div>
                <p className="label-eyebrow">Destino</p>
                <p className="mt-1 font-display text-lg text-navy">
                  {roteiro.destino}, {roteiro.pais}
                </p>
              </div>
              <div>
                <p className="label-eyebrow">Duração</p>
                <p className="mt-1 font-display text-lg text-navy">{roteiro.duracao}</p>
              </div>
              <div>
                <p className="label-eyebrow">Estilo</p>
                <p className="mt-1 font-display text-lg text-navy">{roteiro.estilo}</p>
              </div>
              <div>
                <p className="label-eyebrow">Categorias</p>
                <p className="mt-1 font-sans text-sm text-navy/70">
                  {roteiro.categorias.join(" · ")}
                </p>
              </div>
              <a
                href={whatsappLink(
                  `Olá! Tenho interesse no roteiro ${roteiro.nome} (${roteiro.destino}).`,
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block pt-2 font-sans text-sm font-medium text-gold-dark underline-offset-4 hover:underline"
              >
                Perguntar sobre este roteiro →
              </a>
            </Reveal>
          </aside>

          <div className="lg:col-span-8 lg:col-start-5">
            <Reveal>
              <p className="font-display text-2xl italic leading-relaxed text-navy/90 sm:text-3xl">
                {roteiro.resumo}
              </p>
            </Reveal>

            <div className="mt-10 space-y-6">
              {roteiro.descricao.map((paragrafo, i) => (
                <Reveal key={i} delay={i * 60}>
                  <p className="font-sans text-base leading-relaxed text-navy/75">
                    {paragrafo}
                  </p>
                </Reveal>
              ))}
            </div>

            {roteiro.galeria.length > 1 && (
              <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2">
                {roteiro.galeria.map((img, i) => (
                  <Reveal key={img} delay={i * 60} className={i === 0 ? "sm:col-span-2" : ""}>
                    <img
                      src={img}
                      alt={`${roteiro.nome} — imagem ${i + 1}`}
                      className="w-full object-cover"
                    />
                  </Reveal>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      <section className="border-t border-sand/60 bg-cream-soft py-16">
        <div className="container flex flex-col items-center justify-between gap-6 sm:flex-row">
          <div>
            <p className="label-eyebrow">Próximo roteiro</p>
            <p className="mt-1 font-display text-2xl text-navy">{proximo.nome}</p>
          </div>
          <Button asChild variant="outline">
            <Link to={`/roteiros/${proximo.slug}`} className="flex items-center gap-2">
              Ver roteiro <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>
    </>
  );
}
