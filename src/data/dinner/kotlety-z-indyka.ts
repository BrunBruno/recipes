import { iFAT } from "../../ingredients/ingFat";
import { iGRN } from "../../ingredients/ingGrain";
import { iJAR } from "../../ingredients/ingJar";
import { iMET } from "../../ingredients/ingMeat";
import { iSPC } from "../../ingredients/ingSpice";
import { iVEG } from "../../ingredients/ingVegetable";
import type { Recipe } from "../../types";

const portions = 3;
const kotletyZIndyka: Recipe = {
  name: "Kotlety z Indyka",
  description:
    "Soczyste kotlety z piersi indyka, panierowane w mące, jajku i bułce tartej, smażone na złoty kolor. Podawane z ziemniakami i świeżą surówką z ogórka z koperkiem.",
  type: "dinner",
  images: ["kotlety-z-indyka.jpg", "kotlety-z-indyka-2.jpg"],
  time: 40,
  portions: portions,
  ingredients: [
    {
      title: "Kotlety",
      items: [
        { ingredient: iMET.turkey_breast, amount: 600 },
        { ingredient: iMET.egg, amount: 1, unit: "szt" },
        { ingredient: iGRN.breadcrumbs, amount: 100 },
        { ingredient: iGRN.flour, amount: 50 },
        { ingredient: iFAT.oil, amount: 6, unit: "lz" },
        { ingredient: iSPC.granulated_garlic },
        { ingredient: iSPC.sweet_paprika },
        { ingredient: iSPC.hot_paprika },
        { ingredient: iSPC.black_pepper },
        { ingredient: iSPC.salt },
      ],
    },
    {
      title: "Przykładowe dodatki",
      items: [
        { ingredient: iVEG.potato, amount: portions * 200 },
        { ingredient: iJAR.cucumber_salad, amount: portions * 150 },
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
        "Pierś indyka pokrój na kotlety o grubości około 1 - 1.5 cm.",
        "Delikatnie rozbij kotlety tłuczkiem i przypraw.",
        "Przygotuj trzy talerze: jeden z mąką, drugi z roztrzepanym jajkiem, trzeci z bułką tartą.",
        "Każdy kotlet obtocz najpierw w mące, potem w jajku, a na końcu w bułce tartej. Dla chrupkości możesz powtórzyć panierkę.",
        "Rozgrzej olej na patelni na średnim ogniu.",
        "Smaż kotlety po 4 - 5 minut z każdej strony, aż będą złociste i dobrze wysmażone w środku.",
      ],
    },
    {
      title: "Przykładowe podanie",
      steps: [
        "Obierz ziemniaki i ugotuj je w osolonej wodzie do miękkości.",
        "Podawaj kotlety z indyka na talerzu z porcją ziemniaków.",
        "Obok dodaj surówkę z ogórka jako dodatek warzywny.",
      ],
    },
  ],
  keyWords: ["indyk"],
};

export default kotletyZIndyka;
