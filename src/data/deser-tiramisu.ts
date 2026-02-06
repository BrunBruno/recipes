import type { Recipe } from "../types";

const tiramisu: Recipe = {
  name: "Tiramisu",
  type: "dessert",
  image: "",
  ingredients: [
    { name: "biszkopty", amount: 2, unit: "paczki" },
    { name: "serek mascarpone", amount: 500, unit: "g" },
    { name: "jaja", amount: 3, unit: "szt" },
    { name: "cukier", amount: 150, unit: "g" },
    { name: "kawa", amount: 1, unit: "łyżka" },
    { name: "kakao" },
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
