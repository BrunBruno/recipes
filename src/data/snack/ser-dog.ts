import { iBAK } from "../../ingredients/ingBakery";
import { iDIR } from "../../ingredients/ingDairy";
import { iJAR } from "../../ingredients/ingJar";
import { iMET } from "../../ingredients/ingMeat";
import { iSAU } from "../../ingredients/ingSauce";
import type { Recipe } from "../../types";

const serDog: Recipe = {
  name: "Ser Dog",
  type: "snack",
  country: "USA",
  images: ["ser-dog"],
  time: 10,
  portions: 2,
  taste: 3,
  difficulty: 1,
  ingredients: [
    {
      title: "",
      items: [
        { ing: iMET.sausages, amount: 4, unit: "szt", kw: true },
        { ing: iBAK.hotdog_buns, amount: 4, unit: "szt", kw: true },
        { ing: iDIR.yellow_mozzarella, amount: 100, kw: true },
        { ing: iSAU.ketchup, amount: 20 },
        { ing: iSAU.mustard, amount: 20 },
        { ing: iJAR.fried_onion, amount: 20 },
      ],
    },
  ],
  steps: [
    {
      title: "",
      steps: [
        "W bułki hotdogowe wsadź parówki oraz wsyp do środka startą mozzarellę.",
        "Podgrzej wszystko w mikrofalówce, tak aby ser się rozpuścił.",
        "Polej całość ketchupem i musztardą oraz posyp cebulką prażoną.",
      ],
    },
  ],
  keyWords: ["pieczywo", "parówka", "ser"],
};

export default serDog;
