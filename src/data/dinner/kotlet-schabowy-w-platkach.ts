import { iFAT } from "../../ingredients/ingFat";
import { iGRN } from "../../ingredients/ingGrain";
import { iJAR } from "../../ingredients/ingJar";
import { iMET } from "../../ingredients/ingMeat";
import { iSPC } from "../../ingredients/ingSpice";
import { iVEG } from "../../ingredients/ingVegetable";
import type { Recipe } from "../../types";

const portions = 5;
const kotletySchaboweWPlatkach: Recipe = {
  name: "Kotlety w Płatkach",
  description:
    "Kotlety schabowe w płatkach kukurydzianych - panierowane w jajku i chrupiących płatkach, smażone na złoty kolor, podawane z frytkami i buraczkami w occie.",
  type: "dinner",
  images: [
    "kotlet-schabowy-w-platkach.jpg",
    "kotlet-schabowy-w-platkach-2.jpg",
  ],
  time: 50,
  portions: portions,
  executionDifficulty: 3,
  ingredients: [
    {
      title: "Kotlety",
      items: [
        { ing: iMET.pork_loin, amount: 10, unit: "plas" },
        { ing: iMET.egg, amount: 2, unit: "szt" },
        { ing: iGRN.cornflakes, amount: 160 },
        { ing: iFAT.oil, amount: 10, unit: "lz" },
        { ing: iSPC.herbes_de_provence },
        { ing: iSPC.granulated_garlic },
        { ing: iSPC.sweet_paprika },
        { ing: iSPC.black_pepper },
        { ing: iSPC.salt },
      ],
    },
    {
      title: "Przykładowe dodatki",
      items: [
        { ing: iVEG.potato, amount: portions * 200 },
        { ing: iJAR.corn_salad, amount: portions * 200 },
        { ing: iSPC.black_pepper },
        { ing: iSPC.salt },
      ],
    },
  ],
  steps: [
    {
      title: "",
      steps: [
        "Schab pokrój na kotlety, rozbij tłuczkiem i oprósz solą oraz pieprzem.",
        "Płatki kukurydziane lekko rozgnieć lub zmiel w moździerzu, aby nie były w całości.",
        "Jajka roztrzep w misce.",
        "Każdy kotlet obtocz najpierw w jajku, a następnie w płatkach kukurydzianych.",
        "Rozgrzej olej na patelni.",
        "Smaż kotlety na średnim ogniu z obu stron na złoty kolor.",
        "Po usmażeniu odsącz na ręczniku papierowym i podawaj na ciepło.",
      ],
    },
    {
      title: "Przykładowe podanie",
      steps: [
        "Obierz ziemniaki i ugotuj je w osolonej wodzie do miękkości.",
        "Podawaj usmażone kotlety na talerzu z porcją ziemniaków.",
        "Obok dodaj surówkę z kukurydzą jako dodatek warzywny.",
      ],
    },
  ],
  keyWords: ["wieprzowina"],
};

export default kotletySchaboweWPlatkach;
