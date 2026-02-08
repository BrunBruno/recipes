import type { Recipe } from "../types";

const salatkaJarzynowa: Recipe = {
  name: "Sałatka Jarzynowa",
  type: "salad",
  image: "",
  kcal: 250,
  time: 30,
  portions: 4,
  ingredients: [
    {
      name: "majonez",
      amount: 1,
      unit: "opak",
      type: "sau",
    },
    {
      name: "marchew",
      amount: 3,
      unit: "szt",
      type: "veg",
    },
    {
      name: "pietruszka",
      amount: 1,
      unit: "szt",
      type: "veg",
    },
    {
      name: "seler",
      amount: 1,
      unit: "szt",
      type: "veg",
    },
    {
      name: "jajka",
      amount: 3,
      unit: "szt",
      type: "egg",
    },
    {
      name: "groszek konserwowy",
      amount: 1,
      unit: "opak",
      type: "veg",
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
    "Ugotuj warzywa oraz jajka do miękkości i ostudź.",
    "Obierz warzywa i jajka, a następnie pokrój wszystko w drobną kostkę.",
    "Dodaj groszek odsączony z zalewy.",
    "Wymieszaj wszystkie składniki z majonezem.",
    "Dopraw solą i pieprzem do smaku.",
  ],
};

export default salatkaJarzynowa;
