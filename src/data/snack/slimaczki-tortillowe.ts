import { iBAK } from "../../ingredients/ingBakery";
import { iDIR } from "../../ingredients/ingDairy";
import { iMET } from "../../ingredients/ingMeat";
import { iVEG } from "../../ingredients/ingVegetable";
import type { Recipe } from "../../types";

const slimaczkiTortillowe: Recipe = {
  name: "Ślimaczki Tortillowe",
  type: "snack",
  cookingMethods: [],
  images: ["slimaczki-tortillowe.jpg"],
  time: 10,
  portions: 2,
  taste: 4,
  difficulty: 1,
  ingredients: [
    {
      title: "",
      items: [
        { ing: iBAK.tortilla, amount: 2, unit: "szt" },
        { ing: iMET.ham_slices, amount: 100 },
        { ing: iDIR.cream_cheese, amount: 100 },
        { ing: iVEG.lettuce, amount: 50 },
        { ing: iVEG.garlic, amount: 1, unit: "zbk" },
      ],
    },
  ],
  steps: [
    {
      title: "",
      steps: [
        "Czosnek przeciśnij przez praskę i wymieszaj z serkiem śmietankowym.",
        "Każdą tortillę posmaruj przygotowanym serkiem.",
        "Na tortilli ułóż liście sałaty oraz plastry szynki.",
        "Zwiń tortillę ciasno w rulon.",
        "Pokrój rulony na mniejsze kawałki, tworząc ślimaczki.",
        "Podawaj od razu lub schłodź przed podaniem.",
      ],
    },
  ],
  keyWords: ["tortilla", "szynka"],
};

export default slimaczkiTortillowe;
