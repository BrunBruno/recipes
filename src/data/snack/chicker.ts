import { iGRN } from "../../ingredients/ingGrain";
import { iMET } from "../../ingredients/ingMeat";
import { iOTH } from "../../ingredients/ingOther";
import { iSPC } from "../../ingredients/ingSpice";
import { iVEG } from "../../ingredients/ingVegetable";
import type { Recipe } from "../../types";

const chicker: Recipe = {
  name: "Chickery",
  description:
    "Szybkie kanapki z kurczakiem w chrupiącej panierce, podawane z dwoma wyrazistymi sosami - ostrym i miodowo-musztardowym.",
  type: "snack",
  images: [""],
  time: 25,
  portions: 2,
  ingredients: [
    {
      title: "Kanapki",
      items: [
        { ingredient: iMET.spicy_tenderloins, amount: 400 },
        { ingredient: iGRN.chicken_buns, amount: 4, unit: "szt" },
        { ingredient: iVEG.lettuce, amount: 4, unit: "szt" },
      ],
    },
    {
      title: "Sosy",
      items: [
        { ingredient: iSPC.ketchup, amount: 1.5, unit: "lzi" },
        { ingredient: iSPC.mustard, amount: 2, unit: "lzi" },
        { ingredient: iSPC.mayonnaise, amount: 1, unit: "lzi" },
        { ingredient: iSPC.sriracha, amount: 2, unit: "lzi" },
        { ingredient: iOTH.honey, amount: 0.5, unit: "lzi" },
      ],
    },
  ],
  steps: [
    {
      title: "Przygotowanie sosów",
      steps: [
        "Wymieszaj ketchup z sosem sriracha, aby uzyskać ostry sos.",
        "Wymieszaj musztardę, majonez i miód, aby uzyskać sos miodowo-musztardowy.",
      ],
    },
    {
      title: "Przygotowanie chickerów",
      steps: [
        "Podsmaż gotowe polędwiczki.",
        "Bułki przekrój i podpiecz w tosterze.",
        "Umyj i porwij sałatę.",
        "Złóż chickery, przygotowując po dwie sztuki z różnymi sosami.",
      ],
    },
  ],
  keyWords: ["pieczywo", "kurczak"],
};

export default chicker;
