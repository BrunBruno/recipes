import { iBAK } from "../../ingredients/ingBakery";
import { iMET } from "../../ingredients/ingMeat";
import { iSAU } from "../../ingredients/ingSauce";
import { iVEG } from "../../ingredients/ingVegetable";
import type { Recipe } from "../../types";

const kanapkaZBekonem: Recipe = {
  name: "Kanapka z Bekonem",
  type: "snack",
  cookingMethods: [
    ["boiled", 10],
    ["fried", 5],
  ],
  images: [""],
  time: 15,
  portions: 1,
  taste: 4,
  difficulty: 1,
  ingredients: [
    {
      title: "",
      items: [
        { ing: iBAK.wheat_malt_bread, amount: 4, unit: "krom" },
        { ing: iSAU.mayonnaise, amount: 2.5, unit: "lz" },
        { ing: iMET.brewed_bacon, amount: 3, unit: "plas" },
        { ing: iMET.egg, amount: 0.5, unit: "szt" },
        { ing: iVEG.lettuce, amount: 1, unit: "szt" },
        { ing: iVEG.tomato, amount: 2, unit: "plas" },
      ],
    },
  ],
  steps: [
    {
      title: "",
      steps: [
        "Ugotuj jajko na twardo, ostudź je i pokrój w plastry.",
        "Upiecz lub usmaż bekon, aż będzie lekko chrupiący.",
        "Przygotuj cztery kromki pszennego chleba słodowego.",
        "Posmaruj kromki kremem majonezowym.",
        "Na jednej kromce ułóż sałatę, plastry pomidora oraz pieczony bekon.",
        "Na drugiej plastry gotowanego jajka oraz pieczony bekon.",
        "Przykryj pozostałymi kromkami chleba i lekko dociśnij.",
        "Przekrój kanapki na pół i podawaj.",
      ],
    },
  ],
  keyWords: ["jajko", "pieczywo"],
};

export default kanapkaZBekonem;
