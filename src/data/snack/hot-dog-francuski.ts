import { iGRN } from "../../ingredients/ingGrain";
import { iJAR } from "../../ingredients/ingJAR";
import { iMET } from "../../ingredients/ingMeat";
import type { Recipe } from "../../types";

const frenchHotDog: Recipe = {
  name: "Hot Dog Francuski",
  description:
    "Szybki i prosty Hot Dog Francuski z parówką w chrupiącej bułce i mieszanką sosów: ketchup, musztarda, sos czosnkowy i sriracha - idealna przekąska w 10 minut.",
  type: "snack",
  images: ["hot-dog-francuski.jpg"],
  time: 10,
  portions: 1,
  ingredients: [
    {
      title: "",
      items: [
        { ingredient: iMET.sausages, amount: 2, unit: "szt" },
        { ingredient: iGRN.french_hotdog_buns, amount: 2, unit: "szt" },
        { ingredient: iJAR.ketchup, amount: 10 },
        { ingredient: iJAR.garlic_sauce, amount: 10 },
        { ingredient: iJAR.mustard, amount: 10 },
        { ingredient: iJAR.sriracha, amount: 10 },
      ],
    },
  ],

  steps: [
    {
      title: "",
      steps: [
        "Podgrzej parówki mikrofalówce.",
        "Podgrzej bułki do hot dogów francuskich w tosterze.",
        "Do wnętrza bułki dodaj sosy.",
        "Propozycje sosów: ketchup i sos czosnkowy, musztarda i sos sriracha.",
        "Włóż gorącą parówkę do środka bułki.",
      ],
    },
  ],

  keyWords: ["pieczywo"],
};

export default frenchHotDog;
