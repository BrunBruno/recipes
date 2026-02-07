import type { Recipe } from "../types";

const skladaki: Recipe = {
  name: "Składaki",
  type: "snack",
  image: "skladaki.jpg",
  ingredients: [
    { name: "tortilla", amount: 4, unit: "szt", type: "grn" },
    { name: "salami", amount: 160, unit: "g", type: "met" },
    { name: "ser żółty", amount: 1, unit: "kostka", type: "che" },
    { name: "cebula", amount: 0.5, unit: "szt", type: "veg" },
    { name: "papryka", amount: 0.5, unit: "szt", type: "veg" },
    {
      name: "koncentrat pomidorowy",
      amount: "3-4",
      unit: "łyżeczka",
      type: "sau",
    },
    { name: "ketchup", amount: "0-1", unit: "łyżeczka", type: "sau" },
    { name: "czosnek", amount: "1-2", unit: "ząbek", type: "veg" },
    { name: "oregano", amount: null, unit: null, type: "spc" },
    { name: "bazylia", amount: null, unit: null, type: "spc" },
  ],
  steps: [
    "W miseczce wymieszaj koncentrat pomidorowy z ketchupem, wyciśniętym czosnkiem oraz bazylią, aby powstał sos.",
    "Pokrój paprykę i cebulę, a ser żółty zetrzyj na tarce.",
    "Tortillę podziel na 4 ćwiartki (nacięcie od środka).",
    "Pierwszą ćwiartkę posmaruj przygotowanym sosem.",
    "Na drugiej i czwartej ćwiartce posyp startym serem i oregano oraz ułóż warzywa.",
    "Na trzeciej ćwiartce ułóż plastry salami.",
    "Złóż wszystkie części, aby powstał trójkąt.",
    "Podgrzej w tosterze do sandwichów, aż ser się roztopi, a tortilla będzie chrupiąca.",
  ],
};

export default skladaki;
