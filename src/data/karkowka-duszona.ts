import type { Recipe } from "../types";

const karkowkaDuszona: Recipe = {
  name: "Karkówka duszona",
  type: "dinner",
  image: "",
  ingredients: [
    { name: "karkówka", amount: 1, unit: "paczka" },
    { name: "cebula", amount: 1, unit: "szt" },
    { name: "musztarda sarepska" },
    { name: "sól" },
    { name: "pieprz" },
    { name: "olej" },
    { name: "masło" },
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
