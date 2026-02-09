import { iDIR } from "../ingredients/ingDairy";
import { iMET } from "../ingredients/ingMeat";
import { iOTH } from "../ingredients/ingOther";
import type { Recipe } from "../types";

const tiramisu: Recipe = {
  name: "Tiramisu",
  type: "dessert",
  image: "",
  kcal: 480,
  time: 30,
  portions: 8,
  ingredients: [
    { ingredient: iMET.egg, amount: 3 },
    { ingredient: iDIR.mascarpone, amount: 500 },
    { ingredient: iOTH.ladyfingers, amount: 2, unit: "opak" },
    { ingredient: iOTH.sugar, amount: 150 },
    { ingredient: iOTH.cocoa, amount: 2, unit: "łyżka" },
    { ingredient: iOTH.coffee, amount: 1, unit: "łyżka" },
  ],

  steps: [
    "Żółtka ubij z cukrem na puszystą masę.",
    "Dodaj serek mascarpone i dokładnie wymieszaj.",
    "Ubij białka i delikatnie wmieszaj do masy serowej.",
    "Zaparz dwa kubki kawy i krótko macz w niej biszkopty.",
    "Układaj warstwami biszkopty i krem w naczyniu (2 warstwy).",
    "Schłódź w lodówce przez kilka godzin.",
    "Przed podaniem posyp kakao.",
  ],
};

export default tiramisu;
