import { iBAK } from "../../ingredients/ingBakery";
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
            { ing: iBAK.kaiser_roll, amount: 2, unit: "szt" },
            { ing: iBAK.multigrain_kaiser_roll, amount: 2, unit: "szt" },
            { ing: iBAK.morning_roll, amount: 2, unit: "szt" },
          ],
          selected: 0,
        },
        {
          type: "choice",
          options: [
            { ing: iMET.meat_spread, amount: 80 },
            { ing: iMET.liver_sausage, amount: 80 },
          ],
          selected: 0,
        },
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
