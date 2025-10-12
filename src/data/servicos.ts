// src/data/servicos.ts
export interface PacoteBanho {
  id: string;
  titulo: string;
  descricao: string;
  itens: string[];
}

export const pacotesBanho: PacoteBanho[] = [
  {
    id: "banho-quinzenal",
    titulo: "Clubinho Quinzenal",
    descricao: "Perfeito para manter a higiene e o bem-estar do seu pet com frequência regular.",
    itens: [
      "Banho completo a cada 15 dias",
      "1 Tosa higiênica",
      "1 hidratação",
      "Corte de unhas e limpeza de ouvidos",
      "Enfeite com laço ou gravatinha",
      "Perfume"
    ],
  },
  {
    id: "banho-mensal",
    titulo: "Clubinho Mensal",
    descricao:
      "Ideal para quem quer praticidade e cuidado contínuo. Inclui tudo para manter o pet sempre limpo e saudável.",
    itens: [
      "4 banhos no mês (1 por semana, mesmo dia e horário fixo)",
      "1 tosa higiênica no mês",
      "1 hidratação mensal",
      "Corte de unhas e limpeza de ouvidos sempre que necessário",
      "Escovação dental em todos",
    ],
  },
  {
    id: "banho-simples",
    titulo: "Banho Simples",
    descricao: "Perfeito para manter a higiene e o bem-estar do seu pet.",
    itens: [
      "Banho (Pré shampoo, shampoo, condicionador)",
      "Corte de unhas e limpeza de ouvidos",
      "Enfeite com bandana/gravatinha ou laço",
      "Perfume"
    ],
  },
  {
    id: "banho-ozonio",
    titulo: "Banho Terapêutico com Ozônio",
    descricao:
      "Banho especial que utiliza ozônio para tratar e prevenir problemas de pele. Indicado para pets com alergias, irritações ou mau cheiro.",
    itens: [
      "Banho com água ozonizada",
      "Ação antibacteriana e antifúngica natural",
      "Estimula a regeneração da pele e melhora a circulação",
      "Reduz inflamações e odores persistentes",
      "Tosa higiênica inclusa em cada aplicação",
    ],
  },
  {
    id: "tosa-higienica",
    titulo: "Tosa Higiênica",
    descricao:
      "Serviço essencial para o bem-estar do pet, mantendo a limpeza e conforto nas áreas mais sensíveis.",
    itens: [
      "Remoção de pelos em excesso nas regiões íntimas e patinhas",
      "Melhora a higiene e reduz odores",
      "Ideal para manter o conforto entre tosas completas",
    ],
  },
];
