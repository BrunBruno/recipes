import { iDIR } from "../ingredients/ingDairy";
import { iGRN } from "../ingredients/ingGrain";
import { iMET } from "../ingredients/ingMeat";
import { iSAU } from "../ingredients/ingSauce";
import { iVEG } from "../ingredients/ingVegetable";
import type { Recipe } from "../types";

const sandwichRecipe: Recipe = {
  name: "Sandwiche",
  type: "snack",
  image: "sandwiche.jpg",
  time: 10,
  portions: 2,
  ingredients: [
    { ingredient: iGRN.toast_bread, amount: 4, unit: "szt" },
    { ingredient: iMET.ham_slices, amount: 2, unit: "plaster" },
    { ingredient: iDIR.yellow_cheese, amount: 2, unit: "plaster" },
    { ingredient: iVEG.pickled_cucumber },
    { ingredient: iSAU.ketchup },
    { ingredient: iSAU.garlic_sauce },
  ],
  steps: [
    {
      title: "",
      steps: [
        "Ogórka kiszonego pokroić w cienkie plasterki.",
        "Na dwóch tostach ułożyć ser, szynkę oraz ogórka.",
        "Przykryć pozostałymi tostami.",
        "Włożyć sandwiche do rozgrzanego sandwichera i opiekać, aż będą złociste i chrupiące.",
        "Po wyjęciu polać ketchupem oraz sosem czosnkowym.",
      ],
    },
  ],
  keyWords: ["tost", "mięso", "ser"],
};

export default sandwichRecipe;
