import { iDIR } from "../ingredients/ingDairy";
import { iGRN } from "../ingredients/ingGrain";
import { iMET } from "../ingredients/ingMeat";
import { iSAU } from "../ingredients/ingSauce";
import { iVEG } from "../ingredients/ingVegetable";
import type { Recipe } from "../types";

const sandwich: Recipe = {
  name: "Sandwiche",
  description:
    "Szybkie i chrupiące sandwiche z szynką, żółtym serem i ogórkiem, podawane z ketchupem i sosem czosnkowym - idealna przekąska na każdą porę dnia.",
  type: "snack",
  images: ["sandwiche.jpg", "sandwiche-2.jpg"],
  time: 10,
  portions: 1,
  ingredients: [
    {
      title: "",
      items: [
        { ingredient: iGRN.toast_bread, amount: 4, unit: "krom" },
        { ingredient: iMET.ham_slices, amount: 2, unit: "plas" },
        { ingredient: iDIR.yellow_cheese, amount: 2, unit: "plas" },
        { ingredient: iVEG.pickled_cucumber, amount: 0.5, unit: "szt" },
        { ingredient: iSAU.ketchup },
        { ingredient: iSAU.garlic_sauce },
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
  keyWords: ["pieczywo", "ser", "xxx"],
};

export default sandwich;
