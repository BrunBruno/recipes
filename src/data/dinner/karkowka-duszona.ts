import { dinnerSides } from "../../dinnerSides";
import { iFAT } from "../../ingredients/ingFat";
import { iJAR } from "../../ingredients/ingJar";
import { iMET } from "../../ingredients/ingMeat";
import { iSPC } from "../../ingredients/ingSpice";
import { iVEG } from "../../ingredients/ingVegetable";
import type { Recipe } from "../../types";
import { fryingFat } from "../../utils";

const portions = 5;
const karkowkaDuszona: Recipe = {
  name: "Karkówka Duszona",
  description:
    "Delikatna karkówka duszona z musztardą i cebulą, podawana z ziemniakami i surówką colesław, idealna na sycący obiad.",
  type: "dinner",
  images: [
    "karkowka-duszona.jpg",
    "karkowka-duszona-2.jpg",
    "karkowka-duszona-3.jpg",
  ],
  time: 60,
  portions: portions,
  executionDifficulty: 2,
  ingredients: [
    {
      title: "",
      items: [
        { ing: iMET.pork_neck, amount: 2, unit: "opak" },
        ...fryingFat(iFAT.oil, 5, "lz", 0.3),
        { ing: iJAR.mustard_sarepska, amount: 10, unit: "lzi" },
        { ing: iVEG.onion, amount: 1, unit: "szt" },
        { ing: iSPC.black_pepper },
        { ing: iSPC.salt },
      ],
    },
  ],
  extrasMain: {
    options: [
      dinnerSides("boiled-potatoes-dry", portions),
      dinnerSides("oven-fries", portions),
    ],
    selected: 0,
  },
  extrasVeg: {
    options: [
      dinnerSides("coleslaw-ready", portions),
      dinnerSides("beets-whole-vinegar", portions),
      dinnerSides("pickled-cucumber", portions),
    ],
    selected: 0,
  },
  steps: [
    {
      title: "",
      steps: [
        "Karkówkę posól, popieprz i dokładnie natrzyj musztardą.",
        "Krótko podsmaż mięso na patelni z olejem.",
        "Przełóż mięso do garnka i dodaj olej pozostały ze smażenia oraz niewielką ilość wody.",
        "Duś pod przykryciem przez około 40 minut.",
        "Cebulę pokrój i podsmaż na patelni z masłem.",
        "Dodaj cebulę do duszącego się mięsa i wymieszaj.",
      ],
    },
  ],
  keyWords: ["wieprzowina"],
};

export default karkowkaDuszona;
