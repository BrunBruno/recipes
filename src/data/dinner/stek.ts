import { dinnerSides } from "../../dinnerSides";
import { iFAT } from "../../ingredients/ingFat";
import { iHRB } from "../../ingredients/ingHerb";
import { iMET } from "../../ingredients/ingMeat";
import { iSPC } from "../../ingredients/ingSpice";
import { iVEG } from "../../ingredients/ingVegetable";
import type { Recipe } from "../../types";
import { fryingFat } from "../../utils";

const portions = 1;
const stek: Recipe = {
  name: "Stek",
  description:
    "Soczysty stek z aromatycznym masłem, czosnkiem i tymiankiem - szybkie i eleganckie danie dla miłośników wołowiny.",
  type: "dinner",
  images: ["stek.jpg", "stek-2.jpg"],
  time: 20,
  portions: portions,
  executionDifficulty: 2,
  ingredients: [
    {
      title: "",
      items: [
        { ing: iMET.beef_steak, amount: portions, unit: "szt" },
        { ing: iVEG.garlic, amount: portions, unit: "zbk" },
        ...fryingFat(iFAT.oil, portions, "lzi", 0.55),
        ...fryingFat(iFAT.butter, 1, "lz", 0.5),
        { ing: iHRB.thyme },
        { ing: iSPC.salt },
      ],
    },
  ],
  extrasMain: {
    options: [
      dinnerSides("oven-potatoes", portions),
      dinnerSides("oven-fries", portions),
    ],
    selected: 0,
  },
  extrasVeg: {
    options: [dinnerSides("green-beans-boiled", portions)],
    selected: 0,
  },
  steps: [
    {
      title: "",
      steps: [
        "Stek posyp solą.",
        "Smaż stek na odrobinie oleju, aż osiągnie pożądany stopień wysmażenia.",
        "Na patelni dodaj masło, dodaj wyciśnięty czosnek i tymianek.",
        "Zmniejsz ogień i polewaj steka stopionym masłem z czosnkiem i tymiankiem przez kilka minut.",
        "Podawaj od razu po przygotowaniu.",
      ],
    },
  ],
  keyWords: ["wołowina"],
};

export default stek;
