import { iDIR } from "../../ingredients/ingDairy";
import { iFAT } from "../../ingredients/ingFat";
import { iGRN } from "../../ingredients/ingGrain";
import { iJAR } from "../../ingredients/ingJar";
import { iMET } from "../../ingredients/ingMeat";
import { iSPC } from "../../ingredients/ingSpice";
import { iVEG } from "../../ingredients/ingVegetable";
import type { Recipe } from "../../types";

const skladaki: Recipe = {
  name: "Składaki",
  description:
    "Chrupiące składaki z tortilli wypełnione salami, serem, warzywami i aromatycznym sosem pomidorowym - szybka i smaczna przekąska na ciepło.",
  type: "snack",
  images: ["skladaki.jpg", "skladaki-2.jpg", "skladaki-3.jpg"],
  time: 15,
  portions: 2,
  ingredients: [
    {
      title: "Składaki",
      items: [
        { ingredient: iGRN.tortilla, amount: 4, unit: "szt" },
        { ingredient: iMET.salami, amount: 12, unit: "plas" },
        { ingredient: iDIR.yellow_cheese, amount: "0.5-1", unit: "kst" },
        { ingredient: iVEG.red_onion, amount: 0.5, unit: "szt" },
        { ingredient: iVEG.bell_pepper, amount: 0.5, unit: "szt" },
        { ingredient: iSPC.oregano },
      ],
    },
    {
      title: "Sos",
      items: [
        { ingredient: iVEG.garlic, amount: "1-2", unit: "zbk" },
        { ingredient: iJAR.tomato_paste, amount: "3-4", unit: "lzi" },
        { ingredient: iJAR.ketchup, amount: "0-1", unit: "lzi" },
        { ingredient: iFAT.oil, amount: 0.5, unit: "lzi" },
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
  keyWords: ["naleśnik"],
};

export default skladaki;
