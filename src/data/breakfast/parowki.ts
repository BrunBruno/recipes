import { iMET } from "../../ingredients/ingMeat";
import { iGRN } from "../../ingredients/ingGrain";
import { iFAT } from "../../ingredients/ingFat";
import type { Recipe } from "../../types";
import { iSAU } from "../../ingredients/ingSauce";

const parowki: Recipe = {
  name: "Parówki",
  type: "breakfast",
  cookingMethods: [
    ["boiled", 20],
    ["microwaved", 1],
  ],
  images: ["parowki.jpg", "parowki-2.jpg"],
  time: 10,
  portions: 1,
  taste: 3,
  difficulty: 1,
  ingredients: [
    {
      title: "",
      items: [
        { ing: iMET.sausages, amount: 3, unit: "szt" },
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
        { ing: iSAU.ketchup, amount: 20 },
      ],
    },
  ],
  steps: [
    {
      title: "",
      steps: [
        "Podgrzej parówki w gorącej wodzie lub mikrofalówce.",
        "Kajzerki przekrój na pół i opcjonalnie posmaruj masłem.",
        "Ułóż parówki w pieczywie i dodaj ketchup.",
        "Podawaj od razu na ciepło.",
      ],
    },
  ],
  keyWords: ["parówka", "pieczywo", "mięso"],
};

export default parowki;
