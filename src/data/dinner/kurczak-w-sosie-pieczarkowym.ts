import { iDIR } from "../../ingredients/ingDairy";
import { iFAT } from "../../ingredients/ingFat";
import { iGRN } from "../../ingredients/ingGrain";
import { iMET } from "../../ingredients/ingMeat";
import { iOTH } from "../../ingredients/ingOther";
import { iSPC } from "../../ingredients/ingSpice";
import { iVEG } from "../../ingredients/ingVegetable";
import type { Recipe } from "../../types";

const portions = 4;
const kurczakWSosiePieczarkowymFix: Recipe = {
  name: "Kurczak w Sosie Pieczarkowym (Fix)",
  description:
    "Delikatny filet z kurczaka duszony w kremowym sosie pieczarkowym z użyciem Knorr Fix. Szybki i sycący obiad dla całej rodziny.",
  type: "dinner",
  images: [""],
  time: 40,
  portions: portions,
  executionDifficulty: 1,
  ingredients: [
    {
      title: "Kurczak",
      items: [
        { ing: iMET.chicken_breast, amount: 700 },
        { ing: iGRN.rice, amount: portions * 100 },
        { ing: iVEG.mushrooms, amount: 400 },
        { ing: iVEG.onion, amount: 120 },
        { ing: iFAT.oil, amount: 5, unit: "lz" },
        { ing: iOTH.water, amount: 250, unit: "ml" },
        { ing: iDIR.cream_18, amount: 100 },
        { ing: iSPC.knorr_mushroom_sauce_fix, amount: 1, unit: "opak" },
        { ing: iSPC.black_pepper },
      ],
    },
  ],
  steps: [
    {
      title: "",
      steps: [
        "Ugotuj ryż według instrukcji na opakowaniu.",
        "Filet z kurczaka pokrój w kostkę lub paski.",
        "Cebulę posiekaj, a pieczarki pokrój w plasterki.",
        "Na patelni rozgrzej olej i podsmaż kurczaka, aż lekko się zarumieni.",
        "Dodaj cebulę oraz pieczarki i smaż kilka minut, aż zmiękną.",
        "W osobnym naczyniu wymieszaj Knorr Fix z wodą oraz śmietaną.",
        "Wlej sos na patelnię i dokładnie wymieszaj.",
        "Duś całość na małym ogniu około 10 minut, aż sos zgęstnieje.",
        "Dopraw pieprzem według uznania.",
        "Podawaj kurczaka na ugotowanym ryżu.",
      ],
    },
  ],
  keyWords: ["kurczak", "sos"],
};

export default kurczakWSosiePieczarkowymFix;
