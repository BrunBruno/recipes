import { iDIR } from "../../ingredients/ingDairy";
import { iGRN } from "../../ingredients/ingGrain";
import type { Recipe } from "../../types";

const platkiZMlekiem: Recipe = {
  name: "Płatki z Mlekiem",
  type: "breakfast",
  images: [""],
  time: 3,
  portions: 1,
  taste: 3,
  difficulty: 1,
  ingredients: [
    {
      title: "",
      items: [
        { ing: iGRN.cornflakes, amount: 60 },
        { ing: iDIR.milk, amount: 250, unit: "ml" },
      ],
    },
  ],
  steps: [
    {
      title: "",
      steps: [
        "Wlej mleko do miski i podgrzej w mikrofalówce.",
        "Wsyp płatki kukurydziane do ciepłego mleka.",
        "Wymieszaj i od razu podawaj.",
      ],
    },
  ],
  keyWords: [],
};

export default platkiZMlekiem;
