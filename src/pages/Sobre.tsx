import { Reveal } from "@/components/shared/Reveal";
import { ArchDivider } from "@/components/shared/ArchDivider";
import { SectionEyebrow } from "@/components/shared/SectionEyebrow";
import {
  HISTORIA_FUNDADORA,
  MENSAGENS_CHAVE,
  POSICIONAMENTO,
  VALORES,
} from "@/data/institucional";
import { useSeo } from "@/hooks/useSeo";

export function Sobre() {
  useSeo({
    title: "Sobre",
    description:
      "A história por trás da BnB Travel: como a experiência da fundadora com viagens e milhas deu origem a uma consultoria boutique guiada por leveza com propósito.",
  });

  return (
    <>
      <section className="relative flex h-[70vh] min-h-[420px] items-end overflow-hidden bg-navy-dark">
        <img
          src="/images/sobre/buenos-aires-arco.jpg"
          alt="Passagem arqueada em Buenos Aires — a fundadora da BnB Travel em uma de suas viagens"
          className="absolute inset-0 h-full w-full object-cover object-[50%_20%]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-dark/85 via-navy-dark/25 to-navy-dark/10" />
        <div className="container relative z-10 pb-16 text-cream">
          <SectionEyebrow className="text-cream/80">Sobre a BnB Travel</SectionEyebrow>
          <h1 className="mt-4 max-w-2xl font-display text-4xl leading-tight sm:text-5xl">
            Leveza com propósito
          </h1>
        </div>
      </section>

      {/* História — colunas assimétricas */}
      <section className="py-24 sm:py-32">
        <div className="container grid grid-cols-1 gap-16 lg:grid-cols-12">
          <Reveal className="lg:col-span-4">
            <SectionEyebrow>A história</SectionEyebrow>
            <h2 className="mt-4 font-display text-3xl leading-tight sm:text-4xl">
              De um recomeço, uma nova forma de viajar
            </h2>
          </Reveal>

          <div className="lg:col-span-7 lg:col-start-6">
            {HISTORIA_FUNDADORA.paragrafos.map((paragrafo, i) => (
              <Reveal key={i} delay={i * 80}>
                <p className="mb-6 font-sans text-base leading-relaxed text-navy/80 last:mb-0">
                  {paragrafo}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Imagem de destaque + manifesto */}
      <section className="relative overflow-hidden py-24 text-cream sm:py-32">
        <img
          src="/images/sobre/trem-panoramico.jpg"
          alt="Fundadora da BnB Travel embarcando em um trem panorâmico na Suíça"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-navy-dark/70" />
        <div className="container relative z-10">
          <Reveal className="mx-auto max-w-2xl text-center">
            <ArchDivider className="mb-8 text-gold" />
            <p className="font-display text-2xl italic leading-relaxed sm:text-3xl">
              “{POSICIONAMENTO.manifesto}”
            </p>
          </Reveal>
        </div>
      </section>

      {/* Propósito e essência */}
      <section className="py-24 sm:py-32">
        <div className="container grid grid-cols-1 gap-16 lg:grid-cols-2">
          <Reveal>
            <SectionEyebrow>Propósito</SectionEyebrow>
            <p className="mt-4 font-display text-2xl leading-snug text-navy sm:text-3xl">
              {POSICIONAMENTO.proposito}
            </p>
          </Reveal>
          <Reveal delay={100}>
            <SectionEyebrow>Essência</SectionEyebrow>
            <p className="mt-4 font-display text-2xl italic leading-snug text-gold-dark sm:text-3xl">
              {POSICIONAMENTO.essencia}
            </p>
          </Reveal>
        </div>
      </section>

      {/* Valores */}
      <section className="bg-navy py-24 text-cream sm:py-32">
        <div className="container">
          <Reveal className="mx-auto max-w-xl text-center">
            <SectionEyebrow className="text-gold">O que nos guia</SectionEyebrow>
            <h2 className="mt-4 font-display text-3xl sm:text-4xl">Valores</h2>
          </Reveal>

          <div className="mt-16 grid grid-cols-1 gap-x-8 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
            {VALORES.map((valor, i) => (
              <Reveal
                key={valor}
                delay={i * 60}
                className="border-t border-cream/15 pt-5"
              >
                <p className="font-sans text-sm leading-relaxed text-cream/85">{valor}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Mensagens-chave */}
      <section className="py-24 sm:py-32">
        <div className="container">
          <Reveal className="mx-auto max-w-xl text-center">
            <SectionEyebrow>Na voz da marca</SectionEyebrow>
          </Reveal>
          <div className="mx-auto mt-14 grid max-w-3xl grid-cols-1 gap-10 sm:grid-cols-2">
            {MENSAGENS_CHAVE.map((mensagem, i) => (
              <Reveal key={mensagem} delay={i * 70}>
                <p className="font-display text-lg italic leading-relaxed text-navy/85">
                  “{mensagem}”
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
