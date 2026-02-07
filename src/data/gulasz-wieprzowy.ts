import type { Recipe } from "../types";

const gulaszWieprzowy: Recipe = {
  name: "Gulasz Wieprzowy",
  type: "dinner",
  image: "",
  ingredients: [
    { name: "mięso na gulasz", amount: 500, unit: "g", type: "met" },
    { name: "cebula", amount: 1, unit: "szt", type: "veg" },
    { name: "olej", amount: null, unit: null, type: "fat" },
    { name: "masło / smalec", amount: 1, unit: "łyżka", type: "fat" },
    { name: "mąka", amount: 1, unit: "łyżka", type: "grn" },
    { name: "śmietana", amount: 2, unit: "łyżka", type: "dir" },
    { name: "sól", amount: null, unit: null, type: "spc" },
    { name: "pieprz", amount: null, unit: null, type: "spc" },
    { name: "papryka", amount: null, unit: null, type: "spc" },
    { name: "czosnek granulowany", amount: null, unit: null, type: "spc" },
    { name: "chilli", amount: null, unit: null, type: "spc" },
    { name: "szczypiorek", amount: null, unit: null, type: "veg" },
  ],
  steps: [
    "Mięso podsmaż na oleju, następnie dodaj masło lub smalec i smaż przez około 30 minut.",
    "Zalej mięso wodą, dodaj posiekaną cebulę i duś, aż mięso będzie miękkie.",
    "W szklance wymieszaj mąkę, śmietanę oraz niewielką ilość wody.",
    "Dodaj mieszankę do gulaszu, aby go zagęścić.",
    "Dopraw solą, pieprzem, papryką, czosnkiem i chilli do smaku.",
    "Przed podaniem posyp szczypiorkiem.",
  ],
};

export default gulaszWieprzowy;
