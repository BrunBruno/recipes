import { iFAT } from "../../ingredients/ingFat";
import { iGRN } from "../../ingredients/ingGrain";
import { iJAR } from "../../ingredients/ingJar";
import { iMET } from "../../ingredients/ingMeat";
import { iOTH } from "../../ingredients/ingOther";
import { iSPC } from "../../ingredients/ingSpice";
import type { Recipe } from "../../types";

const portions = 3;
const gulaszPoWegierskuFix: Recipe = {
  name: "Gulasz po Węgiersku (Fix)",
  description:
    "Klasyczny gulasz po węgiersku z wołowiną, podawany z kopytkami i buraczkami, idealny na sycący obiad.",
  type: "dinner",
  images: ["gulasz-po-wegiersku-fix.jpg"],
  time: 90,
  portions: portions,
  executionDifficulty: 2,
  ingredients: [
    {
      title: "Gulasz",
      items: [
        { ing: iMET.stew_beef, amount: 500 },
        { ing: iFAT.oil, amount: 5, unit: "lz" },
        { ing: iOTH.water, amount: 250, unit: "ml" },
        { ing: iSPC.knorr_goulash_fix, amount: 1, unit: "opak" },
      ],
    },
    {
      title: "Przykładowe dodatki",
      items: [
        { ing: iGRN.gnocchi, amount: portions * 250 },
        { ing: iJAR.fried_beets, amount: portions * 150 },
        { ing: iSPC.salt },
      ],
    },
  ],
  steps: [
    {
      title: "",
      steps: [
        "Mięso wołowe pokrój w kostkę.",
        "Na patelni lub w garnku rozgrzej niewielką ilość oleju i podsmaż mięso, aż się zarumieni.",
        "W osobnym garnku wymieszaj Fix Knorr z 250 ml wody.",
        "Dodaj podsmażone mięso do garnka z sosem i całość zagotuj.",
        "Duś gulasz na małym ogniu przez około 1 godzinę, mieszając od czasu do czasu aby sos się nie przypalił.",
      ],
    },
    {
      title: "Przykładowe podanie",
      steps: [
        "Ugotuj kopytka zgodnie z instrukcją na opakowaniu i odcedź.",
        "Podawaj gulasz z porcją ugotowanych kopytek.",
        "Obok dodaj porcję buraczków zasmażanych.",
      ],
    },
  ],
  keyWords: ["wołowina", "sos"],
};

export default gulaszPoWegierskuFix;
