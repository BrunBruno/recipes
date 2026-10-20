import { iGRN } from "../../ingredients/ingGrain";
import { iHRB } from "../../ingredients/ingHerb";
import { iLIQ } from "../../ingredients/ingLiquid";
import { iSPC } from "../../ingredients/ingSpice";
import type { Recipe } from "../../types";

const portions = 2;
const grysikowa: Recipe = {
  name: "Grysikowa",
  type: "soup",
  country: "POL",
  images: ["grysikowa", "grysikowa-2"],
  time: 10,
  portions: portions,
  taste: 3,
  difficulty: 1,
  ingredients: [
    {
      title: "",
      items: [
        { ing: iLIQ.rosol, amount: 0.6, unit: "l", kw: true },
        { ing: iGRN.semolina, amount: 3, unit: "lz", kw: true },
        { ing: iLIQ.maggi },
        { ing: iHRB.parsley },
        { ing: iSPC.salt },
      ],
    },
  ],
  steps: [
    {
      title: "",
      steps: [
        "Zagotuj około 1/2 litra rosołu.",
        "Powoli wsyp od jednej do trzech czubatych łyżek kaszy manny, cały czas mieszając.",
        "Gotuj 2-3 minuty aż kasza napęcznieje.",
        "Jeśli zupa jest zbyt gęsta, dolej trochę rosołu i wymieszaj.",
        "Dopraw do smaku solą oraz udekoruj pietruszką.",
      ],
    },
  ],
  keyWords: ["zupa", "kasza"],
};

export default grysikowa;
