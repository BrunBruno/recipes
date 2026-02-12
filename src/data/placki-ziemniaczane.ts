import { iFAT } from "../ingredients/ingFat";
import { iGRN } from "../ingredients/ingGrain";
import { iMET } from "../ingredients/ingMeat";
import { iSPC } from "../ingredients/ingSpice";
import { iVEG } from "../ingredients/ingVegetable";
import type { Recipe } from "../types";

const plackiZiemniaczane: Recipe = {
  name: "Placki Ziemniaczane",
  type: "dinner",
  images: [""],
  time: 25,
  portions: 2,
  ingredients: [
    { ingredient: iMET.egg, amount: 1, unit: "szt" },
    { ingredient: iVEG.potato, amount: 4, unit: "szt" },
    { ingredient: iVEG.onion, amount: 1, unit: "szt" },
    { ingredient: iVEG.garlic, amount: 1, unit: "ząbek" },
    { ingredient: iGRN.flour, amount: 1, unit: "łyżka" },
    { ingredient: iFAT.oil },
    { ingredient: iSPC.savory },
    { ingredient: iSPC.black_pepper },
    { ingredient: iSPC.salt },
  ],
  steps: [
    {
      title: "",
      steps: [
        "Zetrzyj na tarce ziemniaki oraz cebulę.",
        "Odciśnij nadmiar wody przez sitko lub gazę.",
        "Dodaj mąkę oraz jajko i dokładnie wymieszaj.",
        "Dodaj przeciśnięty czosnek, cząber, pieprz i sól.",
        "Rozgrzej olej na patelni.",
        "Smaż placki, aż będą złociste i chrupiące z obu stron.",
      ],
    },
  ],
  keyWords: ["ziemniak", "smażone"],
};

export default plackiZiemniaczane;
