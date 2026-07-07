import { iDIR } from "../../ingredients/ingDairy";
import { iFAT } from "../../ingredients/ingFat";
import { iGRN } from "../../ingredients/ingGrain";
import { iJAR } from "../../ingredients/ingJar";
import { iMET } from "../../ingredients/ingMeat";
import { iOTH } from "../../ingredients/ingOther";
import { iSNK } from "../../ingredients/ingSnack";
import { iSPC } from "../../ingredients/ingSpice";
import type { Recipe } from "../../types";

const portions = 3;
const nalesniki: Recipe = {
  name: "Naleśniki",
  description:
    "Klasyczne naleśniki przygotowane z mąki, jajek, mleka i odrobiny oleju. Ciasto jest gładkie i elastyczne, idealne do nadziewania ulubionymi farszami słodkimi lub wytrawnymi.",
  type: "dessert",
  images: [
    "nalesniki.jpg",
    "nalesniki-2.jpg",
    "nalesniki-3.jpg",
    "nalesniki-4.jpg",
  ],
  time: 20,
  portions: portions,
  executionDifficulty: null,
  ingredients: [
    {
      title: "",
      items: [
        { ing: iGRN.flour, amount: 200 },
        { ing: iMET.egg, amount: 2, unit: "szt" },
        { ing: iDIR.milk, amount: 300, unit: "ml" },
        { ing: iOTH.water, amount: 100, unit: "ml" },
        { ing: iFAT.oil, amount: 2, unit: "lz" },
        { ing: iOTH.sugar, amount: 1, unit: "lz" },
        {
          type: "choice",
          options: [
            {
              ing: iSNK.chocolate_cream,
              amount: portions * 30,
            },
            {
              ing: iSNK.nutella,
              amount: portions * 30,
            },
            {
              ing: iOTH.maple_syrup,
              amount: portions * 20,
            },
            {
              ing: iDIR.whipped_cream,
              amount: portions * 35,
            },
            {
              ing: iJAR.jam_strawberry,
              amount: portions * 25,
            },
            {
              ing: iFAT.peanut_butter,
              amount: portions * 25,
            },
          ],
          selected: 0,
        },
        { ing: iSPC.salt },
      ],
    },
    {
      title: "Proponowane dodatki",
      isAdd: true,
      items: [
        { ing: iSNK.chocolate_cream, exclude: true },
        { ing: iSNK.nutella, exclude: true },
        { ing: iOTH.maple_syrup, exclude: true },
        { ing: iDIR.whipped_cream, exclude: true },
        { ing: iJAR.jam_strawberry, exclude: true },
        { ing: iFAT.peanut_butter, exclude: true },
      ],
    },
  ],
  steps: [
    {
      title: "",
      steps: [
        "Do miski wbij jajka, dodaj mąkę, mleko, wodę, olej, cukier i szczyptę soli.",
        "Całość dokładnie wymieszaj trzepaczką lub mikserem, aż powstanie gładkie ciasto bez grudek.",
        "Rozgrzej patelnię do naleśników.",
        "Wlej cienką warstwę ciasta i rozprowadź po całej powierzchni patelni.",
        "Smaż naleśnik na średnim ogniu, aż się zetnie i lekko zarumieni.",
        "Obróć na drugą stronę i smaż jeszcze chwilę.",
        "Usmaż kolejne naleśniki z pozostałego ciasta.",
      ],
    },
  ],
  keyWords: ["naleśnik", "ciasto"],
};

export default nalesniki;
