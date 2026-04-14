import { iGRN } from "../../ingredients/ingGrain";
import { iJAR } from "../../ingredients/ingJAR";
import { iMET } from "../../ingredients/ingMeat";
import type { Recipe } from "../../types";

const kajzerkiZPasztetem: Recipe = {
  name: "Kajzerki z Pasztetem",
  description:
    "Proste kanapki z kajzerki posmarowane pasztetem z dodatkiem ogórka kiszonego, doprawione pieprzem.",
  type: "snack",
  images: [""],
  time: 5,
  portions: 1,
  ingredients: [
    {
      title: "",
      items: [
        { ingredient: iGRN.kaiser_roll, amount: 2, unit: "szt" },
        { ingredient: iMET.meat_spread, amount: 80 },
        { ingredient: iJAR.pickled_cucumber, amount: 1, unit: "szt" },
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
