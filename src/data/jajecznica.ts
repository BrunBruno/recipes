import { iFAT } from "../ingredients/ingFat";
import { iMET } from "../ingredients/ingMeat";
import { iSPC } from "../ingredients/ingSpice";
import { iVEG } from "../ingredients/ingVegetable";
import type { Recipe } from "../types";

const jajecznica: Recipe = {
  name: "Jajecznica",
  type: "snack",
  images: ["jajecznica.jpg"],
  time: 15,
  portions: 1,
  ingredients: [
    {
      title: "Jajecznica",
      items: [
        { ingredient: iMET.egg, amount: "3-5", unit: "szt" },
        { ingredient: iFAT.butter, amount: 1, unit: "łyżka" },
        { ingredient: iSPC.salt },
      ],
    },
    {
      title: "Dodatki",
      items: [
        { ingredient: iMET.sausage, amount: 0.5, unit: "pęto" },
        { ingredient: iVEG.onion, amount: 1, unit: "szt" },
        { ingredient: iVEG.tomato, amount: 1, unit: "szt" },
        { ingredient: iVEG.chives },
      ],
      excludeFromCalc: true,
    },
  ],
  steps: [
    {
      title: "",
      steps: [
        "Pokrój wybrane składniki na przykład: kiełbasę, cebulę i pomidora.",
        "Podsmaż składniki po kolei na maśle.",
        "Wbij jajka na patelnię i dokładnie wymieszaj, aż powstanie jajecznica.",
        "Dopraw solą i posyp szczypiorkiem przed podaniem.",
      ],
    },
  ],
  keyWords: ["jajko", "smażone", "xxx"],
};

export default jajecznica;
