import { iFAT } from "../../ingredients/ingFat";
import { iGRN } from "../../ingredients/ingGrain";
import { iLIQ } from "../../ingredients/ingLiquid";
import { iMET } from "../../ingredients/ingMeat";
import { iSPC } from "../../ingredients/ingSpice";
import { iVEG } from "../../ingredients/ingVegetable";
import type { Recipe } from "../../types";

const spaghettiBolognesePikantne: Recipe = {
  name: "Spaghetti Bolognese Pikantne",
  description:
    "Pikantne spaghetti bolognese z mięsem mielonym, cebulą i selerem w aromatycznym sosie.",
  type: "dinner",
  images: [""],
  time: 25,
  portions: 3,
  executionDifficulty: 1,
  ingredients: [
    {
      title: "",
      items: [
        { ing: iMET.ground_pork, amount: 300 },
        { ing: iGRN.penne_pasta, amount: 300 },
        { ing: iVEG.onion, amount: 1, unit: "szt" },
        { ing: iVEG.celery_root, amount: 100 },
        { ing: iFAT.oil, amount: 3, unit: "lz" },
        { ing: iLIQ.water, amount: 250, unit: "ml" },
        { ing: iSPC.knorr_bolognese_chili_fix, amount: 1, unit: "opak" },
      ],
    },
  ],
  steps: [
    {
      title: "",
      steps: [
        "Mięso mielone podsmaż przez około 8 minut na rozgrzanym oleju.",
        "Dodaj posiekaną cebulę oraz starty seler i smaż razem z mięsem.",
        "Fix wymieszaj z 250 ml wody i dodaj do mięsa.",
        "Całość doprowadź do wrzenia, a następnie duś na małym ogniu przez około 10 minut, mieszając od czasu do czasu.",
        "Ugotuj makaron al dente zgodnie z instrukcją na opakowaniu.",
        "Podawaj sos z ugotowanym makaronem.",
      ],
    },
  ],
  keyWords: ["makaron", "sos"],
};

export default spaghettiBolognesePikantne;
