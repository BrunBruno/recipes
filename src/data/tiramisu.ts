import { iDIR } from "../ingredients/ingDairy";
import { iMET } from "../ingredients/ingMeat";
import { iOTH } from "../ingredients/ingOther";
import type { Recipe } from "../types";

const tiramisu: Recipe = {
  name: "Tiramisu",
  description:
    "Klasyczne włoskie tiramisu z warstwami biszkoptów nasączonych kawą i kremem mascarpone, posypane aromatycznym kakao - lekki i elegancki deser.",
  type: "dessert",
  images: [""],
  time: 20,
  portions: 8,
  ingredients: [
    {
      title: "",
      items: [
        { ingredient: iMET.egg, amount: 3, unit: "szt" },
        { ingredient: iDIR.mascarpone, amount: 500 },
        { ingredient: iOTH.ladyfingers, amount: 2, unit: "opak" },
        { ingredient: iOTH.sugar, amount: 150 },
        { ingredient: iOTH.cocoa, amount: 2, unit: "lz" },
        { ingredient: iOTH.grain_coffee, amount: 1, unit: "lz" },
      ],
    },
  ],
  steps: [
    {
      title: "",
      steps: [
        "Żółtka ubij z cukrem na puszystą masę.",
        "Dodaj serek mascarpone i dokładnie wymieszaj.",
        "Ubij białka i delikatnie wmieszaj do masy serowej.",
        "Zaparz dwa kubki kawy i krótko macz w niej biszkopty.",
        "Układaj warstwami biszkopty i krem w naczyniu (2 warstwy).",
        "Schłódź w lodówce przez kilka godzin.",
        "Przed podaniem posyp kakao.",
      ],
    },
  ],
  keyWords: ["deser", "biszkopt"],
};

export default tiramisu;
