import { iGRN } from "../../ingredients/ingGrain";
import { iJAR } from "../../ingredients/ingJar";
import { iMET } from "../../ingredients/ingMeat";
import { iSAU } from "../../ingredients/ingSauce";
import type { Recipe } from "../../types";

const hotHog: Recipe = {
  name: "Hot Dog",
  type: "snack",
  cookingMethods: ["microwaved"],
  images: ["hot-dog.jpg"],
  time: 10,
  portions: 2,
  taste: 5,
  difficulty: 1,
  ingredients: [
    {
      title: "",
      items: [
        { ing: iMET.sausages, amount: 4, unit: "szt" },
        { ing: iGRN.hotdog_buns, amount: 4, unit: "szt" },
        { ing: iJAR.pickled_cucumber, amount: 2, unit: "szt" },
        { ing: iJAR.sauerkraut, amount: 160 },
        { ing: iJAR.fried_onion, amount: 2, unit: "lz" },
        { ing: iSAU.ketchup, amount: 20 },
        { ing: iSAU.mustard_dessert, amount: 20 },
        { ing: iSAU.garlic_sauce, amount: 20 },
      ],
    },
  ],
  steps: [
    {
      title: "",
      steps: [
        "Podgrzej bułki oraz parówki w mikrofalówce.",
        "Pokrój ogórki kiszone.",
        "Otwórz bułki i ułóż po bokach ogórki kiszone.",
        "Włóż parówkę do bułki.",
        "Polej całość ketchupem, musztardą i sosem czosnkowym.",
        "Dodaj kapustę kiszoną i posyp cebulką prażoną.",
      ],
    },
  ],
  keyWords: ["pieczywo", "parówka", "sos", "warzywa"],
};

export default hotHog;
