import { iBAK } from "../../ingredients/ingBakery";
import { iFAT } from "../../ingredients/ingFat";
import { iFSH } from "../../ingredients/ingFish";
import type { Recipe } from "../../types";

const kajzerkiZMakrela: Recipe = {
  name: "Kajzerki z Makrelą",
  type: "breakfast",
  images: ["kajzerki-z-makrela.jpg"],
  time: 15,
  portions: 1,
  taste: 3,
  difficulty: 3,
  ingredients: [
    {
      title: "",
      items: [
        { ing: iBAK.kaiser_roll, amount: 2, unit: "szt", replaceable: true },
        { ing: iFSH.smoked_mackerel, amount: 0.5, unit: "szt" },
        { ing: iFAT.butter, amount: 10 },
      ],
    },
  ],
  steps: [
    {
      title: "",
      steps: [
        "Makrelę oczyść ze skóry i ości, rozdrobnij widelcem.",
        "Kajzerki przekrój na pół i posmaruj masłem.",
        "Nałóż pastę z makreli na kanapki.",
      ],
    },
  ],
  keyWords: ["pieczywo", "ryba"],
};

export default kajzerkiZMakrela;
