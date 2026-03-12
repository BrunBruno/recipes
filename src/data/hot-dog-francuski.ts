import { iGRN } from "../ingredients/ingGrain";
import { iMET } from "../ingredients/ingMeat";
import { iSAU } from "../ingredients/ingSauce";
import type { Recipe } from "../types";

const frenchHotDog: Recipe = {
  name: "Hot Dog Francuski",
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
        { ingredient: iSAU.ketchup },
        { ingredient: iSAU.garlic_sauce },
        { ingredient: iSAU.mustard },
        { ingredient: iSAU.sriracha },
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

  keyWords: ["pieczywo", "xxx"],
};

export default frenchHotDog;
