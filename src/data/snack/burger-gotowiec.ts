import { iDIR } from "../../ingredients/ingDairy";
import { iFAT } from "../../ingredients/ingFat";
import { iGRN } from "../../ingredients/ingGrain";
import { iJAR } from "../../ingredients/ingJar";
import { iMET } from "../../ingredients/ingMeat";
import { iVEG } from "../../ingredients/ingVegetable";
import type { Recipe } from "../../types";

const gotowyBurger: Recipe = {
  name: "Burger Gotowiec",
  description:
    "Szybki burger z gotowych składników, który możesz przygotować na różne sposoby - z boczkiem i jajkiem lub w wersji z warzywami.",
  type: "snack",
  images: ["burger-gotowiec.jpg"],
  time: 30,
  portions: 2,
  ingredients: [
    {
      title: "Burger warzywny",
      items: [
        { ingredient: iVEG.tomato, amount: 0.5, unit: "szt" },
        { ingredient: iVEG.lettuce, amount: 4, unit: "szt" },
        { ingredient: iVEG.onion, amount: 0.5, unit: "szt" },
        { ingredient: iJAR.pickled_cucumber, amount: 1, unit: "szt" },
      ],
    },
    {
      title: "Burger mięsny",
      items: [
        { ingredient: iMET.bacon_slices, amount: 4, unit: "plas" },
        { ingredient: iMET.egg, amount: 2, unit: "szt" },
        { ingredient: iFAT.clarified_butter, amount: 1, unit: "lzi" },
        { ingredient: iJAR.fried_onion, amount: 2, unit: "lz" },
      ],
    },
    {
      title: "Podstawowe",
      items: [
        { ingredient: iGRN.hamburger_buns, amount: 4, unit: "szt" },
        { ingredient: iMET.burger_patties, amount: 4, unit: "szt" },
        { ingredient: iDIR.yellow_cheese, amount: 4, unit: "plas" },
        { ingredient: iJAR.mayonnaise, amount: 4, unit: "lzi" },
        { ingredient: iJAR.ketchup, amount: 4, unit: "lzi" },
      ],
    },
  ],

  steps: [
    {
      title: "Burger z boczkiem i jajkiem",
      steps: [
        "Usmaż boczek na patelni.",
        "Na tłuszczu pozostałym po boczku (dodaj masło jeśli potrzeba) usmaż jajka sadzone.",
        "Połóż ser na kotleciki i podgrzej w mikrofali lub piekarniku, aby się roztopił.",
        "Przekrój bułki i podpiecz w tosterze lub piekarniku.",
        "Posmaruj bułki majonezem i ketchupem, posyp cebulką prażoną.",
        "Złóż burgera z boczkiem i jajkiem.",
      ],
    },
    {
      title: "Burger warzywny",
      steps: [
        "Umyj i pokrój warzywa: pomidor, sałatę, cebulę, ogórki kiszone.",
        "Przekrój bułki i podpiecz w tosterze lub piekarniku.",
        "Posmaruj bułki majonezem i ketchupem, posyp cebulką prażoną.",
        "Połóż ser na kotleciki i podgrzej w mikrofali lub piekarniku, aby się roztopił.",
        "Złóż burgera warzywnego z przygotowanych warzyw i kotlecików.",
      ],
    },
  ],
  keyWords: ["pieczywo", "kurczak"],
};

export default gotowyBurger;
