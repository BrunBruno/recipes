import { iDIR } from "../ingredients/ingDairy";
import { iFAT } from "../ingredients/ingFat";
import { iGRN } from "../ingredients/ingGrain";
import { iMET } from "../ingredients/ingMeat";
import { iOTH } from "../ingredients/ingOther";
import { iSPC } from "../ingredients/ingSpice";
import type { Recipe } from "../types";

const biszkoptWaniliowy: Recipe = {
  name: "Biszkopt Waniliowy",
  type: "dessert",
  images: [""],
  time: 0,
  portions: 0,
  ingredients: [
    {
      title: "",
      items: [
        { ingredient: iMET.egg, amount: 3 , unit: "szt"},
        { ingredient: iSPC.salt, amount: 1, unit: "g" },
        { ingredient: iOTH.sugar, amount: 90, unit: "g" },
        { ingredient: iGRN.flour, amount: 90, unit: "g" },
        { ingredient: iFAT.oil, amount: 30, unit: "g" },
        { ingredient: iDIR.milk, amount: 30, unit: "g" },
        { ingredient: iOTH.vanilla_extract, amount: 2, unit: "ml" },
      ],
    },
  ],
  steps: [],
  keyWords: ["ciasto", "słodkie", "biszkopt", "wanilia"],
};

export default biszkoptWaniliowy;
