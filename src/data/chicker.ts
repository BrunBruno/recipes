import type { Recipe } from "../types";

const chicker: Recipe = {
  name: "Chickery",
  type: "snack",
  image: "",
  ingredients: [
    { name: "pikantne polędwiczki", amount: 400, unit: "g" },
    { name: "bułki do chickerów", amount: 4, unit: "szt" },
    { name: "sałata", amount: 4, unit: "listki" },
    { name: "ketchup", amount: 1.5, unit: "łyżeczki" },
    { name: "sos sriracha", amount: 2, unit: "łyżeczki" },
    { name: "musztarda", amount: 2, unit: "łyżeczki" },
    { name: "majonez", amount: 1, unit: "łyżeczka" },
    { name: "miód", amount: 0.5, unit: "łyżeczki" },
  ],
  steps: [
    "Wymieszaj ketchup z sosem sriracha, aby uzyskać ostry sos.",
    "Wymieszaj musztardę, majonez i miód, aby uzyskać sos miodowo-musztardowy.",
    "Podsmaż gotowe polędwiczki.",
    "Bułki przekrój i podpiecz w tosterze.",
    "Umyj i porwij sałatę.",
    "Złóż chickery, przygotowując po dwie sztuki z różnymi sosami.",
  ],
};

export default chicker;
