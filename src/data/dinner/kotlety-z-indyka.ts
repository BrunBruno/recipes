import { dinnerSides } from "../../dinnerSides";
import { iFAT } from "../../ingredients/ingFat";
import { iGRN } from "../../ingredients/ingGrain";
import { iMET } from "../../ingredients/ingMeat";
import { iSPC } from "../../ingredients/ingSpice";
import type { Recipe } from "../../types";
import { fryingFat } from "../../utils";

const portions = 3;
const kotletyZIndyka: Recipe = {
  name: "Kotlety z Indyka",
  type: "dinner",
  images: ["kotlety-z-indyka.jpg", "kotlety-z-indyka-2.jpg"],
  time: 40,
  portions: portions,
  taste: 4,
  difficulty: 2,
  ingredients: [
    {
      title: "",
      items: [
        { ing: iMET.turkey_breast, amount: 600 },
        { ing: iMET.egg, amount: 1, unit: "szt" },
        { ing: iGRN.breadcrumbs, amount: 100 },
        { ing: iGRN.flour, amount: 50 },
        ...fryingFat(iFAT.oil, 6, "lz", 0.5),
        { ing: iSPC.granulated_garlic },
        { ing: iSPC.sweet_paprika },
        { ing: iSPC.hot_paprika },
        { ing: iSPC.black_pepper },
        { ing: iSPC.salt },
      ],
    },
  ],
  extrasMain: {
    options: [
      dinnerSides("boiled-potatoes", portions),
      dinnerSides("oven-fries", portions),
    ],
    selected: 0,
  },
  extrasVeg: {
    options: [dinnerSides("cucumber-salad-ready", portions)],
    selected: 0,
  },
  steps: [
    {
      title: "",
      steps: [
        "Pierś indyka pokrój na kotlety o grubości około 1-1.5 cm.",
        "Delikatnie rozbij kotlety tłuczkiem i przypraw.",
        "Przygotuj trzy talerze: jeden z mąką, drugi z roztrzepanym jajkiem, trzeci z bułką tartą.",
        "Każdy kotlet obtocz najpierw w mące, potem w jajku, a na końcu w bułce tartej. Dla chrupkości możesz powtórzyć panierkę.",
        "Rozgrzej olej na patelni na średnim ogniu.",
        "Smaż kotlety po 4-5 minut z każdej strony, aż będą złociste i dobrze wysmażone w środku.",
      ],
    },
  ],
  keyWords: ["mięso", "indyk"],
};

export default kotletyZIndyka;
