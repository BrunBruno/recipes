import type { Recipe } from "../types";

const gotowyBurger: Recipe = {
  name: "Gotowy Burger",
  type: "snack",
  image: "gotowy-burger.jpg",
  ingredients: [
    {
      name: "gotowe kotleciki hamburgerowe",
      amount: 4,
      unit: "szt",
      type: "met",
    },
    { name: "bułki hamburgerowe", amount: 4, unit: "szt", type: "grn" },
    { name: "ser żółty", amount: 4, unit: "plaster", type: "che" },
    { name: "jajka", amount: 2, unit: "szt", type: "egg" },
    { name: "boczek", amount: 4, unit: "szt", type: "met" },
    { name: "pomidor", amount: null, unit: null, type: "veg" },
    { name: "sałata", amount: null, unit: null, type: "veg" },
    { name: "cebula", amount: null, unit: null, type: "veg" },
    { name: "ogórek kiszony", amount: null, unit: null, type: "veg" },
    { name: "cebulka prażona", amount: null, unit: null, type: "veg" },
    { name: "majonez", amount: null, unit: null, type: "sau" },
    { name: "ketchup", amount: null, unit: null, type: "sau" },
    { name: "masło", amount: null, unit: null, type: "fat" },
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

export default gotowyBurger;
