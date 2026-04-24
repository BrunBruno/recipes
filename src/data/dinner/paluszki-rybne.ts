import { iFAT } from "../../ingredients/ingFat";
import { iJAR } from "../../ingredients/ingJar";
import { iMET } from "../../ingredients/ingMeat";
import { iSPC } from "../../ingredients/ingSpice";
import type { Recipe } from "../../types";

const paluszkiRybne: Recipe = {
  name: "Paluszki Rybne",
  description:
    "Chrupiące paluszki rybne smażone na niewielkiej ilości oleju, podawane z pieczonymi frytkami i burakami jako szybki obiad.",
  type: "dinner",
  images: ["paluszki-rybne.jpg"],
  time: 20,
  portions: 1,
  executionDifficulty: 1,
  ingredients: [
    {
      title: "",
      items: [
        { ing: iMET.fish_sticks, amount: 5, unit: "szt" },
        { ing: iFAT.oil, amount: 1, unit: "lzi" },
        { ing: iJAR.frozen_fries, amount: 200 },
        { ing: iJAR.fried_beets, amount: 150 },
        { ing: iSPC.salt },
      ],
    },
  ],
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
