import { iFAT } from "../ingredients/ingFat";
import { iMET } from "../ingredients/ingMeat";
import { iSPC } from "../ingredients/ingSpice";
import { iVEG } from "../ingredients/ingVegetable";
import type { Recipe } from "../types";

const stek: Recipe = {
  name: "Smażony Stek",
  type: "snack",
  image: "stek.jpg",
  kcal: 500,
  time: 15,
  portions: 1,
  ingredients: [
    { ingredient: iMET.beef_steak, amount: 1, unit: "szt" },
    { ingredient: iVEG.garlic, amount: 1, unit: "ząbek" },
    { ingredient: iFAT.oil, amount: 1, unit: "łyżeczka" },
    { ingredient: iFAT.butter, amount: 1, unit: "łyżka" },
    { ingredient: iSPC.thyme },
    { ingredient: iSPC.salt },
  ],
  steps: [
    "Stek posyp solą.",
    "Smaż stek na odrobinie oleju, aż osiągnie pożądany stopień wysmażenia.",
    "Na patelni dodaj masło, dodaj wyciśnięty czosnek i tymianek.",
    "Zmniejsz ogień i polewaj steka stopionym masłem z czosnkiem i tymiankiem przez kilka minut.",
    "Podawaj od razu po przygotowaniu.",
  ],
  keyWords: ["mięso", "wołowina", "smażone"],
};

export default stek;
