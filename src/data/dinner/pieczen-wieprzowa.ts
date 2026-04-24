import { iFAT } from "../../ingredients/ingFat";
import { iGRN } from "../../ingredients/ingGrain";
import { iJAR } from "../../ingredients/ingJar";
import { iMET } from "../../ingredients/ingMeat";
import { iSPC } from "../../ingredients/ingSpice";
import type { Recipe } from "../../types";

const pieczenWieprzowa: Recipe = {
  name: "Pieczeń Wieprzowa",
  description:
    "Soczysta pieczeń wieprzowa pieczona w rękawie, doprawiona musztardą i przyprawami, podawana z kaszą gryczaną oraz ogórkiem konserwowym.",
  type: "dinner",
  images: [""],
  time: 100,
  portions: 4,
  executionDifficulty: null,
  ingredients: [
    {
      title: "",
      items: [
        { ing: iMET.pork_shoulder, amount: 500 },
        { ing: iJAR.mustard, amount: 2, unit: "lz" },
        { ing: iFAT.oil, amount: 4, unit: "lz" },
        { ing: iSPC.marjoram, amount: 2, unit: "lzi" },
        { ing: iSPC.granulated_garlic, amount: 1, unit: "lzi" },
        { ing: iSPC.hot_paprika, amount: 0.5, unit: "lzi" },
        { ing: iSPC.salt },
      ],
    },
    {
      title: "Przykładowe dodatki",
      items: [
        { ing: iGRN.buckwheat, amount: 300 },
        { ing: iJAR.pickled_cucumber_vinegar, amount: 200 },
      ],
    },
  ],
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
