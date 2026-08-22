import { Reveal } from "@/components/shared/Reveal";
import { ArchDivider } from "@/components/shared/ArchDivider";
import { SectionEyebrow } from "@/components/shared/SectionEyebrow";
import { Button } from "@/components/ui/button";
import { whatsappLink } from "@/data/site";
import { useSeo } from "@/hooks/useSeo";

const TEMAS = [
  {
    titulo: "Cartões",
    descricao:
      "Cada cartão tem um perfil de gastos, anuidade, benefícios e programa de pontos próprios. Não existe 'o melhor cartão' — existe o cartão certo para o seu momento e para os seus hábitos.",
  },
  {
    titulo: "Pontos & programas de fidelidade",
    descricao:
      "Pontos acumulados em cartões podem, em muitos casos, ser transferidos para programas de companhias aéreas. As regras de transferência, validade e conversão variam por programa e podem mudar sem aviso prévio.",
  },
  {
    titulo: "Salas VIP",
    descricao:
      "O acesso a salas VIP costuma depender da categoria do cartão, da quantidade de acessos anuais e de convênios vigentes com cada sala — sempre vale confirmar as regras atuais antes de contar com o benefício.",
  },
  {
    titulo: "Emissão de passagens",
    descricao:
      "Emitir com pontos depende da disponibilidade de assentos em milhas oferecida por cada companhia — algo fora do nosso controle e do seu. Por isso, trabalhamos com estratégia e antecedência, nunca com promessas.",
  },
];

const CUIDADOS = [
  "Regras de programas e cartões podem mudar sem aviso prévio.",
  "Emitir com pontos depende de disponibilidade — nunca é garantido.",
  "Conversões de pontos entre programas nem sempre são reversíveis.",
  "Nunca solicitamos senhas, códigos de autenticação ou acesso completo às suas contas.",
];

export function Milhas() {
  useSeo({
    title: "Milhas",
    description:
      "Cartões, pontos, programas de fidelidade e salas VIP explicados em linguagem simples — milhas como caminho para a viagem, não como promessa de economia garantida.",
  });

  return (
    <>
      <section className="relative flex h-[70vh] min-h-[420px] items-center overflow-hidden bg-navy-dark">
        <img
          src="/images/milhas/trem-hero.jpg"
          alt="Vagão de trem panorâmico suíço — a experiência que o uso estratégico de milhas pode viabilizar"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-navy-dark/65" />
        <div className="container relative z-10 text-center text-cream">
          <SectionEyebrow className="text-cream/80">Milhas &amp; pontos</SectionEyebrow>
          <h1 className="mx-auto mt-4 max-w-2xl font-display text-4xl leading-tight sm:text-5xl">
            Milhas são um caminho, não um destino
          </h1>
          <p className="mx-auto mt-6 max-w-lg font-sans text-sm leading-relaxed text-cream/85 sm:text-base">
            Traduzimos cartões, pontos e programas de fidelidade em decisões simples — sempre
            com transparência sobre o que pode, e o que não pode, ser prometido.
          </p>
        </div>
      </section>

      <section className="py-24 sm:py-32">
        <div className="container">
          <Reveal className="mx-auto max-w-2xl text-center">
            <SectionEyebrow>Educação antes de decisão</SectionEyebrow>
            <h2 className="mt-4 font-display text-3xl sm:text-4xl">
              O que entra na nossa análise
            </h2>
          </Reveal>

          <div className="mt-16 grid grid-cols-1 gap-x-10 gap-y-14 sm:grid-cols-2">
            {TEMAS.map((tema, i) => (
              <Reveal key={tema.titulo} delay={i * 80}>
                <h3 className="font-display text-xl text-navy">{tema.titulo}</h3>
                <p className="mt-2 font-sans text-sm leading-relaxed text-navy/70">
                  {tema.descricao}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden py-24 text-cream sm:py-32">
        <img
          src="/images/milhas/alpes-suicos.jpg"
          alt="Vista dos Alpes suíços a partir de um mirante — viagem viabilizada com estratégia de milhas"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-navy-dark/75" />
        <div className="container relative z-10">
          <Reveal className="mx-auto max-w-xl text-center">
            <ArchDivider className="mb-8 text-gold" />
            <SectionEyebrow className="text-gold">Cuidados que levamos a sério</SectionEyebrow>
            <ul className="mt-6 space-y-4 text-left">
              {CUIDADOS.map((c) => (
                <li key={c} className="font-sans text-sm leading-relaxed text-cream/85">
                  — {c}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      <section className="py-24 sm:py-32">
        <div className="container">
          <Reveal className="mx-auto max-w-xl text-center">
            <h2 className="font-display text-3xl sm:text-4xl">
              Quer entender qual estratégia faz sentido pra você?
            </h2>
            <p className="mt-4 font-sans text-sm leading-relaxed text-navy/70">
              A consultoria de milhas começa com um diagnóstico do seu perfil de gastos,
              cartões e objetivos de viagem.
            </p>
            <Button asChild size="lg" className="mt-8">
              <a
                href={whatsappLink("Olá! Quero entender melhor cartões e milhas.")}
                target="_blank"
                rel="noopener noreferrer"
              >
                Falar sobre consultoria de milhas
              </a>
            </Button>
          </Reveal>
        </div>
      </section>
    </>
  );
}
