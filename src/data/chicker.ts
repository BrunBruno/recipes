import type { Recipe } from "../types";

const chicker: Recipe = {
  name: "Chickery",
  type: "snack",
  image: "",
  kcal: 520,
  time: 25,
  portions: 4,
  ingredients: [
    { name: "pikantne polędwiczki", amount: 400, unit: "g", type: "met" },
    { name: "bułki do chickerów", amount: 4, unit: "szt", type: "grn" },
    { name: "sałata", amount: 4, unit: "szt", type: "veg" },
    { name: "ketchup", amount: 1.5, unit: "łyżeczka", type: "sau" },
    { name: "sos sriracha", amount: 2, unit: "łyżeczka", type: "sau" },
    { name: "musztarda", amount: 2, unit: "łyżeczka", type: "sau" },
    { name: "majonez", amount: 1, unit: "łyżeczka", type: "sau" },
    { name: "miód", amount: 0.5, unit: "łyżeczka", type: "oth" },
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
