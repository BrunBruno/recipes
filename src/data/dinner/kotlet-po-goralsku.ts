import { iDIR } from "../../ingredients/ingDairy";
import { iFAT } from "../../ingredients/ingFat";
import { iGRN } from "../../ingredients/ingGrain";
import { iJAR } from "../../ingredients/ingJar";
import { iMET } from "../../ingredients/ingMeat";
import { iSPC } from "../../ingredients/ingSpice";
import { iVEG } from "../../ingredients/ingVegetable";
import type { Recipe } from "../../types";

const portions = 5;
const kotletPoGoralsku: Recipe = {
  name: "Kotlety po Góralsku",
  description:
    "Kotlety po Góralsku - schabowe panierowane z boczkiem i żółtym serem, podawane z ziemniakami i podsmażaną kapustą kiszoną, aromatyzowane tymiankiem i papryką.",
  type: "dinner",
  images: ["kotlet-po-goralsku.jpg", "kotlet-po-goralsku-2.jpg"],
  time: 70,
  portions: portions,
  executionDifficulty: 4,
  ingredients: [
    {
      title: "Kotlety",
      items: [
        { ing: iMET.pork_loin, amount: 10, unit: "plas" },
        { ing: iMET.bacon_slices, amount: 10, unit: "plas" },
        { ing: iMET.egg, amount: 2, unit: "szt" },
        { ing: iDIR.yellow_cheese, amount: 10, unit: "plas" },
        { ing: iGRN.breadcrumbs, amount: 150 },
        { ing: iGRN.flour, amount: 3, unit: "lz" },
        { ing: iFAT.oil, amount: 10, unit: "lz" },
        { ing: iSPC.thyme },
        { ing: iSPC.sweet_paprika },
        { ing: iSPC.black_pepper },
        { ing: iSPC.salt },
      ],
    },
    {
      title: "Przykładowe dodatki",
      items: [
        { ing: iVEG.potato, amount: portions * 200 },
        { ing: iJAR.sauerkraut, amount: portions * 120 },
        { ing: iFAT.clarified_butter, amount: 1, unit: "lzi" },
        { ing: iSPC.dill },
        { ing: iSPC.black_pepper },
        { ing: iSPC.salt },
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
  keyWords: ["wieprzowina"],
};

export default kotletPoGoralsku;
