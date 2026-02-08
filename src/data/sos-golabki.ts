import type { Recipe } from "../types";

const sosDoGolabkow: Recipe = {
  name: "Sos do Gołąbków",
  type: "sauce",
  image: "golabki.jpg",
  kcal: 120,
  time: 10,
  portions: 4,
  ingredients: [
    {
      name: "masło",
      amount: 1,
      unit: "łyżka",
      type: "fat",
    },
    {
      name: "mąka",
      amount: 2,
      unit: "łyżka",
      type: "grn",
    },
    {
      name: "woda",
      amount: 0.5,
      unit: "szklanka",
      type: "wat",
    },
    {
      name: "przecier pomidorowy",
      amount: 250,
      unit: "ml",
      type: "veg",
    },
    {
      name: "sól",
      amount: null,
      unit: null,
      type: "spc",
    },
    {
      name: "Maggi",
      amount: null,
      unit: null,
      type: "sau",
    },
    {
      name: "jarzynka",
      amount: null,
      unit: null,
      type: "spc",
    },
  ],
  steps: [
    "Na patelni lub w garnku rozpuść masło i dodaj mąkę.",
    "Smaż, aż zasmażka będzie lekko brązowa.",
    "Dodaj wodę oraz przecier pomidorowy i dokładnie wymieszaj.",
    "Zagotuj całość, rozbijając ewentualne grudki mąki.",
    "Dopraw solą, Maggi oraz jarzynką do smaku.",
  ],
};

export default sosDoGolabkow;
