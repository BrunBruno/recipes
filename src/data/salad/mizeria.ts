import { iDIR } from "../../ingredients/ingDairy";
import { iHRB } from "../../ingredients/ingHerb";
import { iSPC } from "../../ingredients/ingSpice";
import { iVEG } from "../../ingredients/ingVegetable";
import type { Recipe } from "../../types";

const portions = 3;

const mizeria: Recipe = {
  name: "Mizeria",
  type: "salad",
  cookingMethods: [["raw", 0]],
  images: [""],
  time: 10,
  portions: portions,
  taste: 5,
  difficulty: 1,
  ingredients: [
    {
      title: "",
      items: [
        { ing: iDIR.cream_18, amount: portions * 2, unit: "lz" },
        { ing: iVEG.cucumber, amount: portions * 0.5, unit: "szt" },
        { ing: iHRB.spring_onion },
        { ing: iSPC.black_pepper },
        { ing: iSPC.salt },
      ],
    },
  ],
  steps: [
    {
      title: "",
      steps: [
        "Pokrój ogórka w cienkie plasterki.",
        "Dodaj drobno posiekaną cebulkę dymkę.",
        "Dodaj śmietanę.",
        "Dopraw solą i pieprzem.",
        "Dokładnie wymieszaj i podawaj schłodzoną.",
      ],
    },
  ],
  keyWords: ["warzywa"],
};

export default mizeria;
