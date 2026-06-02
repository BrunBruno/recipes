import { iFAT } from "../../ingredients/ingFat";
import { iGRN } from "../../ingredients/ingGrain";
import { iJAR } from "../../ingredients/ingJar";
import { iMET } from "../../ingredients/ingMeat";
import { iOTH } from "../../ingredients/ingOther";
import { iSPC } from "../../ingredients/ingSpice";
import { iVEG } from "../../ingredients/ingVegetable";
import type { Recipe } from "../../types";

const portions = 3;
const kotletyMieloneFix: Recipe = {
  name: "Kotlety Mielone (Fix)",
  description:
    "Soczyste kotlety mielone przygotowane z pomocą Knorr Fix Soczyste Kotlety Mielone - prosty i klasyczny obiad dla całej rodziny.",
  type: "dinner",
  images: ["kotlety-mielone-fix.jpg"],
  time: 35,
  portions: portions,
  executionDifficulty: 1,
  ingredients: [
    {
      title: "",
      items: [
        { ing: iMET.ground_pork, amount: 500 },
        { ing: iGRN.breadcrumbs, amount: 20 },
        { ing: iOTH.water, amount: 175, unit: "ml" },
        { ing: iFAT.oil, amount: 80 },
        { ing: iSPC.knorr_meatballs_fix, amount: 1, unit: "opak" },
      ],
    },
    {
      title: "",
      isAdd: true,
      items: [
        { ing: iVEG.potato, amount: portions * 200 },
        { ing: iJAR.fried_beets, amount: portions * 150 },
        { ing: iSPC.dill },
        { ing: iSPC.black_pepper },
        { ing: iSPC.salt },
      ],
    },
  ],
  steps: [
    {
      title: "",
      steps: [
        "Fix zalej wrzącą wodą, odstaw na ok, 5 minut aby wchłonął się płyn",
        "Przełóż mięso mielone do miski.",
        "Dodaj Knorr Fix do mięsa i dokładnie wymieszaj.",
        "Uformuj średniej wielkości kotlety.",
        "Obtocz dodatkowo kotlety w bułce tartej.",
        "Rozgrzej olej na patelni.",
        "Smaż kotlety z obu stron pod częściowym przykryciem przez około 8 minut z każdej strony.",
        "Kotlety podlej lekko wodą i podparuj aby ugotowały się w środku.",
        "Podawaj na ciepło, najlepiej z ziemniakami i surówką.",
      ],
    },
    {
      title: "Przykładowe podanie",
      steps: [
        "Ugotuj ziemniaki w osolonej wodzie do miękkości.",
        "Odcedź je i posyp świeżym koperkiem.",
        "Podgrzej buraczki zasmażane na patelni lub w garnku.",
        "W razie potrzeby dopraw buraczki odrobiną soli lub cukru.",
        "Podawaj kotlety z ziemniakami posypanymi koperkiem i buraczkami zasmażanymi.",
      ],
    },
  ],
  keyWords: ["wieprzowina"],
};

export default kotletyMieloneFix;
