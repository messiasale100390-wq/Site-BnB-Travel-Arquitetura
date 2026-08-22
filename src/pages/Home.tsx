import { Link } from "react-router-dom";
import { ChevronDown } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/shared/Reveal";
import { ArchDivider } from "@/components/shared/ArchDivider";
import { SectionEyebrow } from "@/components/shared/SectionEyebrow";
import {
  COMO_FUNCIONA,
  DIFERENCIAIS,
  HISTORIA_FUNDADORA,
  PORTAS_DE_ENTRADA,
} from "@/data/institucional";
import { whatsappLink, whatsappLinkJornada, SITE } from "@/data/site";
import { useSeo } from "@/hooks/useSeo";

export function Home() {
  useSeo({
    title: "BnB Travel — Basic, Not Basic Journeys",
    description:
      "Consultoria boutique de viagens com especialização em milhas. Curadoria, estratégia e cuidado, dos pontos acumulados à experiência vivida.",
    semSufixo: true,
  });

  return (
    <>
      {/* Hero */}
      <section className="relative flex h-[100svh] min-h-[560px] w-full items-center justify-center overflow-hidden bg-navy-dark">
        <img
          src="/images/hero/hero-home.jpg"
          alt="Lago Oeschinensee, nos Alpes suíços — paisagem que ilustra o espírito de curadoria de viagens da BnB Travel"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-navy-dark/55 via-navy-dark/50 to-navy-dark/85" />
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 65% 60% at 50% 45%, rgba(20,26,30,0.55), rgba(20,26,30,0.25) 65%, transparent 100%)",
          }}
        />

        <div className="relative z-10 flex flex-col items-center px-6 text-center text-cream drop-shadow-[0_2px_16px_rgba(20,26,30,0.55)]">
          <p className="label-eyebrow text-cream/80">Consultoria boutique de viagens &amp; milhas</p>
          <h1 className="mt-5 max-w-3xl font-display text-5xl leading-[1.05] sm:text-6xl md:text-7xl">
            BnB Travel
          </h1>
          <p className="mt-6 max-w-xl font-display text-lg italic text-cream/90 sm:text-xl">
            Sua próxima viagem começa muito antes do embarque.
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Button asChild size="lg">
              <a href={whatsappLink("Olá! Quero saber mais sobre a BnB Travel.")} target="_blank" rel="noopener noreferrer">
                Fale com a BnB
              </a>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-cream text-cream hover:bg-cream hover:text-navy">
              <Link to="/servicos">Conhecer os serviços</Link>
            </Button>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce text-cream/70">
          <ChevronDown className="h-6 w-6" />
        </div>
      </section>

      {/* Diferenciais */}
      <section className="py-24 sm:py-32">
        <div className="container">
          <Reveal className="mx-auto max-w-2xl text-center">
            <SectionEyebrow>Por que BnB Travel</SectionEyebrow>
            <h2 className="mt-4 font-display text-3xl sm:text-4xl">
              Curadoria com propósito, não venda de pacotes
            </h2>
          </Reveal>

          <div className="mt-16 grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2">
            {DIFERENCIAIS.map((item, i) => (
              <Reveal key={item.titulo} delay={i * 80}>
                <span className="font-display text-3xl text-gold">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-3 font-display text-xl text-navy">{item.titulo}</h3>
                <p className="mt-2 font-sans text-sm leading-relaxed text-navy/80">
                  {item.descricao}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Três portas de entrada */}
      <section className="bg-cream-soft py-24 sm:py-32">
        <div className="container">
          <Reveal className="mx-auto max-w-2xl text-center">
            <SectionEyebrow>Comece por onde fizer sentido</SectionEyebrow>
            <h2 className="mt-4 font-display text-3xl sm:text-4xl">Três portas de entrada</h2>
          </Reveal>

          <div className="mt-16 grid grid-cols-1 gap-px overflow-hidden bg-sand/60 sm:grid-cols-3">
            {PORTAS_DE_ENTRADA.map((porta, i) => (
              <Reveal key={porta.titulo} delay={i * 100} className="flex flex-col bg-cream-soft p-8 sm:p-10">
                <span className="label-eyebrow">{String(i + 1).padStart(2, "0")} —</span>
                <h3 className="mt-3 font-display text-2xl text-navy">{porta.titulo}</h3>
                <p className="mt-3 flex-1 font-sans text-sm leading-relaxed text-navy/80">
                  {porta.descricao}
                </p>
                <ul className="mt-5 space-y-1 pb-1">
                  {porta.servicos.map((s) => (
                    <li key={s} className="font-sans text-xs uppercase tracking-wide text-gold-deep">
                      {s}
                    </li>
                  ))}
                </ul>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Como funciona */}
      <section className="py-24 sm:py-32">
        <div className="container">
          <Reveal className="mx-auto max-w-2xl text-center">
            <SectionEyebrow>O processo</SectionEyebrow>
            <h2 className="mt-4 font-display text-3xl sm:text-4xl">Como funciona</h2>
          </Reveal>

          <div className="mt-16 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {COMO_FUNCIONA.map((passo, i) => (
              <Reveal key={passo.numero} delay={i * 80} className="text-center">
                <span className="font-display text-4xl text-gold">{passo.numero}</span>
                <h3 className="mt-3 font-display text-lg text-navy">{passo.titulo}</h3>
                <p className="mt-2 font-sans text-sm leading-relaxed text-navy/80">
                  {passo.descricao}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Milhas teaser */}
      <section className="relative overflow-hidden py-24 text-cream sm:py-32">
        <img
          src="/images/milhas/trem-hero.jpg"
          alt="Vagão de trem panorâmico na Suíça — experiência de viagem viabilizada com o uso estratégico de milhas"
          className="absolute inset-0 h-full w-full object-cover object-[70%_50%]"
        />
        <div className="absolute inset-0 bg-navy-dark/70" />
        <div className="container relative z-10">
          <Reveal className="mx-auto max-w-xl text-center">
            <SectionEyebrow className="text-gold">Milhas &amp; pontos</SectionEyebrow>
            <h2 className="mt-4 font-display text-3xl sm:text-4xl">
              Milhas são um caminho, não um destino
            </h2>
            <p className="mt-5 font-sans text-sm leading-relaxed text-cream/85 sm:text-base">
              Cartões, pontos e programas de fidelidade só importam quando se transformam em
              viagens de verdade. Traduzimos esse universo técnico em decisões simples, sem
              prometer economia ou emissão garantida.
            </p>
            <Button asChild variant="outline" className="mt-8 border-gold text-cream hover:bg-gold hover:text-navy">
              <Link to="/milhas">Entender como funciona</Link>
            </Button>
          </Reveal>
        </div>
      </section>

      {/* Sobre teaser */}
      <section className="py-24 sm:py-32">
        <div className="container grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <Reveal>
            <img
              src="/images/sobre/verona-noite.jpg"
              alt="Piazza Bra à noite, em Verona — uma das viagens que inspiram o método de curadoria da BnB Travel"
              className="aspect-[4/5] w-full object-cover"
            />
          </Reveal>
          <Reveal delay={120}>
            <SectionEyebrow>A pessoa por trás da BnB</SectionEyebrow>
            <h2 className="mt-4 font-display text-3xl sm:text-4xl">Sobre a fundadora</h2>
            <p className="mt-6 font-sans text-sm leading-relaxed text-navy/80 sm:text-base">
              {HISTORIA_FUNDADORA.paragrafos[0]}
            </p>
            <Button asChild variant="link" className="mt-6 text-navy hover:text-gold-deep">
              <Link to="/sobre">Conhecer a história completa →</Link>
            </Button>
          </Reveal>
        </div>
      </section>

      {/* CTA final */}
      <section className="bg-navy-dark py-24 text-cream sm:py-32">
        <div className="container">
          <Reveal className="mx-auto max-w-2xl text-center">
            <ArchDivider className="mb-8 text-gold" />
            <h2 className="font-display text-3xl leading-tight sm:text-4xl md:text-5xl">
              Sua próxima jornada merece mais do que um pacote genérico.
            </h2>
            <p className="mt-6 font-sans text-sm leading-relaxed text-cream/80 sm:text-base">
              Comece pelo diagnóstico gratuito ou fale agora mesmo com a {SITE.nome} pelo
              WhatsApp.
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:justify-center">
              <Button asChild variant="outline" size="lg" className="border-gold text-cream hover:bg-gold hover:text-navy">
                <a href={SITE.diagnosticoUrl} target="_blank" rel="noopener noreferrer">
                  Diagnóstico de Viagem
                </a>
              </Button>
              <Button asChild size="lg">
                <a href={whatsappLinkJornada()} target="_blank" rel="noopener noreferrer">
                  Falar no WhatsApp
                </a>
              </Button>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
