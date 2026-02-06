import type { Recipe } from "../types";

const spaghettiPomidorowe: Recipe = {
  name: "Spaghetti Pomidorowe",
  type: "dinner",
  image: "",
  ingredients: [
    { name: "makaron spaghetti", amount: "2 x 100", unit: "g" },
    { name: "pomidory całe z puszki lub słoika", amount: 250, unit: "ml" },
    { name: "ser żółty", amount: "2 x 50", unit: "g" },
    { name: "czosnek", amount: 2, unit: "ząbki" },
    { name: "pieprz, sól, bazylia, oregano" },
    { name: "masło" },
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
