import { iDIR } from "../../ingredients/ingDairy";
import { iFAT } from "../../ingredients/ingFat";
import { iGRN } from "../../ingredients/ingGrain";
import { iJAR } from "../../ingredients/ingJar";
import { iMET } from "../../ingredients/ingMeat";
import { iSPC } from "../../ingredients/ingSpice";
import { iVEG } from "../../ingredients/ingVegetable";
import type { Recipe } from "../../types";

const portions = 4;
const burgerDrwala: Recipe = {
  name: "Burger Drwala",
  description:
    "Domowy burger drwala z soczystą wołowiną, chrupiącym boczkiem i panierowanym serem, podany z warzywami i wyrazistym sosem.",
  type: "snack",
  images: ["burger-drwala.jpg"],
  time: 50,
  portions: portions,
  executionDifficulty: 4,
  ingredients: [
    {
      title: "Mięso",
      items: [
        { ingredient: iMET.ground_beef, amount: 400 },
        { ingredient: iFAT.oil, amount: portions * 0.5, unit: "lz" },
        { ingredient: iSPC.black_pepper },
        { ingredient: iSPC.salt },
      ],
    },
    {
      title: "Ser",
      items: [
        { ingredient: iDIR.lilliputian_cheese, amount: 350 },
        { ingredient: iGRN.cheese_snacks, amount: 1, unit: "opak" },
        { ingredient: iGRN.breadcrumbs, amount: "0-2", unit: "lz" },
        { ingredient: iMET.egg, amount: "1-2", unit: "szt" },
        { ingredient: iFAT.oil, amount: portions * 0.5, unit: "lz" },
      ],
    },
    {
      title: "Dodatki",
      items: [
        { ingredient: iGRN.hamburger_buns, amount: 4, unit: "szt" },
        { ingredient: iMET.bacon_slices, amount: 8, unit: "plas" },
        { ingredient: iVEG.red_onion, amount: 0.5, unit: "szt" },
        { ingredient: iVEG.lettuce, amount: 4, unit: "szt" },
        { ingredient: iVEG.tomato, amount: 1, unit: "szt" },
        { ingredient: iJAR.pickled_cucumber, amount: 2, unit: "szt" },
        { ingredient: iJAR.fried_onion },
      ],
    },
    {
      title: "Sos",
      items: [
        { ingredient: iJAR.ketchup, amount: portions * 1, unit: "lzi" },
        { ingredient: iJAR.mustard, amount: portions * 2, unit: "lzi" },
        { ingredient: iJAR.mayonnaise, amount: portions * 1, unit: "lzi" },
      ],
    },
  ],
  steps: [
    {
      title: "Przygotowanie sosu",
      steps: [
        "Do kubka dodaj majonez, ketchup oraz musztarde w proporcjach 1:1:2 łyżeczki na jednego burgera.",
        "Wymieszaj sos i odstaw do przegryzienia.",
      ],
    },
    {
      title: "Przygotowanie burgerów",
      steps: [
        "Uformuj kotlety wołowe z samego mięsa wołowego i odstaw je do lodówki.",
        "Ser Liliput pokrój na 4 równe kawałki.",
        "Chrupki serowe rozetrzyj w moździerzu lub rozgnieć w worku i wsyp do miski. W razie potrzeby dodaj bułkę tartą.",
        "Do drugiej miski wbij 1-2 jajka i rozbełtaj.",
        "Kawałki sera wielokrotnie maczaj w jajku i obtaczaj w chrupkach, aż uzyskasz solidną panierkę.",
        "Plastry boczku usmaż na patelni i odstaw.",
        "Na patelni z dodatkiem oleju usmaż panierowany ser, uważając, aby się nie rozpłynął.",
        "Można usmażyć ser na samym tłuszczu z boczku, jeśli wytopiło się go odpowiednio dużo.",
        "Na tej samej patelni usmaż kotlety wołowe.",
        "Przed smażeniem mięsa kotlety można rozpłaszyć, jeśli są zbyt zbite lub małe.",
        "Umyj i pokrój pozostałe warzywa.",
        "Złóż burgera z przygotowanych składników.",
      ],
    },
  ],
  keyWords: ["wołowina", "ser", "pieczywo"],
};

export default burgerDrwala;
