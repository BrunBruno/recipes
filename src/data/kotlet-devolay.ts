import { iFAT } from "../ingredients/ingFat";
import { iGRN } from "../ingredients/ingGrain";
import { iMET } from "../ingredients/ingMeat";
import { iSPC } from "../ingredients/ingSpice";
import { iVEG } from "../ingredients/ingVegetable";
import type { Recipe } from "../types";

const kotletDevolay: Recipe = {
  name: "Kotlet Devolay",
  type: "dinner",
  images: [""],
  time: 60,
  portions: 4,
  ingredients: [
    { ingredient: iMET.chicken_breast, amount: 900 },
    { ingredient: iMET.egg, amount: 3, unit: "szt" },
    { ingredient: iFAT.butter, amount: 100 },
    { ingredient: iFAT.oil },
    { ingredient: iGRN.flour },
    { ingredient: iGRN.breadcrumbs },
    { ingredient: iVEG.garlic, amount: 4, unit: "ząbek" },
    { ingredient: iVEG.parsley },
    { ingredient: iSPC.dill },
    { ingredient: iSPC.salt },
    { ingredient: iSPC.black_pepper },
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
  ],
  keyWords: ["mięso", "kurczak", "panierowane", "smażone"],
};

export default kotletDevolay;
