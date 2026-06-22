import { iFAT } from "../../ingredients/ingFat";
import { iMET } from "../../ingredients/ingMeat";
import { iVEG } from "../../ingredients/ingVegetable";
import { iJAR } from "../../ingredients/ingJar";
import type { Recipe } from "../../types";
import { iGRN } from "../../ingredients/ingGrain";
import { iDIR } from "../../ingredients/ingDairy";

const portions = 4;
const wrapWieprzowyJajecznica: Recipe = {
  name: "Wrap Wieprzowy z Jajecznicą",
  description:
    "Soczysta wieprzowina, jajecznica, ser cheddar, pomidor i sałata, podane w tortilli z sosem musztardowo-chrzanowym.",
  type: "snack",
  images: [
    "wrap-wieprzowina-z-jajecznica.jpg",
    "wrap-wieprzowina-z-jajecznica-2.jpg",
  ],
  time: 15,
  portions: portions,
  executionDifficulty: 1,
  ingredients: [
    {
      title: "",
      items: [
        { ing: iGRN.tortilla, amount: portions, unit: "szt" },
        { ing: iMET.burger_patties, amount: portions, unit: "szt" },
        { ing: iMET.egg, amount: portions, unit: "szt" },
        { ing: iDIR.cheddar_cheese, amount: portions, unit: "plas" },
        { ing: iVEG.tomato, amount: 1, unit: "szt" },
        { ing: iVEG.lettuce, amount: portions, unit: "szt" },
        { ing: iJAR.mustard_dessert, amount: 30 },
        { ing: iJAR.mayonnaise, amount: 30 },
        { ing: iJAR.horseradish_sauce, amount: 10 },
        { ing: iFAT.butter, amount: 5 },
      ],
    },
  ],
  steps: [
    {
      title: "",
      steps: [
        "Upiecz gotowe kotlety wieprzowe w piekarniku.",
        "Na maśle przygotuj delikatną jajecznicę z dwóch jajek.",
        "Podgrzej tortillę na suchej patelni, aby była elastyczna.",
        "Wymieszaj musztardę z sosem chrzanowym w proprcji 1-1.",
        "Posmaruj środek tortilli sosem musztardowo-chrzanowym.",
        "Dodaj jajecznicę, wieprzowinę, plasterki pomidora, sałatę i ser cheddar.",
        "Zawiń wrapa ciasno i podawaj od razu.",
      ],
    },
  ],
  keyWords: ["wieprzowina"],
};

export default wrapWieprzowyJajecznica;
