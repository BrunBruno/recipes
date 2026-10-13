import { iMET } from "../../ingredients/ingMeat";
import { iFAT } from "../../ingredients/ingFat";
import { iSAU } from "../../ingredients/ingSauce";
import { iBAK } from "../../ingredients/ingBakery";
import type { Recipe } from "../../types";

const parowki: Recipe = {
  name: "Parówki",
  type: "breakfast",
  images: ["parowki", "parowki-2", "parowki-3"],
  time: 20,
  portions: 1,
  taste: 3,
  difficulty: 1,
  ingredients: [
    {
      title: "",
      items: [
        { ing: iMET.sausages, amount: 3, unit: "szt", kw: true },
        {
          ing: iBAK.kaiser_roll,
          amount: 2,
          unit: "szt",
          replaceable: true,
          kw: true,
        },
        { ing: iFAT.butter, amount: 5 },
        { ing: iSAU.ketchup, amount: 20 },
      ],
    },
  ],
  steps: [
    {
      title: "",
      steps: [
        "Podgrzej parówki w gorącej wodzie lub mikrofalówce.",
        "Kajzerki przekrój na pół i opcjonalnie posmaruj masłem.",
        "Ułóż parówki w pieczywie i dodaj ketchup.",
        "Podawaj od razu na ciepło.",
      ],
    },
  ],
  keyWords: ["parówka", "pieczywo", "mięso"],
};

export default parowki;
