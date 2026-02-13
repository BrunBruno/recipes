import { iFAT } from "../ingredients/ingFat";
import { iGRN } from "../ingredients/ingGrain";
import { iMET } from "../ingredients/ingMeat";
import { iSPC } from "../ingredients/ingSpice";
import type { Recipe } from "../types";

const kotletyZIndyka: Recipe = {
  name: "Kotlety z Indyka",
  type: "dinner",
  images: [""],
  time: 40,
  portions: 4,
  ingredients: [
    {
      title: "",
      items: [
        { ingredient: iMET.turkey_breast, amount: 600 },
        { ingredient: iMET.egg, amount: 2, unit: "szt" },
        { ingredient: iGRN.breadcrumbs, amount: 100 },
        { ingredient: iGRN.flour, amount: 50 },
        { ingredient: iFAT.oil, amount: 4, unit: "łyżka" },
        { ingredient: iSPC.salt },
        { ingredient: iSPC.black_pepper },
        { ingredient: iSPC.granulated_garlic, amount: 0.5, unit: "łyżeczka" },
      ],
    },
  ],
  steps: [
    {
      title: "",
      steps: [
        "Pierś indyka pokrój na kotlety o grubości około 1 - 1,5 cm.",
        "Delikatnie rozbij kotlety tłuczkiem, dopraw solą, pieprzem i czosnkiem w proszku.",
        "Przygotuj trzy talerze: jeden z mąką, drugi z roztrzepanym jajkiem, trzeci z bułką tartą.",
        "Każdy kotlet obtocz najpierw w mące, potem w jajku, a na końcu w bułce tartej. Dla chrupkości możesz powtórzyć panierkę.",
        "Rozgrzej olej na patelni na średnim ogniu.",
        "Smaż kotlety po 4 - 5 minut z każdej strony, aż będą złociste i dobrze wysmażone w środku.",
        "Podawaj gorące z ulubionymi dodatkami, np. ziemniakami, surówką lub warzywami.",
      ],
    },
  ],
  keyWords: ["indyk", "panierowane", "smażone", "mięso"],
};

export default kotletyZIndyka;
