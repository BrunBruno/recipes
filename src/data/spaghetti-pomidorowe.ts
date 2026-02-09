import { iDIR } from "../ingredients/ingDairy";
import { iFAT } from "../ingredients/ingFat";
import { iGRN } from "../ingredients/ingGrain";
import { iSPC } from "../ingredients/ingSpice";
import { iVEG } from "../ingredients/ingVegetable";
import type { Recipe } from "../types";

const spaghettiPomidorowe: Recipe = {
  name: "Spaghetti Pomidorowe",
  type: "dinner",
  image: "",
  kcal: 400,
  time: 25,
  portions: 2,
  ingredients: [
    { ingredient: iGRN.spaghetti_pasta, amount: 200 },
    { ingredient: iVEG.canned_tomatoes, amount: 250, unit: "ml" },
    { ingredient: iVEG.garlic, amount: 2, unit: "ząbek" },
    { ingredient: iDIR.yellow_cheese, amount: 100 },
    { ingredient: iFAT.butter },
    { ingredient: iSPC.salt },
    { ingredient: iSPC.black_pepper },
    { ingredient: iSPC.basil },
    { ingredient: iSPC.oregano },
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
