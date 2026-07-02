import { iDIR } from "../../ingredients/ingDairy";
import { iGRN } from "../../ingredients/ingGrain";
import type { Recipe } from "../../types";

const platkiZMlekiem: Recipe = {
  name: "Płatki z Mlekiem",
  description:
    "Ciepłe płatki kukurydziane z mlekiem podgrzanym w mikrofalówce. Błyskawiczne śniadanie gotowe w kilka minut.",
  type: "breakfast",
  images: [""],
  time: 3,
  portions: 1,
  executionDifficulty: 1,
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
