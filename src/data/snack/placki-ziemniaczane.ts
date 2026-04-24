import { iFAT } from "../../ingredients/ingFat";
import { iGRN } from "../../ingredients/ingGrain";
import { iMET } from "../../ingredients/ingMeat";
import { iOTH } from "../../ingredients/ingOther";
import { iSPC } from "../../ingredients/ingSpice";
import { iVEG } from "../../ingredients/ingVegetable";
import type { Recipe } from "../../types";

const plackiZiemniaczane: Recipe = {
  name: "Placki Ziemniaczane",
  description:
    "Klasyczne polskie placki ziemniaczane - chrupiące na zewnątrz, miękkie w środku, podawane na śniadanie lub kolację. Idealne z dodatkiem śmietany lub sosu jabłkowego.",
  type: "snack",
  images: ["placki-ziemniaczane.jpg"],
  time: 30,
  portions: 2,
  executionDifficulty: 4,
  ingredients: [
    {
      title: "",
      items: [
        { ing: iVEG.potato, amount: 5, unit: "szt" },
        { ing: iVEG.onion, amount: 1, unit: "szt" },
        { ing: iVEG.garlic, amount: 1, unit: "zbk" },
        { ing: iMET.egg, amount: 1, unit: "szt" },
        { ing: iGRN.flour, amount: 2, unit: "lz" },
        { ing: iFAT.oil, amount: 4, unit: "lz" },
        { ing: iSPC.savory },
        { ing: iSPC.black_pepper },
        { ing: iSPC.salt },
        { ing: iOTH.water, amount: -350, invisible: true },
      ],
    },
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
  keyWords: ["ziemniak"],
};

export default plackiZiemniaczane;
