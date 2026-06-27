import { dinnerSides } from "../../dinnerSides";
import { iFAT } from "../../ingredients/ingFat";
import { iGRN } from "../../ingredients/ingGrain";
import { iJAR } from "../../ingredients/ingJar";
import { iMET } from "../../ingredients/ingMeat";
import { iSPC } from "../../ingredients/ingSpice";
import type { Recipe } from "../../types";

const portions = 2;
const smazonaRyba: Recipe = {
  name: "Smażona Ryba",
  description: "",
  type: "dinner",
  images: [""],
  time: 0,
  portions: portions,
  executionDifficulty: null,
  ingredients: [
    {
      title: "",
      items: [
        {
          type: "choice",
          options: [
            { ing: iMET.pollock, amount: 1, unit: "szt" },
            { ing: iMET.cod, amount: 1, unit: "szt" },
            { ing: iMET.hake, amount: 1, unit: "szt" },
            { ing: iMET.halibut, amount: 1, unit: "szt" },
          ],
          selected: 0,
        },
        { ing: iFAT.oil, amount: 4, unit: "lz" },
        { ing: iGRN.flour, amount: 80 },
        { ing: iMET.egg, amount: 1, unit: "szt" },
        { ing: iGRN.breadcrumbs, amount: 120 },
        { ing: iJAR.lemon_juice },
        { ing: iSPC.salt },
      ],
    },
  ],
  extrasMain: {
    options: [dinnerSides("boiled-potatoes", portions)],
    selected: 0,
  },
  extrasVeg: {
    options: [dinnerSides("sauerkraut-salad", portions)],
    selected: 0,
  },
  steps: [
    {
      title: "",
      steps: [
        "Jeśli używasz mrożonej ryby, najpierw ją rozmroź i osusz.",
        "Rybę posól i opcjonalnie skrop sokiem z cytryny lub limonki.",
        "Obtocz kolejno w mące, jajku i bułce tartej.",
        "Smaż na rozgrzanym oleju na złoty kolor z obu stron.",
        "Kostki rybne można smażyć bez rozmrażania.",
      ],
    },
  ],
};

export default smazonaRyba;
