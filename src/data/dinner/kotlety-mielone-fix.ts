import { dinnerSides } from "../../dinnerSides";
import { iFAT } from "../../ingredients/ingFat";
import { iGRN } from "../../ingredients/ingGrain";
import { iMET } from "../../ingredients/ingMeat";
import { iOTH } from "../../ingredients/ingOther";
import { iSPC } from "../../ingredients/ingSpice";
import type { Recipe } from "../../types";
import { fryingFat } from "../../utils";

const portions = 3;
const kotletyMieloneFix: Recipe = {
  name: "Kotlety Mielone",
  description:
    "Soczyste kotlety mielone przygotowane z pomocą Knorr Fix Soczyste Kotlety Mielone - prosty i klasyczny obiad dla całej rodziny.",
  type: "dinner",
  images: [
    "kotlety-mielone-fix.jpg",
    "kotlety-mielone-fix-2.jpg",
    "kotlety-mielone-fix-3.jpg",
  ],
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
        ...fryingFat(iFAT.oil, 80, "g", 0.5),
        { ing: iSPC.knorr_meatballs_fix, amount: 1, unit: "opak" },
      ],
    },
  ],
  extrasMain: {
    options: [
      dinnerSides("mashed-potatoes", portions),
      dinnerSides("boiled-potatoes", portions),
    ],
    selected: 0,
  },
  extrasVeg: {
    options: [
      dinnerSides("carrot-and-peas", portions),
      dinnerSides("beets-fried-ready", portions),
      dinnerSides("beets-shredded-ready", portions),
      dinnerSides("beets-whole-vinegar", portions),
    ],
    selected: 0,
  },
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
  ],
  keyWords: ["wieprzowina"],
};

export default kotletyMieloneFix;
