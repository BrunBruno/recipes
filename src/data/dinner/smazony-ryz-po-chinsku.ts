import { iFAT } from "../../ingredients/ingFat";
import { iGRN } from "../../ingredients/ingGrain";
import { iLIQ } from "../../ingredients/ingLiquid";
import { iMET } from "../../ingredients/ingMeat";
import { iSPC } from "../../ingredients/ingSpice";
import { iVEG } from "../../ingredients/ingVegetable";
import type { Recipe } from "../../types";

const smazonyRyzPoChinsku: Recipe = {
  name: "Smażony Ryż po Chińsku",
  description: "",
  type: "dinner",
  images: [""],
  time: 0,
  portions: 0,
  executionDifficulty: null,
  ingredients: [
    {
      title: "",
      items: [
        { ing: iMET.chicken_breast, amount: 400 },
        { ing: iGRN.rice, amount: 100 },
        { ing: iVEG.carrot, amount: 2, unit: "szt" },
        { ing: iVEG.leek, amount: 50 },
        { ing: iLIQ.water, amount: 50, unit: "ml" },
        { ing: iFAT.oil, amount: 2, unit: "lz" },
        { ing: iSPC.knorr_chinese_fired_rice_fix, amount: 1, unit: "opak" },
      ],
    },
  ],
  steps: [],
};

export default smazonyRyzPoChinsku;
