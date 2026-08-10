import { iDIR } from "../../ingredients/ingDairy";
import { iFAT } from "../../ingredients/ingFat";
import { iLIQ } from "../../ingredients/ingLiquid";
import { iOTH } from "../../ingredients/ingOther";
import { iSNK } from "../../ingredients/ingSnack";
import type { Recipe } from "../../types";

const kremZOrzechow: Recipe = {
  name: "Krem z Orzechów",
  type: "dinner",
  cookingMethods: [],
  images: [""],
  time: 0,
  portions: 0,
  taste: null,
  difficulty: null,
  ingredients: [
    {
      title: "",
      items: [
        { ing: iFAT.hazelnut_paste, amount: 100 },
        { ing: iOTH.gelatin_bloom_220, amount: 2.2 },
        { ing: iLIQ.water, amount: 11 },
        { ing: iDIR.milk, amount: 88 },
        { ing: iSNK.chocolate_white_28, amount: 60 },
        { ing: iSNK.chocolate_milk, amount: 25 },
        { ing: iDIR.cream_36, amount: 230 },
      ],
    },
  ],
  steps: [],
};

export default kremZOrzechow;
