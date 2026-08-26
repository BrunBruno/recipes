import { iFAT } from "../../ingredients/ingFat";
import { iJAR } from "../../ingredients/ingJar";
import type { Recipe } from "../../types";
import { iBAK } from "../../ingredients/ingBakery";

const kajzerkiZDzemem: Recipe = {
  name: "Kajzerki z Dżemem",
  type: "breakfast",
  cookingMethods: [],
  images: ["kajzerki-z-dzemem.jpg"],
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
        { ing: iFAT.butter, amount: 20 },
        { ing: iJAR.jam_strawberry, amount: 40 },
      ],
    },
  ],
  steps: [
    {
      title: "",
      steps: [
        "Kajzerki przekrój na pół.",
        "Posmaruj połówki kajzerek masłem.",
        "Nałóż dżem na masło.",
      ],
    },
  ],
  keyWords: ["pieczywo"],
};

export default kajzerkiZDzemem;
