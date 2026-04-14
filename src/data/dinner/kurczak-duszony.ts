import { iDIR } from "../../ingredients/ingDairy";
import { iFAT } from "../../ingredients/ingFat";
import { iGRN } from "../../ingredients/ingGrain";
import { iJAR } from "../../ingredients/ingJar";
import { iMET } from "../../ingredients/ingMeat";
import { iOTH } from "../../ingredients/ingOther";
import { iSPC } from "../../ingredients/ingSpice";
import { iVEG } from "../../ingredients/ingVegetable";
import type { Recipe } from "../../types";

const portions = 3;
const gotowanyKurczak: Recipe = {
  name: "Kurczak Duszony",
  description:
    "Delikatny kurczak duszony w aromatycznym sosie śmietanowo-przyprawowym, podawany z ziemniakami i buraczkami. Idealny na rodzinny obiad.",
  type: "dinner",
  images: ["kurczak-duszony.jpg"],
  time: 45,
  portions: portions,
  ingredients: [
    {
      title: "Mięso i sos",
      items: [
        { ingredient: iMET.chicken_thigh, amount: 600 },
        { ingredient: iFAT.oil, amount: 3, unit: "lz" },
        { ingredient: iDIR.cream_18, amount: 2, unit: "lz" },
        { ingredient: iGRN.flour, amount: 1, unit: "lz" },
        { ingredient: iOTH.water, amount: 250, unit: "ml" },
        { ingredient: iJAR.maggi },
        { ingredient: iVEG.chives },
        { ingredient: iSPC.wild_garlic },
        { ingredient: iSPC.curry },
        { ingredient: iSPC.black_pepper },
        { ingredient: iSPC.salt },
      ],
    },
    {
      title: "Przykładowe dodatki",
      items: [
        { ingredient: iVEG.potato, amount: portions * 200 },
        { ingredient: iJAR.beets_whole_vinegar, amount: portions * 100 },
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
        "Podawaj kurczaka z porcją ziemniaków.",
        "Mięso i ziemniaki polej przygotowanym sosem.",
        "Obok dodaj buraki z octu jako dodatek.",
      ],
    },
  ],
  keyWords: ["kurczak", "sos"],
};

export default gotowanyKurczak;
