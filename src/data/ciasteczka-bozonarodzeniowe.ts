import { iDIR } from "../ingredients/ingDairy";
import { iFAT } from "../ingredients/ingFat";
import { iGRN } from "../ingredients/ingGrain";
import { iMET } from "../ingredients/ingMeat";
import { iOTH } from "../ingredients/ingOther";
import type { Recipe } from "../types";

const ciasteczkaBozonarodzeniowe: Recipe = {
  name: "Ciasteczka Bożonarodzeniowe",
  description:
    "Kruche ciasteczka bożonarodzeniowe idealne do wykrawania i dekorowania, doskonałe na świąteczny stół i wspólne pieczenie.",
  type: "dessert",
  images: [""],
  time: 85,
  portions: 24,
  ingredients: [
    {
      title: "",
      items: [
        { ingredient: iGRN.flour, amount: 1.5, unit: "szk" },
        { ingredient: iMET.egg, amount: 3, unit: "szt" },
        { ingredient: iFAT.butter, amount: 0.5, unit: "kst" },
        { ingredient: iFAT.margarine, amount: 0.5, unit: "kst" },
        { ingredient: iDIR.cream_18, amount: 2, unit: "lz" },
        { ingredient: iOTH.sugar, amount: 1.5, unit: "szk" },
        { ingredient: iOTH.baking_powder, amount: 2, unit: "lzi" },
      ],
    },
  ],
  steps: [
    {
      title: "",
      steps: [
        "Zagnieść razem wszystkie składniki.",
        "Włożyć ciasto do lodówki na 45 min.",
        "Wykrawać foremkami ciasteczka i kłaść na blachę.",
        "Piec w 160°C na termoobiegu.",
        "Dekorować kremem i posypkami.",
      ],
    },
  ],
  keyWords: ["ciasto"],
};

export default ciasteczkaBozonarodzeniowe;
