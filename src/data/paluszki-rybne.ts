import { iFAT } from "../ingredients/ingFat";
import { iMET } from "../ingredients/ingMeat";
import { iSPC } from "../ingredients/ingSpice";
import { iVEG } from "../ingredients/ingVegetable";
import type { Recipe } from "../types";

const paluszkiRybne: Recipe = {
  name: "Paluszki Rybne",
  description:
    "Chrupiące paluszki rybne smażone na niewielkiej ilości oleju, podawane z pieczonymi frytkami i burakami jako szybki obiad.",
  type: "dinner",
  images: ["paluszki-rybne.jpg"],
  time: 20,
  portions: 1,
  ingredients: [
    {
      title: "Lista składników",
      items: [
        { ingredient: iMET.fish_sticks, amount: 5, unit: "szt" },
        { ingredient: iFAT.oil, amount: 1, unit: "lzi" },
        { ingredient: iVEG.frozen_fries, amount: 200 },
        { ingredient: iVEG.fried_beets, amount: 150 },
        { ingredient: iSPC.salt },
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
  keyWords: ["ryba", "xxx"],
};

export default paluszkiRybne;
