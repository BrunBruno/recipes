import { iBAK } from "../../ingredients/ingBakery";
import { iDIR } from "../../ingredients/ingDairy";
import { iMET } from "../../ingredients/ingMeat";
import { iVEG } from "../../ingredients/ingVegetable";
import type { Recipe } from "../../types";

const slimaczkiTortillowe: Recipe = {
  name: "Ślimaczki Tortillowe",
  type: "snack",
  cookingMethods: [],
  images: ["slimaczki-tortillowe.jpg"],
  time: 0,
  portions: 0,
  taste: null,
  difficulty: null,
  ingredients: [
    {
      title: "",
      items: [
        { ing: iBAK.tortilla },
        { ing: iMET.ham_slices },
        { ing: iDIR.cream_cheese },
        { ing: iVEG.lettuce },
        { ing: iVEG.garlic },
      ],
    },
  ],
  steps: [],
};

export default slimaczkiTortillowe;
