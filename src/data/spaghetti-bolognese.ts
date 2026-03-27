import { iDIR } from "../ingredients/ingDairy";
import { iFAT } from "../ingredients/ingFat";
import { iGRN } from "../ingredients/ingGrain";
import { iMET } from "../ingredients/ingMeat";
import { iSPC } from "../ingredients/ingSpice";
import type { Recipe } from "../types";

const portions = 3;
const spaghettiBolognese: Recipe = {
  name: "Spaghetti Bolognese",
  description:
    "Klasyczne spaghetti Bolognese z aromatycznym sosem mięsnym i startym żółtym serem - szybki i sycący obiad dla całej rodziny.",
  type: "dinner",
  images: ["spaghetti-bolognese.jpg"],
  time: 30,
  portions: portions,
  ingredients: [
    {
      title: "Lista składników",
      items: [
        { ingredient: iGRN.spaghetti_pasta, amount: `${portions} × 100` },
        { ingredient: iMET.ground_beef, amount: 400 },
        { ingredient: iDIR.yellow_cheese, amount: `${portions} × 50` },
        { ingredient: iFAT.oil, amount: 2, unit: "lz" },
        { ingredient: iSPC.knorr_bolognese_fix, amount: 1, unit: "opak" },
      ],
    },
  ],
  steps: [
    {
      title: "",
      steps: [
        "Usmaż mięso mielone na patelni z olejem.",
        "Wymieszaj przyprawę bolognese z wodą i wlej do mięsa.",
        "Gotuj sos przez około 15 minut.",
        "Ugotuj makaron spaghetti według instrukcji na opakowaniu.",
        "Zetrzyj ser żółty na tarce.",
        "Podawaj spaghetti z sosem i posyp startym serem.",
      ],
    },
  ],
  keyWords: ["makaron", "wołowina", "xxx"],
};

export default spaghettiBolognese;
