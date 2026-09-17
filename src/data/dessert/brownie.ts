import { iFAT } from "../../ingredients/ingFat";
import { iGRN } from "../../ingredients/ingGrain";
import { iMET } from "../../ingredients/ingMeat";
import { iNUT } from "../../ingredients/ingNut";
import { iOTH } from "../../ingredients/ingOther";
import { iSNK } from "../../ingredients/ingSnack";
import { iSPC } from "../../ingredients/ingSpice";
import type { Recipe } from "../../types";

const brownie: Recipe = {
  name: "Brownie",
  type: "dessert",
  images: [""],
  time: 0,
  portions: 0,
  taste: null,
  difficulty: null,
  ingredients: [
    {
      title: "",
      items: [
        { ing: iMET.egg, amount: 5, unit: "szt" },
        { ing: iSNK.chocolate_dark, amount: 200 },
        { ing: iOTH.brown_sugar, amount: 250 },
        { ing: iGRN.flour, amount: 140 },
        { ing: iFAT.butter, amount: 1, unit: "kst" },
        { ing: iFAT.oil, amount: 3, unit: "lz" },
        { ing: iNUT.cocoa, amount: 100 },
        { ing: iSPC.salt, amount: 0.5, unit: "lzi" },
      ],
    },
  ],
  steps: [],
  link: "https://aniagotuje.pl/przepis/brownie",
};

export default brownie;
