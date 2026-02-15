import { iDIR } from "../ingredients/ingDairy";
import { iFAT } from "../ingredients/ingFat";
import { iGRN } from "../ingredients/ingGrain";
import { iMET } from "../ingredients/ingMeat";
import { iSPC } from "../ingredients/ingSpice";
import { iVEG } from "../ingredients/ingVegetable";
import type { Recipe } from "../types";

const kotletPoGoralsku: Recipe = {
  name: "Kotlety po Góralsku",
  type: "dinner",
  images: ["kotlet-po-goralsku.jpg"],
  time: 70,
  portions: 5,
  ingredients: [
    {
      title: "Kotlety Schabowe",
      items: [
        { ingredient: iMET.pork_loin, amount: 10, unit: "plaster" },
        { ingredient: iMET.bacon_slices, amount: 10, unit: "plaster" },
        { ingredient: iMET.egg, amount: 2 },
        { ingredient: iDIR.yellow_cheese, amount: 10, unit: "plaster" },
        { ingredient: iGRN.breadcrumbs, amount: 150 },
        { ingredient: iGRN.flour, amount: 3, unit: "łyżka" },
        { ingredient: iFAT.oil },
      ],
    },
    {
      title: "Dodatki",
      items: [
        { ingredient: iVEG.potato, amount: "5 × 150", unit: "g" },
        { ingredient: iVEG.sauerkraut, amount: 600 },
        { ingredient: iFAT.butter, amount: 20 },
        { ingredient: iSPC.salt },
        { ingredient: iSPC.black_pepper },
      ],
      excludeFromCalc: true,
    },
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
      title: "Przykładowe podanie",
      steps: [
        "Na patelni rozpuść masło i podsmaż kapustę kiszoną.",
        "Dopraw solą i pieprzem, smaż na małym ogniu, aż kapusta będzie miękka i lekko zrumieniona.",
        "Obierz ziemniaki i ugotuj w osolonej wodzie do miękkości.",
        "Po ugotowaniu odcedź i podawaj gorące.",
      ],
    },
  ],
  keyWords: ["mięso", "wieprzowina", "schab", "smażone", "panierowane"],
};

export default kotletPoGoralsku;
