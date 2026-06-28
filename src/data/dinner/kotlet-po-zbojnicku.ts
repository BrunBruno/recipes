import { iFAT } from "../../ingredients/ingFat";
import { iMET } from "../../ingredients/ingMeat";
import { iSPC } from "../../ingredients/ingSpice";
import { iVEG } from "../../ingredients/ingVegetable";
import type { Recipe } from "../../types";
import { iDIR } from "../../ingredients/ingDairy";
import { iGRN } from "../../ingredients/ingGrain";
import { dinnerSides } from "../../dinnerSides";
import { fryingFat } from "../../utils";

const portions = 5;
const kotletPoZbojnicku: Recipe = {
  name: "Kotlety po Zbójnicku",
  description:
    "Soczyste kotlety schabowe zapiekane z pieczarkami, cebulą i żółtym serem. Syte danie obiadowe o wyrazistym smaku.",
  type: "dinner",
  images: ["kotlet-po-zbojnicku.jpg", "kotlet-po-zbojnicku-2.jpg"],
  time: 90,
  portions: portions,
  executionDifficulty: 4,
  ingredients: [
    {
      title: "",
      items: [
        { ing: iMET.pork_loin, amount: 2 * portions, unit: "plas" },
        { ing: iVEG.mushrooms, amount: 150 },
        { ing: iVEG.onion, amount: 100 },
        { ing: iDIR.yellow_cheese, amount: 150 },
        { ing: iMET.egg, amount: 2, unit: "szt" },
        { ing: iGRN.breadcrumbs, amount: 5, unit: "lz" },
        ...fryingFat(iFAT.oil, portions * 2 + 2, "lz", 0.45),
        { ing: iSPC.vegetable_seasoning },
        { ing: iSPC.sweet_paprika },
        { ing: iSPC.black_pepper },
        { ing: iSPC.salt },
      ],
    },
  ],
  extrasMain: {
    options: [
      dinnerSides("boiled-potatoes", portions),
      dinnerSides("oven-fries", portions),
    ],
    selected: 0,
  },
  extrasVeg: {
    options: [dinnerSides("corn-salad-ready", portions)],
    selected: 0,
  },
  steps: [
    {
      title: "",
      steps: [
        "Pieczarki pokrój w plasterki, a cebulę w drobną kostkę.",
        "Na patelni rozgrzej tłuszcz, zeszklij cebulę, następnie dodaj pieczarki i smaż, aż odparują i się zarumienią.",
        "Dopraw farsz solą, pieprzem i papryką.",
        "Schab oczyść z błonek i lekko rozbij tłuczkiem przez folię.",
        "Dopraw solą, pieprzem i opcjonalnie jarzynką, a następnie obtocz w jajku i bułe tartej.",
        "Na patelni rozgrzej tłuszcz i smaż kotlety po 2-3 minuty z każdej strony.",
        "Przełóż kotlety do naczynia żaroodpornego.",
        "Na każdym kotlecie ułóż pieczarki z cebulą i posyp startym serem.",
        "Zapiekaj w piekarniku nagrzanym do 180°C przez 10-15 minut, aż ser się roztopi i lekko zrumieni.",
      ],
    },
  ],
  keyWords: ["wieprzowina", "ser"],
};

export default kotletPoZbojnicku;
