import type { Recipe } from "../types";

const spaghettiBolognese: Recipe = {
  name: "Spaghetti Bolognese",
  type: "dinner",
  image: "",
  ingredients: [
    { name: "mięso mielone", amount: 400, unit: "g" },
    { name: "makaron spaghetti", amount: "3 x 100", unit: "g" },
    { name: "ser żółty", amount: "3 x 50", unit: "g" },
    { name: "przyprawa bolognese" },
    { name: "olej" },
  ],
  steps: [
    "Usmaż mięso mielone na patelni z olejem.",
    "Wymieszaj przyprawę bolognese z wodą i wlej do mięsa.",
    "Gotuj sos przez około 15 minut.",
    "Ugotuj makaron spaghetti według instrukcji na opakowaniu.",
    "Zetrzyj ser żółty na tarce.",
    "Podawaj spaghetti z sosem i posyp startym serem.",
  ],
};

export default spaghettiBolognese;
