import type { Recipe } from "../types";

const jajecznica: Recipe = {
  name: "Jajecznica",
  type: "snack",
  image: "jajecznica.jpg",
  ingredients: [
    { name: "jajka", amount: "3-5", unit: "szt", type: "egg" },
    { name: "kiełbasa", amount: null, unit: null, type: "met" },
    { name: "cebula", amount: null, unit: null, type: "veg" },
    { name: "pomidor", amount: null, unit: null, type: "veg" },
    { name: "szczypiorek", amount: null, unit: null, type: "veg" },
    { name: "masło", amount: null, unit: null, type: "fat" },
    { name: "sól", amount: null, unit: null, type: "spc" },
  ],
  steps: [
    "Pokrój wybrane składniki: kiełbasę, cebulę i pomidora.",
    "Podsmaż składniki na maśle.",
    "Wbij jajka na patelnię i dokładnie wymieszaj.",
    "Dopraw solą i posyp szczypiorkiem przed podaniem.",
  ],
};

export default jajecznica;
