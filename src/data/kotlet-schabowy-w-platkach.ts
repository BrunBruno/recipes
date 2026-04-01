import { iFAT } from "../ingredients/ingFat";
import { iGRN } from "../ingredients/ingGrain";
import { iMET } from "../ingredients/ingMeat";
import { iSPC } from "../ingredients/ingSpice";
import { iVEG } from "../ingredients/ingVegetable";
import type { Recipe } from "../types";

const portions = 5;
const kotletySchaboweWPlatkach: Recipe = {
  name: "Kotlety Schabowe w Płatkach",
  description:
    "Kotlety schabowe w płatkach kukurydzianych - panierowane w jajku i chrupiących płatkach, smażone na złoty kolor, podawane z frytkami i buraczkami w occie.",
  type: "dinner",
  images: ["kotlet-schabowy-w-platkach.jpg"],
  time: 50,
  portions: portions,
  ingredients: [
    {
      title: "Kotlety",
      items: [
        { ingredient: iMET.pork_loin, amount: 10, unit: "plas" },
        { ingredient: iMET.egg, amount: 2, unit: "szt" },
        { ingredient: iGRN.cornflakes, amount: 160 },
        { ingredient: iFAT.oil, amount: 10, unit: "lz" },
        { ingredient: iSPC.herbes_de_provence },
        { ingredient: iSPC.granulated_garlic },
        { ingredient: iSPC.sweet_paprika },
        { ingredient: iSPC.black_pepper },
        { ingredient: iSPC.salt },
      ],
    },
    {
      title: "Przykładowe dodatki",
      items: [
        { ingredient: iVEG.potato, amount: portions * 200 },
        { ingredient: iVEG.corn_salad, amount: portions * 200 },
        { ingredient: iSPC.salt },
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
  keyWords: ["wieprzowina", "xxx"],
};

export default kotletySchaboweWPlatkach;
