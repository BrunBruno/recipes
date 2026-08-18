import { iBAK } from "../../ingredients/ingBakery";
import { iDIR } from "../../ingredients/ingDairy";
import { iJAR } from "../../ingredients/ingJar";
import { iMET } from "../../ingredients/ingMeat";
import { iSAU } from "../../ingredients/ingSauce";
import { iSPC } from "../../ingredients/ingSpice";
import { iVEG } from "../../ingredients/ingVegetable";
import type { Recipe } from "../../types";

const kajzerkaZFryera: Recipe = {
  name: "Kajzerki z Fryera",
  type: "snack",
  cookingMethods: [["air-fried", 8]],
  images: [""],
  time: 0,
  portions: 0,
  taste: null,
  difficulty: null,
  ingredients: [
    {
      title: "",
      items: [
        { ing: iBAK.kaiser_roll },
        { ing: iVEG.mushrooms },
        { ing: iMET.ham_slices },
        { ing: iMET.chicken_breast },
        { ing: iJAR.canned_corn },
        { ing: iSPC.gyros_spice },
      ],
    },
    {
      title: "Sos czosnkowy",
      items: [
        { ing: iDIR.yogurt_natural },
        { ing: iSAU.mayonnaise },
        { ing: iVEG.garlic },
      ],
    },
  ],
  steps: [],
};

export default kajzerkaZFryera;
