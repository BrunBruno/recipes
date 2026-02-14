import { iDIR } from "../ingredients/ingDairy";
import { iGRN } from "../ingredients/ingGrain";
import { iMET } from "../ingredients/ingMeat";
import { iSAU } from "../ingredients/ingSauce";
import { iSPC } from "../ingredients/ingSpice";
import { iVEG } from "../ingredients/ingVegetable";
import type { Recipe } from "../types";

const skladaki: Recipe = {
  name: "Składaki",
  type: "snack",
  images: ["skladaki.jpg"],
  time: 15,
  portions: 2,
  ingredients: [
    {
      title: "",
      items: [
        { ingredient: iGRN.tortilla, amount: 4, unit: "szt" },
        { ingredient: iMET.salami, amount: 12, unit: "plaster" },
        { ingredient: iDIR.yellow_cheese, amount: "0.5-1", unit: "kostka" },
        { ingredient: iVEG.onion, amount: 0.5, unit: "szt" },
        { ingredient: iVEG.bell_pepper, amount: 0.5, unit: "szt" },
        { ingredient: iVEG.garlic, amount: "1-2", unit: "ząbek" },
        { ingredient: iSAU.tomato_paste, amount: "3-4", unit: "łyżeczka" },
        { ingredient: iSAU.ketchup, amount: "0-1", unit: "łyżeczka" },
        { ingredient: iSPC.oregano },
        { ingredient: iSPC.basil },
      ],
    },
  ],
  steps: [
    {
      title: "",
      steps: [
        "W miseczce wymieszaj koncentrat pomidorowy z ketchupem, wyciśniętym czosnkiem oraz bazylią, aby powstał sos.",
        "Pokrój paprykę i cebulę, a ser żółty zetrzyj na tarce.",
        "Tortillę podziel na 4 ćwiartki (nacięcie od środka).",
        "Pierwszą ćwiartkę posmaruj przygotowanym sosem.",
        "Na drugiej i czwartej ćwiartce posyp startym serem i oregano oraz ułóż warzywa.",
        "Na trzeciej ćwiartce ułóż plastry salami.",
        "Złóż wszystkie części, aby powstał trójkąt.",
        "Podgrzej w tosterze do sandwichów, aż ser się roztopi, a tortilla będzie chrupiąca.",
      ],
    },
  ],
  keyWords: ["mięso", "fast food", "warzywa", "tortilla", "xxx"],
};

export default skladaki;
