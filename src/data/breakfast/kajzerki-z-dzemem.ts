import { iFAT } from "../../ingredients/ingFat";
import { iJAR } from "../../ingredients/ingJar";
import type { Recipe } from "../../types";
import { iBAK } from "../../ingredients/ingBakery";

const kajzerkiZDzemem: Recipe = {
  name: "Kajzerki z Dżemem",
  type: "breakfast",
  images: ["kajzerki-z-dzemem.jpg"],
  time: 5,
  portions: 1,
  taste: 3,
  difficulty: 1,
  ingredients: [
    {
      title: "",
      items: [
        { ing: iBAK.kaiser_roll, amount: 2, unit: "szt", replaceable: true },
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
