import { dinnerSides } from "../../dinnerSides";
import { iFAT } from "../../ingredients/ingFat";
import { iGRN } from "../../ingredients/ingGrain";
import { iHRB } from "../../ingredients/ingHerb";
import { iMET } from "../../ingredients/ingMeat";
import { iSPC } from "../../ingredients/ingSpice";
import type { Recipe } from "../../types";
import { fryingFat } from "../../utils";

const portions = 5;
const kotletSchabowy: Recipe = {
  name: "Kotlety Schabowe",
  type: "dinner",
  cookingMethods: [["fried", 8]],
  images: ["kotlet-schabowy.jpg", "kotlet-schabowy-2.jpg"],
  time: 50,
  portions: portions,
  taste: 5,
  difficulty: 3,
  ingredients: [
    {
      title: "",
      items: [
        { ing: iMET.pork_loin, amount: 10, unit: "plas" },
        { ing: iMET.egg, amount: 2, unit: "szt" },
        { ing: iGRN.flour, amount: 3, unit: "lz" },
        { ing: iGRN.breadcrumbs, amount: 150 },
        ...fryingFat(iFAT.oil, 10, "lz", 0.5),
        { ing: iHRB.thyme },
        { ing: iHRB.marjoram },
        { ing: iHRB.herbes_de_provence },
        { ing: iSPC.sweet_paprika },
        { ing: iSPC.granulated_garlic },
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
    options: [
      dinnerSides("cream-cucumber-salad", portions),
      dinnerSides("stir-fry-vegetables", portions),
      dinnerSides("beets-whole-vinegar", portions),
    ],
    selected: 0,
  },
  steps: [
    {
      title: "",
      steps: [
        "Rozbij plastry schabu na cienkie kotlety.",
        "Przypraw każdy kotlet wybranymi przyprawami.",
        "Obtocz każdy kotlet w mące, następnie w rozbełtanym jajku, a na końcu w bułce tartej.",
        "Na patelni rozgrzej olej na średnim ogniu.",
        "Smaż kotlety z obu stron na złoty kolor, aż będą dobrze usmażone.",
        "Odsącz z nadmiaru tłuszczu na papierowym ręczniku i podawaj od razu.",
      ],
    },
  ],
  keyWords: ["mięso", "wieprzowina"],
};

export default kotletSchabowy;
