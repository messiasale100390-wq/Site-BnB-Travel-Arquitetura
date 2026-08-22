import type { Post } from "@/types";

// Posts de exemplo para a estrutura do blog. Conteúdo placeholder — textos
// ilustrativos que seguem o tom e os pilares de comunicação já validados da
// BnB Travel (educativo sobre milhas e storytelling da fundadora), mas devem
// ser substituídos por conteúdo real antes da publicação.
export const POSTS: Post[] = [
  {
    slug: "milhas-nao-sao-sobre-acumular",
    titulo: "Milhas não são sobre acumular por acumular",
    data: "2026-07-28",
    categoria: "Milhas & Cartões",
    resumo:
      "Por que tratar pontos como um fim em si mesmo é o erro mais comum de quem está começando — e como pensar diferente muda a forma como você viaja.",
    corpo: [
      "É comum começar a se interessar por milhas pela promessa de 'viagens de graça'. Mas quem vive esse universo por mais tempo percebe outra coisa: milhas não são o destino, são o caminho.",
      "Na prática, isso significa fazer perguntas diferentes. Em vez de 'quantos pontos eu consigo acumular', a pergunta que importa é 'que experiência eu quero viver, e como meus pontos podem me aproximar dela'.",
      "Essa mudança de perspectiva muda decisões concretas: qual cartão faz sentido para o seu perfil de gastos, quando vale a pena transferir pontos entre programas, e quando é melhor simplesmente pagar a passagem à vista. Não existe resposta genérica — existe a resposta que faz sentido para a sua vida.",
    ],
    imagemCapa: "/images/milhas/alpes-suicos.jpg",
  },
  {
    slug: "uma-boa-viagem-comeca-antes-do-embarque",
    titulo: "Uma boa viagem não começa quando o avião decola",
    data: "2026-08-05",
    categoria: "Bastidores",
    resumo:
      "Reflexões sobre o método por trás da curadoria da BnB Travel — e por que o planejamento é onde a viagem realmente começa.",
    corpo: [
      "Tem gente que acredita que a viagem começa no momento do embarque. Eu discordo. Ela começa muito antes — nas escolhas feitas com cuidado, nas conversas sobre o que realmente importa para quem vai viajar.",
      "Existe uma diferença sutil entre descansar e realmente desacelerar. Descansar é parar. Desacelerar é escolher, com intenção, o ritmo de cada dia da viagem — e isso é decidido na mesa de planejamento, não no destino.",
      "É por isso que o diagnóstico é sempre o primeiro passo por aqui. Antes de falar de roteiro, de cartão ou de milhas, a gente precisa entender o que está por trás do desejo de viajar.",
    ],
    imagemCapa: "/images/geral/cafe-terraco.jpg",
  },
  {
    slug: "salas-vip-o-que-vale-a-pena-saber",
    titulo: "Salas VIP: o que realmente vale a pena saber antes de usar milhas",
    data: "2026-08-14",
    categoria: "Milhas & Cartões",
    resumo:
      "Um panorama simples sobre como funciona o acesso a salas VIP por meio de cartões e programas — sem prometer o que não pode ser garantido.",
    corpo: [
      "Salas VIP costumam ser um dos primeiros benefícios que despertam interesse em quem começa a estudar cartões e milhas. Faz sentido: é um benefício tangível, sentido logo na próxima viagem.",
      "Mas o acesso depende de regras específicas de cada cartão e programa — categoria do cartão, quantidade de acessos por ano, acompanhantes permitidos, e convênios vigentes com cada sala. Essas regras podem mudar sem aviso prévio por parte dos fornecedores.",
      "Por isso, antes de escolher um cartão pensando em salas VIP, vale entender o seu perfil real de viagens: com que frequência você viaja, de quais aeroportos, e se o custo de anuidade compensa frente ao benefício. É exatamente esse tipo de análise que fazemos juntos na consultoria.",
    ],
    imagemCapa: "/images/geral/eiffel-picnic.jpg",
  },
];
