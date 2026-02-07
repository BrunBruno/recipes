import type { Recipe } from "../types";

const kurczakPoChinsku: Recipe = {
  name: "Kurczak po Chińsku",
  type: "dinner",
  image: "./kurczak-po-chinsku.jpg",
  ingredients: [
    { name: "pierś z kurczaka", amount: 400, unit: "g", type: "met" },
    { name: "marchew", amount: 120, unit: "g", type: "veg" },
    { name: "papryka", amount: 100, unit: "g", type: "veg" },
    { name: "por", amount: 120, unit: "g", type: "veg" },
    { name: "ryż", amount: "3 x 100", unit: "g", type: "grn" },
    {
      name: "przyprawa do dań po chińsku",
      amount: 1,
      unit: "szt",
      type: "spc",
    },
    { name: "olej roślinny", amount: null, unit: null, type: "fat" },
  ],
  steps: [
    "Mięso usmaż na oleju.",
    "Pokrój warzywa w paski i dodaj do mięsa.",
    "Rozmieszaj przyprawę w 250 ml wody i wlej na patelnię.",
    "Gotuj pod przykryciem przez około 10 minut, aż warzywa będą miękkie.",
    "Podawaj z ugotowanym ryżem.",
  ],
};

export default kurczakPoChinsku;
