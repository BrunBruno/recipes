import type { Recipe } from "../types";

const spaghettiPomidorowe: Recipe = {
  name: "Spaghetti Pomidorowe",
  type: "dinner",
  image: "",
  ingredients: [
    { name: "makaron spaghetti", amount: "2 x 100", unit: "g", type: "grn" },
    {
      name: "pomidory całe z puszki lub słoika",
      amount: 250,
      unit: "ml",
      type: "veg",
    },
    { name: "ser żółty", amount: "2 x 50", unit: "g", type: "che" },
    { name: "czosnek", amount: 2, unit: "ząbek", type: "veg" },
    { name: "pieprz", amount: null, unit: null, type: "spc" },
    { name: "sól", amount: null, unit: null, type: "spc" },
    { name: "bazylia", amount: null, unit: null, type: "spc" },
    { name: "oregano", amount: null, unit: null, type: "spc" },
    { name: "masło", amount: null, unit: null, type: "fat" },
  ],
  steps: [
    "Podsmaż czosnek krótko na maśle, uważając aby się nie przypalił.",
    "Dodaj pomidory z puszki lub pół słoika.",
    "Rozgnieć pomidory na jednolitą masę.",
    "Gotuj sos aż do zgęstnienia.",
    "Dopraw sos bazylią, solą i pieprzem.",
    "Ugotuj makaron spaghetti przez około 10 minut.",
    "Zetrzyj ser żółty.",
    "Podawaj makaron z sosem pomidorowym posypany startym serem.",
  ],
};

export default spaghettiPomidorowe;
