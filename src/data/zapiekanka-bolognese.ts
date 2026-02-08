import type { Recipe } from "../types";

const zapiekankaBolognese: Recipe = {
  name: "Zapiekanka Bolognese",
  type: "dinner",
  image: "zapiekanka-bolognese.jpg",
  kcal: 550,
  time: 50,
  portions: 4,
  ingredients: [
    { name: "makaron świderki", amount: 400, unit: "g", type: "grn" },
    { name: "mięso mielone", amount: 400, unit: "g", type: "met" },
    { name: "pieczarki", amount: 250, unit: "g", type: "veg" },
    { name: "pomidor", amount: "1-2", unit: "szt", type: "veg" },
    { name: "cebula", amount: 1, unit: "szt", type: "veg" },
    { name: "papryka", amount: 1, unit: "szt", type: "veg" },
    { name: "ser żółty", amount: 200, unit: "g", type: "che" },
    { name: "koncentrat pomidorowy", amount: 2, unit: "łyżeczka", type: "sau" },
    { name: "przyprawa bolognese", amount: null, unit: null, type: "spc" },
    { name: "ziele angielskie", amount: null, unit: null, type: "spc" },
    { name: "liść laurowy", amount: null, unit: null, type: "spc" },
    { name: "olej", amount: null, unit: null, type: "fat" },
  ],
  steps: [
    "Podsmaż mięso mielone na oleju.",
    "Dodaj pokrojoną cebulę i smaż razem z mięsem.",
    "Dodaj pokrojone pieczarki i smaż, aż będą miękkie.",
    "Dodaj pokrojonego pomidora i smaż kilka minut.",
    "Dodaj koncentrat pomidorowy i dokładnie wymieszaj.",
    "Rozmieszaj przyprawę bolognese z wodą i dodaj do patelni wraz z zielem angielskim i liściem laurowym.",
    "Gotuj całość przez około 15 minut.",
    "Ugotuj makaron według instrukcji na opakowaniu.",
    "Wsyp połowę ugotowanego makaronu do naczynia żaroodpornego.",
    "Wlej zawartość patelni na makaron.",
    "Dodaj pozostały makaron i posyp startym serem.",
    "Zapiekaj w piekarniku przez 15 minut.",
  ],
};

export default zapiekankaBolognese;
