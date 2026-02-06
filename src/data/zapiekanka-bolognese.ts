import type { Recipe } from "../types";

const zapiekankaBolognese: Recipe = {
  name: "Zapiekanka Bolognese",
  type: "dinner",
  image: "zapiekanka-bolognese.jpg",
  ingredients: [
    { name: "makaron świderki", amount: 400, unit: "g" },
    { name: "mięso mielone", amount: 400, unit: "g" },
    { name: "pieczarki", amount: 250, unit: "g" },
    { name: "pomidor", amount: "1-2", unit: "szt" },
    { name: "cebula", amount: 1, unit: "szt" },
    { name: "papryka", amount: 1, unit: "szt" },
    { name: "ser żółty", amount: 200, unit: "g" },
    { name: "koncentrat pomidorowy", amount: 2, unit: "łyżeczki" },
    { name: "przyprawa bolognese" },
    { name: "ziele angielskie" },
    { name: "liść laurowy" },
    { name: "olej" },
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
