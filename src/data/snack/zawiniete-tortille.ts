import { iBAK } from "../../ingredients/ingBakery";
import { iDIR } from "../../ingredients/ingDairy";
import { iMET } from "../../ingredients/ingMeat";
import { iVEG } from "../../ingredients/ingVegetable";
import type { Recipe } from "../../types";

const zawinieteTortille: Recipe = {
  name: "Zawinięte Tortille",
  type: "snack",
  cookingMethods: [],
  images: [""],
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

export default zawinieteTortille;
