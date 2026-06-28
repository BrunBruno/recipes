import { dinnerSides } from "../../dinnerSides";
import { iFAT } from "../../ingredients/ingFat";
import { iJAR } from "../../ingredients/ingJar";
import { iMET } from "../../ingredients/ingMeat";
import { iSPC } from "../../ingredients/ingSpice";
import type { Recipe } from "../../types";
import { fryingFat } from "../../utils";

const portions = 4;
const pieczenWieprzowa: Recipe = {
  name: "Pieczeń Wieprzowa",
  description:
    "Soczysta pieczeń wieprzowa pieczona w rękawie, doprawiona musztardą i przyprawami, podawana z kaszą gryczaną oraz ogórkiem konserwowym.",
  type: "dinner",
  images: [
    "pieczen-wieprzowa.jpg",
    "pieczen-wieprzowa-2.jpg",
    "pieczen-wieprzowa-3.jpg",
  ],
  time: 100,
  portions: portions,
  executionDifficulty: null,
  ingredients: [
    {
      title: "",
      items: [
        { ing: iMET.pork_shoulder, amount: 125 * portions },
        { ing: iJAR.mustard, amount: 0.5 * portions, unit: "lz" },
        ...fryingFat(iFAT.oil, portions, "lz", 0.45),
        { ing: iSPC.marjoram, amount: 2, unit: "lzi" },
        { ing: iSPC.granulated_garlic, amount: 1, unit: "lzi" },
        { ing: iSPC.hot_paprika, amount: 0.5, unit: "lzi" },
        { ing: iSPC.salt },
      ],
    },
  ],
  extrasMain: {
    options: [
      dinnerSides("buckwheat", portions),
      dinnerSides("bulgur", portions),
    ],
    selected: 0,
  },
  extrasVeg: {
    options: [
      dinnerSides("pickled-cucumber-vinegar", portions),
      dinnerSides("pickled-cucumber", portions),
      dinnerSides("beets-whole-vinegar", portions),
    ],
    selected: 0,
  },
  steps: [
    {
      title: "",
      steps: [
        "Mięso umyj, osusz i natrzyj olejem oraz musztardą.",
        "Posyp mięso majerankiem, czosnkiem granulowanym, papryką ostrą, solą i pieprzem.",
        "Przełóż mięso do rękawa do pieczenia.",
        "Wstaw do piekarnika nagrzanego do 180°C i piecz przez 80-90 minut.",
        "W międzyczasie ugotuj kaszę gryczaną według instrukcji na opakowaniu.",
        "Ogórki konserwowe pokrój w plastry.",
        "Upieczone mięso pokrój w plastry i podawaj z kaszą oraz ogórkiem.",
      ],
    },
  ],
  keyWords: ["wieprzowina"],
};

export default pieczenWieprzowa;
