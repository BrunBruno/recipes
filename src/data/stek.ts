import type { Recipe } from "../types";

const stek: Recipe = {
  name: "Smażony Stek",
  type: "snack",
  image: "stek.jpg",
  ingredients: [
    { name: "stek wołowy", amount: 1, unit: "szt", type: "met" },
    { name: "czosnek", amount: 1, unit: "ząbek", type: "veg" },
    { name: "olej", amount: 1, unit: "łyżeczka", type: "fat" },
    { name: "masło", amount: 1, unit: "łyżka", type: "fat" },
    { name: "tymianek", amount: null, unit: null, type: "spc" },
    { name: "sól", amount: null, unit: null, type: "spc" },
  ],
  steps: [
    "Stek posyp solą.",
    "Smaż stek na odrobinie oleju, aż osiągnie pożądany stopień wysmażenia.",
    "Na patelni dodaj masło, dodaj wyciśnięty czosnek i tymianek.",
    "Zmniejsz ogień i polewaj steka stopionym masłem z czosnkiem i tymiankiem przez kilka minut.",
    "Podawaj od razu po przygotowaniu.",
  ],
};

export default stek;
