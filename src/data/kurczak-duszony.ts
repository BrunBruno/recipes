import { iDIR } from "../ingredients/ingDairy";
import { iFAT } from "../ingredients/ingFat";
import { iGRN } from "../ingredients/ingGrain";
import { iMET } from "../ingredients/ingMeat";
import { iOTH } from "../ingredients/ingOther";
import { iSPC } from "../ingredients/ingSpice";
import { iVEG } from "../ingredients/ingVegetable";
import type { Recipe } from "../types";

const gotowanyKurczak: Recipe = {
  name: "Kurczak Duszony",
  type: "dinner",
  images: [""],
  time: 45,
  portions: 3,
  ingredients: [
    {
      title: "",
      items: [
        { ingredient: iMET.chicken_thigh, amount: 600 },
        { ingredient: iFAT.oil },
        { ingredient: iDIR.cream_18, amount: 60 },
        { ingredient: iGRN.flour, amount: 5 },
        { ingredient: iSPC.wild_garlic },
        { ingredient: iSPC.salt },
        { ingredient: iSPC.black_pepper },
        { ingredient: iSPC.curry },
        { ingredient: iVEG.chives },
        { ingredient: iSPC.maggi },
        { ingredient: iOTH.water },
      ],
    },
    {
      title: "Dodatki",
      items: [
        { ingredient: iVEG.potato, amount: "3 × 150" },
        { ingredient: iVEG.pickled_cucumber, amount: 6, unit: "szt" },
        { ingredient: iSPC.salt },
        { ingredient: iSPC.black_pepper },
      ],
    },
  ],
  steps: [
    {
      title: "",
      steps: [
        "Udka dokładnie opłucz i osusz papierowym ręcznikiem.",
        "Natrzyj mięso solą i papryką.",
        "Rozgrzej olej na patelni i obsmaż kurczaka z każdej strony, aż się zarumieni.",
        "Przełóż mięso razem z tłuszczem do rondla.",
        "Zalej wodą tak, aby mięso było tylko częściowo przykryte.",
        "Dodaj czosnek niedźwiedzi, curry, sól i pieprz.",
        "Gotuj na małym ogniu do momentu, aż kurczak będzie miękki.",
        "W szklance rozrób mąkę z niewielką ilością wody.",
        "Wlej do rondla, ciągle mieszając, aby zagęścić sos.",
        "Dodaj śmietanę według smaku i posiekany szczypiorek.",
        "Gotuj jeszcze chwilę, dopraw ewentualnie Maggi i podawaj.",
      ],
    },
    {
      title: "Przykładowe podanie",
      steps: [
        "Ugotowanego lub duszonego kurczaka ułóż na talerzu.",
        "Podaj z porcją ugotowanych ziemniaków.",
        "Mięso i ziemniaki polej przygotowanym sosem z rondla.",
        "Obok dodaj ogórki kiszone jako dodatek.",
      ],
    },
  ],
  keyWords: ["kurczak", "sos"],
};

export default gotowanyKurczak;
