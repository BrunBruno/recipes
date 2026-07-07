import { iDIR } from "../../ingredients/ingDairy";
import { iGRN } from "../../ingredients/ingGrain";
import { iMET } from "../../ingredients/ingMeat";
import { iSAU } from "../../ingredients/ingSauce";
import type { Recipe } from "../../types";

const tost: Recipe = {
  name: "Tosty",
  description:
    "Proste i szybkie tosty z tostera wyskakującego z szynką i roztopionym serem, podawane z ketchupem.",
  type: "breakfast",
  images: ["tosty.jpg"],
  time: 5,
  portions: 1,
  executionDifficulty: 1,
  ingredients: [
    {
      title: "",
      items: [
        { ing: iGRN.toast_bread, amount: 4, unit: "krom" },
        { ing: iMET.ham_slices, amount: 4, unit: "plas" },
        { ing: iDIR.yellow_cheese, amount: 4, unit: "plas" },
        { ing: iSAU.ketchup, amount: 20 },
      ],
    },
  ],
  steps: [
    {
      title: "",
      steps: [
        "Kromki chleba tostowego lekko podpiec w wyskakującym tosterze.",
        "Na tostach ułożyć szynkę oraz ser.",
        "Gotowe tosty polej ketchupem.",
      ],
    },
  ],
  keyWords: ["pieczywo"],
};

export default tost;
