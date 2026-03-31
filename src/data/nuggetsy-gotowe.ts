import { iMET } from "../ingredients/ingMeat";
import { iVEG } from "../ingredients/ingVegetable";
import { iSAU } from "../ingredients/ingSauce";
import type { Recipe } from "../types";

const nuggetsyGotowe: Recipe = {
  name: "Nuggetsy Gotowe",
  description:
    "Gotowe nuggetsy z piekarnika podane z frytkami oraz mieszanką warzyw na patelnię.",
  type: "dinner",
  images: ["nuggetsy-gotowe.jpg"],
  time: 30,
  portions: 1,
  ingredients: [
    {
      title: "Lista składników",
      items: [
        { ingredient: iMET.chicken_nuggets, amount: 1, unit: "opak" },
        { ingredient: iVEG.frozen_fries, amount: 150 },
        { ingredient: iVEG.frozen_vegetable_mix, amount: 200 },
        { ingredient: iSAU.ketchup, amount: 2, unit: "lzi" },
      ],
    },
  ],
  steps: [
    {
      title: "",
      steps: [
        "Przygotuj frytki przygotuj w piekarniku zgodnie z instrukcją na opakowaniu.",
        "W międzyczasie rozgrzej patelnię i podsmaż mieszankę warzyw.",
        "Warzywa smaż kilka minut, aż będą miękkie i lekko zarumienione.",
        "Na tej samej patelni usmaż nuggetsy zgodnie z instrukcją na opakowaniu.",
        "Na talerzu podaj nuggetsy, frytki oraz warzywa.",
        "Podawaj z sosami.",
      ],
    },
  ],
  keyWords: ["kurczak", "xxx"],
};

export default nuggetsyGotowe;
