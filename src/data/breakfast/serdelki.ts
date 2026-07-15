import { iFAT } from "../../ingredients/ingFat";
import { iGRN } from "../../ingredients/ingGrain";
import { iMET } from "../../ingredients/ingMeat";
import { iSAU } from "../../ingredients/ingSauce";
import type { Recipe } from "../../types";

const serdelki: Recipe = {
  name: "Serdelki",
  type: "breakfast",
  cookingMethods: [
    ["boiled", 20],
    ["microwaved", 1],
  ],
  images: ["serdelki.jpg", "serdelki-2.jpg"],
  time: 20,
  portions: 2,
  taste: 3,
  difficulty: 1,
  ingredients: [
    {
      title: "",
      items: [
        { ing: iMET.serdelki, amount: 6, unit: "szt" },
        {
          type: "choice",
          options: [
            { ing: iGRN.kaiser_roll, amount: 2, unit: "szt" },
            { ing: iGRN.multigrain_kaiser_roll, amount: 2, unit: "szt" },
            { ing: iGRN.morning_roll, amount: 2, unit: "szt" },
          ],
          selected: 0,
        },
        { ing: iFAT.butter, amount: 5 },
        { ing: iSAU.mustard, amount: 2, unit: "lzi" },
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
  keyWords: ["pieczywo", "parówka", "mięso"],
};

export default serdelki;
