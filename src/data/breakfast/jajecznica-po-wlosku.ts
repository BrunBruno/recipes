import { iDIR } from "../../ingredients/ingDairy";
import { iFAT } from "../../ingredients/ingFat";
import { iMET } from "../../ingredients/ingMeat";
import { iSPC } from "../../ingredients/ingSpice";
import { iVEG } from "../../ingredients/ingVegetable";
import type { Recipe } from "../../types";

const jajecznicaPoWlosku: Recipe = {
  name: "Jajecznica po Włosku",
  type: "breakfast",
  images: [""],
  time: 0,
  portions: 0,
  taste: null,
  difficulty: null,
  ingredients: [
    {
      title: "",
      items: [
        { ing: iMET.egg, amount: 4, unit: "szt" },
        { ing: iVEG.spinach, amount: 50 },
        { ing: iVEG.sun_dried_tomatoes, amount: 20 },
        { ing: iDIR.hard_cheese, amount: 20 },
        { ing: iFAT.clarified_butter, amount: 1, unit: "lzi" },
        { ing: iSPC.black_pepper },
        { ing: iSPC.salt },
      ],
    },
  ],
  steps: [],
  keyWords: ["jajka", "włoskie"],
};

export default jajecznicaPoWlosku;
