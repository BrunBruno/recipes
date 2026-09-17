import { iBAK } from "../../ingredients/ingBakery";
import { iDIR } from "../../ingredients/ingDairy";
import { iJAR } from "../../ingredients/ingJar";
import { iMET } from "../../ingredients/ingMeat";
import { iSAU } from "../../ingredients/ingSauce";
import type { Recipe } from "../../types";

const serDog: Recipe = {
  name: "Ser Dog",
  type: "snack",
  country: "USA",
  images: [""],
  time: 10,
  portions: 2,
  taste: null,
  difficulty: null,
  ingredients: [
    {
      title: "",
      items: [
        { ing: iMET.sausages, amount: 4, unit: "szt" },
        { ing: iBAK.hotdog_buns, amount: 4, unit: "szt" },
        { ing: iDIR.yellow_mozzarella, amount: 100 },
        { ing: iJAR.pickles, amount: 2, unit: "szt" },
        { ing: iSAU.ketchup, amount: 20 },
        { ing: iSAU.mustard, amount: 20 },
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
        "Polej całość ketchupem i musztardą.",
        "Posyp hot doga startą mozzarellą.",
      ],
    },
  ],
  keyWords: ["pieczywo", "parówka", "ser", "sos"],
};

export default serDog;
