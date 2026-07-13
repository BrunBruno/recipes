import { dinnerSides } from "../../dinnerSides";
import { iFAT } from "../../ingredients/ingFat";
import { iGRN } from "../../ingredients/ingGrain";
import { iHRB } from "../../ingredients/ingHerb";
import { iMET } from "../../ingredients/ingMeat";
import { iSPC } from "../../ingredients/ingSpice";
import type { Recipe } from "../../types";
import { fryingFat } from "../../utils";

const portions = 5;
const kotletySchaboweWPlatkach: Recipe = {
  name: "Kotlety w Płatkach",
  type: "dinner",
  cookingMethods: [["fried", "6-8"]],
  images: [
    "kotlet-schabowy-w-platkach.jpg",
    "kotlet-schabowy-w-platkach-2.jpg",
  ],
  time: 50,
  portions: portions,
  taste: 4,
  difficulty: 3,
  ingredients: [
    {
      title: "",
      items: [
        { ing: iMET.pork_loin, amount: 10, unit: "plas" },
        { ing: iMET.egg, amount: 2, unit: "szt" },
        { ing: iGRN.cornflakes, amount: 160 },
        ...fryingFat(iFAT.oil, 10, "lz", 0.55),
        { ing: iHRB.herbes_de_provence },
        { ing: iSPC.granulated_garlic },
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
        "Schab pokrój na kotlety, rozbij tłuczkiem i oprósz solą oraz pieprzem.",
        "Płatki kukurydziane lekko rozgnieć lub zmiel w moździerzu, aby nie były w całości.",
        "Jajka roztrzep w misce.",
        "Każdy kotlet obtocz najpierw w jajku, a następnie w płatkach kukurydzianych.",
        "Rozgrzej olej na patelni.",
        "Smaż kotlety na średnim ogniu z obu stron na złoty kolor.",
        "Po usmażeniu odsącz na ręczniku papierowym i podawaj na ciepło.",
      ],
    },
  ],
  keyWords: ["mięso", "wieprzowina"],
};

export default kotletySchaboweWPlatkach;
