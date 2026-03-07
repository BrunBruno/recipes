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
  images: ["kotlet-po-goralsku.jpg", "kotlet-po-goralsku-2.jpg"],
  time: 70,
  portions: 5,
  ingredients: [
    {
      title: "",
      items: [
        { ingredient: iMET.pork_loin, amount: 10, unit: "plaster" },
        { ingredient: iMET.bacon_slices, amount: 10, unit: "plaster" },
        { ingredient: iMET.egg, amount: 2, unit: "szt" },
        { ingredient: iDIR.yellow_cheese, amount: 10, unit: "plaster" },
        { ingredient: iGRN.breadcrumbs, amount: 150 },
        { ingredient: iGRN.flour, amount: 3, unit: "łyżka" },
        { ingredient: iFAT.oil, amount: 10, unit: "łyżka" },
        { ingredient: iSPC.thyme },
        { ingredient: iSPC.sweet_paprika },
        { ingredient: iSPC.black_pepper },
        { ingredient: iSPC.salt },
      ],
    },
    {
      title: "Dodatki",
      items: [
        { ingredient: iVEG.potato, amount: "5 × 200" },
        { ingredient: iVEG.sauerkraut, amount: 600 },
        { ingredient: iFAT.clarified_butter, amount: 1, unit: "łyżeczka" },
        { ingredient: iSPC.dill },
        { ingredient: iSPC.black_pepper },
        { ingredient: iSPC.salt },
      ],
    },
  ],
  steps: [
    {
      title: "",
      steps: [
        "Plastry schabu rozbij tłuczkiem na cienkie kotlety.",
        "Oprósz przyprawami z obu stron.",
        "Każdy kotlet obtocz kolejno w mące, roztrzepanym jajku oraz bułce tartej.",
        "Podsmaż boczek, aż stanie się chrupiący.",
        "Na tej samej patelni rozgrzej olej i smaż kotlety na złoty kolor z obu stron.",
        "Na usmażone kotlety połóż boczek, a na wierzch plaster sera.",
        "Przykryj patelnię i podgrzewaj na małym ogniu, aż ser się rozpuści.",
      ],
    },
    {
      title: "Przykładowe podanie",
      steps: [
        "Na patelni rozpuść masło i podsmaż kapustę kiszoną.",
        "Dopraw solą i pieprzem i smaż, aż kapusta będzie miękka i lekko zrumieniona.",
        "Obierz ziemniaki i ugotuj je w osolonej wodzie do miękkości.",
        "Podawaj danie z porcją ziemniaków i podsmażaną kapustą.",
      ],
    },
  ],
  keyWords: ["wieprzowina", "xxx"],
};

export default kotletPoGoralsku;
