import type { Recipe } from "../types";

const gulasz: Recipe = {
  name: "Gulasz",
  type: "dinner",
  image: "",
  ingredients: [
    { name: "mięso na gulasz", amount: 0.5, unit: "kg" },
    { name: "cebula", amount: 1, unit: "szt" },
    { name: "olej" },
    { name: "masło" },
    { name: "smalec" },
    { name: "mąka", amount: 1, unit: "łyżka" },
    { name: "śmietana", amount: 2, unit: "łyżki" },
    { name: "sól" },
    { name: "pieprz" },
    { name: "papryka" },
    { name: "czosnek" },
    { name: "chilli" },
    { name: "szczypiorek" },
  ],
  steps: [
    "Mięso podsmaż na oleju, następnie dodaj masło i smaż przez około 30 minut.",
    "Zalej mięso wodą, dodaj posiekaną cebulę i duś, aż mięso będzie miękkie.",
    "W szklance wymieszaj mąkę, śmietanę oraz niewielką ilość wody.",
    "Dodaj mieszankę do gulaszu, aby go zagęścić.",
    "Dopraw solą, pieprzem, papryką, czosnkiem i chilli do smaku.",
    "Przed podaniem posyp szczypiorkiem.",
  ],
};

export default gulasz;
