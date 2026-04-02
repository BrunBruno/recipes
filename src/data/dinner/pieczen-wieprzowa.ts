import { iFAT } from "../../ingredients/ingFat";
import { iGRN } from "../../ingredients/ingGrain";
import { iMET } from "../../ingredients/ingMeat";
import { iSPC } from "../../ingredients/ingSpice";
import { iVEG } from "../../ingredients/ingVegetable";
import type { Recipe } from "../../types";

const pieczenWieprzowa: Recipe = {
  name: "Pieczeń Wieprzowa",
  description:
    "Soczysta pieczeń wieprzowa pieczona w rękawie, doprawiona musztardą i przyprawami, podawana z kaszą gryczaną oraz ogórkiem konserwowym.",
  type: "dinner",
  images: [""],
  time: 100,
  portions: 4,
  ingredients: [
    {
      title: "",
      items: [
        { ingredient: iMET.pork_shoulder, amount: 500 },
        { ingredient: iSPC.mustard, amount: 2, unit: "lz" },
        { ingredient: iFAT.oil, amount: 4, unit: "lz" },
        { ingredient: iSPC.marjoram, amount: 2, unit: "lzi" },
        { ingredient: iSPC.granulated_garlic, amount: 1, unit: "lzi" },
        { ingredient: iSPC.hot_paprika, amount: 0.5, unit: "lzi" },
        { ingredient: iSPC.salt },
      ],
    },
    {
      title: "Przykładowe dodatki",
      items: [
        { ingredient: iGRN.buckwheat, amount: 300 },
        { ingredient: iVEG.pickled_cucumber_vinegar, amount: 200 },
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
