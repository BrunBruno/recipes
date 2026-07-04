import { iMET } from "../../ingredients/ingMeat";
import { iSPC } from "../../ingredients/ingSpice";
import { iVEG } from "../../ingredients/ingVegetable";
import type { Recipe } from "../../types";

const chlopskiGarnek: Recipe = {
  name: "Chłopski Garnek",
  description: "",
  type: "dinner",
  images: [""],
  time: 0,
  portions: 0,
  executionDifficulty: null,
  ingredients: [
    {
      title: "",
      items: [
        { ing: iMET.sausage, amount: 350 },
        { ing: iVEG.potato, amount: 450 },
        { ing: iVEG.cabbage, amount: 200 },
        { ing: iVEG.bell_pepper, amount: 1, unit: "szt" },
        { ing: iSPC.winiary_peasant_stew_fix, amount: 1, unit: "opak" },
      ],
    },
  ],
  steps: [],
};

export default chlopskiGarnek;
