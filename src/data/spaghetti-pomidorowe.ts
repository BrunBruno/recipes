import { iDIR } from "../ingredients/ingDairy";
import { iFAT } from "../ingredients/ingFat";
import { iGRN } from "../ingredients/ingGrain";
import { iSPC } from "../ingredients/ingSpice";
import { iVEG } from "../ingredients/ingVegetable";
import type { Recipe } from "../types";

const spaghettiPomidorowe: Recipe = {
  name: "Spaghetti Pomidorowe",
  type: "dinner",
  images: ["spaghetti-pomidorowe.jpg"],
  time: 40,
  portions: 2,
  ingredients: [
    {
      title: "",
      items: [
        { ingredient: iGRN.spaghetti_pasta, amount: "2 × 100" },
        { ingredient: iVEG.canned_tomatoes, amount: 2, unit: "opak" },
        { ingredient: iVEG.garlic, amount: 2, unit: "ząbek" },
        { ingredient: iDIR.yellow_cheese, amount: "2 × 50" },
        { ingredient: iFAT.butter },
        { ingredient: iSPC.basil },
        { ingredient: iSPC.oregano },
        { ingredient: iSPC.black_pepper },
        { ingredient: iSPC.salt },
      ],
    },
  ],
  steps: [
    {
      title: "",
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
    },
  ],
  keyWords: ["makaron", "sos", "xxx"],
};

export default spaghettiPomidorowe;
