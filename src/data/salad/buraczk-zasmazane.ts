import { iVEG } from "../../ingredients/ingVegetable";
import { iFAT } from "../../ingredients/ingFat";
import { iGRN } from "../../ingredients/ingGrain";
import { iSPC } from "../../ingredients/ingSpice";
import type { Recipe } from "../../types";
import { iOTH } from "../../ingredients/ingOther";

const portions = 4;
const buraczkiZasmazane: Recipe = {
  name: "Buraczki Zasmażane",
  type: "salad",
  images: [""],
  time: 45,
  portions: portions,
  taste: null,
  difficulty: null,
  ingredients: [
    {
      title: "Buraczki",
      items: [
        { ing: iVEG.beetroot, amount: 800 },
        { ing: iFAT.butter, amount: 30 },
        { ing: iGRN.flour, amount: 1, unit: "lz" },
        { ing: iOTH.sugar, amount: 1, unit: "lz" },
        { ing: iSPC.black_pepper },
        { ing: iSPC.salt },
      ],
    },
  ],
  steps: [
    {
      title: "Przygotowanie buraczków",
      steps: [
        "Buraki dokładnie umyj i ugotuj w skórce do miękkości, przez około 30-40 minut, w zależności od wielkości.",
        "Odcedź buraki, pozostaw do przestudzenia, a następnie obierz ze skórki.",
        "Zetrzyj buraki na tarce o grubych oczkach.",
        "Na patelni rozpuść masło.",
        "Dodaj mąkę i mieszaj przez chwilę, aby powstała lekka zasmażka.",
        "Dodaj starte buraki i dokładnie wymieszaj.",
        "Podgrzewaj na małym ogniu przez kilka minut, od czasu do czasu mieszając.",
        "Dopraw solą, pieprzem i cukrem do smaku.",
        "Podawaj na ciepło jako dodatek do obiadu.",
      ],
    },
  ],
  keyWords: ["warzywa"],
};

export default buraczkiZasmazane;
