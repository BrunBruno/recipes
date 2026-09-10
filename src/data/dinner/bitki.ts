import { dinnerSides } from "../../dinnerSides";
import { iDIR } from "../../ingredients/ingDairy";
import { iFAT } from "../../ingredients/ingFat";
import { iGRN } from "../../ingredients/ingGrain";
import { iHRB } from "../../ingredients/ingHerb";
import { iLIQ } from "../../ingredients/ingLiquid";
import { iMET } from "../../ingredients/ingMeat";
import { iSPC } from "../../ingredients/ingSpice";
import { iVEG } from "../../ingredients/ingVegetable";
import type { Recipe } from "../../types";
import { fryingFat } from "../../utils";

const portions = 4;
const bitki: Recipe = {
  name: "Bitki",
  type: "dinner",
  images: ["bitki.jpg", "bitki-2.jpg"],
  time: 65,
  portions: portions,
  taste: 4,
  difficulty: 2,
  ingredients: [
    {
      title: "",
      items: [
        { ing: iMET.pork_tenderloin, amount: 600 },
        { ing: iGRN.flour, amount: 3, unit: "lz" },
        ...fryingFat(iFAT.oil, 5, "lz", 0.3),
        { ing: iDIR.cream_30, amount: 2, unit: "lz" },
        { ing: iLIQ.water, amount: 250, unit: "ml" },
        { ing: iVEG.onion, amount: 1, unit: "szt" },
        { ing: iHRB.chives },
        { ing: iHRB.marjoram },
        { ing: iHRB.bay_leaf },
        { ing: iHRB.wild_garlic },
        { ing: iSPC.sweet_paprika },
        { ing: iSPC.allspice },
        { ing: iSPC.black_pepper },
        { ing: iSPC.salt },
      ],
    },
  ],
  extrasMain: {
    options: [dinnerSides("boiled-potatoes-dry", portions)],
    selected: 0,
  },
  extrasVeg: {
    options: [
      dinnerSides("beets-fried-ready", portions),
      dinnerSides("beets-whole-vinegar", portions),
    ],
    selected: 0,
  },
  steps: [
    {
      title: "",
      steps: [
        "Polędwiczkę wieprzową opłucz, usuń błonki i dokładnie osusz ręcznikiem papierowym.",
        "Pokrój mięso na plastry o grubości około 1 cm i delikatnie rozbij tłuczkiem.",
        "Posól bitki, obtocz w mące i krótko obsmaż na gorącym tłuszczu, tylko do lekkiego zarumienienia.",
        "Przełóż mięso do rondelka, najlepiej szerokiego.",
        "Cebulę pokrój w piórka i dodaj do mięsa.",
        "Zalej wodą tak, aby mięso było częściowo przykryte.",
        "Dodaj przyprawy: pieprz, paprykę, czosnek niedźwiedzi lub granulowany, majeranek, ziele angielskie i liść laurowy.",
        "Gotuj na małym ogniu do miękkości mięsa.",
        "Na końcu dopraw sos śmietaną 30% i posyp posiekanym szczypiorkiem.",
        "Dokładnie wymieszaj.",
      ],
    },
  ],
  keyWords: ["mięso", "wieprzowina", "sos"],
};

export default bitki;
