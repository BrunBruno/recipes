import type { Recipe } from "../types";

const salatkaKuskus: Recipe = {
  name: "Sałatka Kuskus",
  type: "salad",
  image: "",
  ingredients: [
    {
      name: "kuskus",
      amount: 1,
      unit: "opak",
      type: "grn",
    },
    {
      name: "jajka",
      amount: 4,
      unit: "szt",
      type: "egg",
    },
    {
      name: "tuńczyk w sosie własnym",
      amount: 2,
      unit: "opak",
      type: "fsh",
    },
    {
      name: "kukurydza",
      amount: 1,
      unit: "opak",
      type: "veg",
    },
    {
      name: "cebula",
      amount: 1,
      unit: "szt",
      type: "veg",
    },
    {
      name: "majonez",
      amount: 1,
      unit: "opak",
      type: "sau",
    },
    {
      name: "sól",
      amount: null,
      unit: null,
      type: "spc",
    },
    {
      name: "pieprz",
      amount: null,
      unit: null,
      type: "spc",
    },
  ],
  steps: [
    "Ugotuj jajka na twardo.",
    "Przygotuj kuskus zgodnie z instrukcją na opakowaniu i ostudź.",
    "Jajka, cebulę oraz tuńczyka pokrój na mniejsze kawałki.",
    "Kukurydzę odsącz z zalewy.",
    "Wszystkie składniki przełóż do miski, dodaj majonez i wymieszaj.",
    "Dopraw solą i pieprzem do smaku.",
  ],
};

export default salatkaKuskus;
