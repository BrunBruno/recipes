import { iFAT } from "../../ingredients/ingFat";
import { iGRN } from "../../ingredients/ingGrain";
import { iJAR } from "../../ingredients/ingJar";
import { iMET } from "../../ingredients/ingMeat";
import type { Recipe } from "../../types";

const serdelki: Recipe = {
  name: "Serdelki",
  description:
    "Prosta przekąska z gotowanych lub podgrzanych w mikrofalówce serdelków, podawana z kajzerkami posmarowanymi masłem i musztardą.",
  type: "breakfast",
  images: ["serdelki.jpg", "serdelki-2.jpg"],
  time: 10,
  portions: 2,
  executionDifficulty: 1,
  ingredients: [
    {
      title: "",
      items: [
        { ing: iMET.serdelki, amount: 6, unit: "szt" },
        { ing: iGRN.kaiser_roll, amount: 1, unit: "szt" },
        { ing: iFAT.butter, amount: 5 },
        { ing: iJAR.mustard, amount: 2, unit: "lzi" },
      ],
    },
  ],
  steps: [
    {
      title: "",
      steps: [
        "Serdelki ugotuj w gorącej wodzie przez kilka minut lub podgrzej w kuchence mikrofalowej.",
        "Kajzerki przekrój na pół i posmaruj masłem.",
        "Podawaj serdelki z kajzerkami i musztardą.",
      ],
    },
  ],
  keyWords: ["pieczywo", "wieprzowina"],
};

export default serdelki;
