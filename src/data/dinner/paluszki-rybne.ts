import { dinnerSides } from "../../dinnerSides";
import { iFAT } from "../../ingredients/ingFat";
import { iFSH } from "../../ingredients/ingFish";
import type { Recipe } from "../../types";
import { fryingFat } from "../../utils";

const portions = 1;
const paluszkiRybne: Recipe = {
  name: "Paluszki Rybne",
  type: "dinner",
  images: ["paluszki-rybne.jpg", "paluszki-rybne-2.jpg"],
  time: 20,
  portions: portions,
  taste: 3,
  difficulty: 1,
  ingredients: [
    {
      title: "",
      items: [
        { ing: iFSH.fish_sticks, amount: 5 * portions, unit: "szt" },
        ...fryingFat(iFAT.oil, 1, "lzi", 0.65),
      ],
    },
  ],
  extrasMain: {
    options: [dinnerSides("oven-fries", portions)],
    selected: 0,
  },
  extrasVeg: {
    options: [
      dinnerSides("beets-fried-ready", portions),
      dinnerSides("stir-fry-vegetables", portions),
    ],
    selected: 0,
  },
  steps: [
    {
      title: "",
      steps: [
        "Wyłóż frytki na blachę wyłożoną papierem do pieczenia.",
        "Piecz przez około 20 minut, aż będą chrupiące.",
        "Usmaż paluszki na niewielkiej ilości oleju.",
        "Podawaj z burakami na talerzu.",
      ],
    },
  ],
  keyWords: ["ryba"],
};

export default paluszkiRybne;
