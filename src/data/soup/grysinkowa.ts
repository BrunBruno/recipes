import { iGRN } from "../../ingredients/ingGrain";
import { iLIQ } from "../../ingredients/ingLiquid";
import { iSPC } from "../../ingredients/ingSpice";
import type { Recipe } from "../../types";

const grysikowa: Recipe = {
  name: "Grysikowa",
  type: "soup",
  images: ["grysikowa.jpg"],
  time: 10,
  portions: 2,
  taste: 3,
  difficulty: 1,
  ingredients: [
    {
      title: "",
      items: [
        { ing: iLIQ.rosol, amount: 1000, unit: "ml" },
        { ing: iGRN.semolina, amount: 1.5, unit: "lz" },
        { ing: iSPC.salt },
      ],
    },
  ],
  steps: [
    {
      title: "",
      steps: [
        "Zagotuj około 1/2 litra rosołu.",
        "Powoli wsyp czubatą łyżkę kaszy manny, cały czas mieszając.",
        "Gotuj 2-3 minuty aż kasza napęcznieje.",
        "Jeśli zupa jest zbyt gęsta, dolej trochę rosołu i wymieszaj.",
        "Dopraw do smaku solą i podawaj gorącą.",
      ],
    },
  ],
  keyWords: ["zupa"],
};

export default grysikowa;
