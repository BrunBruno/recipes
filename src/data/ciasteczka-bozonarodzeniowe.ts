import { iDIR } from "../ingredients/ingDairy";
import { iFAT } from "../ingredients/ingFat";
import { iGRN } from "../ingredients/ingGrain";
import { iMET } from "../ingredients/ingMeat";
import { iOTH } from "../ingredients/ingOther";
import type { Recipe } from "../types";

const ciasteczkaBozonarodzeniowe: Recipe = {
  name: "Ciasteczka Bożonarodzeniowe",
  type: "dessert",
  image: "",
  time: 0,
  portions: 0,
  ingredients: [
    { ingredient: iFAT.butter, amount: 0.5, unit: "kostka" },
    { ingredient: iFAT.margarine, amount: 0.5, unit: "kostka" },
    { ingredient: iGRN.flour, amount: 1.5, unit: "szklanka" },
    { ingredient: iOTH.sugar, amount: 1.5, unit: "szklanka" },
    { ingredient: iOTH.baking_powder, amount: 2, unit: "łyżeczka" },
    { ingredient: iDIR.cream, amount: 2, unit: "łyżka" },
    { ingredient: iMET.egg, amount: 3 },
  ],
  steps: [
    "Zagnieść razem wszystkie składniki.",
    "Włożyć ciasto do lodówki na 45 min.",
    "Wykrawać foremkami ciasteczka i kłaść na blachę.",
    "Piec w 160°C na termoobiegu.",
    "Dekorować kremem i posypkami.",
  ],
  keyWords: ["ciasto", "słodkie"],
};

export default ciasteczkaBozonarodzeniowe;
