import { dinnerSides } from "../../dinnerSides";
import { iFAT } from "../../ingredients/ingFat";
import { iMET } from "../../ingredients/ingMeat";
import { iOTH } from "../../ingredients/ingOther";
import { iSPC } from "../../ingredients/ingSpice";
import { iVEG } from "../../ingredients/ingVegetable";
import type { Recipe } from "../../types";

const portions = 2;

const gulaszWegrerski: Recipe = {
  name: "Gulasz po Węgiersku",
  description:
    "Aromatyczny gulasz wieprzowy z papryką i cebulą, duszony w intensywnym sosie przyprawowym.",
  type: "dinner",
  images: ["gulasz-po-wegiersku.jpg", "gulasz-po-wegiersku-2.jpg"],
  time: 50,
  portions: portions,
  executionDifficulty: 3,
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
    // {
    //   title: "",
    //   isAdd: true,
    //   items: [
    //     { ing: iGRN.buckwheat, amount: portions * 100 },
    //     {
    //       ing: iJAR.pickled_cucumber_vinegar,
    //       amount: portions * 2,
    //       unit: "szt",
    //     },
    //     { ing: iSPC.salt },
    //   ],
    // },
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
    {
      title: "Przykładowe podanie",
      steps: [
        "Ugotuj kaszę gryczaną w osolonej wodzie do miękkości.",
        "Podawaj gulasz z porcją kaszy gryczanej.",
        "Dodaj ogórka konserwowego pokrojonego w plasterki lub ćwiartki.",
      ],
    },
  ],
  keyWords: ["wołowina"],
};

export default gulaszWegrerski;
