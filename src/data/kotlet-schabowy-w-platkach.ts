import { iFAT } from "../ingredients/ingFat";
import { iGRN } from "../ingredients/ingGrain";
import { iMET } from "../ingredients/ingMeat";
import { iSPC } from "../ingredients/ingSpice";
import type { Recipe } from "../types";

const kotletySchaboweWPlatkach: Recipe = {
  name: "Kotlety w Płatkach",
  type: "dinner",
  images: [""],
  time: 35,
  portions: 5,
  ingredients: [
    {
      title: "",
      items: [
        { ingredient: iMET.pork_loin, amount: 10, unit: "plaster" },
        { ingredient: iMET.egg, amount: 2, unit: "szt" },
        { ingredient: iGRN.cornflakes, amount: 160, unit: "g" },
        { ingredient: iFAT.oil },
        { ingredient: iSPC.black_pepper },
        { ingredient: iSPC.salt },
      ],
    },
  ],

  steps: [
    {
      title: "",
      steps: [
        "Schab pokrój na kotlety, rozbij tłuczkiem i oprósz solą oraz pieprzem.",
        "Płatki kukurydziane lekko rozgnieć, aby nie były w całości.",
        "Jajka roztrzep w misce.",
        "Każdy kotlet obtocz najpierw w jajku, a następnie w płatkach kukurydzianych.",
        "Rozgrzej olej na patelni.",
        "Smaż kotlety na średnim ogniu z obu stron na złoty kolor.",
        "Po usmażeniu odsącz na ręczniku papierowym i podawaj na ciepło.",
      ],
    },
  ],

  keyWords: ["schab", "mięso", "panierowane", "wieprzowina"],
};

export default kotletySchaboweWPlatkach;
