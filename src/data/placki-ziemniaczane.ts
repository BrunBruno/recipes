import type { Recipe } from "../types";

const plackiZiemniaczane: Recipe = {
  name: "Placki Ziemniaczane",
  type: "dinner",
  image: "",
  kcal: 400,
  time: 25,
  portions: 2,
  ingredients: [
    { name: "ziemniaki", amount: 4, unit: "szt", type: "veg" },
    { name: "cebula", amount: 1, unit: "szt", type: "veg" },
    { name: "czosnek", amount: 1, unit: "ząbek", type: "veg" },
    { name: "mąka", amount: 1, unit: "łyżka", type: "grn" },
    { name: "jajo", amount: 1, unit: "szt", type: "egg" },
    { name: "cząber", amount: null, unit: null, type: "spc" },
    { name: "pieprz czarny", amount: null, unit: null, type: "spc" },
    { name: "sól", amount: null, unit: null, type: "spc" },
    { name: "olej", amount: null, unit: null, type: "fat" },
  ],
  steps: [
    "Zetrzyj na tarce ziemniaki oraz cebulę.",
    "Odciśnij nadmiar wody przez sitko lub gazę.",
    "Dodaj mąkę oraz jajko i dokładnie wymieszaj.",
    "Dodaj przeciśnięty czosnek, cząber, pieprz i sól.",
    "Rozgrzej olej na patelni.",
    "Smaż placki, aż będą złociste i chrupiące z obu stron.",
  ],
};

export default plackiZiemniaczane;
