import { iDIR } from "../../ingredients/ingDairy";
import { iJAR } from "../../ingredients/ingJar";
import { iMET } from "../../ingredients/ingMeat";
import { iSAU } from "../../ingredients/ingSauce";
import { iVEG } from "../../ingredients/ingVegetable";
import type { Recipe } from "../../types";

const salatkaGyros: Recipe = {
  name: "Sałatka Gyros",
  type: "salad",
  cookingMethods: [],
  images: ["salatka-gyros.jpg"],
  time: 0,
  portions: 0,
  taste: null,
  difficulty: null,
  ingredients: [
    {
      title: "",
      items: [
        { ing: iMET.chicken_breast },
        { ing: iJAR.pickled_cucumber_vinegar },
        { ing: iVEG.chinese_cabbage },
        { ing: iJAR.canned_corn },
        { ing: iDIR.yellow_cheese },
        { ing: iVEG.onion },
        { ing: iSAU.mayonnaise },
        { ing: iSAU.ketchup },
      ],
    },
  ],
  steps: [],
};

export default salatkaGyros;
