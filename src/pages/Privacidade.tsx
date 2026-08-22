import { Reveal } from "@/components/shared/Reveal";
import { SectionEyebrow } from "@/components/shared/SectionEyebrow";
import { DADOS_LEGAIS, whatsappLink } from "@/data/site";
import { useSeo } from "@/hooks/useSeo";

const SECOES = [
  {
    titulo: "1. Quem somos",
    corpo: [
      `A BnB Travel é operada por ${DADOS_LEGAIS.razaoSocial} (CNPJ ${DADOS_LEGAIS.cnpj}), agência de turismo registrada no Cadastur sob o mesmo número, com sede em ${DADOS_LEGAIS.cidadeUf}. Para efeitos da Lei Geral de Proteção de Dados (Lei nº 13.709/2018 — LGPD), somos a controladora dos dados pessoais tratados por meio deste site.`,
    ],
  },
  {
    titulo: "2. Quais dados coletamos",
    corpo: [
      "Coletamos apenas os dados que você mesma ou mesmo nos fornece, diretamente:",
    ],
    lista: [
      "Pelo formulário de Contato: nome, e-mail, destino de interesse, data prevista, número de viajantes e a mensagem que você escrever.",
      "Pelo WhatsApp: seu número de telefone e o conteúdo da conversa, quando você inicia contato pelo botão do site.",
      "Pelo formulário de Diagnóstico de Viagem (Microsoft Forms): as informações que você preencher lá, sob os termos de privacidade da própria Microsoft.",
    ],
  },
  {
    titulo: "3. Para que usamos esses dados",
    corpo: ["Usamos os dados coletados exclusivamente para:"],
    lista: [
      "Responder à sua solicitação de contato ou diagnóstico de viagem.",
      "Elaborar recomendações, propostas e roteiros sob medida para o seu perfil.",
      "Dar continuidade ao atendimento consultivo, quando você contrata algum serviço.",
    ],
  },
  {
    titulo: "4. Com quem seus dados podem ser compartilhados",
    corpo: [
      "Não vendemos nem alugamos seus dados a terceiros. Usamos, porém, alguns serviços de tecnologia para operar o site e o atendimento, que atuam como operadores dos dados nos termos da LGPD:",
    ],
    lista: [
      "FormSubmit: recebe os dados enviados pelo formulário de Contato e os encaminha por e-mail até nossa caixa de entrada.",
      "WhatsApp (Meta): processa as mensagens trocadas pelo canal de WhatsApp, segundo a política de privacidade da própria Meta.",
      "Microsoft Forms: processa as respostas de quem preenche o formulário de Diagnóstico de Viagem, segundo a política de privacidade da própria Microsoft.",
      "Google Fonts: as fontes deste site são carregadas dos servidores do Google, o que implica uma requisição técnica ao Google ao abrir qualquer página.",
    ],
  },
  {
    titulo: "5. Cookies e ferramentas de rastreamento",
    corpo: [
      "Este site não utiliza cookies de rastreamento nem ferramentas de analytics no momento. Caso isso mude no futuro, esta política será atualizada antes da alteração entrar em vigor.",
    ],
  },
  {
    titulo: "6. Por quanto tempo guardamos seus dados",
    corpo: [
      "Guardamos seus dados pelo tempo necessário para concluir o atendimento e cumprir obrigações legais ou contratuais — por exemplo, registros de uma contratação de serviço. Você pode solicitar a exclusão dos seus dados a qualquer momento, conforme o item 7 abaixo.",
    ],
  },
  {
    titulo: "7. Seus direitos como titular dos dados",
    corpo: ["De acordo com o artigo 18 da LGPD, você tem direito a:"],
    lista: [
      "Confirmar se tratamos algum dado seu, e acessá-lo.",
      "Corrigir dados incompletos, inexatos ou desatualizados.",
      "Solicitar anonimização, bloqueio ou eliminação de dados desnecessários.",
      "Solicitar a portabilidade dos seus dados a outro fornecedor.",
      "Revogar seu consentimento e solicitar a eliminação dos dados tratados com base nele.",
      "Ser informada sobre com quem compartilhamos seus dados.",
    ],
  },
  {
    titulo: "8. Como exercer esses direitos",
    corpo: [
      `É só falar com a gente pelo WhatsApp ou pelo e-mail informado no rodapé do site. Vamos responder e atender sua solicitação dentro do prazo previsto em lei.`,
    ],
  },
  {
    titulo: "9. Segurança",
    corpo: [
      "Adotamos medidas razoáveis para proteger os dados que recebemos. Ainda assim, nenhuma transmissão pela internet é totalmente livre de risco — pedimos que você nunca envie senhas, dados bancários completos ou documentos sensíveis pelos nossos canais de contato.",
    ],
  },
  {
    titulo: "10. Alterações nesta política",
    corpo: [
      "Esta política pode ser atualizada para refletir mudanças no site ou na legislação. A data da última atualização está sempre indicada no topo desta página.",
    ],
  },
];

export function Privacidade() {
  useSeo({
    title: "Política de Privacidade",
    description:
      "Como a BnB Travel coleta, usa e protege os dados pessoais de quem entra em contato pelo site, em conformidade com a LGPD.",
  });

  return (
    <section className="pt-36 pb-24 sm:pt-44 sm:pb-32">
      <div className="container-narrow">
        <Reveal>
          <SectionEyebrow>Legal</SectionEyebrow>
          <h1 className="mt-4 font-display text-3xl leading-tight sm:text-4xl">
            Política de Privacidade
          </h1>
          <p className="mt-3 font-sans text-xs uppercase tracking-wide text-navy/45">
            Última atualização: agosto de 2026
          </p>
          <p className="mt-6 font-sans text-base leading-relaxed text-navy/80">
            Esta política explica, de forma simples, quais dados o site da BnB Travel coleta,
            por quê, com quem podem ser compartilhados e quais direitos você tem sobre eles.
          </p>
        </Reveal>

        <div className="mt-12 space-y-10">
          {SECOES.map((secao, i) => (
            <Reveal key={secao.titulo} delay={Math.min(i * 30, 200)}>
              <h2 className="font-display text-xl text-navy">{secao.titulo}</h2>
              {secao.corpo.map((paragrafo, j) => (
                <p key={j} className="mt-3 font-sans text-sm leading-relaxed text-navy/75">
                  {paragrafo}
                </p>
              ))}
              {secao.lista && (
                <ul className="mt-3 space-y-2">
                  {secao.lista.map((item) => (
                    <li
                      key={item}
                      className="font-sans text-sm leading-relaxed text-navy/75 pl-4 relative before:absolute before:left-0 before:content-['—']"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              )}
            </Reveal>
          ))}
        </div>

        <Reveal delay={200} className="mt-14 border-t border-sand pt-8">
          <p className="font-sans text-sm leading-relaxed text-navy/70">
            Dúvidas sobre esta política? Fale com a gente.
          </p>
          <a
            href={whatsappLink("Olá! Tenho uma dúvida sobre a política de privacidade do site.")}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 inline-block font-sans text-sm font-medium text-gold-dark underline-offset-4 hover:underline"
          >
            Falar no WhatsApp →
          </a>
        </Reveal>
      </div>
    </section>
  );
}
