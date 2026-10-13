import { iDIR } from "../../ingredients/ingDairy";
import { iFAT } from "../../ingredients/ingFat";
import { iGRN } from "../../ingredients/ingGrain";
import { iSPC } from "../../ingredients/ingSpice";
import { iJAR } from "../../ingredients/ingJar";
import type { Recipe } from "../../types";
import { fryingFat } from "../../utils";
import { iLIQ } from "../../ingredients/ingLiquid";

const portions = 2;
const spaghettiNapoli: Recipe = {
  name: "Spaghetti Napoli",
  type: "dinner",
  country: "ITA",
  // images: ["spaghetti-napoli"],
  images: [""],
  time: 20,
  portions: portions,
  taste: 2,
  difficulty: 1,
  ingredients: [
    {
      title: "",
      items: [
        { ing: iGRN.spaghetti_pasta, amount: portions * 100, kw: true },
        { ing: iDIR.yellow_cheese, amount: portions * 40, kw: true },
        { ing: iJAR.tomato_paste, amount: 2, unit: "lzi", kw: true },
        ...fryingFat(iFAT.oil, 1, "lz", 0.55),
        { ing: iLIQ.water, amount: 250, unit: "ml" },
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
  keyWords: ["makaron", "sos", "fix", "ser"],
};

export default spaghettiNapoli;
