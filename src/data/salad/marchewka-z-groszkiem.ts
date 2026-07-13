import { iFAT } from "../../ingredients/ingFat";
import { iGRN } from "../../ingredients/ingGrain";
import { iJAR } from "../../ingredients/ingJar";
import { iOTH } from "../../ingredients/ingOther";
import { iSPC } from "../../ingredients/ingSpice";
import { iVEG } from "../../ingredients/ingVegetable";
import type { Recipe } from "../../types";

const portions = 3;

const marchewkaZGroszkiem: Recipe = {
  name: "Marchewka z Groszkiem",
  type: "salad",
  cookingMethods: ["fried"],
  images: [""],
  time: 25,
  portions: portions,
  taste: 3,
  difficulty: 2,
  ingredients: [
    {
      title: "",
      items: [
        { ing: iVEG.carrot, amount: portions, unit: "szt" },
        { ing: iJAR.canned_peas, amount: portions * 100 },
        { ing: iFAT.butter, amount: portions * 0.25, unit: "lzi" },
        { ing: iGRN.flour, amount: portions * 0.25, unit: "lz" },
        { ing: iOTH.sugar },
        { ing: iSPC.salt },
      ],
    },
  ],
  steps: [
    {
      title: "",
      steps: [
        "Marchewkę obierz, umyj i pokrój w kostkę.",
        "Zalej niewielką ilością wody i gotuj z odrobiną soli do miękkości.",
        "Dodaj odsączony groszek.",
        "Na patelni przygotuj zasmażkę z masła i mąki.",
        "Dodaj ją do marchewki z groszkiem i wymieszaj.",
        "Gotuj chwilę do zgęstnienia.",
        "Dopraw cukrem i solą.",
      ],
    },
  ],
  keyWords: ["warzywa"],
};

export default marchewkaZGroszkiem;
