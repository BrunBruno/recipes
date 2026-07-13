import { iMET } from "../../ingredients/ingMeat";
import { iFAT } from "../../ingredients/ingFat";
import type { Recipe } from "../../types";
import { iSPC } from "../../ingredients/ingSpice";
import { iJAR } from "../../ingredients/ingJar";

const nuggetsyGotowe: Recipe = {
  name: "Nuggetsy Gotowe",
  type: "snack",
  cookingMethods: ["fried"],
  images: ["nuggetsy-gotowe.jpg", "nuggetsy-gotowe-2.jpg"],
  time: 30,
  portions: 1,
  taste: 4,
  difficulty: 1,
  ingredients: [
    {
      title: "",
      items: [
        { ing: iMET.chicken_nuggets, amount: 1, unit: "opak" },
        { ing: iJAR.frozen_fries, amount: 150 },
        { ing: iJAR.frozen_vegetable_mix, amount: 200 },
        { ing: iFAT.oil, amount: 2, unit: "lzi" },
        { ing: iSPC.salt },
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
  keyWords: ["mięso", "kurczak"],
};

export default nuggetsyGotowe;
