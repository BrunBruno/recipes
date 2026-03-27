import { iDIR } from "../ingredients/ingDairy";
import { iFAT } from "../ingredients/ingFat";
import { iGRN } from "../ingredients/ingGrain";
import { iMET } from "../ingredients/ingMeat";
import { iOTH } from "../ingredients/ingOther";
import { iSAU } from "../ingredients/ingSauce";
import { iSPC } from "../ingredients/ingSpice";
import { iVEG } from "../ingredients/ingVegetable";
import type { Recipe } from "../types";

const burgerDrwala: Recipe = {
  name: "Burger Drwala",
  description:
    "Domowy burger drwala z soczystą wołowiną, chrupiącym boczkiem i panierowanym serem, podany z warzywami i wyrazistym sosem.",
  type: "snack",
  images: [""],
  time: 50,
  portions: 4,
  ingredients: [
    {
      title: "Składniki na burgery",
      items: [
        { ingredient: iMET.ground_beef, amount: 400 },
        { ingredient: iMET.bacon_slices, amount: 8, unit: "plas" },
        { ingredient: iMET.egg, amount: "2-3", unit: "szt" },
        { ingredient: iDIR.lilliputian_cheese, amount: 350 },
        { ingredient: iOTH.cheese_snacks, amount: 1, unit: "opak" },
        { ingredient: iGRN.hamburger_buns, amount: 4, unit: "szt" },
        { ingredient: iGRN.breadcrumbs, amount: 2, unit: "lz" },
        { ingredient: iVEG.onion, amount: 1, unit: "szt" },
        { ingredient: iVEG.lettuce, amount: 4, unit: "szt" },
        { ingredient: iVEG.tomato, amount: 1, unit: "szt" },
        { ingredient: iVEG.pickled_cucumber, amount: 2, unit: "szt" },
        { ingredient: iFAT.clarified_butter, amount: 1, unit: "lzi" },
        { ingredient: iFAT.oil, amount: 2, unit: "lz" },
        { ingredient: iSPC.black_pepper },
        { ingredient: iSPC.salt },
      ],
    },
    {
      title: "Składniki na sos",
      items: [
        { ingredient: iSAU.ketchup, amount: 1, unit: "lz" },
        { ingredient: iSAU.mustard, amount: 3, unit: "lz" },
        { ingredient: iSAU.mayonnaise, amount: 1, unit: "lz" },
      ],
    },
  ],
  steps: [
    {
      title: "Przygotowanie sosu",
      steps: [
        "Do kubka dodaj łyżkę majonezu, łyżkę ketchupu oraz 2 łyżki musztardy.",
        "Wymieszaj sos i odstaw do przegryzienia.",
        "Podane proporcje są wyznaczone na cztery burgery.",
      ],
    },
    {
      title: "Przygotowanie burgerów",
      steps: [
        "Połowę cebuli podsmaż na maśle i odstaw do ostygnięcia.",
        "Do mięsa mielonego dodaj podsmażoną cebulę, jajko, łyżeczkę musztardy, sól i pieprz. Dokładnie wymieszaj.",
        "Uformuj kotlety wołowe.",
        "Ser Liliput pokrój na 4 równe kawałki.",
        "Chrupki serowe rozetrzyj w moździerzu i wsyp do miski. W razie potrzeby dodaj bułkę tartą.",
        "Do drugiej miski wbij 1-2 jajka i rozbełtaj.",
        "Kawałki sera wielokrotnie maczaj w jajku i obtaczaj w chrupkach, aż uzyskasz solidną panierkę.",
        "Plastry boczku usmaż na patelni i odstaw.",
        "Na patelni z dodatkiem oleju usmaż panierowany ser, uważając, aby się nie rozpłynął.",
        "Na tej samej patelni usmaż kotlety wołowe.",
        "Umyj i pokrój pozostałe warzywa.",
        "Złóż burgera z przygotowanych składników: bułka, sos, kotlet, ser, boczek i warzywa.",
      ],
    },
  ],
  keyWords: ["wołowina", "ser", "pieczywo"],
};

export default burgerDrwala;
