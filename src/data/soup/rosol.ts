import { iMET } from "../../ingredients/ingMeat";
import { iOTH } from "../../ingredients/ingOther";
import { iSPC } from "../../ingredients/ingSpice";
import { iVEG } from "../../ingredients/ingVegetable";
import type { Recipe } from "../../types";

const rosol: Recipe = {
  name: "Rosół",
  description:
    "Tradycyjny, aromatyczny rosół z indyka, kurczaka i wieprzowiny, gotowany z warzywami i przyprawami przez kilka godzin, idealny jako baza do zup lub na niedzielny obiad.",
  type: "soup",
  images: [""],
  time: 240,
  portions: 6,
  executionDifficulty: null,
  ingredients: [
    {
      title: "",
      items: [
        { ing: iMET.turkey_wing, amount: 500, exclude: true },
        { ing: iMET.turkey_neck, amount: 200, exclude: true },
        {
          ing: iMET.chicken_soup_portion,
          amount: 400,
          exclude: true,
        },
        { ing: iMET.pork_rib, amount: 200, exclude: true },
        { ing: iVEG.carrot, amount: 2, unit: "szt" },
        { ing: iVEG.parsley_root, amount: 1, unit: "szt" },
        { ing: iVEG.celery_root, amount: 120 },
        { ing: iVEG.onion, amount: 1, unit: "szt" },
        { ing: iVEG.leek, amount: 1, unit: "szt" },
        { ing: iVEG.savoy_cabbage, amount: 80 },
        { ing: iVEG.parsley, amount: 10 },
        { ing: iOTH.water, amount: 3000, unit: "ml" },
        { ing: iSPC.bay_leaf, amount: 2, unit: "lst" },
        { ing: iSPC.allspice, amount: 3, unit: "ziar" },
        { ing: iSPC.black_pepper, amount: 6, unit: "ziar" },
        { ing: iSPC.salt },
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
