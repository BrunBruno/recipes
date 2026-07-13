import { dinnerSides } from "../../dinnerSides";
import { iFAT } from "../../ingredients/ingFat";
import { iLIQ } from "../../ingredients/ingLiquid";
import { iMET } from "../../ingredients/ingMeat";
import { iSPC } from "../../ingredients/ingSpice";
import type { Recipe } from "../../types";
import { fryingFat } from "../../utils";

const portions = 3;
const gulaszPoWegierskuFix: Recipe = {
  name: "Gulasz po Węgiersku",
  type: "dinner",
  cookingMethods: [
    ["fried", "10-15"],
    ["stewed", "60-80"],
  ],
  images: ["gulasz-po-wegiersku-fix.jpg"],
  time: 90,
  portions: portions,
  taste: 5,
  difficulty: 2,
  ingredients: [
    {
      title: "",
      items: [
        { ing: iMET.stew_beef, amount: 500 },
        ...fryingFat(iFAT.oil, 5, "lz", 0.3),
        { ing: iLIQ.water, amount: 250, unit: "ml" },
        { ing: iSPC.knorr_goulash_fix, amount: 1, unit: "opak" },
      ],
    },
  ],
  extrasMain: {
    options: [
      dinnerSides("kopytka-ready", portions),
      dinnerSides("boiled-potatoes-dry", portions),
    ],

    selected: 0,
  },
  extrasVeg: {
    options: [
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
        "Mięso wołowe pokrój w kostkę.",
        "Na patelni lub w garnku rozgrzej niewielką ilość oleju i podsmaż mięso, aż się zarumieni.",
        "W osobnym garnku wymieszaj Fix Knorr z 250 ml wody.",
        "Dodaj podsmażone mięso do garnka z sosem i całość zagotuj.",
        "Duś gulasz na małym ogniu przez około 1 godzinę, mieszając od czasu do czasu aby sos się nie przypalił.",
      ],
    },
  ],
  keyWords: ["mięso", "wołowina", "sos"],
};

export default gulaszPoWegierskuFix;
