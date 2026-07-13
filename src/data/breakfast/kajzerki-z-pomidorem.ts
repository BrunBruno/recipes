import { iFAT } from "../../ingredients/ingFat";
import { iGRN } from "../../ingredients/ingGrain";
import { iMET } from "../../ingredients/ingMeat";
import { iSPC } from "../../ingredients/ingSpice";
import { iVEG } from "../../ingredients/ingVegetable";
import type { Recipe } from "../../types";

const kajzerkiZPomidorem: Recipe = {
  name: "Kajzerki z Pomidorem",
  type: "breakfast",
  images: ["kajzerki-z-pomidorem.jpg"],
  time: 5,
  portions: 1,
  taste: 5,
  difficulty: 1,
  ingredients: [
    {
      title: "",
      items: [
        { ing: iGRN.kaiser_roll, amount: 2, unit: "szt" },
        { ing: iMET.ham_slices, amount: 4, unit: "plas" },
        { ing: iVEG.tomato, amount: 1, unit: "szt" },
        { ing: iVEG.onion, amount: 0.5, unit: "szt" },
        { ing: iFAT.butter, amount: 10 },
        { ing: iSPC.black_pepper },
        { ing: iSPC.salt },
      ],
    },
  ],
  steps: [
    {
      title: "",
      steps: [
        "Kajzerki przekrój na pół i posmaruj masłem.",
        "Na dolnej części kajzerki ułóż plastry szynki.",
        "Pomidor pokrój w plastry i ułóż na szynce.",
        "Cebulę drobno posiekaj i posyp nią pomidora.",
        "Całość dopraw solą i pieprzem.",
      ],
    },
  ],
  keyWords: ["pieczywo", "szynka", "warzywa"],
};

export default kajzerkiZPomidorem;
