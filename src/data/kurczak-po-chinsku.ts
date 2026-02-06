import type { Recipe } from "../types";

const kurczakPoChinsku: Recipe = {
  name: "Kurczak po Chińsku",
  type: "dinner",
  image: "./kurczak-po-chinsku.jpg",
  ingredients: [
    { name: "pierś z kurczaka", amount: 400, unit: "g" },
    { name: "marchew", amount: 120, unit: "g" },
    { name: "papryka", amount: 100, unit: "g" },
    { name: "por", amount: 120, unit: "g" },
    { name: "ryż", amount: 100, unit: "g" },
    { name: "przyprawa do dań po chińsku", amount: 1, unit: "szt" },
    { name: "olej roślinny" },
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
