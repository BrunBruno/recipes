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
  portions: 2,
  ingredients: [
    {
      title: "",
      items: [
        { ingredient: iMET.chicken_thigh, amount: 600 },
        { ingredient: iFAT.oil },
        { ingredient: iDIR.cream_18, amount: 60, unit: "g" },
        { ingredient: iGRN.flour, amount: 5, unit: "g" },
        { ingredient: iSPC.wild_garlic },
        { ingredient: iSPC.salt },
        { ingredient: iSPC.black_pepper },
        { ingredient: iSPC.curry },
        { ingredient: iVEG.chives },
        { ingredient: iSPC.maggi },
        { ingredient: iOTH.water },
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
  ],
  keyWords: ["mięso", "kurczak", "duszone", "sos"],
};

export default gotowanyKurczak;
