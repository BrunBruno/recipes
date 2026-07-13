import { iDIR } from "../../ingredients/ingDairy";
import { iGRN } from "../../ingredients/ingGrain";
import { iJAR } from "../../ingredients/ingJar";
import { iMET } from "../../ingredients/ingMeat";
import { iSAU } from "../../ingredients/ingSauce";
import type { Recipe } from "../../types";

const sandwich: Recipe = {
  name: "Sandwiche",
  type: "breakfast",
  images: [
    "sandwiche.jpg",
    "sandwiche-2.jpg",
    "sandwiche-3.jpg",
    "sandwiche-4.jpg",
    "sandwiche-5.jpg",
  ],
  time: 10,
  portions: 1,
  taste: 4,
  difficulty: 1,
  ingredients: [
    {
      title: "",
      items: [
        { ing: iGRN.toast_bread, amount: 4, unit: "krom" },
        {
          type: "choice",
          options: [
            { ing: iMET.ham_slices, amount: 2, unit: "plas" },
            { ing: iMET.salami, amount: 2, unit: "plas" },
          ],
          selected: 0,
        },
        { ing: iDIR.yellow_cheese, amount: 2, unit: "plas" },
        { ing: iJAR.pickled_cucumber, amount: 0.5, unit: "szt" },
        { ing: iSAU.ketchup, amount: 5 },
        { ing: iSAU.garlic_sauce, amount: 5 },
      ],
    },
  ],
  steps: [
    {
      title: "",
      steps: [
        "Ogórka kiszonego pokroić w cienkie plaski.",
        "Na dwóch tostach ułożyć ser, szynkę oraz ogórka.",
        "Przykryć pozostałymi tostami.",
        "Włożyć sandwiche do rozgrzanego sandwichera i opiekać, aż będą złociste i chrupiące.",
        "Po wyjęciu polać ketchupem oraz sosem czosnkowym.",
      ],
    },
  ],
  keyWords: ["pieczywo", "ser", "szynka"],
};

export default sandwich;
