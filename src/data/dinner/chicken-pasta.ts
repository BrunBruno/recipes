import { iDIR } from "../../ingredients/ingDairy";
import { iFAT } from "../../ingredients/ingFat";
import { iGRN } from "../../ingredients/ingGrain";
import { iHRB } from "../../ingredients/ingHerb";
import { iJAR } from "../../ingredients/ingJar";
import { iMET } from "../../ingredients/ingMeat";
import { iOTH } from "../../ingredients/ingOther";
import { iSPC } from "../../ingredients/ingSpice";
import type { Recipe } from "../../types";

const chickenPasta: Recipe = {
  name: "Chicken Pasta",
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
        { ing: iMET.chicken_breast, amount: 360 },
        { ing: iFAT.olive, amount: 30, unit: "ml" },
        { ing: iJAR.sun_dried_tomatoes, amount: 20 },
        { ing: iDIR.cream_18, amount: 20 },
        { ing: iOTH.water, amount: 200, unit: "ml" },
        { ing: iGRN.penne_pasta, amount: 200 },
        { ing: iHRB.fresh_basil, amount: 10 },
        { ing: iSPC.knorr_chicken_pasta_fix, amount: 1, unit: "opak" },
      ],
    },
  ],
  steps: [],
};

export default chickenPasta;
