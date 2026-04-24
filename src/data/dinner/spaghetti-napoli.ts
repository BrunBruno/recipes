import { iDIR } from "../../ingredients/ingDairy";
import { iFAT } from "../../ingredients/ingFat";
import { iGRN } from "../../ingredients/ingGrain";
import { iSPC } from "../../ingredients/ingSpice";
import { iOTH } from "../../ingredients/ingOther";
import { iJAR } from "../../ingredients/ingJar";
import type { Recipe } from "../../types";

const portions = 2;
const spaghettiNapoli: Recipe = {
  name: "Spaghetti Napoli",
  description:
    "Proste spaghetti Napoli z sosem pomidorowym, serem Edam i przyprawą fix - szybki i tani obiad.",
  type: "dinner",
  images: ["spaghetti-napoli.jpg"],
  time: 20,
  portions: portions,
  executionDifficulty: 1,
  ingredients: [
    {
      title: "",
      items: [
        { ing: iGRN.spaghetti_pasta, amount: portions * 100 },
        { ing: iDIR.edam_cheese, amount: portions * 40 },
        { ing: iFAT.oil, amount: 1, unit: "lz" },
        { ing: iJAR.tomato_paste, amount: 2, unit: "lzi" },
        { ing: iOTH.water, amount: 250, unit: "ml" },
        { ing: iSPC.knorr_napoli_fix, amount: 1, unit: "opak" },
        { ing: iSPC.salt },
      ],
    },
  ],
  steps: [
    {
      title: "",
      steps: [
        "Ugotuj makaron spaghetti według instrukcji na opakowaniu.",
        "Na patelni rozgrzej olej.",
        "Wymieszaj fix Napoli z wodą i koncentratem pomidorowym.",
        "Wlej sos na patelnię i gotuj przez kilka minut.",
        "Dopraw solą do smaku.",
        "Zetrzyj ser Edam na tarce.",
        "Podawaj makaron z sosem i posyp startym serem.",
      ],
    },
  ],
  keyWords: ["makaron"],
};

export default spaghettiNapoli;
