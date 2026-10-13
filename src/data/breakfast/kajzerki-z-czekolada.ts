import type { Recipe } from "../../types";
import { iBAK } from "../../ingredients/ingBakery";
import { iSNK } from "../../ingredients/ingSnack";

const kajzerkiZCzekolada: Recipe = {
  name: "Kajzerki z Czekoladą",
  type: "breakfast",
  images: ["kajzerki-z-czekolada"],
  time: 5,
  portions: 1,
  taste: 3,
  difficulty: 1,
  ingredients: [
    {
      title: "",
      items: [
        {
          ing: iBAK.kaiser_roll,
          amount: 2,
          unit: "szt",
          replaceable: true,
          kw: true,
        },
        { ing: iSNK.chocolate_cream, amount: 40, kw: true },
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
