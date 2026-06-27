import { dinnerSides } from "../../dinnerSides";
import { iDIR } from "../../ingredients/ingDairy";
import { iFAT } from "../../ingredients/ingFat";
import { iGRN } from "../../ingredients/ingGrain";
import { iMET } from "../../ingredients/ingMeat";
import { iSPC } from "../../ingredients/ingSpice";
import type { Recipe } from "../../types";

const portions = 5;
const kotletPoGoralsku: Recipe = {
  name: "Kotlety po Góralsku",
  description:
    "Kotlety po Góralsku - schabowe panierowane z boczkiem i żółtym serem, podawane z ziemniakami i podsmażaną kapustą kiszoną, aromatyzowane tymiankiem i papryką.",
  type: "dinner",
  images: ["kotlet-po-goralsku.jpg", "kotlet-po-goralsku-2.jpg"],
  time: 70,
  portions: portions,
  executionDifficulty: 4,
  ingredients: [
    {
      title: "",

      items: [
        { ing: iMET.pork_loin, amount: 10, unit: "plas" },
        { ing: iMET.bacon_slices, amount: 10, unit: "plas" },
        { ing: iMET.egg, amount: 2, unit: "szt" },
        { ing: iDIR.yellow_cheese, amount: 10, unit: "plas" },
        { ing: iGRN.breadcrumbs, amount: 150 },
        { ing: iGRN.flour, amount: 3, unit: "lz" },
        { ing: iFAT.oil, amount: 10, unit: "lz" },
        { ing: iSPC.thyme },
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
    options: [
      dinnerSides("sauteed-cabbage", portions),
      dinnerSides("pickled-cucumber", portions),
    ],
    selected: 0,
  },
  steps: [
    {
      title: "",
      steps: [
        "Plastry schabu rozbij tłuczkiem na cienkie kotlety.",
        "Oprósz przyprawami z obu stron.",
        "Każdy kotlet obtocz kolejno w mące, roztrzepanym jajku oraz bułce tartej.",
        "Podsmaż boczek, aż stanie się chrupiący.",
        "Na tej samej patelni rozgrzej olej i smaż kotlety na złoty kolor z obu stron.",
        "Na usmażone kotlety połóż boczek, a na wierzch plaster sera.",
        "Przykryj patelnię i podgrzewaj na małym ogniu, aż ser się rozpuści.",
      ],
    },
  ],
  keyWords: ["wieprzowina"],
};

export default kotletPoGoralsku;
