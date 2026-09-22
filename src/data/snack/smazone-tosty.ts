import { iBAK } from "../../ingredients/ingBakery";
import { iDIR } from "../../ingredients/ingDairy";
import { iFAT } from "../../ingredients/ingFat";
import type { Recipe } from "../../types";

const smazoneTosty: Recipe = {
  name: "Smażone Tosty",
  type: "snack",
  country: "USA",
  images: ["smazone-tosty.jpg"],
  time: 10,
  portions: 1,
  taste: 3,
  difficulty: 1,
  ingredients: [
    {
      title: "",
      items: [
        { ing: iBAK.toast_bread, amount: 4, unit: "krom", kw: true },
        { ing: iDIR.cheddar_cheese, amount: 2, unit: "plas", kw: true },
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
  keyWords: ["ser", "pieczywo", "smażone"],
};

export default smazoneTosty;
