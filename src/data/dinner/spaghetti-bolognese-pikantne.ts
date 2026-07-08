import { iFAT } from "../../ingredients/ingFat";
import { iGRN } from "../../ingredients/ingGrain";
import { iLIQ } from "../../ingredients/ingLiquid";
import { iMET } from "../../ingredients/ingMeat";
import { iSPC } from "../../ingredients/ingSpice";
import type { Recipe } from "../../types";

const spaghettiBolognesePikantne: Recipe = {
  name: "Spaghetti Bolognese Pikantne",
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
        { ing: iMET.ground_pork, amount: 300 },
        { ing: iGRN.penne_pasta, amount: 300 },
        { ing: iFAT.oil, amount: 3, unit: "lz" },
        { ing: iLIQ.water, amount: 250, unit: "ml" },
        { ing: iSPC.knorr_bolognese_chili_fix, amount: 1, unit: "opak" },
      ],
    },
  ],
  steps: [],
};

export default spaghettiBolognesePikantne;
