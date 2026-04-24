import { iVEG } from "../../ingredients/ingVegetable";
import { iFAT } from "../../ingredients/ingFat";
import { iSPC } from "../../ingredients/ingSpice";
import { iDIR } from "../../ingredients/ingDairy";
import type { Recipe } from "../../types";
import { iOTH } from "../../ingredients/ingOther";
import { iGRN } from "../../ingredients/ingGrain";

const portions = 4;
const grzybowa: Recipe = {
  name: "Grzybowa",
  description:
    "Aromatyczna zupa grzybowa na bazie suszonych grzybów z dodatkiem warzyw, śmietany i kaszy lub lanego ciasta.",
  type: "soup",
  images: [""],
  time: 60,
  portions: portions,
  executionDifficulty: null,
  ingredients: [
    {
      title: "",
      items: [
        { ing: iVEG.dried_mushrooms, amount: 50 },
        { ing: iGRN.barley_groats, amount: 100 },
        { ing: iVEG.carrot, amount: 1, unit: "szt" },
        { ing: iVEG.parsley_root, amount: 1, unit: "szt" },
        { ing: iVEG.onion, amount: 1, unit: "szt" },
        { ing: iFAT.butter, amount: 1, unit: "lz" },
        { ing: iDIR.cream_30, amount: 100, unit: "ml" },
        { ing: iOTH.water, amount: 1500, unit: "ml" },
        { ing: iSPC.black_pepper },
        { ing: iSPC.salt },
      ],
    },
  ],
  steps: [
    {
      title: "",
      steps: [
        "Suszone grzyby dokładnie wypłucz, zalej świeżą wodą i namocz przez noc.",
        "Dodaj marchewkę, pietruszkę i cebulę, następnie gotuj aż grzyby będą miękkie.",
        "Wyjmij grzyby - możesz je drobno pokroić i dodać z powrotem do zupy lub wykorzystać do innego dania.",
        "Wywar zagotuj, dodaj masło oraz dopraw solą i pieprzem.",
        "Dodaj kaszę lub lane ciasto według uznania i gotuj do miękkości.",
        "Na koniec dodaj śmietanę, wymieszaj i podawaj.",
      ],
    },
  ],
  keyWords: ["zupa"],
};

export default grzybowa;
