import { iDIR } from "../../ingredients/ingDairy";
import { iFAT } from "../../ingredients/ingFat";
import { iGRN } from "../../ingredients/ingGrain";
import { iHRB } from "../../ingredients/ingHerb";
import { iJAR } from "../../ingredients/ingJar";
import { iSPC } from "../../ingredients/ingSpice";
import { iVEG } from "../../ingredients/ingVegetable";
import type { Recipe } from "../../types";

const portions = 2;
const spaghettiPomidorowe: Recipe = {
  name: "Spaghetti Pomidorowe",
  type: "dinner",
  cookingMethods: ["boiled", "stewed"],
  images: ["spaghetti-pomidorowe.jpg", "spaghetti-pomidorowe-2.jpg"],
  time: 40,
  portions: portions,
  taste: 5,
  difficulty: 2,
  ingredients: [
    {
      title: "",
      items: [
        { ing: iGRN.spaghetti_pasta, amount: portions * 100 },
        { ing: iJAR.canned_tomatoes, amount: 2, unit: "opak" },
        { ing: iVEG.garlic, amount: 2, unit: "zbk" },
        { ing: iDIR.yellow_cheese, amount: portions * 50 },
        { ing: iFAT.butter, amount: 1, unit: "lzi" },
        { ing: iHRB.basil },
        { ing: iHRB.oregano },
        { ing: iSPC.black_pepper },
        { ing: iSPC.salt },
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
  keyWords: ["makaron", "sos"],
};

export default spaghettiPomidorowe;
