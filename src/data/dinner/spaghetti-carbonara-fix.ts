import { iDIR } from "../../ingredients/ingDairy";
import { iGRN } from "../../ingredients/ingGrain";
import { iSPC } from "../../ingredients/ingSpice";
import { iOTH } from "../../ingredients/ingOther";
import type { Recipe } from "../../types";
import { iMET } from "../../ingredients/ingMeat";

const portions = 2;

const spaghettiCarbonaraFix: Recipe = {
  name: "Spaghetti Carbonara (Fix)",
  description:
    "Szybka carbonara z użyciem fixa Knorr, boczkiem i śmietaną - prosty i sycący obiad.",
  type: "dinner",
  images: ["spaghetti-carbonara-fix.jpg"],
  time: 20,
  portions: portions,
  executionDifficulty: 1,
  ingredients: [
    {
      title: "",
      items: [
        { ing: iGRN.spaghetti_pasta, amount: portions * 200 },
        { ing: iMET.bacon_block, amount: 150 },
        { ing: iDIR.cream_18, amount: 100, unit: "ml" },
        { ing: iOTH.water, amount: 200, unit: "ml" },
        { ing: iSPC.knorr_carbonara_fix, amount: 1, unit: "opak" },
        { ing: iSPC.salt },
      ],
    },
  ],
  steps: [
    {
      title: "",
      steps: [
        "Ugotuj makaron spaghetti według instrukcji na opakowaniu.",
        "Pokrój boczek i podsmaż na patelni.",
        "Wymieszaj fix carbonara z wodą i śmietaną.",
        "Wlej sos na patelnię z boczkiem i gotuj przez kilka minut.",
        "Wymieszaj makaron z sosem i podawaj.",
      ],
    },
  ],
  keyWords: ["makaron"],
};

export default spaghettiCarbonaraFix;
