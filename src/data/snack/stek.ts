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
  ingredients: [
    {
      title: "",
      items: [
        { ingredient: iMET.beef_steak, amount: 1, unit: "szt" },
        { ingredient: iVEG.garlic, amount: 1, unit: "zbk" },
        { ingredient: iFAT.oil, amount: 1, unit: "lzi" },
        { ingredient: iFAT.butter, amount: 1, unit: "lz" },
        { ingredient: iSPC.thyme },
        { ingredient: iSPC.salt },
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
  keyWords: ["wołowina", "xxx"],
};

export default stek;
