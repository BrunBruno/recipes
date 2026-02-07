import type { Recipe } from "../types";

const kurczakZPomidorem: Recipe = {
  name: "Kurczak z Pomidorami",
  type: "dinner",
  image: "",
  ingredients: [
    { name: "pierś z kurczaka", amount: null, unit: null, type: "met" },
    { name: "ser żółty", amount: 0.5, unit: "kostka", type: "che" },
    { name: "pomidor", amount: 3, unit: "szt", type: "veg" },
    { name: "majonez", amount: 1, unit: "łyżka", type: "sau" },
    { name: "śmietana", amount: 1, unit: "łyżka", type: "dir" },
    { name: "cebula", amount: 0.5, unit: "szt", type: "veg" },
    { name: "oliwa lub olej", amount: null, unit: null, type: "fat" },
    { name: "papryka", amount: null, unit: null, type: "spc" },
    { name: "czosnek", amount: null, unit: null, type: "veg" },
    { name: "zioła prowansalskie", amount: null, unit: null, type: "spc" },
    { name: "czosnek niedźwiedzi", amount: null, unit: null, type: "spc" },
    { name: "pieprz", amount: null, unit: null, type: "spc" },
    { name: "sól", amount: null, unit: null, type: "spc" },
  ],
  steps: [
    "Natłuść naczynie żaroodporne oliwą lub olejem i ułóż paski cebuli.",
    "Pokrój mięso z kurczaka i ułóż je w naczyniu.",
    "Przypraw mięso solą, pieprzem, papryką oraz czosnkiem.",
    "W miseczce wymieszaj majonez ze śmietaną i przyprawami.",
    "Posmaruj kurczaka przygotowaną mieszanką.",
    "Pokrój pomidory i ułóż je na mięsie.",
    "Posyp całość startym serem.",
    "Piecz przez około 60 minut (lub dłużej, aż mięso będzie miękkie).",
  ],
};

export default kurczakZPomidorem;
