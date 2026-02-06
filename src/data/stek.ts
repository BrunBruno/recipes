import type { Recipe } from "../types";

const stek: Recipe = {
  name: "Smażony Stek",
  type: "snack",
  image: "stek.jpg",
  ingredients: [
    { name: "stek wołowy", amount: 1, unit: "szt" },
    { name: "czosnek", amount: 1, unit: "ząbek" },
    { name: "olej", amount: 1, unit: "łyżeczka" },
    { name: "masło", amount: 1, unit: "łyżka" },
    { name: "tymianek" },
    { name: "sól" },
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
