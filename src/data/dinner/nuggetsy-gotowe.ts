import { iMET } from "../../ingredients/ingMeat";
import { iFAT } from "../../ingredients/ingFat";
import type { Recipe } from "../../types";
import { iSPC } from "../../ingredients/ingSpice";
import { iJAR } from "../../ingredients/ingJar";

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
      title: "",
      items: [
        { ingredient: iMET.chicken_nuggets, amount: 1, unit: "opak" },
        { ingredient: iJAR.frozen_fries, amount: 150 },
        { ingredient: iJAR.frozen_vegetable_mix, amount: 200 },
        { ingredient: iFAT.oil, amount: 2, unit: "lzi" },
        { ingredient: iSPC.salt },
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
  keyWords: ["kurczak"],
};

export default nuggetsyGotowe;
