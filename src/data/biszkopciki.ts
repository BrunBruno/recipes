import { iDIR } from "../ingredients/ingDairy";
import { iFAT } from "../ingredients/ingFat";
import { iGRN } from "../ingredients/ingGrain";
import { iMET } from "../ingredients/ingMeat";
import { iOTH } from "../ingredients/ingOther";
import { iSPC } from "../ingredients/ingSpice";
import type { Recipe } from "../types";

const biszkopciki: Recipe = {
  name: "Biszkopciki",
  type: "dessert",
  image: "",
  kcal: 0,
  time: 0,
  portions: 0,
  ingredients: [
    { ingredient: iMET.egg, amount: 2 },
    { ingredient: iGRN.flour, amount: 60 },
    { ingredient: iFAT.oil, amount: 10 },
    { ingredient: iDIR.milk, amount: 20 },
    { ingredient: iOTH.sugar, amount: 60 },
    { ingredient: iOTH.cocoa, amount: 5 },
    { ingredient: iSPC.salt },
  ],
  steps: [],
  keyWords: ["ciasto", "słodkie", "przekąska"],
};

export default biszkopciki;
