import { dinnerSides } from "../../dinnerSides";
import { iFAT } from "../../ingredients/ingFat";
import { iGRN } from "../../ingredients/ingGrain";
import { iLIQ } from "../../ingredients/ingLiquid";
import { iMET } from "../../ingredients/ingMeat";
import { iSPC } from "../../ingredients/ingSpice";
import { iVEG } from "../../ingredients/ingVegetable";
import type { Recipe } from "../../types";
import { fryingFat } from "../../utils";

const portions = 3;
const kotletyMielone: Recipe = {
  name: "Kotlety Mielone",
  type: "dinner",
  cookingMethods: [["fried", 10]],
  images: ["kotlety-mielone.jpg", "kotlety-mielone-2.jpg"],
  time: 30,
  portions: portions,
  taste: 4,
  difficulty: 2,
  ingredients: [
    {
      title: "",
      items: [
        { ing: iMET.ground_pork, amount: 1, unit: "opak" },
        { ing: iGRN.kaiser_roll, amount: 1, unit: "szt" },
        { ing: iVEG.onion, amount: 1, unit: "szt" },
        { ing: iVEG.garlic, amount: 2, unit: "zbk" },
        { ing: iMET.egg, amount: 1, unit: "szt" },
        { ing: iGRN.breadcrumbs, amount: 100 },
        ...fryingFat(iFAT.oil, 8, "lz", 0.5),
        { ing: iLIQ.maggi },
        { ing: iSPC.black_pepper },
        { ing: iSPC.salt },
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
      dinnerSides("cream-cucumber-salad", portions),
      dinnerSides("beets-whole-vinegar", portions),
    ],
    selected: 0,
  },
  steps: [
    {
      title: "",
      steps: [
        "Bułkę namocz w wodzie, a następnie dokładnie odciśnij.",
        "Cebulę drobno posiekaj, czosnek przeciśnij przez praskę.",
        "W dużej misce wymieszaj mięso mielone, odciśniętą bułkę, cebulę, czosnek i jajko.",
        "Dopraw solą, pieprzem oraz opcjonalnie odrobiną maggi.",
        "Masę dokładnie wyrób ręką, aż składniki dobrze się połączą.",
        "Jeśli masa jest zbyt luźna, dodaj trochę bułki tartej, aby uzyskać odpowiednią konsystencję.",
        "Formuj kotlety (lekko spłaszczone kulki) i obtaczaj je w bułce tartej.",
        "Na patelni rozgrzej olej i smaż kotlety na średnim ogniu z obu stron na złoty kolor (ok. 4-5 minut z każdej strony).",
      ],
    },
  ],
  keyWords: ["mięso", "wieprzowina"],
};

export default kotletyMielone;
