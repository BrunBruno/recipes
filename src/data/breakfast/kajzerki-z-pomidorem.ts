import { iBAK } from "../../ingredients/ingBakery";
import { iFAT } from "../../ingredients/ingFat";
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
        { ing: iBAK.kaiser_roll, amount: 2, unit: "szt", replaceable: true },
        { ing: iMET.ham_slices, amount: 4, unit: "plas" },
        {
          ing: iVEG.tomato_raspberry,
          amount: 1,
          unit: "szt",
          replaceable: true,
        },
        { ing: iVEG.onion, amount: 0.5, unit: "szt", replaceable: true },
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
