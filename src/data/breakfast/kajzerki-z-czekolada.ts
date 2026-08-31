import type { Recipe } from "../../types";
import { iBAK } from "../../ingredients/ingBakery";
import { iSNK } from "../../ingredients/ingSnack";

const kajzerkiZCzekolada: Recipe = {
  name: "Kajzerki z Czekoladą",
  type: "breakfast",
  cookingMethods: [],
  images: ["kajzerki-z-czekolada.jpg"],
  time: 5,
  portions: 1,
  taste: 3,
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
        { ing: iSNK.chocolate_cream, amount: 40 },
      ],
    },
  ],
  steps: [
    {
      title: "",
      steps: [
        "Kajzerki przekrój na pół.",
        "Posmaruj połówki kajzerek  kremem czekoladowym.",
      ],
    },
  ],
  keyWords: ["pieczywo"],
};
export default kajzerkiZCzekolada;
