import type { Recipe } from "../types";

const hotHog: Recipe = {
  name: "Hot Dog",
  type: "snack",
  image: "hot-dog.jpg",
  ingredients: [
    { name: "parówki", amount: 4, unit: "szt" },
    { name: "bułki hotdogowe", amount: 4, unit: "szt" },
    { name: "ogórek kiszony", amount: 2, unit: "szt" },
    { name: "kapusta kiszona" },
    { name: "cebulka prażona" },
    { name: "ketchup" },
    { name: "musztarda" },
    { name: "sos czosnkowy" },
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
