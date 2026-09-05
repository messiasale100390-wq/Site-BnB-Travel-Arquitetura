import type { Servico } from "@/types";

// Catálogo oficial de serviços da BnB Travel — dados reais (Documento 04 —
// Catálogo de Serviços e Preços, v1.0). Os valores são referências de
// lançamento: antes da contratação, escopo, viajantes, prazos, disponibilidade,
// regras de fornecedores e taxas específicas devem ser confirmados no diagnóstico.
export const SERVICOS: Servico[] = [
  {
    numero: "01",
    nome: "BnB Essentials",
    inclui: "Passagens, hotéis, seguro viagem e aluguel de carro.",
    investimento: "Comissão variável conforme o valor do item",
    investimentoReferencia: true,
    perfilIndicado: "Para quem deseja uma solução de viagem, sem burocracia.",
  },
  {
    numero: "02",
    nome: "BnB Route",
    inclui: "Roteiro de viagem personalizado, sob medida para o seu perfil.",
    investimento:
      "R$ 300 até 5 dias · R$ 600 até 10 dias · + R$ 100 por dia adicional",
    investimentoReferencia: true,
    perfilIndicado: "Para quem deseja uma solução de viagem, sem burocracia.",
  },
  {
    numero: "03",
    nome: "BnB Miles Start",
    inclui: "1 encontro de consultoria e suporte por 30 dias.",
    investimento: "R$ 897",
    investimentoReferencia: true,
    perfilIndicado: "Para quem deseja compreender cartões e benefícios.",
  },
  {
    numero: "04",
    nome: "BnB Miles Strategy",
    inclui:
      "2 encontros em um intervalo de 15 dias, com aprendizado completo de estratégia de milhas.",
    investimento: "De R$ 2.497 por R$ 1.697",
    investimentoReferencia: true,
    perfilIndicado: "Para quem precisa de uma estratégia mais completa.",
  },
  {
    numero: "05",
    nome: "BnB Concierge",
    inclui: "Emissão feita pela BnB, utilizando as milhas do cliente.",
    investimento: "R$ 500, referência",
    investimentoReferencia: true,
    perfilIndicado:
      "Para quem já acumulou, mas se sente inseguro na hora da emissão.",
  },
  {
    numero: "06",
    nome: "BnB Miles Management",
    inclui:
      "Gestão contínua por seis meses, onde a BnB irá fazer tudo por você, monitorar promoções, transferências, pontos e emissões.",
    investimento: "R$ 1.102/mês",
    investimentoReferencia: true,
    perfilIndicado:
      "Para quem tem volume relevante de milhas e prefere delegar.",
  },
  {
    numero: "07",
    nome: "BnB Signature Journey",
    inclui: "Assessoria completa para organizar a viagem, do início ao fim.",
    investimento: "R$ 2.000 até 2 pessoas + R$ 500 por pessoa adicional",
    investimentoReferencia: true,
    perfilIndicado:
      "Para quem deseja acompanhamento amplo de toda a experiência.",
  },
];
