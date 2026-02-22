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
  images: [""],
  time: 60,
  portions: 4,
  ingredients: [
    {
      title: "Bitki i sos",
      items: [
        { ingredient: iMET.pork_tenderloin, amount: 600, unit: "g" },
        { ingredient: iGRN.flour, amount: 3, unit: "łyżka" },
        { ingredient: iFAT.oil, amount: 2, unit: "łyżka" },
        { ingredient: iVEG.onion, amount: 1, unit: "szt" },
        { ingredient: iDIR.cream_30 },
        { ingredient: iOTH.water },
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
        { ingredient: iVEG.beets_shredded, amount: "4 × 150", unit: "g" },
        { ingredient: iSPC.salt },
      ],
      excludeFromCalc: true,
    },
  ],
  steps: [
    {
      title: "Przygotowanie bitek i sosu",
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
        "Ugotowane bitki podawaj na talerzu z porcją gotowanych ziemniaków.",
        "Ziemniaki polej sosem z rondelka.",
        "Obok dodaj gotowe buraczki w wiórkach jako dodatek.",
        "Całość możesz udekorować świeżym szczypiorkiem.",
      ],
    },
  ],
  keyWords: ["mięso", "wieprzowina", "gotowane"],
};

export default bitki;
