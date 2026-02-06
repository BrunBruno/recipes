import type { Recipe } from "../types";

const watrobkaZKurczaka: Recipe = {
  name: "Wątróbka z Kurczaka",
  type: "dinner",
  image: "watrobka-z-kurczaka.ts.jpg",
  ingredients: [
    { name: "wątroba drobiowa", amount: 400, unit: "g" },
    { name: "cebula", amount: "2-3", unit: "szt" },
    { name: "mąka" },
    { name: "sól" },
    { name: "olej, masło" },
  ],
  steps: [
    "Cebulę pokrój i podsmaż na maśle aż stanie się miękka.",
    "Na koniec dopraw solą i smaż jeszcze chwilę.",
    "Wątrobę dokładnie opłucz i odsącz na sitku.",
    "Obtocz w mące.",
    "Ułóż wątrobę na patelni i smaż pod przykryciem przez około 10 minut.",
  ],
};

export default watrobkaZKurczaka;
