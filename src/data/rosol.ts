import { iMET } from "../ingredients/ingMeat";
import { iOTH } from "../ingredients/ingOther";
import { iSPC } from "../ingredients/ingSpice";
import { iVEG } from "../ingredients/ingVegetable";
import type { Recipe } from "../types";

const rosol: Recipe = {
  name: "Rosół",
  type: "soup",
  images: [""],
  time: 240,
  portions: 6,
  ingredients: [
    {
      title: "",
      items: [
        { ingredient: iMET.turkey_wing, amount: 500 },
        { ingredient: iMET.turkey_neck, amount: 200 },
        { ingredient: iMET.chicken_soup_portion, amount: 400 },
        { ingredient: iMET.pork_rib, amount: 200 },
        { ingredient: iVEG.carrot, amount: 2, unit: "szt" },
        { ingredient: iVEG.parsley_root, amount: 1, unit: "szt" },
        { ingredient: iVEG.celery_root, amount: 120 },
        { ingredient: iVEG.onion, amount: 1, unit: "szt" },
        { ingredient: iVEG.leek, amount: 1, unit: "szt" },
        { ingredient: iVEG.savoy_cabbage, amount: 80 },
        { ingredient: iVEG.parsley, amount: 10 },
        { ingredient: iOTH.water },
        { ingredient: iSPC.bay_leaf, amount: 2, unit: "listek" },
        { ingredient: iSPC.allspice, amount: 3, unit: "ziarno" },
        { ingredient: iSPC.black_pepper, amount: 6, unit: "ziarno" },
        { ingredient: iSPC.salt },
      ],
    },
  ],
  steps: [
    {
      title: "",
      steps: [
        "Do dużego garnka włóż skrzydło indycze, kawałek szyi, porcję rosołową z kurczaka oraz żeberko.",
        "Zalej wodą i zagotuj. Gdy pojawi się dużo szumów wylej wodę, mięso dokładnie opłucz i zalej świeżą wodą.",
        "Gotuj około 2 godziny na małym ogniu.",
        "Odstaw garnek do wystudzenia.",
        "Następnego dnia ponownie zagotuj rosół.",
        "Dodaj sól, kilka ziaren pieprzu, 3 ziarna ziela angielskiego oraz liść laurowy.",
        "Gotuj około 1,5 godziny na małym ogniu.",
        "Dodaj marchew, pietruszkę, seler, por oraz lekko przypaloną cebulę. Możesz dodać także kawałek kapusty włoskiej i natkę pietruszki.",
        "Gotuj jeszcze około 30 minut.",
        "Sprawdź czy mięso i warzywa są miękkie oraz dopraw do smaku solą.",
      ],
    },
  ],
  keyWords: ["zupa", "kurczak"],
};

export default rosol;
