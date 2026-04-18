import { iFAT } from "../../ingredients/ingFat";
import { iGRN } from "../../ingredients/ingGrain";
import { iMET } from "../../ingredients/ingMeat";
import { iSPC } from "../../ingredients/ingSpice";
import { iVEG } from "../../ingredients/ingVegetable";
import type { Recipe } from "../../types";

const kajzerkiZPomidorem: Recipe = {
  name: "Kajzerki z Pomidorem",
  description:
    "Szybka kanapka z kajzerki z szynką, świeżym pomidorem, cebulą i masłem, doprawiona solą i pieprzem.",
  type: "snack",
  images: ["kajzerki-z-pomidorem.jpg"],
  time: 5,
  portions: 1,
  executionDifficulty: 1,
  ingredients: [
    {
      title: "",
      items: [
        { ingredient: iGRN.kaiser_roll, amount: 2, unit: "szt" },
        { ingredient: iMET.ham_slices, amount: 4, unit: "plas" },
        { ingredient: iVEG.tomato, amount: 1, unit: "szt" },
        { ingredient: iVEG.onion, amount: 0.5, unit: "szt" },
        { ingredient: iFAT.butter, amount: 10 },
        { ingredient: iSPC.black_pepper },
        { ingredient: iSPC.salt },
      ],
    },
  ],
  steps: [
    {
      title: "",
      steps: [
        "Kajzerki przekrój na pół i posmaruj masłem.",
        "Na dolnej części kajzerki ułóż plastry szynki.",
        "Pomidor pokrój w plastry i ułóż na szynce.",
        "Cebulę drobno posiekaj i posyp nią pomidora.",
        "Całość dopraw solą i pieprzem.",
      ],
    },
  ],
  keyWords: ["pieczywo"],
};

export default kajzerkiZPomidorem;
