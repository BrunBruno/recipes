import type { Recipe } from "../types";

const karkowkaDuszona: Recipe = {
  name: "Karkówka Duszona",
  type: "dinner",
  image: "",
  kcal: 650,
  time: 50,
  portions: 5,
  ingredients: [
    { name: "karkówka", amount: 2, unit: "opak", type: "met" },
    { name: "cebula", amount: 1, unit: "szt", type: "veg" },
    { name: "musztarda sarepska", amount: null, unit: null, type: "sau" },
    { name: "sól", amount: null, unit: null, type: "spc" },
    { name: "pieprz", amount: null, unit: null, type: "spc" },
    { name: "olej", amount: null, unit: null, type: "fat" },
    { name: "masło", amount: null, unit: null, type: "fat" },
  ],
  steps: [
    "Karkówkę posól, popieprz i dokładnie natrzyj musztardą.",
    "Krótko podsmaż mięso na patelni z olejem.",
    "Przełóż mięso do garnka i dodaj olej pozostały ze smażenia oraz niewielką ilość wody.",
    "Duś pod przykryciem przez około 40 minut.",
    "Cebulę pokrój i podsmaż na patelni z masłem (opcjonalnie).",
    "Dodaj cebulę do duszącego się mięsa i wymieszaj.",
  ],
};

export default karkowkaDuszona;
