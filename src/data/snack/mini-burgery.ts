import { iBAK } from "../../ingredients/ingBakery";
import { iDIR } from "../../ingredients/ingDairy";
import { iFAT } from "../../ingredients/ingFat";
import { iJAR } from "../../ingredients/ingJar";
import { iMET } from "../../ingredients/ingMeat";
import { iSAU } from "../../ingredients/ingSauce";
import { iSPC } from "../../ingredients/ingSpice";
import { iVEG } from "../../ingredients/ingVegetable";
import type { Recipe } from "../../types";

const portions = 4;
const miniBurgery: Recipe = {
  name: "Mini Burgery",
  type: "snack",
  images: [""],
  time: 30,
  portions: portions,
  taste: null,
  difficulty: null,
  ingredients: [
    {
      title: "Mięso",
      items: [
        { ing: iMET.beef_ground, amount: 400, kw: true },
        { ing: iFAT.oil, amount: 2, unit: "lz" },
        { ing: iSPC.black_pepper },
        { ing: iSPC.salt },
      ],
    },
    {
      title: "Pozostałe",
      items: [
        { ing: iBAK.mini_burger_bun, amount: 4, unit: "szt", kw: true },
        { ing: iDIR.cheddar_cheese, amount: 4, unit: "plas", kw: true },
        { ing: iVEG.onion_red, amount: 0.25, unit: "szt" },
        { ing: iJAR.pickled_cucumber, amount: 2, unit: "szt" },
        { ing: iVEG.lettuce, amount: 4, unit: "lst" },
      ],
    },
    {
      title: "Sos",
      items: [
        { ing: iSAU.ketchup, amount: 2, unit: "lzi" },
        { ing: iSAU.mustard, amount: 2, unit: "lzi" },
      ],
    },
  ],
  steps: [
    {
      title: "Przygotowanie składników",
      steps: [
        "Mięso mielone wołowe podziel na 4 porcje i uformuj z nich małe, płaskie kotlety dopasowane rozmiarem do mini bułek.",
        "Czerwoną cebulę oraz ogórki kiszone pokrój w cienkie plasterki, a sałatę umyj i osusz.",
        "Mini bułki do burgerów przekrój na pół i lekko podpiecz na suchej patelni lub w piekarniku.",
      ],
    },
    {
      title: "Smażenie burgerów",
      steps: [
        "Rozgrzej patelnię z niewielką ilością oleju.",
        "Połóż kotlety wołowe na rozgrzaną patelnię, dopraw solą oraz pieprzem i smaż przez około 2-3 minuty z każdej strony.",
        "Na pod koniec smażenia na każdym kotlecie połóż plaster sera cheddar i poczekaj, aż się roztopi.",
      ],
    },
    {
      title: "Składanie",
      steps: [
        "Wewnętrzne strony bułek posmaruj ketchupem i musztardą.",
        "Na dolnej części bułki ułóż liść sałaty, ciepły kotlet z serem, plastry cebuli oraz ogórka kiszonego.",
        "Przykryj górną częścią bułki i podawaj od razu.",
      ],
    },
  ],
  keyWords: ["mięso", "wołowina", "pieczywo", "ser", "burger", "fast food"],
};

export default miniBurgery;
