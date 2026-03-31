import { iFAT } from "../ingredients/ingFat";
import { iGRN } from "../ingredients/ingGrain";
import { iMET } from "../ingredients/ingMeat";
import type { Recipe } from "../types";

const kajzerkiZMakrela: Recipe = {
  name: "Kajzerki z Makrelą",
  description:
    "Kajzerki z pastą z makreli, majonezem i warzywami - szybka i pożywna kanapka.",
  type: "snack",
  images: ["kajzerki-z-makrela.jpg"],
  time: 15,
  portions: 1,
  ingredients: [
    {
      title: "",
      items: [
        { ingredient: iGRN.kaiser_roll, amount: 2, unit: "szt" },
        { ingredient: iMET.smoked_mackerel, amount: 0.5, unit: "szt" },
        { ingredient: iFAT.butter, amount: 10 },
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
  keyWords: ["pieczywo", "ryba", "xxx"],
};

export default kajzerkiZMakrela;
