import { iDIR } from "../../ingredients/ingDairy";
import { iFAT } from "../../ingredients/ingFat";
import { iGRN } from "../../ingredients/ingGrain";
import type { Recipe } from "../../types";

const grillowanySer: Recipe = {
  name: "Grillowany Ser",
  type: "snack",
  cookingMethods: [["fried", 8]],
  images: ["grillowany-ser.jpg"],
  time: 10,
  portions: 1,
  taste: 3,
  difficulty: 1,
  ingredients: [
    {
      title: "",
      items: [
        { ing: iGRN.toast_bread, amount: 4, unit: "krom" },
        { ing: iDIR.cheddar_cheese, amount: 2, unit: "plas" },
        { ing: iFAT.butter, amount: 1, unit: "lz" },
      ],
    },
  ],
  steps: [
    {
      title: "",
      steps: [
        "Rozpuść kawałek masła na patelni.",
        "Pomiędzy kromkami ułóż plastry sera cheddar.",
        "Smaż na rozgrzanej patelni na średnim ogniu z obu stron.",
        "Gdy pieczywo będzie złociste, a ser całkowicie się roztopi, zdejmij z patelni i podawaj.",
      ],
    },
  ],
  keyWords: ["ser", "pieczywo"],
};

export default grillowanySer;
