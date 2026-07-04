import { iFAT } from "../../ingredients/ingFat";
import { iGRN } from "../../ingredients/ingGrain";
import { iJAR } from "../../ingredients/ingJar";
import { iMET } from "../../ingredients/ingMeat";
import { iOTH } from "../../ingredients/ingOther";
import { iSPC } from "../../ingredients/ingSpice";
import { iVEG } from "../../ingredients/ingVegetable";
import type { Recipe } from "../../types";

const kurczakSlodkoKwasny: Recipe = {
  name: "Kurczak Slodko-Kwaśny",
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
        { ing: iVEG.bell_pepper, amount: 1, unit: "szt" },
        { ing: iVEG.onion, amount: 1, unit: "szt" },
        { ing: iJAR.canned_pineapple, amount: 5, unit: "plas" },
        { ing: iGRN.potato_starch, amount: 3, unit: "lz" },
        { ing: iFAT.oil, amount: 3, unit: "lz" },
        { ing: iOTH.water, amount: 250, unit: "ml" },
        { ing: iSPC.knorr_sweet_sour_chicken_fix, amount: 1, unit: "opak" },
      ],
    },
  ],
  steps: [],
};

export default kurczakSlodkoKwasny;
