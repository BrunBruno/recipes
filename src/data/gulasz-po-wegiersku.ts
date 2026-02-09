import { iFAT } from "../ingredients/ingFat";
import { iGRN } from "../ingredients/ingGrain";
import { iMET } from "../ingredients/ingMeat";
import { iOTH } from "../ingredients/ingOther";
import { iSPC } from "../ingredients/ingSpice";
import { iVEG } from "../ingredients/ingVegetable";
import type { Recipe } from "../types";

const gulaszPoWegiersku: Recipe = {
  name: "Gulasz po Węgiersku",
  type: "dinner",
  image: "",
  kcal: 520,
  time: 75,
  portions: 3,
  ingredients: [
    { ingredient: iMET.stew_beef, amount: 500 },
    { ingredient: iGRN.gnocchi, amount: 750, unit: "g" },
    { ingredient: iVEG.fried_beets, amount: 1, unit: "opak" },
    { ingredient: iFAT.oil, amount: 5, unit: "łyżka" },
    { ingredient: iOTH.water, amount: 500 },
    { ingredient: iSPC.knorr_goulash_fix, amount: 1, unit: "opak" },
  ],
  steps: [
    {
      title: "Gulasz",
      steps: [
        "Mięso wołowe pokrój w kostkę.",
        "Na patelni lub w garnku rozgrzej niewielką ilość oleju i podsmaż mięso, aż się zarumieni.",
        "W osobnym garnku wymieszaj Fix Knorr z 500 ml wody.",
        "Dodaj podsmażone mięso do garnka z sosem i całość zagotuj.",
        "Duś gulasz na małym ogniu przez około 1 godzinę, mieszając od czasu do czasu.",
      ],
    },
    {
      title: "Kopytka i Podanie",
      steps: [
        "Ugotuj gotowe kopytka zgodnie z instrukcją na opakowaniu i odcedź.",
        "Podawaj gulasz z ugotowanymi kopytkami.",
        "Dodaj porcję buraczków zasmażanych.",
      ],
    },
  ],
};

export default gulaszPoWegiersku;
