import type { Recipe } from "../types";

const kurczakZPomidorem: Recipe = {
  name: "Kurczak z Pomidorami",
  type: "dinner",
  image: "",
  ingredients: [
    { name: "pierś z kurczaka" },
    { name: "ser żółty", amount: 0.5, unit: "kostki" },
    { name: "pomidor", amount: 3, unit: "szt" },
    { name: "majonez", amount: 1, unit: "łyżka" },
    { name: "śmietana", amount: 1, unit: "łyżka" },
    { name: "cebula", amount: 0.5, unit: "szt" },
    { name: "oliwa lub olej" },
    { name: "papryka" },
    { name: "czosnek" },
    { name: "zioła prowansalskie" },
    { name: "czosnek niedźwiedzi" },
    { name: "pieprz" },
    { name: "sól" },
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
