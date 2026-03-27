import { iDIR } from "../ingredients/ingDairy";
import { iFAT } from "../ingredients/ingFat";
import { iGRN } from "../ingredients/ingGrain";
import { iMET } from "../ingredients/ingMeat";
import { iSPC } from "../ingredients/ingSpice";
import { iVEG } from "../ingredients/ingVegetable";
import type { Recipe } from "../types";

const portions = 5;
const kotletPoGoralsku: Recipe = {
  name: "Kotlety po Góralsku",
  description:
    "Kotlety po Góralsku - schabowe panierowane z boczkiem i żółtym serem, podawane z ziemniakami i podsmażaną kapustą kiszoną, aromatyzowane tymiankiem i papryką.",
  type: "dinner",
  images: ["kotlet-po-goralsku.jpg", "kotlet-po-goralsku-2.jpg"],
  time: 70,
  portions: portions,
  ingredients: [
    {
      title: "Lista składników",
      items: [
        { ingredient: iMET.pork_loin, amount: 10, unit: "plas" },
        { ingredient: iMET.bacon_slices, amount: 10, unit: "plas" },
        { ingredient: iMET.egg, amount: 2, unit: "szt" },
        { ingredient: iDIR.yellow_cheese, amount: 10, unit: "plas" },
        { ingredient: iGRN.breadcrumbs, amount: 150 },
        { ingredient: iGRN.flour, amount: 3, unit: "lz" },
        { ingredient: iFAT.oil, amount: 10, unit: "lz" },
        { ingredient: iSPC.thyme },
        { ingredient: iSPC.sweet_paprika },
        { ingredient: iSPC.black_pepper },
        { ingredient: iSPC.salt },
      ],
    },
    {
      title: "Przykładowe dodatki",
      items: [
        { ingredient: iVEG.potato, amount: `${portions} × 200` },
        { ingredient: iVEG.sauerkraut, amount: `${portions} × 120` },
        { ingredient: iFAT.clarified_butter, amount: 1, unit: "lzi" },
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
