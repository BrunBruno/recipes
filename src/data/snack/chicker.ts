import { iFAT } from "../../ingredients/ingFat";
import { iGRN } from "../../ingredients/ingGrain";
import { iLIQ } from "../../ingredients/ingLiquid";
import { iMET } from "../../ingredients/ingMeat";
import { iSAU } from "../../ingredients/ingSauce";
import { iVEG } from "../../ingredients/ingVegetable";
import type { Recipe } from "../../types";

const chicker: Recipe = {
  name: "Chickery",
  type: "snack",
  images: ["chickery.jpg", "chickery-2.jpg"],
  time: 25,
  portions: 2,
  taste: 4,
  difficulty: 1,
  ingredients: [
    {
      title: "Kanapki",
      items: [
        { ing: iMET.spicy_tenderloins, amount: 400 },
        { ing: iGRN.chicken_buns, amount: 4, unit: "szt" },
        { ing: iVEG.lettuce, amount: 4, unit: "szt" },
        { ing: iFAT.oil, amount: 1, unit: "lz" },
      ],
    },
    {
      title: "Sosy",
      items: [
        { ing: iSAU.ketchup, amount: 1.5, unit: "lzi" },
        {
          type: "choice",
          options: [
            { ing: iSAU.sriracha, amount: 2, unit: "lzi" },
            { ing: iSAU.spicy_ketchup, amount: 2, unit: "lzi" },
          ],
          selected: 0,
        },
        { ing: iSAU.mustard_dessert, amount: 2, unit: "lzi" },
        { ing: iSAU.mayonnaise, amount: 1, unit: "lzi" },
        { ing: iLIQ.honey, amount: 0.5, unit: "lzi" },
      ],
    },
  ],
  steps: [
    {
      title: "Przygotowanie sosów",
      steps: [
        "Wymieszaj ketchup z sosem sriracha, aby uzyskać ostry sos.",
        "Wymieszaj musztardę, majonez i miód, aby uzyskać sos miodowo-musztardowy.",
        "Odstaw sosy do lodówki do przegryzienia.",
      ],
    },
    {
      title: "Przygotowanie chickerów",
      steps: [
        "Podsmaż gotowe polędwiczki.",
        "Bułki przekrój i podpiecz w tosterze.",
        "Umyj i porwij sałatę.",
        "Złóż chickery, przygotowując po dwie sztuki z różnymi sosami.",
      ],
    },
  ],
  keyWords: ["mięso", "pieczywo", "kurczak"],
};

export default chicker;
