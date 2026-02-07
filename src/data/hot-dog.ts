import type { Recipe } from "../types";

const hotHog: Recipe = {
  name: "Hot Dog",
  type: "snack",
  image: "hot-dog.jpg",
  ingredients: [
    { name: "parówki", amount: 4, unit: "szt", type: "met" },
    { name: "bułki hotdogowe", amount: 4, unit: "szt", type: "grn" },
    { name: "ogórek kiszony", amount: 2, unit: "szt", type: "veg" },
    { name: "kapusta kiszona", amount: null, unit: null, type: "veg" },
    { name: "cebulka prażona", amount: null, unit: null, type: "veg" },
    { name: "ketchup", amount: null, unit: null, type: "sau" },
    { name: "musztarda", amount: null, unit: null, type: "sau" },
    { name: "sos czosnkowy", amount: null, unit: null, type: "sau" },
  ],
  steps: [
    "Podgrzej bułki oraz parówki w mikrofalówce.",
    "Pokrój ogórki kiszone wzdłuż.",
    "Otwórz bułki i ułóż po bokach ogórki kiszone.",
    "Włóż parówkę do bułki.",
    "Polej całość ketchupem, musztardą i sosem czosnkowym.",
    "Dodaj kapustę kiszoną i posyp cebulką prażoną.",
  ],
};

export default hotHog;
