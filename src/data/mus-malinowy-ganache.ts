import { iDIR } from "../ingredients/ingDairy";
import { iFRT } from "../ingredients/ingFruit";
import { iOTH } from "../ingredients/ingOther";
import type { Recipe } from "../types";

const musMalinowyGanache: Recipe = {
  name: "Mus Malinowy Ganache",
  type: "other",
  images: [""],
  time: 0,
  portions: 0,
  ingredients: [
    { ingredient: iDIR.cream_36, amount: 170, unit: "g" },
    { ingredient: iFRT.raspberries, amount: 200, unit: "g" },
    { ingredient: iOTH.white_chocolate, amount: 100, unit: "g" },
    { ingredient: iFRT.lemon_juice, amount: 5, unit: "ml" },
    { ingredient: iOTH.gelatin, amount: 6, unit: "g" },
    { ingredient: iOTH.water, amount: 30, unit: "g" },
  ],
  steps: [],
  keyWords: ["owoce", "czekolada"],
};

export default musMalinowyGanache;
