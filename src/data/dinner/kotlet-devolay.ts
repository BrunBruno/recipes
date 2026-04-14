import { iFAT } from "../../ingredients/ingFat";
import { iGRN } from "../../ingredients/ingGrain";
import { iJAR } from "../../ingredients/ingJAR";
import { iMET } from "../../ingredients/ingMeat";
import { iSPC } from "../../ingredients/ingSpice";
import { iVEG } from "../../ingredients/ingVegetable";
import type { Recipe } from "../../types";

const portions = 4;
const kotletDevolay: Recipe = {
  name: "Kotlet Devolay",
  description:
    "Klasyczny kotlet Devolay z kurczaka z masłem czosnkowo-ziołowym w środku, panierowany i delikatnie smażony, podawany z puree ziemniaczanym i warzywami na parze.",
  type: "dinner",
  images: [""],
  time: 60,
  portions: portions,
  ingredients: [
    {
      title: "Mięso",
      items: [
        { ingredient: iMET.ground_chicken, amount: 600 },
        { ingredient: iMET.egg, amount: 3, unit: "szt" },
        { ingredient: iGRN.flour },
        { ingredient: iGRN.breadcrumbs },
        { ingredient: iFAT.oil },
      ],
    },
    {
      title: "Masło czosnkowo-ziołowe",
      items: [
        { ingredient: iFAT.butter, amount: 100 },
        { ingredient: iVEG.garlic, amount: 4, unit: "zbk" },
        { ingredient: iVEG.parsley },
        { ingredient: iSPC.dill },
        { ingredient: iSPC.salt },
        { ingredient: iSPC.black_pepper },
      ],
    },
    {
      title: "Przykładowe dodatki",
      items: [
        { ingredient: iVEG.potato, amount: portions * 200 },
        { ingredient: iJAR.frozen_vegetable_mix, amount: 300 },
      ],
    },
  ],
  steps: [
    {
      title: "Masło czosnkowo-ziołowe",
      steps: [
        "Masło przełóż do miski i pozostaw, aby zmiękło.",
        "Dodaj drobno posiekany czosnek oraz koper lub pietruszkę.",
        "Dopraw solą i pieprzem, dokładnie wymieszaj.",
        "Przełóż masło do woreczka lub folii spożywczej.",
        "Uformuj 4 - 5 małych wałków i włóż do zamrażalnika do całkowitego zamrożenia.",
      ],
    },
    {
      title: "Kotlety devolay",
      steps: [
        "Mięso mielone dopraw solą i pieprzem, dokładnie wymieszaj.",
        "Podziel mięso na porcje i rozpłaszcz każdą z nich w dłoni.",
        "Na środek nałóż zamrożony wałek masła i szczelnie zawiń mięso, formując kotlet.",
        "Uformowane kotlety włóż do zamrażalnika na 30 minut.",
        "Przygotuj panierkę: osobno mąkę, roztrzepane jajka i bułkę tartą.",
        "Każdy kotlet obtocz w mące, jajku i bułce tartej, a następnie ponownie w jajku i bułce tartej.",
        "Rozgrzej olej na bardzo małym ogniu.",
        "Smaż kotlety powoli, aż będą złociste z każdej strony i dobrze wysmażone w środku.",
      ],
    },
    {
      title: "Przykładowe podanie",
      steps: [
        "Przygotuj puree ziemniaczane.",
        "Ugotuj warzywa na parze do miękkości.",
        "Podawaj kotlet Devolay na talerzu z puree i warzywami.",
      ],
    },
  ],
  keyWords: ["kurczak"],
};

export default kotletDevolay;
