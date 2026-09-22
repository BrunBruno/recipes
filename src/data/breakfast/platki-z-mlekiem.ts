import { iDIR } from "../../ingredients/ingDairy";
import { iGRN } from "../../ingredients/ingGrain";
import type { Recipe } from "../../types";

const platkiZMlekiem: Recipe = {
  name: "Płatki z Mlekiem",
  type: "breakfast",
  images: ["platki-z-mlekiem.jpg", "platki-z-mlekiem-2.jpg"],
  time: 3,
  portions: 1,
  taste: 3,
  difficulty: 1,
  ingredients: [
    {
      title: "",
      items: [
        { ing: iDIR.milk, amount: 250, unit: "ml", kw: true },
        {
          type: "choice",
          options: [
            { ing: iGRN.cornflakes, amount: 60, kw: true },
            { ing: iGRN.cini_mini, amount: 60, kw: true },
          ],
          selected: 0,
        },
        {
          type: "placeholder",
          options: [
            { ing: iGRN.cornflakes, amount: 60, kw: true },
            { ing: iGRN.cini_mini, amount: 60, kw: true },
          ],
        },
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
