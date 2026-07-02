import { iMET } from "../../ingredients/ingMeat";
import { iJAR } from "../../ingredients/ingJar";
import { iGRN } from "../../ingredients/ingGrain";
import { iFAT } from "../../ingredients/ingFat";
import type { Recipe } from "../../types";

const parowki: Recipe = {
  name: "Parówki",
  description:
    "Prosta przekąska z podgrzanych parówek podawanych w pieczywie z ketchupem.",
  type: "breakfast",
  images: ["parowki.jpg", "parowki-2.jpg"],
  time: 10,
  portions: 1,
  executionDifficulty: 1,
  ingredients: [
    {
      title: "",
      items: [
        { ing: iMET.sausages, amount: 3, unit: "szt" },
        { ing: iGRN.kaiser_roll, amount: 1, unit: "szt" },
        { ing: iFAT.butter, amount: 5 },
        { ing: iJAR.ketchup, amount: 20 },
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
  keyWords: ["wieprzowina"],
};

export default parowki;
