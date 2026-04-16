import { iFAT } from "../../ingredients/ingFat";
import { iGRN } from "../../ingredients/ingGrain";
import { iMET } from "../../ingredients/ingMeat";
import { iOTH } from "../../ingredients/ingOther";
import { iSPC } from "../../ingredients/ingSpice";
import { iVEG } from "../../ingredients/ingVegetable";
import type { Recipe } from "../../types";

const sznycleMielone: Recipe = {
  name: "Sznycle Mielone",
  description: "",
  type: "dinner",
  images: [""],
  time: 30,
  portions: 2,
  ingredients: [
    {
      title: "",
      items: [
        { ingredient: iMET.ground_pork, amount: 0.5, unit: "opak" },
        { ingredient: iGRN.kaiser_roll, amount: 1, unit: "szt" },
        { ingredient: iVEG.onion, amount: 1, unit: "szt" },
        { ingredient: iVEG.garlic, amount: 2, unit: "zbk" },
        { ingredient: iMET.egg, amount: 1, unit: "szt" },
        { ingredient: iGRN.breadcrumbs, amount: 100 },
        { ingredient: iFAT.oil, amount: 4, unit: "lz" },
        { ingredient: iOTH.maggi },
        { ingredient: iSPC.black_pepper },
        { ingredient: iSPC.salt },
      ],
    },
  ],
  steps: [],
};

export default sznycleMielone;
