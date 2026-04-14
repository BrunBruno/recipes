import { iFAT } from "../../ingredients/ingFat";
import { iGRN } from "../../ingredients/ingGrain";
import { iJAR } from "../../ingredients/ingJAR";
import { iMET } from "../../ingredients/ingMeat";
import { iOTH } from "../../ingredients/ingOther";
import { iSPC } from "../../ingredients/ingSpice";
import type { Recipe } from "../../types";

const portions = 3;
const gulaszPoWegiersku: Recipe = {
  name: "Gulasz po Węgiersku",
  description:
    "Klasyczny gulasz po węgiersku z wołowiną, podawany z kopytkami i buraczkami, idealny na sycący obiad.",
  type: "dinner",
  images: ["gulasz-po-wegiersku.jpg"],
  time: 90,
  portions: portions,
  ingredients: [
    {
      title: "Gulasz",
      items: [
        { ingredient: iMET.stew_beef, amount: 500 },
        { ingredient: iFAT.oil, amount: 5, unit: "lz" },
        { ingredient: iOTH.water, amount: 250, unit: "ml" },
        { ingredient: iSPC.knorr_goulash_fix, amount: 1, unit: "opak" },
      ],
    },
    {
      title: "Przykładowe dodatki",
      items: [
        { ingredient: iGRN.gnocchi, amount: portions * 250 },
        { ingredient: iJAR.fried_beets, amount: portions * 150 },
        { ingredient: iSPC.salt },
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
        "Duś gulasz na małym ogniu przez około 1 godzinę, mieszając od czasu do czasu.",
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

export default gulaszPoWegiersku;
