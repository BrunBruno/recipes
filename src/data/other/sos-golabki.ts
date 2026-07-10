import { iFAT } from "../../ingredients/ingFat";
import { iGRN } from "../../ingredients/ingGrain";
import { iJAR } from "../../ingredients/ingJar";
import { iLIQ } from "../../ingredients/ingLiquid";
import { iSPC } from "../../ingredients/ingSpice";
import type { Recipe } from "../../types";

const sosDoGolabkow: Recipe = {
  name: "Sos do Gołąbków",
  type: "other",
  images: [""],
  time: 15,
  portions: 2,
  taste: 5,
  difficulty: 2,
  ingredients: [
    {
      title: "",
      items: [
        { ing: iGRN.flour, amount: 2, unit: "lz" },
        { ing: iJAR.tomato_puree, amount: 250, unit: "ml" },
        { ing: iLIQ.water, amount: 0.5, unit: "szk" },
        { ing: iFAT.butter, amount: 1, unit: "lz" },
        { ing: iLIQ.maggi },
        { ing: iSPC.vegetable_seasoning },
        { ing: iSPC.salt },
      ],
    },
  ],
  steps: [
    {
      title: "",
      steps: [
        "Na patelni lub w garnku rozpuść masło i dodaj mąkę.",
        "Smaż, aż zasmażka będzie lekko brązowa.",
        "Dodaj wodę oraz przecier pomidorowy i dokładnie wymieszaj.",
        "Zagotuj całość, rozbijając ewentualne grudki mąki.",
        "Dopraw solą, Maggi oraz jarzynką do smaku.",
      ],
    },
  ],
  keyWords: ["sos"],
};

export default sosDoGolabkow;
