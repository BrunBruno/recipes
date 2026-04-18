import { iFAT } from "../../ingredients/ingFat";
import { iGRN } from "../../ingredients/ingGrain";
import { iJAR } from "../../ingredients/ingJar";
import { iMET } from "../../ingredients/ingMeat";
import { iSPC } from "../../ingredients/ingSpice";
import type { Recipe } from "../../types";

const smazonaRyba: Recipe = {
  name: "Smażona Ryba",
  description: "",
  type: "dinner",
  images: [""],
  time: 0,
  portions: 2,
  executionDifficulty: null,
  ingredients: [
    {
      title: "",
      items: [
        { ingredient: iMET.pollock, amount: 1, unit: "szt" },
        { ingredient: iFAT.oil, amount: 4, unit: "lz" },
        { ingredient: iGRN.flour, amount: 80 },
        { ingredient: iMET.egg, amount: 1, unit: "szt" },
        { ingredient: iGRN.breadcrumbs, amount: 120 },
        { ingredient: iJAR.lime_juice },
        { ingredient: iSPC.salt },
      ],
    },
  ],
  steps: [],
};

export default smazonaRyba;
