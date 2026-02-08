import type { Recipe } from "../types";

const spaghettiBolognese: Recipe = {
  name: "Spaghetti Bolognese",
  type: "dinner",
  image: "",
  kcal: 450,
  time: 30,
  portions: 4,
  ingredients: [
    { name: "mięso mielone", amount: 400, unit: "g", type: "met" },
    { name: "makaron spaghetti", amount: "3 x 100", unit: "g", type: "grn" },
    { name: "ser żółty", amount: "3 x 50", unit: "g", type: "che" },
    { name: "przyprawa bolognese", amount: null, unit: null, type: "spc" },
    { name: "olej", amount: null, unit: null, type: "fat" },
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
