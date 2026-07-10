import { iGRN } from "../../ingredients/ingGrain";
import { iFAT } from "../../ingredients/ingFat";
import { iJAR } from "../../ingredients/ingJar";
import type { Recipe } from "../../types";

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
        { ing: iGRN.kaiser_roll, amount: 2, unit: "szt" },
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
