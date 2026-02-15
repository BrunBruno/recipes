import { iDIR } from "../ingredients/ingDairy";
import { iFAT } from "../ingredients/ingFat";
import { iGRN } from "../ingredients/ingGrain";
import { iMET } from "../ingredients/ingMeat";
import { iSPC } from "../ingredients/ingSpice";
import type { Recipe } from "../types";

const spaghettiBolognese: Recipe = {
  name: "Spaghetti Bolognese",
  type: "dinner",
  images: [""],
  time: 30,
  portions: 3,
  ingredients: [
    {
      title: "",
      items: [
        { ingredient: iMET.ground_beef, amount: 400 },
        { ingredient: iGRN.spaghetti_pasta, amount: "3 × 100" },
        { ingredient: iDIR.yellow_cheese, amount: "3 × 50" },
        { ingredient: iFAT.oil },
        { ingredient: iSPC.knorr_bolognese_fix },
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
  keyWords: ["makaron", "mięso", "sos"],
};

export default spaghettiBolognese;
