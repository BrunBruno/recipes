import { dinnerSides } from "../../dinnerSides";
import { iFAT } from "../../ingredients/ingFat";
import { iMET } from "../../ingredients/ingMeat";
import type { Recipe } from "../../types";
import { fryingFat } from "../../utils";

const portions = 1;
const paluszkiRybne: Recipe = {
  name: "Paluszki Rybne",
  description:
    "Chrupiące paluszki rybne smażone na niewielkiej ilości oleju, podawane z pieczonymi frytkami i burakami jako szybki obiad.",
  type: "dinner",
  images: ["paluszki-rybne.jpg"],
  time: 20,
  portions: portions,
  executionDifficulty: 1,
  ingredients: [
    {
      title: "",
      items: [
        { ing: iMET.fish_sticks, amount: 5 * portions, unit: "szt" },
        ...fryingFat(iFAT.oil, 1, "lzi", 0.65),
      ],
    },
  ],
  extrasMain: {
    options: [dinnerSides("oven-fries", portions)],
    selected: 0,
  },
  extrasVeg: {
    options: [dinnerSides("beets-fried-ready", portions)],
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
