import { iDIR } from "../ingredients/ingDairy";
import { iFAT } from "../ingredients/ingFat";
import { iGRN } from "../ingredients/ingGrain";
import { iMET } from "../ingredients/ingMeat";
import { iSAU } from "../ingredients/ingSauce";
import { iSPC } from "../ingredients/ingSpice";
import { iVEG } from "../ingredients/ingVegetable";
import type { Recipe } from "../types";

const kebabGyros: Recipe = {
  name: "Kebab Gyros",
  description:
    "Domowy kebab gyros z kurczakiem, świeżymi warzywami i sosem czosnkowym w chrupiącej tortilli - szybka przekąska dla całej rodziny.",
  type: "snack",
  images: [""],
  time: 30,
  portions: 4,
  ingredients: [
    {
      title: "Podstawowe",
      items: [
        { ingredient: iMET.chicken_breast, amount: 400 },
        { ingredient: iFAT.oil, amount: 2, unit: "lz" },
        { ingredient: iGRN.tortilla, amount: 5, unit: "szt" },
        { ingredient: iSPC.gyros_spice, amount: 2, unit: "lz" },
      ],
    },
    {
      title: "Dodatki",
      items: [
        { ingredient: iVEG.pickled_cucumber, amount: 2, unit: "szt" },
        { ingredient: iVEG.canned_corn, amount: 1, unit: "opak" },
        { ingredient: iVEG.radish, amount: 1, unit: "opak" },
        { ingredient: iVEG.tomato, amount: 1, unit: "szt" },
        { ingredient: iVEG.lettuce, amount: 10, unit: "szt" },
      ],
    },
    {
      title: "Sos",
      items: [
        { ingredient: iSAU.mayonnaise, amount: 2, unit: "lz" },
        { ingredient: iDIR.yogurt_natural, amount: 150 },
        { ingredient: iVEG.garlic, amount: 2, unit: "zbk" },
      ],
    },
  ],
  steps: [
    {
      title: "",
      steps: [
        "Jogurt naturalny wymieszaj z majonezem i przeciśniętym przez praskę czosnkiem, aby powstał sos czosnkowy.",
        "Mięso z kurczaka pokrój w kostkę i dokładnie obtocz w przyprawie gyros.",
        "Na patelni rozgrzej olej i usmaż mięso na złoty kolor.",
        "Rzodkiewkę, ogórka kiszonego, pomidora oraz sałatę pokrój w kostkę.",
        "Rozłóż tortille na blacie.",
        "Równomiernie rozłóż warzywa, kukurydzę oraz usmażone mięso.",
        "Polej całość sosem czosnkowym.",
        "Zawiń tortille jak kebab, podwijając boki, aby farsz nie wypływał.",
        "Zapiecz kebaby w tosterze lub na suchej patelni, aż tortille się sklei i lekko zarumieni.",
      ],
    },
  ],
  keyWords: ["kurczak", "naleśnik"],
};

export default kebabGyros;
