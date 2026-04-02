import { iGRN } from "../../ingredients/ingGrain";
import { iOTH } from "../../ingredients/ingOther";
import { iSPC } from "../../ingredients/ingSpice";
import type { Recipe } from "../../types";

const grysikowa: Recipe = {
  name: "Grysikowa",
  description:
    "Szybka i prosta zupa grysikowa na rosole, idealna na lekkie śniadanie lub obiad dla dzieci i dorosłych.",
  type: "soup",
  images: [""],
  time: 10,
  portions: 2,
  ingredients: [
    {
      title: "",
      items: [
        { ingredient: iOTH.rosol, amount: 500, unit: "ml" },
        { ingredient: iGRN.semolina, amount: 1.5, unit: "lz" },
        { ingredient: iSPC.salt },
      ],
    },
  ],
  steps: [
    {
      title: "",
      steps: [
        "Zagotuj około 1/2 litra rosołu.",
        "Powoli wsyp czubatą łyżkę kaszy manny, cały czas mieszając.",
        "Gotuj 2 - 3 minuty aż kasza napęcznieje.",
        "Jeśli zupa jest zbyt gęsta, dolej trochę rosołu i wymieszaj.",
        "Dopraw do smaku solą i podawaj gorącą.",
      ],
    },
  ],
  keyWords: ["zupa"],
};

export default grysikowa;
