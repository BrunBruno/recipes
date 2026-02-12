import { iDIR } from "../ingredients/ingDairy";
import { iFAT } from "../ingredients/ingFat";
import { iGRN } from "../ingredients/ingGrain";
import { iMET } from "../ingredients/ingMeat";
import { iOTH } from "../ingredients/ingOther";
import { iSPC } from "../ingredients/ingSpice";
import type { Recipe } from "../types";

const pancakes: Recipe = {
  name: "Pancakes",
  type: "dessert",
  images: ["pancakes.jpg"],
  time: 20,
  portions: 3,
  ingredients: [
    { ingredient: iMET.egg, amount: 1, unit: "szt" },
    { ingredient: iGRN.flour, amount: 1.25, unit: "szklanka" },
    { ingredient: iDIR.buttermilk, amount: 1.25, unit: "szklanka" },
    { ingredient: iOTH.powdered_sugar, amount: 0.25, unit: "szklanka" },
    { ingredient: iOTH.baking_powder, amount: 1, unit: "łyżeczka" },
    { ingredient: iOTH.baking_soda, amount: 1, unit: "łyżeczka" },
    { ingredient: iFAT.oil, amount: 0.25, unit: "szklanka" },
    { ingredient: iSPC.salt },
  ],
  steps: [
    {
      title: "",
      steps: [
        "W blenderze zmiksuj wszystkie składniki na gładką masę o konsystencji gęstej śmietany.",
        "Rozgrzej patelnię na średnim ogniu.",
        "Smaż pancakes z obu stron aż będą złociste.",
        "Podawaj z syropem klonowym, masłem lub cukrem pudrem według uznania.",
      ],
    },
  ],
  keyWords: ["słodkie", "ciasto", "naleśnik"],
};

export default pancakes;
