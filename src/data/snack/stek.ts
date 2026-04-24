import { iFAT } from "../../ingredients/ingFat";
import { iMET } from "../../ingredients/ingMeat";
import { iSPC } from "../../ingredients/ingSpice";
import { iVEG } from "../../ingredients/ingVegetable";
import type { Recipe } from "../../types";

const stek: Recipe = {
  name: "Stek",
  description:
    "Soczysty stek z aromatycznym masłem, czosnkiem i tymiankiem - szybkie i eleganckie danie dla miłośników wołowiny.",
  type: "snack",
  images: ["stek.jpg"],
  time: 20,
  portions: 1,
  executionDifficulty: 2,
  ingredients: [
    {
      title: "",
      items: [
        { ing: iMET.beef_steak, amount: 1, unit: "szt" },
        { ing: iVEG.garlic, amount: 1, unit: "zbk" },
        { ing: iFAT.oil, amount: 1, unit: "lzi" },
        { ing: iFAT.butter, amount: 1, unit: "lz" },
        { ing: iSPC.thyme },
        { ing: iSPC.salt },
      ],
    },
  ],
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
