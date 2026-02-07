import type { Recipe } from "../types";

const kotletyZKurczaka: Recipe = {
  name: "Kotlety z Kurczaka",
  type: "dinner",
  image: "kotlety-z-kurczaka.jpg",
  ingredients: [
    { name: "kurczak (filety)", amount: "1", unit: "opak", type: "met" },
    { name: "jajko", amount: 1, unit: "szt", type: "egg" },
    { name: "mąka", amount: "1", unit: "łyżka", type: "grn" },
    { name: "olej do smażenia", amount: null, unit: null, type: "fat" },
    { name: "pieprz", amount: null, unit: null, type: "spc" },
    { name: "czosnek granulowany", amount: null, unit: null, type: "spc" },
    { name: "niedźwiedzi czosnek", amount: null, unit: null, type: "spc" },
    { name: "papryka słodka", amount: null, unit: null, type: "spc" },
    {
      name: "jarzynka (przyprawa warzywna)",
      amount: null,
      unit: null,
      type: "spc",
    },
    { name: "majeranek", amount: null, unit: null, type: "spc" },
    {
      name: "zioła prowansalskie",
      amount: null,
      unit: null,
      type: "spc",
    },
    { name: "curry", amount: null, unit: null, type: "spc" },
  ],
  steps: [
    "Kurczaka pokrój na małe kotleciki.",
    "Wbij jajko do garnka i rozbełtaj.",
    "Dodaj czubatą łyżkę mąki i wymieszaj, aby powstało ciasto.",
    "Dodaj przyprawy (opcjonalnie curry jeśli chcemy uzyskać kurczaka curry).",
    "Dokładnie wymieszaj kotlety w cieście.",
    "Na niewielkiej ilości oleju rozgrzanego na patelni smaż kotlety z obu stron, aż będą złociste i usmażone w środku.",
    "Podawaj na ciepło, np. z ziemniakami lub surówką.",
  ],
};

export default kotletyZKurczaka;
