import { iJAR } from "../../ingredients/ingJar";
import { iLIQ } from "../../ingredients/ingLiquid";
import { iOTH } from "../../ingredients/ingOther";
import type { Recipe } from "../../types";

const portions = 2;
const krokietyZBarszczem: Recipe = {
  name: "Krokiety z Barszczem",
  type: "soup",
  images: ["krokiety-z-barszczem.jpg"],
  time: 10,
  portions: portions,
  taste: 3,
  difficulty: 1,
  ingredients: [
    {
      title: "",
      items: [
        { ing: iJAR.meat_croquettes, amount: portions * 2, unit: "szt" },
        { ing: iOTH.powdered_borscht, amount: portions * 2, unit: "lzi" },
        { ing: iLIQ.water, amount: 350, unit: "ml" },
      ],
    },
  ],
  steps: [
    {
      title: "",
      steps: [
        "Krokiety podgrzej w mikrofalówce przez około 2-3 minuty lub w piekarniku nagrzanym do 180°C przez około 10-15 minut.",
        "Barszcz w proszku wsyp do garnka lub dużego naczynia.",
        "Zalej proszek gorącą wodą i dokładnie wymieszaj.",
        "Podgrzej barszcz, ale nie doprowadzaj go do mocnego wrzenia.",
        "Gotowe krokiety podawaj razem z gorącym barszczem.",
      ],
    },
  ],
};
export default krokietyZBarszczem;
