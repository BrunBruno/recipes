import { iMET } from "../../ingredients/ingMeat";
import { iFAT } from "../../ingredients/ingFat";
import { iVEG } from "../../ingredients/ingVegetable";
import { iJAR } from "../../ingredients/ingJar";
import { iHRB } from "../../ingredients/ingHerb";
import { iLIQ } from "../../ingredients/ingLiquid";
import { iGRN } from "../../ingredients/ingGrain";
import { iDIR } from "../../ingredients/ingDairy";
import type { Recipe } from "../../types";
import { iSPC } from "../../ingredients/ingSpice";

const portions = 4;
const risottoPomidorowe: Recipe = {
  name: "Risotto Pomidorowe",
  type: "dinner",
  cookingMethods: [
    ["fried", 10],
    ["boiled", 25],
  ],
  images: ["risotto-pomidorowe.jpg"],
  time: 60,
  portions: portions,
  taste: 3,
  difficulty: 2,
  ingredients: [
    {
      title: "",
      items: [
        { ing: iMET.ground_pork, amount: 500 },
        { ing: iVEG.cabbage, amount: 300 },
        { ing: iGRN.rice, amount: 300 },
        { ing: iVEG.onion, amount: 1, unit: "szt" },
        { ing: iFAT.oil, amount: 2, unit: "lz" },
        { ing: iSPC.salt },
      ],
    },
    {
      title: "Sos",
      items: [
        { ing: iJAR.tomato_passata, amount: 500 },
        { ing: iJAR.tomato_paste, amount: 30 },
        { ing: iLIQ.vegetable_broth, amount: 300 },
        { ing: iGRN.flour, amount: 20 },
        { ing: iDIR.sour_cream, amount: 100 },
        { ing: iHRB.dill },
        { ing: iSPC.black_pepper },
        { ing: iSPC.salt },
      ],
    },
  ],
  steps: [
    {
      title: "",
      steps: [
        "Ryż ugotuj w osobnym garnku.",
        "Cebulę drobno posiekaj, a kapustę pokrój w cienkie paski.",
        "Na dużej patelni rozgrzej olej. Dodaj cebulę i smaż przez 2-3 minuty.",
        "Dodaj mięso mielone oraz kapustę. Dopraw solą i smaż przez około 7 minut, mieszając, aż mięso się lekko zarumieni, a kapusta zmięknie.",
        "Podsmażone mięso, cebulę i kapustę przełóż na talerz i odstaw.",
        "Na tej samej patelni wymieszaj passatę pomidorową, koncentrat pomidorowy i bulion warzywny.",
        "Dodaj mąkę, dokładnie wymieszaj i zagotuj sos.",
        "Dodaj wcześniej podsmażone mięso, warzywa i ryż. Wymieszaj i gotuj kolejne 8-10 minut.",
        "Zabiel śmietaną, dodaj koperek oraz pieprz. Wymieszaj i gotuj jeszcze 2 minuty.",
        "Na koniec spróbuj i w razie potrzeby dopraw solą oraz pieprzem.",
      ],
    },
  ],
  keyWords: ["ryż", "mięso"],
};
export default risottoPomidorowe;
