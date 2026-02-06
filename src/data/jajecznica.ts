import type { Recipe } from "../types";

const jajecznica: Recipe = {
  name: "Jajecznica",
  type: "snack",
  image: "jajecznica.jpg",
  ingredients: [
    { name: "jajka", amount: "3-5", unit: "szt" },
    { name: "kiełbasa" },
    { name: "cebula" },
    { name: "pomidor" },
    { name: "szczypiorek" },
    { name: "masło" },
    { name: "sól" },
  ],
  steps: [
    "Pokrój wybrane składniki: kiełbasę, cebulę i pomidora.",
    "Podsmaż składniki na maśle.",
    "Wbij jajka na patelnię i dokładnie wymieszaj.",
    "Dopraw solą i posyp szczypiorkiem przed podaniem.",
  ],
};

export default jajecznica;
