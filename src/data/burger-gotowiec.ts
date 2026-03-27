import { iDIR } from "../ingredients/ingDairy";
import { iFAT } from "../ingredients/ingFat";
import { iMET } from "../ingredients/ingMeat";
import { iSAU } from "../ingredients/ingSauce";
import { iVEG } from "../ingredients/ingVegetable";
import type { Recipe } from "../types";

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
      title: "Składniki na burgery",
      items: [
        { ingredient: iMET.burger_patties, amount: 4, unit: "szt" },
        { ingredient: iMET.bacon_slices, amount: 4, unit: "plas" },
        { ingredient: iMET.egg, amount: 2, unit: "szt" },
        { ingredient: iDIR.yellow_cheese, amount: 4, unit: "plas" },
        { ingredient: iVEG.tomato, amount: 0.5, unit: "szt" },
        { ingredient: iVEG.lettuce, amount: 4, unit: "szt" },
        { ingredient: iVEG.onion, amount: 0.5, unit: "szt" },
        { ingredient: iVEG.pickled_cucumber, amount: 1, unit: "szt" },
        { ingredient: iVEG.fried_onion, amount: 2, unit: "lz" },
        { ingredient: iSAU.mayonnaise, amount: 4, unit: "lzi" },
        { ingredient: iSAU.ketchup, amount: 4, unit: "lzi" },
        { ingredient: iFAT.clarified_butter, amount: 1, unit: "lzi" },
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
  keyWords: ["pieczywo", "kurczak", "xxx"],
};

export default gotowyBurger;
