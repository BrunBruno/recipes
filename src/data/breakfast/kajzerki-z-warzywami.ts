import { iGRN } from "../../ingredients/ingGrain";
import { iFAT } from "../../ingredients/ingFat";
import { iMET } from "../../ingredients/ingMeat";
import { iVEG } from "../../ingredients/ingVegetable";
import { iSPC } from "../../ingredients/ingSpice";
import type { Recipe } from "../../types";
import { iHRB } from "../../ingredients/ingHerb";

const kajzerkiZWarzywami: Recipe = {
  name: "Kajzerki z Warzywami",
  type: "breakfast",
  cookingMethods: [["raw", 0]],
  images: ["kajzerki-z-warzywami.jpg"],
  time: 10,
  portions: 1,
  taste: 4,
  difficulty: 1,
  ingredients: [
    {
      title: "Podstawa",
      items: [
        { ing: iGRN.kaiser_roll, amount: 2, unit: "szt" },
        { ing: iFAT.butter, amount: 20, unit: "g" },
        { ing: iMET.ham_slices, amount: 4, unit: "plas" },
        { ing: iVEG.lettuce, amount: 4, unit: "szt" },
        {
          type: "choice",
          selected: 0,
          options: [
            { ing: iVEG.cucumber, amount: 0.25, unit: "szt" },
            { ing: iVEG.tomato, amount: 0.5, unit: "szt" },
            { ing: iVEG.bell_pepper, amount: 0.25, unit: "szt" },
            { ing: iVEG.radish, amount: 4, unit: "szt" },
            { ing: iHRB.cress, amount: 10 },
            { ing: iHRB.chives, amount: 10 },
          ],
        },
        { ing: iSPC.salt },
      ],
    },
    {
      title: "Proponowane warzywa",
      items: [
        { ing: iVEG.cucumber, exclude: true },
        { ing: iVEG.tomato, exclude: true },
        { ing: iVEG.bell_pepper, exclude: true },
        { ing: iVEG.radish, exclude: true },
        { ing: iHRB.cress, exclude: true },
        { ing: iHRB.chives, exclude: true },
      ],
    },
  ],
  steps: [
    {
      title: "",
      steps: [
        "Przekrój kajzerki na pół i posmaruj masłem.",
        "Dodaj plastry szynki oraz liście sałaty.",
        "Dodaj wybrane warzywo i lekko posól.",
        "Złóż kanapki i podawaj od razu.",
      ],
    },
  ],
  keyWords: ["warzywa", "szynka", "pieczywo"],
};

export default kajzerkiZWarzywami;
