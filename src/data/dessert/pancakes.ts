import { iDIR } from "../../ingredients/ingDairy";
import { iFAT } from "../../ingredients/ingFat";
import { iGRN } from "../../ingredients/ingGrain";
import { iJAR } from "../../ingredients/ingJar";
import { iMET } from "../../ingredients/ingMeat";
import { iOTH } from "../../ingredients/ingOther";
import { iSPC } from "../../ingredients/ingSpice";
import type { Recipe } from "../../types";

const pancakes: Recipe = {
  name: "Pancakes",
  description:
    "Puszyste pancakes z maślanką i jajkiem, smażone na patelni, idealne na deser lub słodkie śniadanie, podawane z syropem lub cukrem pudrem.",
  type: "dessert",
  images: ["pancakes.jpg", "pancakes-2.jpg"],
  time: 30,
  portions: 3,
  executionDifficulty: 2,
  ingredients: [
    {
      title: "",
      items: [
        { ingredient: iGRN.flour, amount: 1.25, unit: "szk" },
        { ingredient: iMET.egg, amount: 1, unit: "szt" },
        { ingredient: iDIR.buttermilk, amount: 1.25, unit: "szk" },
        { ingredient: iOTH.powdered_sugar, amount: 0.25, unit: "szk" },
        { ingredient: iOTH.baking_powder, amount: 1, unit: "lzi" },
        { ingredient: iOTH.baking_soda, amount: 1, unit: "lzi" },
        { ingredient: iFAT.oil, amount: 0.25, unit: "szk" },
        { ingredient: iSPC.salt },
      ],
    },
    {
      title: "Przykładowe dodatki",
      items: [
        { ingredient: iGRN.chocolate_cream, excludeFromCalc: true },
        { ingredient: iGRN.nutella, excludeFromCalc: true },
        { ingredient: iOTH.maple_syrup, excludeFromCalc: true },
        { ingredient: iDIR.whipped_cream, excludeFromCalc: true },
        { ingredient: iJAR.jam_strawberry, excludeFromCalc: true },
        { ingredient: iFAT.peanut_butter, excludeFromCalc: true },
      ],
    },
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
  keyWords: ["ciasto", "naleśnik"],
};

export default pancakes;
