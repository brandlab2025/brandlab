export interface FaqItem {
  question: string;
  answer: string;
  expanded: boolean;
}

export const faqItems = [
  {
    question: 'Como funciona o processo de criação de conteúdos?',
    answer: 'O processo começa com uma análise estratégica para entender a sua marca e o seu público-alvo. Avaliamos a situação atual da sua marca e propomos soluções para que a sua presença digital seja forte, consistente e alinhada com o seu posicionamento de mercado. Após esta fase inicial, é elaborado o Calendário Editorial, que é revisto e aprovado por si, para posteriormente agendar as publicações.',
    expanded: false
  },
  {
    question: 'A Brand Lab oferece serviços de gestão de anúncios pagos (Facebook Ads, Instagram Ads)?',
    answer: 'Sim! Além da criação de anúncios, fazemos a gestão completa das campanhas, otimizando a sua performance para maximizar o retorno sobre o investimento.',
    expanded: false
  },
  {
    question: 'Com que frequência são feitas publicações?',
    answer: 'A frequência ideal é definida em conjunto, com base na estratégia e nos recursos disponíveis. Privilegiamos qualidade e consistência para melhores resultados.',
    expanded: false
  },
  {
    question: 'Com que frequência são feitas publicações?',
    answer: 'Não há soluções genéricas. Cada marca é tratada de forma personalizada, com estratégias baseadas em dados, tendências de mercado e uma dedicação genuína ao sucesso de cada cliente.',
    expanded: false
  }
];
