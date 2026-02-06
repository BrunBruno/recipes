import type { Recipe } from "../types";

const plackiZiemniaczane: Recipe = {
  name: "Placki Ziemniaczane",
  type: "dinner",
  image: "",
  ingredients: [
    { name: "ziemniaki", amount: 4, unit: "szt" },
    { name: "cebula", amount: 1, unit: "szt" },
    { name: "czosnek", amount: 1, unit: "ząbek" },
    { name: "mąka", amount: 1, unit: "łyżka" },
    { name: "jajo", amount: 1, unit: "szt" },
    { name: "cząber, pieprz czarny, sól" },
    { name: "olej" },
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
