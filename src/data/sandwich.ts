import type { Recipe } from "../types";

const sandwichRecipe: Recipe = {
  name: "Sandwiche",
  type: "snack",
  image: "sandwiche.jpg",
  ingredients: [
    {
      name: "tosty",
      amount: 4,
      unit: "szt",
      type: "grn",
    },
    {
      name: "ser żółty",
      amount: 2,
      unit: "plaster",
      type: "che",
    },
    {
      name: "szynka",
      amount: 2,
      unit: "plaster",
      type: "met",
    },
    {
      name: "ogórek kiszony",
      amount: null,
      unit: null,
      type: "veg",
    },
    {
      name: "ketchup",
      amount: null,
      unit: null,
      type: "sau",
    },
    {
      name: "sos czosnkowy",
      amount: null,
      unit: null,
      type: "sau",
    },
  ],
  steps: [
    "Ogórka kiszonego pokroić w cienkie plasterki.",
    "Na dwóch tostach ułożyć ser, szynkę oraz ogórka.",
    "Przykryć pozostałymi tostami.",
    "Włożyć sandwiche do rozgrzanego sandwichera i opiekać, aż będą złociste i chrupiące.",
    "Po wyjęciu polać ketchupem oraz sosem czosnkowym.",
  ],
};

export default sandwichRecipe;
