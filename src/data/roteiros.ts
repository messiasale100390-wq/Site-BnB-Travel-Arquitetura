import type { Roteiro } from "@/types";

// Roteiros de exemplo, construídos a partir de fotografias reais de viagens
// da fundadora da BnB Travel. Textos descritivos são ilustrativos — placeholder
// de conteúdo editorial, a ser revisado e substituído por roteiros e curadorias
// reais da BnB antes da publicação.
export const ROTEIROS: Roteiro[] = [
  {
    slug: "buenos-aires-em-camadas",
    nome: "Buenos Aires em Camadas",
    destino: "Buenos Aires",
    pais: "Argentina",
    duracao: "5 dias",
    estilo: "Urbano · Cultural",
    categorias: ["Internacional", "Cidades"],
    resumo:
      "Uma curadoria de bairros, arquitetura e ritmo portenho para quem quer conhecer a cidade além do óbvio.",
    descricao: [
      "Buenos Aires se revela devagar — em avenidas largas, esquinas com história e um outono que pinta a cidade de dourado. Este roteiro foi pensado para quem quer caminhar mais e correr menos, equilibrando os pontos icônicos com tempo livre para simplesmente observar a cidade.",
      "A curadoria prioriza deslocamentos a pé e de curta distância, hospedagem em bairros centrais e uma dose generosa de gastronomia local — sempre respeitando o ritmo e o orçamento definidos no diagnóstico inicial.",
    ],
    imagemCapa: "/images/roteiros/buenos-aires-1.jpg",
    galeria: [
      "/images/roteiros/buenos-aires-1.jpg",
      "/images/roteiros/buenos-aires-2.jpg",
      "/images/roteiros/buenos-aires-3.jpg",
    ],
  },
  {
    slug: "paris-essencial",
    nome: "Paris Essencial",
    destino: "Paris",
    pais: "França",
    duracao: "6 dias",
    estilo: "Romântico · Clássico",
    categorias: ["Internacional", "Casais", "Cidades"],
    resumo:
      "Os marcos indispensáveis de Paris, intercalados com tempo de sobra para um piquenique ao pôr do sol.",
    descricao: [
      "Paris pede tempo. Este roteiro combina os pontos que não podem ficar de fora — o Arco do Triunfo, o Louvre, as pontes do Sena — com pausas propositalmente vazias na agenda, para que a viagem não vire uma lista de tarefas.",
      "Pensado especialmente para casais, o roteiro reserva um fim de tarde para um piquenique com vista para a Torre Eiffel — um dos momentos mais lembrados por quem já viveu essa experiência.",
    ],
    imagemCapa: "/images/roteiros/paris-1.jpg",
    galeria: [
      "/images/roteiros/paris-1.jpg",
      "/images/roteiros/paris-2.jpg",
      "/images/roteiros/paris-3.jpg",
      "/images/roteiros/paris-4.jpg",
      "/images/roteiros/paris-5.jpg",
    ],
  },
  {
    slug: "uma-noite-em-verona",
    nome: "Uma Noite em Verona",
    destino: "Verona",
    pais: "Itália",
    duracao: "3 dias",
    estilo: "Romântico · Histórico",
    categorias: ["Internacional", "Casais"],
    resumo:
      "Uma parada curta e intensa na cidade dos apaixonados, com ruas de paralelepípedo e praças iluminadas até tarde.",
    descricao: [
      "Verona é dessas cidades que pedem pouco tempo e entregam muito. Este roteiro foi desenhado como uma parada de três dias — ideal para somar a um itinerário maior pelo norte da Itália — com foco nas praças históricas, na gastronomia local e em passeios noturnos pelo centro.",
      "A recomendação é reservar hospedagem dentro do centro histórico, para aproveitar a cidade a pé, inclusive à noite, quando as praças ganham outra atmosfera.",
    ],
    imagemCapa: "/images/roteiros/verona-1.jpg",
    galeria: ["/images/roteiros/verona-1.jpg"],
  },
  {
    slug: "zermatt-e-o-matterhorn",
    nome: "Zermatt e o Matterhorn",
    destino: "Zermatt",
    pais: "Suíça",
    duracao: "4 dias",
    estilo: "Montanha · Contemplativo",
    categorias: ["Internacional", "Natureza"],
    resumo:
      "Uma vila alpina sem carros, com o Matterhorn como pano de fundo constante.",
    descricao: [
      "Zermatt é um respiro. A vila, livre de carros a combustão, vive na base de um dos cumes mais fotografados dos Alpes. O roteiro prioriza trilhas de dificuldade leve a moderada, mirantes acessíveis de trem cremalheira e tempo de sobra para simplesmente admirar a paisagem.",
      "Recomendado para quem busca desacelerar em meio à natureza, sem abrir mão de conforto e boa infraestrutura.",
    ],
    imagemCapa: "/images/roteiros/zermatt-1.jpg",
    galeria: ["/images/roteiros/zermatt-1.jpg"],
  },
  {
    slug: "lago-oeschinensee",
    nome: "Lago Oeschinensee",
    destino: "Kandersteg",
    pais: "Suíça",
    duracao: "2 dias",
    estilo: "Natureza · Trilha",
    categorias: ["Internacional", "Natureza"],
    resumo:
      "Um lago de águas turquesa cercado por paredões rochosos, acessível por teleférico e trilha leve.",
    descricao: [
      "Poucos lugares nos Alpes suíços entregam uma paisagem tão imediata quanto o Oeschinensee. A subida é feita por teleférico, seguida de uma caminhada curta até a margem do lago — um roteiro perfeito para somar a uma passagem mais longa pela região de Berna.",
      "Ideal como parada de um ou dois dias dentro de um itinerário maior pela Suíça, combinando bem com o roteiro de Zermatt.",
    ],
    imagemCapa: "/images/roteiros/oeschinensee-1.jpg",
    galeria: [
      "/images/roteiros/oeschinensee-1.jpg",
      "/images/roteiros/oeschinensee-2.jpg",
    ],
  },
  {
    slug: "trem-panoramico-suico",
    nome: "Trem Panorâmico Suíço",
    destino: "Rota Panorâmica",
    pais: "Suíça",
    duracao: "1 dia",
    estilo: "Experiência · Milhas & Pontos",
    categorias: ["Internacional", "Natureza"],
    resumo:
      "Uma experiência ferroviária clássica pelos Alpes — o tipo de detalhe que uma boa curadoria de milhas ajuda a viabilizar.",
    descricao: [
      "Atravessar os Alpes suíços de trem panorâmico é uma daquelas experiências que ficam marcadas — e que, com o uso estratégico de pontos e milhas, podem caber em orçamentos que pareciam distantes.",
      "Este roteiro ilustra bem a filosofia da BnB Travel: milhas como meio, não como fim. A curadoria conecta o trecho ferroviário a hospedagens e conexões que fazem sentido para o restante da viagem pela Suíça.",
    ],
    imagemCapa: "/images/roteiros/trem-1.jpg",
    galeria: ["/images/roteiros/trem-1.jpg"],
  },
  {
    slug: "vista-de-nova-york",
    nome: "Vista de Nova York",
    destino: "Nova York",
    pais: "Estados Unidos",
    duracao: "5 dias",
    estilo: "Urbano · Mirante",
    categorias: ["Internacional", "Cidades"],
    resumo:
      "Manhattan vista de cima, do alto de um mirante de vidro — o tipo de momento que vale a pena reservar com antecedência.",
    descricao: [
      "Nova York recompensa quem organiza a viagem com intenção. Este roteiro reserva um fim de tarde para um dos mirantes mais altos da cidade, com vista aberta para os arranha-céus de Manhattan, e distribui o restante dos dias entre bairros, museus e a caminhada inevitável pelas grandes avenidas.",
      "A curadoria prioriza ingressos e horários reservados com antecedência — mirantes e atrações mais concorridas de Nova York esgotam rápido, especialmente em alta temporada.",
    ],
    imagemCapa: "/images/roteiros/nova-york-1.jpg",
    galeria: ["/images/roteiros/nova-york-1.jpg"],
  },
];
