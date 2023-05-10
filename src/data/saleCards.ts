type SaleCardsTypes = {
  title: string;
  steps: { name: string; pk: number }[];
  id: number;
};

const saleCards: SaleCardsTypes[] = [
  {
    title: "Без условия",
    steps: [
      {
        name: "Скидка",
        pk: 1,
      },
      {
        name: "Товар",
        pk: 2,
      },
    ],
    id: 1,
  },
  {
    title: "С условием",
    steps: [
      {
        name: "Условие",
        pk: 1,
      },
      {
        name: "Скидка",
        pk: 3,
      },
      {
        name: "Товар",
        pk: 3,
      },
    ],
    id: 1,
  },
];

export default saleCards;
export type { SaleCardsTypes };
