import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { CheckCircle2, MessageCircle, Phone, TriangleAlert } from "lucide-react";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Reveal } from "@/components/shared/Reveal";
import { InstagramIcon } from "@/components/shared/icons";
import { SectionEyebrow } from "@/components/shared/SectionEyebrow";
import { SITE, whatsappLink } from "@/data/site";

const contatoSchema = z.object({
  nome: z.string().min(2, "Conte seu nome completo."),
  email: z.string().email("Informe um e-mail válido."),
  destino: z.string().min(2, "Qual destino você tem em mente?"),
  data: z.string().min(1, "Selecione uma data prevista."),
  viajantes: z
    .string()
    .min(1, "Informe o número de viajantes.")
    .refine((v) => Number(v) > 0, "Informe um número válido de viajantes."),
  mensagem: z.string().min(10, "Conte um pouco mais sobre a sua viagem."),
});

type ContatoFormValues = z.infer<typeof contatoSchema>;

// Envio via FormSubmit (https://formsubmit.co) — encaminha cada envio direto
// para um e-mail comum (Gmail, Outlook etc.), sem precisar criar conta em
// nenhum serviço nem servidor próprio: o e-mail de destino já é o "endpoint".
// Para ativar:
//   1. Troque "SEU_EMAIL_AQUI@gmail.com" abaixo pelo e-mail real da BnB Travel.
//   2. Envie o formulário do site uma vez (pode ser um teste).
//   3. O FormSubmit manda, na primeira vez, um e-mail de "Confirm your email"
//      para essa caixa — clique no link de confirmação. A partir daí, todo
//      envio do formulário chega direto na caixa de entrada.
// Enquanto o e-mail não for trocado, o envio fica simulado (console.log) para
// não quebrar o formulário em produção.
const CONTATO_EMAIL = "bnbasic3@gmail.com";
const FORMSUBMIT_ENDPOINT = `https://formsubmit.co/ajax/${CONTATO_EMAIL}`;
const FORMSUBMIT_CONFIGURADO = !CONTATO_EMAIL.includes("SEU_EMAIL_AQUI");

export function Contato() {
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContatoFormValues>({
    resolver: zodResolver(contatoSchema),
  });

  async function onSubmit(values: ContatoFormValues) {
    setStatus("idle");
    try {
      if (FORMSUBMIT_CONFIGURADO) {
        const response = await fetch(FORMSUBMIT_ENDPOINT, {
          method: "POST",
          headers: { "Content-Type": "application/json", Accept: "application/json" },
          body: JSON.stringify({
            ...values,
            _subject: `BnB Travel — novo contato de ${values.nome}`,
            _template: "table",
            _captcha: "false",
          }),
        });
        if (!response.ok) throw new Error("Falha no envio do formulário.");
        const result = await response.json();
        // Enquanto o e-mail de destino não confirmar o link de ativação que o
        // FormSubmit envia no primeiro uso, a API responde 200 OK mas com
        // success: "false" — sem checar isso aqui, o site mostraria "sucesso"
        // para o visitante mesmo sem a mensagem realmente chegar por e-mail.
        if (result?.success === "false") {
          throw new Error(
            result?.message ?? "Formulário aguardando ativação do e-mail de destino.",
          );
        }
      } else {
        // Envio simulado até o e-mail de destino ser configurado — ver constante acima.
        console.log("Formulário de contato (envio simulado):", values);
        await new Promise((resolve) => setTimeout(resolve, 600));
      }

      toast.success("Mensagem enviada!", {
        description: "Obrigada pelo contato — vamos responder em breve.",
      });
      setStatus("success");
      reset();
    } catch {
      toast.error("Não foi possível enviar agora.", {
        description: "Tente novamente ou fale com a gente pelo WhatsApp.",
      });
      setStatus("error");
    }
  }

  return (
    <>
      <section className="pt-36 pb-16 text-center sm:pt-44 sm:pb-20">
        <div className="container">
          <SectionEyebrow>Vamos conversar</SectionEyebrow>
          <h1 className="mx-auto mt-4 max-w-xl font-display text-4xl sm:text-5xl">Contato</h1>
          <p className="mx-auto mt-5 max-w-lg font-sans text-sm leading-relaxed text-navy/70">
            Preencha o formulário com os detalhes da sua próxima viagem, ou fale diretamente
            com a gente pelo WhatsApp.
          </p>
        </div>
      </section>

      <section className="pb-24 sm:pb-32">
        <div className="container grid grid-cols-1 gap-16 lg:grid-cols-12">
          <Reveal className="lg:col-span-7">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6" noValidate>
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="nome">Nome</Label>
                  <Input id="nome" placeholder="Seu nome completo" {...register("nome")} />
                  {errors.nome && (
                    <p className="text-xs text-destructive">{errors.nome.message}</p>
                  )}
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">E-mail</Label>
                  <Input id="email" type="email" placeholder="voce@email.com" {...register("email")} />
                  {errors.email && (
                    <p className="text-xs text-destructive">{errors.email.message}</p>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="destino">Destino de interesse</Label>
                  <Input id="destino" placeholder="Ex: Portugal, Buenos Aires..." {...register("destino")} />
                  {errors.destino && (
                    <p className="text-xs text-destructive">{errors.destino.message}</p>
                  )}
                </div>
                <div className="space-y-2">
                  <Label htmlFor="data">Data prevista</Label>
                  <Input id="data" type="date" {...register("data")} />
                  {errors.data && (
                    <p className="text-xs text-destructive">{errors.data.message}</p>
                  )}
                </div>
              </div>

              <div className="space-y-2 sm:w-1/2 sm:pr-3">
                <Label htmlFor="viajantes">Número de viajantes</Label>
                <Input id="viajantes" type="number" min={1} placeholder="Ex: 2" {...register("viajantes")} />
                {errors.viajantes && (
                  <p className="text-xs text-destructive">{errors.viajantes.message}</p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="mensagem">Mensagem</Label>
                <Textarea
                  id="mensagem"
                  placeholder="Conte um pouco sobre o que você imagina para essa viagem."
                  {...register("mensagem")}
                />
                {errors.mensagem && (
                  <p className="text-xs text-destructive">{errors.mensagem.message}</p>
                )}
              </div>

              <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
                <Button type="submit" size="lg" disabled={isSubmitting} className="w-full sm:w-auto">
                  {isSubmitting ? "Enviando..." : "Enviar mensagem"}
                </Button>

                {status === "success" && (
                  <p className="flex items-center gap-2 font-sans text-sm text-navy">
                    <CheckCircle2 className="h-4 w-4 shrink-0 text-gold-dark" />
                    Mensagem enviada — obrigada pelo contato!
                  </p>
                )}
                {status === "error" && (
                  <p className="flex items-center gap-2 font-sans text-sm text-destructive">
                    <TriangleAlert className="h-4 w-4 shrink-0" />
                    Não foi possível enviar. Tente novamente ou use o WhatsApp.
                  </p>
                )}
              </div>
            </form>
          </Reveal>

          <Reveal delay={100} className="lg:col-span-4 lg:col-start-9">
            <div className="bg-cream-soft p-8">
              <SectionEyebrow>Fale com a gente</SectionEyebrow>
              <p className="mt-4 font-sans text-sm leading-relaxed text-navy/70">
                Prefere pular o formulário? Esses são os nossos canais diretos.
              </p>

              <ul className="mt-6 space-y-4">
                <li>
                  <a
                    href={whatsappLink("Olá! Vim do site da BnB Travel e quero conversar.")}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 font-sans text-sm text-navy transition-colors hover:text-gold-dark"
                  >
                    <MessageCircle className="h-4 w-4 shrink-0 text-gold-dark" />
                    WhatsApp
                  </a>
                </li>
                <li>
                  <a
                    href={`tel:${SITE.telefone.replace(/\s/g, "")}`}
                    className="flex items-center gap-3 font-sans text-sm text-navy transition-colors hover:text-gold-dark"
                  >
                    <Phone className="h-4 w-4 shrink-0 text-gold-dark" />
                    {SITE.telefoneExibicao}
                  </a>
                </li>
                <li>
                  <a
                    href={SITE.instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 font-sans text-sm text-navy transition-colors hover:text-gold-dark"
                  >
                    <InstagramIcon className="h-4 w-4 shrink-0 text-gold-dark" />
                    {SITE.instagramHandle}
                  </a>
                </li>
              </ul>

              <div className="mt-8 border-t border-sand pt-6">
                <p className="font-sans text-xs leading-relaxed text-navy/60">
                  Prefere começar por um diagnóstico estruturado?
                </p>
                <Button asChild variant="outline" className="mt-4 w-full">
                  <a href={SITE.diagnosticoUrl} target="_blank" rel="noopener noreferrer">
                    Diagnóstico de Viagem
                  </a>
                </Button>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
