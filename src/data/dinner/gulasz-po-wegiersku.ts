import { iFAT } from "../../ingredients/ingFat";
import { iMET } from "../../ingredients/ingMeat";
import { iOTH } from "../../ingredients/ingOther";
import { iSPC } from "../../ingredients/ingSpice";
import { iVEG } from "../../ingredients/ingVegetable";
import type { Recipe } from "../../types";

const portions = 2;

const gulaszWegrerski: Recipe = {
  name: "Gulasz po węgiersku",
  description:
    "Aromatyczny gulasz wieprzowy z papryką i cebulą, duszony w intensywnym sosie przyprawowym.",
  type: "dinner",
  images: [""],
  time: 50,
  portions: portions,
  executionDifficulty: 2,
  ingredients: [
    {
      title: "",
      items: [
        { ing: iMET.stew_beef, amount: 400 },
        { ing: iVEG.bell_pepper, amount: 1, unit: "szt" },
        { ing: iVEG.onion, amount: 1, unit: "szt" },
        { ing: iFAT.oil, amount: 3, unit: "lz" },
        { ing: iOTH.water, amount: 2, unit: "szk" },
        { ing: iSPC.knorr_goulash_fix, amount: 1, unit: "opak" },
        { ing: iSPC.meat_seasoning },
      ],
    },
  ],
  steps: [
    {
      title: "",
      steps: [
        "Pokrój mięso, paprykę i cebulę w grubą kostkę.",
        "Oprósz wieprzowinę przyprawą do mięs.",
        "Rozgrzej olej w garnku i obsmaż mięso.",
        "Dodaj paprykę i cebulę, smaż jeszcze około 5 minut.",
        "Wymieszaj fix gulaszowy z wodą i wlej do garnka.",
        "Duś pod przykryciem przez około 30 minut.",
        "Podawaj z kopytkami lub plackami ziemniaczanymi, opcjonalnie ze śmietaną.",
      ],
    },
  ],
  keyWords: [],
};

export default gulaszWegrerski;
