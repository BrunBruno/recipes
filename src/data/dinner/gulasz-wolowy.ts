import { dinnerSides } from "../../dinnerSides";
import { iFAT } from "../../ingredients/ingFat";
import { iHRB } from "../../ingredients/ingHerb";
import { iLIQ } from "../../ingredients/ingLiquid";
import { iMET } from "../../ingredients/ingMeat";
import { iSPC } from "../../ingredients/ingSpice";
import { iVEG } from "../../ingredients/ingVegetable";
import type { Recipe } from "../../types";

const portions = 3;
const gulaszWolowy: Recipe = {
  name: "Gulasz Wołowy",
  type: "dinner",
  country: "HUN",
  images: ["gulasz-wolowy"],
  time: 60,
  portions: portions,
  taste: 5,
  difficulty: 2,
  ingredients: [
    {
      title: "",
      items: [
        { ing: iMET.beef_stew, amount: 500, kw: true },
        { ing: iFAT.oil, amount: 1, unit: "lz" },
        { ing: iVEG.onion, amount: 1, unit: "szt" },
        { ing: iVEG.garlic, amount: 2, unit: "zbk" },
        { ing: iHRB.bay_leaf, amount: 2, unit: "szt" },
        { ing: iSPC.allspice, amount: 3, unit: "ziar" },
        { ing: iLIQ.water, amount: 0.6, unit: "l" },
        { ing: iSPC.goulash_seasoning },
      ],
    },
  ],
  extrasMain: {
    options: [dinnerSides("boiled-potatoes-dry", portions)],
    selected: 0,
  },
  extrasVeg: {
    options: [
      dinnerSides("beets-fried-ready", portions),
      dinnerSides("beets-shredded-ready", portions),
    ],
    selected: 0,
  },
  steps: [
    {
      title: "Gulasz",
      steps: [
        "Mięso wołowe pokrój w grubą, około 2 cm kostkę.",
        "Cebulę pokrój w plastry, a czosnek drobno posiekaj.",
        "Rozgrzej olej w garnku i podsmaż mięso, aż zacznie się rumienić.",
        "Dodaj cebulę oraz czosnek i smaż jeszcze przez kilka minut.",
        "Wlej około 500 ml wody.",
        "Dodaj liście laurowe, ziele angielskie oraz przyprawę do gulaszu.",
        "Przykryj garnek częściowo pokrywką i duś około 30 minut, aż mięso będzie miękkie, a sos zgęstnieje.",
      ],
    },
  ],
  keyWords: ["mięso", "wołowina", "sos", "duszone", "ziemniaki"],
};

export default gulaszWolowy;
