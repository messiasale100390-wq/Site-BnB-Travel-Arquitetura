export type CategoriaRoteiro =
  | "Internacional"
  | "Casais"
  | "Natureza"
  | "Cidades";

export interface Roteiro {
  slug: string;
  nome: string;
  destino: string;
  pais: string;
  duracao: string;
  estilo: string;
  categorias: CategoriaRoteiro[];
  resumo: string;
  descricao: string[];
  imagemCapa: string;
  galeria: string[];
}

export interface Servico {
  numero: string;
  nome: string;
  inclui: string;
  investimento: string;
  investimentoReferencia: boolean;
  perfilIndicado: string;
}

export interface PerguntaFrequente {
  pergunta: string;
  resposta: string;
}

export interface Post {
  slug: string;
  titulo: string;
  data: string;
  categoria: string;
  resumo: string;
  corpo: string[];
  imagemCapa: string;
}
