import { iDIR } from "../../ingredients/ingDairy";
import { iFAT } from "../../ingredients/ingFat";
import { iGRN } from "../../ingredients/ingGrain";
import { iJAR } from "../../ingredients/ingJar";
import { iMET } from "../../ingredients/ingMeat";
import { iOTH } from "../../ingredients/ingOther";
import { iSPC } from "../../ingredients/ingSpice";
import type { Recipe } from "../../types";

const portions = 3;
const pancakes: Recipe = {
  name: "Pancakes",
  description:
    "Puszyste pancakes z maślanką i jajkiem, smażone na patelni, idealne na deser lub słodkie śniadanie, podawane z syropem lub cukrem pudrem.",
  type: "dessert",
  images: [
    "pancakes.jpg",
    "pancakes-2.jpg",
    "pancakes-3.jpg",
    "pancakes-4.jpg",
  ],
  time: 30,
  portions: portions,
  executionDifficulty: 2,
  ingredients: [
    {
      title: "",
      items: [
        { ing: iGRN.flour, amount: 1.25, unit: "szk" },
        { ing: iMET.egg, amount: 1, unit: "szt" },
        { ing: iDIR.buttermilk, amount: 1.25, unit: "szk" },
        { ing: iOTH.powdered_sugar, amount: 0.25, unit: "szk" },
        { ing: iOTH.baking_powder, amount: 1, unit: "lzi" },
        { ing: iOTH.baking_soda, amount: 1, unit: "lzi" },
        { ing: iFAT.oil, amount: 0.25, unit: "szk" },
        {
          type: "choice",
          options: [
            {
              ing: iGRN.chocolate_cream,
              amount: portions * 30,
            },
            {
              ing: iGRN.nutella,
              amount: portions * 30,
            },
            {
              ing: iOTH.maple_syrup,
              amount: portions * 20,
            },
            {
              ing: iDIR.whipped_cream,
              amount: portions * 35,
            },
            {
              ing: iJAR.jam_strawberry,
              amount: portions * 25,
            },
            {
              ing: iFAT.peanut_butter,
              amount: portions * 25,
            },
          ],
          selected: 0,
        },
        { ing: iSPC.salt },
      ],
    },
    {
      title: "Proponowane dodatki",
      isAdd: true,
      items: [
        { ing: iGRN.chocolate_cream, exclude: true },
        { ing: iGRN.nutella, exclude: true },
        { ing: iOTH.maple_syrup, exclude: true },
        { ing: iDIR.whipped_cream, exclude: true },
        { ing: iJAR.jam_strawberry, exclude: true },
        { ing: iFAT.peanut_butter, exclude: true },
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
