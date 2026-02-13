import { iGRN } from "../ingredients/ingGrain";
import { iMET } from "../ingredients/ingMeat";
import { iSAU } from "../ingredients/ingSauce";
import { iVEG } from "../ingredients/ingVegetable";
import type { Recipe } from "../types";

const hotHog: Recipe = {
  name: "Hot Dog",
  type: "snack",
  images: ["hot-dog.jpg"],
  time: 10,
  portions: 2,
  ingredients: [
    {
      title: "",
      items: [
        { ingredient: iMET.sausages, amount: 4, unit: "szt" },
        { ingredient: iGRN.hotdog_buns, amount: 4, unit: "szt" },
        { ingredient: iVEG.pickled_cucumber, amount: 2, unit: "szt" },
        { ingredient: iVEG.sauerkraut, amount: 160 },
        { ingredient: iVEG.fried_onion, amount: 2, unit: "łyżka" },
        { ingredient: iSAU.ketchup },
        { ingredient: iSAU.mustard },
        { ingredient: iSAU.garlic_sauce },
      ],
    },
  ],
  steps: [
    {
      title: "",
      steps: [
        "Podgrzej bułki oraz parówki w mikrofalówce.",
        "Pokrój ogórki kiszone wzdłuż.",
        "Otwórz bułki i ułóż po bokach ogórki kiszone.",
        "Włóż parówkę do bułki.",
        "Polej całość ketchupem, musztardą i sosem czosnkowym.",
        "Dodaj kapustę kiszoną i posyp cebulką prażoną.",
      ],
    },
  ],
  keyWords: ["mięso", "fast food"],
};

export default hotHog;
