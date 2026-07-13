import { dinnerSides } from "../../dinnerSides";
import { iFAT } from "../../ingredients/ingFat";
import { iLIQ } from "../../ingredients/ingLiquid";
import { iMET } from "../../ingredients/ingMeat";
import { iSPC } from "../../ingredients/ingSpice";
import { iVEG } from "../../ingredients/ingVegetable";
import type { Recipe } from "../../types";
import { fryingFat } from "../../utils";

const portions = 3;
const gulaszWegrerski: Recipe = {
  name: "Gulasz po Węgiersku",
  type: "dinner",
  images: ["gulasz-po-wegiersku.jpg", "gulasz-po-wegiersku-2.jpg"],
  time: 50,
  portions: portions,
  taste: 5,
  difficulty: 3,
  ingredients: [
    {
      title: "",
      items: [
        { ing: iMET.stew_beef, amount: 500 },
        { ing: iVEG.bell_pepper, amount: 1, unit: "szt" },
        { ing: iVEG.onion, amount: 1, unit: "szt" },
        ...fryingFat(iFAT.oil, 3, "lz", 0.5),
        { ing: iLIQ.water, amount: 2, unit: "szk" },
        { ing: iSPC.knorr_goulash_fix, amount: 1, unit: "opak" },
        { ing: iSPC.meat_seasoning },
      ],
    },
  ],
  extrasMain: {
    options: [
      dinnerSides("kopytka-ready", portions),
      dinnerSides("buckwheat", portions),
    ],
    selected: 0,
  },
  extrasVeg: {
    options: [
      dinnerSides("pickled-cucumber-vinegar", portions),
      dinnerSides("beets-whole-vinegar", portions),
    ],
    selected: 0,
  },
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
      ],
    },
  ],
  keyWords: ["mięso", "wołowina", "sos"],
};

export default gulaszWegrerski;
