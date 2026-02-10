import { iDIR } from "../ingredients/ingDairy";
import { iFAT } from "../ingredients/ingFat";
import { iMET } from "../ingredients/ingMeat";
import { iSAU } from "../ingredients/ingSauce";
import { iVEG } from "../ingredients/ingVegetable";
import type { Recipe } from "../types";

const gotowyBurger: Recipe = {
  name: "Gotowy Burger",
  type: "snack",
  image: "gotowy-burger.jpg",
  time: 30,
  portions: 2,
  ingredients: [
    { ingredient: iMET.bacon_slices, amount: 4, unit: "plaster" },
    { ingredient: iMET.burger_patties, amount: 4, unit: "szt" },
    { ingredient: iMET.egg, amount: 2 },
    { ingredient: iDIR.yellow_cheese, amount: 4, unit: "plaster" },
    { ingredient: iVEG.tomato, amount: 0.5, unit: "szt" },
    { ingredient: iVEG.lettuce, amount: 4, unit: "liść" },
    { ingredient: iVEG.onion, amount: 0.5, unit: "szt" },
    { ingredient: iVEG.pickled_cucumber, amount: 1, unit: "szt" },
    { ingredient: iVEG.fried_onion, amount: 2, unit: "łyżka" },
    { ingredient: iSAU.mayonnaise, amount: 4, unit: "łyżeczka" },
    { ingredient: iSAU.ketchup, amount: 4, unit: "łyżeczka" },
    { ingredient: iFAT.butter },
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
  keyWords: ["kurczak", "fast food"],
};

export default gotowyBurger;
