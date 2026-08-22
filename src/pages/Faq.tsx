import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Reveal } from "@/components/shared/Reveal";
import { SectionEyebrow } from "@/components/shared/SectionEyebrow";
import { Button } from "@/components/ui/button";
import { FAQ } from "@/data/faq";
import { whatsappLink } from "@/data/site";
import { useSeo } from "@/hooks/useSeo";

export function FaqPage() {
  useSeo({
    title: "Perguntas Frequentes",
    description:
      "Tire suas dúvidas sobre como funciona a BnB Travel: diagnóstico, serviços, preços de referência e uso estratégico de milhas.",
  });

  return (
    <>
      <section className="pt-36 pb-16 text-center sm:pt-44 sm:pb-20">
        <div className="container">
          <SectionEyebrow>Dúvidas frequentes</SectionEyebrow>
          <h1 className="mx-auto mt-4 max-w-xl font-display text-4xl sm:text-5xl">FAQ</h1>
        </div>
      </section>

      <section className="pb-24 sm:pb-32">
        <div className="container-narrow">
          <Reveal>
            <Accordion type="single" collapsible>
              {FAQ.map((item, i) => (
                <AccordionItem key={i} value={`item-${i}`}>
                  <AccordionTrigger>{item.pergunta}</AccordionTrigger>
                  <AccordionContent>{item.resposta}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </Reveal>

          <Reveal delay={100} className="mt-16 text-center">
            <p className="font-sans text-sm text-navy/80">Ainda com dúvidas?</p>
            <Button asChild className="mt-5">
              <a
                href={whatsappLink("Olá! Tenho uma dúvida que não encontrei no FAQ do site.")}
                target="_blank"
                rel="noopener noreferrer"
              >
                Perguntar no WhatsApp
              </a>
            </Button>
          </Reveal>
        </div>
      </section>
    </>
  );
}
