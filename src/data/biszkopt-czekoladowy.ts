import { iDIR } from "../ingredients/ingDairy";
import { iFAT } from "../ingredients/ingFat";
import { iGRN } from "../ingredients/ingGrain";
import { iMET } from "../ingredients/ingMeat";
import { iOTH } from "../ingredients/ingOther";
import type { Recipe } from "../types";

const biszkoptCzekoladowy: Recipe = {
  name: "Biszkopt Czekoladowy",
  type: "dessert",
  images: [""],
  time: 0,
  portions: 0,
  ingredients: [
    {
      title: "",
      items: [
        { ingredient: iMET.egg, amount: 3, unit: "szt" },
        { ingredient: iOTH.sugar, amount: 90, unit: "g" },
        { ingredient: iGRN.flour, amount: 75, unit: "g" },
        { ingredient: iOTH.cocoa, amount: 15, unit: "g" },
        { ingredient: iFAT.oil, amount: 30, unit: "g" },
        { ingredient: iDIR.milk, amount: 40, unit: "g" },
      ],
    },
  ],
  steps: [],
  keyWords: ["ciasto", "słodkie", "biszkopt", "czekolada"],
};

export default biszkoptCzekoladowy;
