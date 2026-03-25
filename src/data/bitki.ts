import { iDIR } from "../ingredients/ingDairy";
import { iFAT } from "../ingredients/ingFat";
import { iGRN } from "../ingredients/ingGrain";
import { iMET } from "../ingredients/ingMeat";
import { iOTH } from "../ingredients/ingOther";
import { iSPC } from "../ingredients/ingSpice";
import { iVEG } from "../ingredients/ingVegetable";
import type { Recipe } from "../types";

const bitki: Recipe = {
  name: "Bitki",
  type: "dinner",
  images: ["bitki.jpg", "bitki-2.jpg"],
  time: 65,
  portions: 4,
  ingredients: [
    {
      title: "",
      items: [
        { ingredient: iMET.pork_tenderloin, amount: 600 },
        { ingredient: iGRN.flour, amount: 3, unit: "łyżka" },
        { ingredient: iFAT.oil, amount: 5, unit: "łyżka" },
        { ingredient: iDIR.cream_30, amount: 2, unit: "łyżka" },
        { ingredient: iOTH.water, amount: 250, unit: "ml" },
        { ingredient: iVEG.onion, amount: 1, unit: "szt" },
        { ingredient: iVEG.chives },
        { ingredient: iSPC.marjoram },
        { ingredient: iSPC.bay_leaf },
        { ingredient: iSPC.wild_garlic },
        { ingredient: iSPC.salt },
        { ingredient: iSPC.black_pepper },
        { ingredient: iSPC.sweet_paprika },
        { ingredient: iSPC.allspice },
      ],
    },
    {
      title: "Dodatki",
      items: [
        { ingredient: iVEG.potato, amount: "4 × 200" },
        { ingredient: iVEG.beets_shredded, amount: "4 × 150" },
        { ingredient: iSPC.salt },
      ],
    },
  ],
  steps: [
    {
      title: "",
      steps: [
        "Polędwiczkę wieprzową opłucz, usuń błonki i dokładnie osusz ręcznikiem papierowym.",
        "Pokrój mięso na plastry o grubości około 1 cm i delikatnie rozbij tłuczkiem.",
        "Posól bitki, obtocz w mące i krótko obsmaż na gorącym tłuszczu, tylko do lekkiego zarumienienia.",
        "Przełóż mięso do rondelka.",
        "Cebulę pokrój w piórka i dodaj do mięsa.",
        "Zalej wodą tak, aby mięso było częściowo przykryte.",
        "Dodaj przyprawy: pieprz, paprykę, czosnek niedźwiedzi lub granulowany, majeranek, ziele angielskie i liść laurowy.",
        "Gotuj na małym ogniu do miękkości mięsa.",
        "Na końcu dopraw sos śmietaną 30% i posyp posiekanym szczypiorkiem.",
      ],
    },
    {
      title: "Przykładowe podanie",
      steps: [
        "Ugotuj ziemniaki w osolonej wodzie do miękkości.",
        "Podawaj bitki z porcją ugotowanych ziemniaków.",
        "Ziemniaki polej sosem z rondelka.",
        "Obok dodaj buraczki w wiórkach jako dodatek.",
      ],
    },
  ],
  keyWords: ["wieprzowina", "sos", "xxx"],
};

export default bitki;
