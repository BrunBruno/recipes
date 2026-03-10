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
  images: ["kurczak-duszony.jpg"],
  time: 45,
  portions: 3,
  ingredients: [
    {
      title: "",
      items: [
        { ingredient: iMET.chicken_thigh, amount: 600 },
        { ingredient: iFAT.oil, amount: 3, unit: "łyżka" },
        { ingredient: iDIR.cream_18, amount: 2, unit: "łyżka" },
        { ingredient: iGRN.flour, amount: 1, unit: "łyżka" },
        { ingredient: iOTH.water },
        { ingredient: iVEG.chives },
        { ingredient: iSPC.wild_garlic },
        { ingredient: iSPC.curry },
        { ingredient: iSPC.maggi },
        { ingredient: iSPC.black_pepper },
        { ingredient: iSPC.salt },
      ],
    },
    {
      title: "Dodatki",
      items: [
        { ingredient: iVEG.potato, amount: "3 × 200" },
        { ingredient: iVEG.beets_whole_vinegar, amount: "4 × 100" },
        { ingredient: iSPC.salt },
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
        "Obierz ziemniaki i ugotuj je w osolonej wodzie do miękkości.",
        "Podawaj kurczaka na talerzu z porcją ziemniaków.",
        "Mięso i ziemniaki polej przygotowanym sosem.",
        "Obok dodaj buraki z octu jako dodatek.",
      ],
    },
  ],
  keyWords: ["kurczak", "sos"],
};

export default gotowanyKurczak;
