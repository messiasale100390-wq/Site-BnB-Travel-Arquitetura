import { Reveal } from "@/components/shared/Reveal";
import { SectionEyebrow } from "@/components/shared/SectionEyebrow";
import { Button } from "@/components/ui/button";
import { SERVICOS } from "@/data/servicos";
import { whatsappLink } from "@/data/site";
import { useSeo } from "@/hooks/useSeo";

export function Servicos() {
  useSeo({
    title: "Serviços",
    description:
      "Do roteiro personalizado à gestão contínua de milhas: conheça os serviços da BnB Travel, cada um pensado para um momento diferente da sua relação com viagens.",
  });

  return (
    <>
      <section className="relative flex h-[60vh] min-h-[380px] items-end overflow-hidden bg-navy-dark">
        <img
          src="/images/servicos/buenos-aires-obelisco.jpg"
          alt="Obelisco de Buenos Aires — organização e roteiro fazem parte da curadoria da BnB Travel"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-dark/90 via-navy-dark/30 to-navy-dark/10" />
        <div className="container relative z-10 pb-16 text-cream">
          <SectionEyebrow className="!text-cream">Catálogo</SectionEyebrow>
          <h1 className="mt-4 max-w-xl font-display text-4xl leading-tight sm:text-5xl">
            Serviços
          </h1>
        </div>
      </section>

      <section className="py-20 sm:py-28">
        <div className="container">
          <Reveal className="mx-auto max-w-2xl text-center">
            <p className="font-sans text-sm leading-relaxed text-navy/80">
              Cada serviço é pensado para um momento diferente da sua relação com viagens e
              milhas. Escopo, prazos e investimento são sempre conversados com calma — pelo
              WhatsApp ou no diagnóstico — antes de qualquer contratação.
            </p>
          </Reveal>

          <div className="mx-auto mt-16 max-w-3xl divide-y divide-sand/70">
            {SERVICOS.map((servico, i) => (
              <Reveal key={servico.numero} delay={Math.min(i * 40, 200)}>
                <div className="grid grid-cols-1 gap-3 py-10 sm:grid-cols-12 sm:gap-8">
                  <div className="sm:col-span-1">
                    <span className="font-display text-2xl text-gold">{servico.numero}</span>
                  </div>
                  <div className="sm:col-span-11">
                    <h2 className="font-display text-2xl text-navy">{servico.nome}</h2>
                    <p className="mt-2 font-sans text-sm leading-relaxed text-navy/80">
                      {servico.inclui}
                    </p>
                    <p className="mt-3 font-sans text-xs uppercase tracking-wide text-navy/80">
                      {servico.perfilIndicado}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-navy-dark py-20 text-cream sm:py-28">
        <div className="container">
          <Reveal className="mx-auto max-w-xl text-center">
            <h2 className="font-display text-3xl sm:text-4xl">
              Não sabe qual serviço é o seu?
            </h2>
            <p className="mt-4 font-sans text-sm leading-relaxed text-cream/80">
              Não tem problema. É exatamente para isso que existe o diagnóstico. Vamos entender
              juntos qual serviço combina com o seu momento, e conversar sobre valores com
              calma.
            </p>
            <Button asChild size="lg" className="mt-8">
              <a
                href={whatsappLink("Olá! Não sei qual serviço da BnB combina comigo, podem me ajudar?")}
                target="_blank"
                rel="noopener noreferrer"
              >
                Falar no WhatsApp
              </a>
            </Button>
          </Reveal>
        </div>
      </section>
    </>
  );
}
