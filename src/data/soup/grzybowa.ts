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
  ingredients: [
    {
      title: "",
      items: [
        { ingredient: iVEG.dried_mushrooms, amount: 50 },
        { ingredient: iGRN.barley_groats, amount: 100 },
        { ingredient: iVEG.carrot, amount: 1, unit: "szt" },
        { ingredient: iVEG.parsley_root, amount: 1, unit: "szt" },
        { ingredient: iVEG.onion, amount: 1, unit: "szt" },
        { ingredient: iFAT.butter, amount: 1, unit: "lz" },
        { ingredient: iDIR.cream_30, amount: 100, unit: "ml" },
        { ingredient: iOTH.water, amount: 1500, unit: "ml" },
        { ingredient: iSPC.black_pepper },
        { ingredient: iSPC.salt },
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
