import { iGRN } from "../../ingredients/ingGrain";
import { iJAR } from "../../ingredients/ingJar";
import { iMET } from "../../ingredients/ingMeat";
import type { Recipe } from "../../types";

const kajzerkiZPasztetem: Recipe = {
  name: "Kajzerki z Pasztetem",
  type: "breakfast",
  cookingMethods: [["raw", 0]],
  images: ["kajzerki-z-pasztetem.jpg"],
  time: 5,
  portions: 1,
  taste: 4,
  difficulty: 1,
  ingredients: [
    {
      title: "",
      items: [
        {
          type: "choice",
          options: [
            { ing: iGRN.kaiser_roll, amount: 2, unit: "szt" },
            { ing: iGRN.multigrain_kaiser_roll, amount: 2, unit: "szt" },
            { ing: iGRN.morning_roll, amount: 2, unit: "szt" },
          ],
          selected: 0,
        },
        { ing: iMET.meat_spread, amount: 80 },
        { ing: iJAR.pickled_cucumber, amount: 1, unit: "szt" },
      ],
    },
  ],
  steps: [
    {
      title: "",
      steps: [
        "Kajzerki przekrój na pół.",
        "Posmaruj połówki kajzerek pasztetem.",
        "Ogórka kiszonego pokrój w plastry.",
        "Ułóż ogórka na pasztecie.",
      ],
    },
  ],
  keyWords: ["pieczywo"],
};

export default kajzerkiZPasztetem;
