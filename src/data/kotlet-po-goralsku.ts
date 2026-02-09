import { iDIR } from "../ingredients/ingDairy";
import { iFAT } from "../ingredients/ingFat";
import { iGRN } from "../ingredients/ingGrain";
import { iMET } from "../ingredients/ingMeat";
import { iSPC } from "../ingredients/ingSpice";
import { iVEG } from "../ingredients/ingVegetable";
import type { Recipe } from "../types";

const kotletPoGoralsku: Recipe = {
  name: "Kotlet po Góralsku",
  type: "dinner",
  image: "kotlet-po-goralsku.jpg",
  kcal: 850,
  time: 70,
  portions: 5,
  ingredients: [
    { ingredient: iMET.pork_loin, amount: 10, unit: "plaster" },
    { ingredient: iMET.bacon_slices, amount: 10, unit: "plaster" },
    { ingredient: iMET.egg, amount: 2 },
    { ingredient: iDIR.yellow_cheese, amount: 10, unit: "plaster" },
    { ingredient: iGRN.breadcrumbs, amount: 150 },
    { ingredient: iGRN.flour, amount: 3, unit: "łyżka" },
    { ingredient: iVEG.potato, amount: 750 },
    { ingredient: iVEG.sauerkraut, amount: 500 },
    { ingredient: iFAT.butter, amount: 20 },
    { ingredient: iFAT.oil },
    { ingredient: iSPC.salt },
    { ingredient: iSPC.black_pepper },
  ],
  steps: [
    {
      title: "Kotlety Schabowe",
      steps: [
        "Plastry schabu rozbij tłuczkiem na cienkie kotlety.",
        "Oprósz solą i pieprzem z obu stron.",
        "Każdy kotlet obtocz kolejno w mące, roztrzepanym jajku oraz bułce tartej.",
        "Na rozgrzanym oleju smaż kotlety na złoty kolor z obu stron.",
        "Na tej samej patelni podsmaż boczek, aż stanie się chrupiący.",
        "Na usmażone kotlety połóż boczek, a na wierzch plaster sera.",
        "Przykryj patelnię i podgrzewaj na małym ogniu, aż ser się rozpuści.",
      ],
    },
    {
      title: "Ziemniaki Gotowane",
      steps: [
        "Obierz ziemniaki i ugotuj w osolonej wodzie do miękkości.",
        "Po ugotowaniu odcedź i podawaj gorące.",
      ],
    },
    {
      title: "Kapusta Zasmażana",
      steps: [
        "Na patelni rozpuść masło i podsmaż kapustę kiszoną.",
        "Dopraw solą i pieprzem, smaż na małym ogniu, aż kapusta będzie miękka i lekko zrumieniona.",
      ],
    },
  ],
  keyWords: ["mięso", "wieprzowina", "schab", "smażone", "panierowane"],
};

export default kotletPoGoralsku;
