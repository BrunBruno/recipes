import type { Recipe } from "../types";

const watrobkaZKurczaka: Recipe = {
  name: "Wątróbka z Kurczaka",
  type: "dinner",
  image: "watrobka-z-kurczaka.ts.jpg",
  ingredients: [
    { name: "wątroba drobiowa", amount: 400, unit: "g", type: "met" },
    { name: "cebula", amount: "2-3", unit: "szt", type: "veg" },
    { name: "mąka", amount: null, unit: null, type: "grn" },
    { name: "sól", amount: null, unit: null, type: "spc" },
    { name: "olej, masło", amount: null, unit: null, type: "fat" },
  ],
  steps: [
    "Cebulę pokrój i podsmaż na maśle aż stanie się miękka.",
    "Na koniec dopraw solą i smaż jeszcze chwilę.",
    "Wątrobę dokładnie opłucz i odsącz na sitku.",
    "Obtocz w mące.",
    "Ułóż wątrobę na patelni i smaż pod przykryciem przez około 10 minut (po 5 min z każdej strony).",
  ],
};

export default watrobkaZKurczaka;
