import { iDIR } from "../../ingredients/ingDairy";
import { iFAT } from "../../ingredients/ingFat";
import { iGRN } from "../../ingredients/ingGrain";
import { iJAR } from "../../ingredients/ingJar";
import { iMET } from "../../ingredients/ingMeat";
import { iSPC } from "../../ingredients/ingSpice";
import { iVEG } from "../../ingredients/ingVegetable";
import type { Recipe } from "../../types";

const portions = 4;

const burgerDomowy: Recipe = {
  name: "Burger Domowy",
  description:
    "Klasyczny domowy burger typu smash burger z czystej wołowiny, podany w wieloziarnistej kajzerce z cheddarem, świeżymi warzywami i wyrazistym sosem z ogórkiem kiszonym.",
  type: "snack",
  images: ["burger-domowy.jpg", "burger-domowy-2.jpg"],
  time: 35,
  portions: portions,
  executionDifficulty: 2,
  ingredients: [
    {
      title: "Mięso",
      items: [
        { ing: iMET.ground_beef, amount: 400 },
        { ing: iFAT.oil, amount: 2, unit: "lz" },
        { ing: iSPC.black_pepper },
        { ing: iSPC.salt },
      ],
    },
    {
      title: "Dodatki",
      items: [
        { ing: iGRN.multigrain_kaiser_roll, amount: 4, unit: "szt" },
        { ing: iDIR.cheddar_cheese, amount: 4, unit: "plas" },
        { ing: iVEG.lettuce, amount: 4, unit: "szt" },
        { ing: iVEG.tomato, amount: 1, unit: "szt" },
        { ing: iVEG.red_onion, amount: 0.5, unit: "szt" },
        { ing: iJAR.pickled_cucumber, amount: 2, unit: "szt" },
      ],
    },
    {
      title: "Sos",
      items: [
        { ing: iJAR.mayonnaise, amount: 4, unit: "lzi" },
        { ing: iJAR.mustard, amount: 1, unit: "lzi" },
        { ing: iJAR.ketchup, amount: 1, unit: "lzi" },
        { ing: iJAR.pickled_cucumber, amount: 1, unit: "szt" },
      ],
    },
  ],
  steps: [
    {
      title: "Przygotowanie sosu",
      steps: [
        "Ogórka kiszonego pokrój bardzo drobno.",
        "Wymieszaj majonez, musztardę i ketchup w proporcjach 4:1:1.",
        "Dodaj pokrojonego ogórka i wymieszaj całość.",
        "Odstaw sos do lodówki.",
      ],
    },
    {
      title: "Przygotowanie burgerów",
      steps: [
        "Mięso podziel na 4 luźne kulki.",
        "Rozgrzej mocno patelnię z niewielką ilością oleju.",
        "Połóż kulki mięsa na patelni i mocno rozpłaszcz je szpatułką na cienkie kotlety typu smash.",
        "Podczas smażenia dopraw mięso solą oraz świeżo mielonym pieprzem.",
        "Smaż około 2 minut, aż brzegi będą mocno przypieczone.",
        "Odwróć kotlety i połóż na nich plastry cheddara.",
        "Smaż jeszcze około 1 minuty do roztopienia sera.",
        "Pomidora, cebulę oraz ogórki kiszone pokrój w plasterki, sałatę umyj i osusz.",
        "Złóż burgera z przygotowanych składników.",
      ],
    },
  ],
  keyWords: ["wołowina", "ser", "pieczywo"],
};

export default burgerDomowy;
