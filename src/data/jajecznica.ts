import { iFAT } from "../ingredients/ingFat";
import { iMET } from "../ingredients/ingMeat";
import { iSPC } from "../ingredients/ingSpice";
import { iVEG } from "../ingredients/ingVegetable";
import type { Recipe } from "../types";

const jajecznica: Recipe = {
  name: "Jajecznica",
  type: "snack",
  image: "jajecznica.jpg",
  kcal: 400,
  time: 15,
  portions: 1,
  ingredients: [
    { ingredient: iMET.egg, amount: "3-5" },
    { ingredient: iMET.sausage, amount: 0.5, unit: "pęto" },
    { ingredient: iVEG.onion, amount: 1, unit: "szt" },
    { ingredient: iVEG.tomato, amount: 1, unit: "szt" },
    { ingredient: iVEG.chives },
    { ingredient: iFAT.butter, amount: 1, unit: "łyżka" },
    { ingredient: iSPC.salt },
  ],
  steps: [
    "Pokrój wybrane składniki: kiełbasę, cebulę i pomidora.",
    "Podsmaż składniki na maśle.",
    "Wbij jajka na patelnię i dokładnie wymieszaj.",
    "Dopraw solą i posyp szczypiorkiem przed podaniem.",
  ],
};

export default jajecznica;
