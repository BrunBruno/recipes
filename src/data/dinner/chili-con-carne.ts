import { iFAT } from "../../ingredients/ingFat";
import { iGRN } from "../../ingredients/ingGrain";
import { iJAR } from "../../ingredients/ingJar";
import { iLIQ } from "../../ingredients/ingLiquid";
import { iMET } from "../../ingredients/ingMeat";
import { iSPC } from "../../ingredients/ingSpice";
import { iVEG } from "../../ingredients/ingVegetable";
import type { Recipe } from "../../types";

const chiliConCarne: Recipe = {
  name: "Chili con Carne",
  type: "dinner",
  cookingMethods: [
    ["boiled", 15],
    ["fried", 8],
    ["stewed", 4],
  ],
  images: [""],
  time: 25,
  portions: 4,
  taste: null,
  difficulty: null,
  ingredients: [
    {
      title: "",
      items: [
        { ing: iMET.ground_pork, amount: 300 },
        { ing: iJAR.canned_red_beans, amount: 120 },
        { ing: iVEG.corn, amount: 340 },
        { ing: iVEG.onion, amount: 1, unit: "szt" },
        { ing: iFAT.rapeseed_oil, amount: 45, unit: "ml" },
        { ing: iLIQ.water, amount: 300, unit: "ml" },
        { ing: iGRN.rice, amount: 200 },
        { ing: iSPC.knorr_chili_con_carne_fix, amount: 1, unit: "opak" },
      ],
    },
  ],
  steps: [
    {
      title: "",
      steps: [
        "Ryż ugotuj zgodnie z instrukcją na opakowaniu.",
        "Cebulę pokrój w kostkę.",
        "Na patelni rozgrzej olej i zeszklij cebulę.",
        "Dodaj mięso mielone i podsmaż przez kilka minut, aż mięso się zarumieni.",
        "Dodaj przepłukaną fasolę oraz kukurydzę.",
        "Zawartość saszetki Fix Chili con Carne wymieszaj z 300 ml wody i wlej na patelnię.",
        "Całość dokładnie wymieszaj i gotuj około 4 minuty, mieszając od czasu do czasu.",
        "Podawaj z ugotowanym ryżem. Ryż można zastąpić chipsami nachos.",
      ],
    },
  ],
  keyWords: ["mięso", "ryż"],
};

export default chiliConCarne;
