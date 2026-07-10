import { dinnerSides } from "../../dinnerSides";
import { iDIR } from "../../ingredients/ingDairy";
import { iFAT } from "../../ingredients/ingFat";
import { iGRN } from "../../ingredients/ingGrain";
import { iLIQ } from "../../ingredients/ingLiquid";
import { iMET } from "../../ingredients/ingMeat";
import { iSPC } from "../../ingredients/ingSpice";
import { iVEG } from "../../ingredients/ingVegetable";
import type { Recipe } from "../../types";
import { fryingFat } from "../../utils";

const portions = 4;
const kurczakWSosiePieczarkowymFix: Recipe = {
  name: "Kurczak w Sosie Pieczarkowym",
  type: "dinner",
  images: [
    "kurczak-w-sosie-pieczarkowym.jpg",
    "kurczak-w-sosie-pieczarkowym-2.jpg",
    "kurczak-w-sosie-pieczarkowym-3.jpg",
    "kurczak-w-sosie-pieczarkowym-4.jpg",
  ],
  time: 40,
  portions: portions,
  taste: 4,
  difficulty: 1,
  ingredients: [
    {
      title: "",
      items: [
        { ing: iMET.chicken_breast, amount: 700 },
        { ing: iGRN.rice, amount: portions * 100 },
        { ing: iVEG.mushrooms, amount: 400 },
        { ing: iVEG.onion, amount: 120 },
        ...fryingFat(iFAT.oil, 5, "lz", 0.35),
        { ing: iLIQ.water, amount: 250, unit: "ml" },
        { ing: iDIR.cream_18, amount: 100 },
        { ing: iSPC.knorr_mushroom_sauce_fix, amount: 1, unit: "opak" },
        { ing: iSPC.black_pepper },
      ],
    },
  ],
  extrasMain: {
    options: [
      dinnerSides("penne-pasta", portions),
      dinnerSides("rice", portions),
    ],
    selected: 0,
  },
  extrasVeg: {
    options: [
      dinnerSides("steamed-vegetables", portions),
      dinnerSides("pickled-cucumber-vinegar", portions),
    ],
    selected: 0,
  },
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
