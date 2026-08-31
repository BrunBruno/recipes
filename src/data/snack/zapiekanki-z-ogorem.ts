import { iJAR } from "../../ingredients/ingJar";
import { iBAK } from "../../ingredients/ingBakery";
import { iSAU } from "../../ingredients/ingSauce";
import { iMET } from "../../ingredients/ingMeat";
import type { Recipe } from "../../types";
import { iDIR } from "../../ingredients/ingDairy";

const zapiekankiZOgorem: Recipe = {
  name: "Zapiekanki z Ogórem",
  type: "snack",
  cookingMethods: [["baked", 10, 200]],
  images: ["zapiekanki-z-ogorem.jpg"],
  time: 15,
  portions: 2,
  taste: 4,
  difficulty: 1,
  ingredients: [
    {
      title: "",
      items: [
        { ing: iBAK.casserole_base, amount: 2, unit: "szt" },
        { ing: iDIR.yellow_cheese, amount: 4, unit: "plas" },
        { ing: iMET.mini_salami, amount: 20, unit: "plas" },
        { ing: iJAR.pickled_cucumber, amount: 2, unit: "szt" },
        { ing: iSAU.garlic_sauce, amount: 40 },
        { ing: iSAU.ketchup, amount: 40 },
      ],
    },
  ],
  steps: [
    {
      title: "",
      steps: [
        "Na gotowych podstawach do zapiekanek ułóż plastry żółtego sera i mini salami.",
        "Zapiekanki przełóż do piekarnika i piecz przez około 10 minut w temperaturze 200°C, aż ser się roztopi, a składniki lekko się zarumienią.",
        "Po wyjęciu polej zapiekanki sosem czosnkowym i ketchupem.",
        "Ogórki kiszone pokrój ukośnie w plastry i ułóż na zapiekankach.",
      ],
    },
  ],
  keyWords: ["pieczywo"],
};
export default zapiekankiZOgorem;
