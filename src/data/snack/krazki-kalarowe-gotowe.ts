import type { Recipe } from "../../types";
import { iFAT } from "../../ingredients/ingFat";
import { iSPC } from "../../ingredients/ingSpice";
import { iJAR } from "../../ingredients/ingJar";
import { iMET } from "../../ingredients/ingMeat";
import { iFRT } from "../../ingredients/ingFruit";

const portions = 3;
const krazkiKalmaroweGotowe: Recipe = {
  name: "Krążki Kalmarowe",
  description:
    "Gotowe krążki kalmarowe w panierce przygotowane w piekarniku lub na patelni, podane z frytkami i warzywami.",
  type: "snack",
  images: ["krazki-kalmarowe-gotowe.jpg"],
  time: 30,
  portions: portions,
  executionDifficulty: 1,
  ingredients: [
    {
      title: "",
      items: [
        { ing: iMET.squid_frozen_ready, amount: 1, unit: "opak" },
        { ing: iJAR.frozen_fries, amount: portions * 150 },
        { ing: iFAT.oil, amount: 2, unit: "lzi" },
        { ing: iFRT.lemon, amount: 1, unit: "plas" },
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
        "Na talerzu podaj krążki kalmarowe z frytkami.",
        "Krążki możesz dodatkowo spryskać świeżym sokiem z cytryny.",
        "Podawaj z ulubionym sosem, np. czosnkowym lub tatarskim.",
      ],
    },
  ],
  keyWords: [],
};

export default krazkiKalmaroweGotowe;
