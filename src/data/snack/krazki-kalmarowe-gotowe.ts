import type { Recipe } from "../../types";
import { iFAT } from "../../ingredients/ingFat";
import { iSPC } from "../../ingredients/ingSpice";
import { iJAR } from "../../ingredients/ingJar";
import { iFRT } from "../../ingredients/ingFruit";
import { iFSH } from "../../ingredients/ingFish";
import { iVEG } from "../../ingredients/ingVegetable";

const portions = 3;
const krazkiKalmaroweGotowe: Recipe = {
  name: "Krążki Kalmarowe",
  type: "snack",
  images: [
    "krazki-kalmarowe-gotowe",
    "krazki-kalmarowe-gotowe-2",
    "krazki-kalmarowe-gotowe-3",
  ],
  time: 30,
  portions: portions,
  taste: 3,
  difficulty: 1,
  ingredients: [
    {
      title: "",
      items: [
        { ing: iFSH.squid_frozen_ready, amount: 1, unit: "opak", kw: true },
        { ing: iJAR.frozen_fries, amount: portions * 150 },
        { ing: iFAT.oil, amount: 2, unit: "lzi" },
        { ing: iFRT.lemon, amount: 1, unit: "plas" },
        { ing: iVEG.tomato_raspberry, amount: portions },
        { ing: iSPC.black_pepper },
        { ing: iSPC.salt },
      ],
    },
  ],
  steps: [
    {
      title: "",
      steps: [
        "Przygotuj frytki w piekarniku zgodnie z instrukcją na opakowaniu.",
        "Krążki kalmarowe przygotuj zgodnie z instrukcją na opakowaniu — w piekarniku, frytkownicy beztłuszczowej lub na patelni.",
        "Liście sałaty batawskiej opłucz, osusz i ułóż na talerzach.",
        "Pomidory malinowe pokrój w plastry, ułóż na liściach sałaty, a następnie dopraw solą i świeżo mielonym pieprzem.",
        "Na talerzu podaj krążki kalmarowe z frytkami oraz przygotowaną sałatą z pomidorem.",
        "Krążki możesz dodatkowo spryskać świeżym sokiem z cytryny.",
      ],
    },
  ],
  keyWords: ["morskie", "smażone"],
};

export default krazkiKalmaroweGotowe;
