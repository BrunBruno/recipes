import type { Recipe } from "../types";

const schujalyBurger: Recipe = {
  name: "Schujały Burger",
  type: "snack",
  image: "schujaly-burger.jpg",
  ingredients: [
    { name: "gotowe kotleciki hamburgerowe", amount: 4, unit: "szt" },
    { name: "bułki hamburgerowe", amount: 4, unit: "szt" },
    { name: "ser żółty", amount: 4, unit: "plastry" },
    { name: "jajka", amount: 2, unit: "szt" },
    { name: "boczek", amount: 4, unit: "szt" },
    { name: "pomidor" },
    { name: "sałata" },
    { name: "cebula" },
    { name: "ogórek kiszony" },
    { name: "cebulka prażona" },
    { name: "majonez" },
    { name: "ketchup" },
    { name: "masło" },
  ],
  steps: [
    "Usmaż boczek na patelni.",
    "Na tłuszczu pozostałym po boczku (dodaj masło jeśli potrzeba) usmaż jajka sadzone.",
    "Przekrój bułki i podpiecz w tosterze lub piekarniku.",
    "Połóż ser na kotleciki i podgrzej w mikrofali lub piekarniku, aby się roztopił.",
    "Umyj i pokrój warzywa: pomidor, sałatę, cebulę, ogórki kiszone.",
    "Posmaruj bułki majonezem i ketchupem, posyp cebulką prażoną.",
    "Złóż dwa rodzaje burgerów: jeden z boczkiem i jajkiem, drugi z warzywami.",
  ],
};

export default schujalyBurger;
