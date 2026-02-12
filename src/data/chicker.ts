import { iGRN } from "../ingredients/ingGrain";
import { iMET } from "../ingredients/ingMeat";
import { iOTH } from "../ingredients/ingOther";
import { iSAU } from "../ingredients/ingSauce";
import { iVEG } from "../ingredients/ingVegetable";
import type { Recipe } from "../types";

const chicker: Recipe = {
  name: "Chickery",
  type: "snack",
  images: [""],
  time: 25,
  portions: 4,
  ingredients: [
    { ingredient: iMET.pikantne_poledwiczki, amount: 400 },
    { ingredient: iGRN.chicken_buns, amount: 4, unit: "szt" },
    { ingredient: iVEG.lettuce, amount: 4, unit: "szt" },
    { ingredient: iSAU.ketchup, amount: 1.5, unit: "łyżeczka" },
    { ingredient: iSAU.mustard, amount: 2, unit: "łyżeczka" },
    { ingredient: iSAU.mayonnaise, amount: 1, unit: "łyżeczka" },
    { ingredient: iSAU.sriracha, amount: 2, unit: "łyżeczka" },
    { ingredient: iOTH.honey, amount: 0.5, unit: "łyżeczka" },
  ],
  steps: [
    {
      title: "Sosy",
      steps: [
        "Wymieszaj ketchup z sosem sriracha, aby uzyskać ostry sos.",
        "Wymieszaj musztardę, majonez i miód, aby uzyskać sos miodowo-musztardowy.",
      ],
    },
    {
      title: "Chickery",
      steps: [
        "Podsmaż gotowe polędwiczki.",
        "Bułki przekrój i podpiecz w tosterze.",
        "Umyj i porwij sałatę.",
        "Złóż chickery, przygotowując po dwie sztuki z różnymi sosami.",
      ],
    },
  ],
  keyWords: ["mięso", "kurczak", "fast food", "smażone"],
};

export default chicker;
