import { iFAT } from "../../ingredients/ingFat";
import { iJAR } from "../../ingredients/ingJar";
import { iLIQ } from "../../ingredients/ingLiquid";
import { iSPC } from "../../ingredients/ingSpice";
import { iVEG } from "../../ingredients/ingVegetable";
import type { Recipe } from "../../types";

const portions = 3;

const surowkaZKiszonejKapusty: Recipe = {
  name: "Surówka z Kiszonej Kapusty",
  type: "salad",
  images: [""],
  time: 10,
  portions: portions,
  taste: null,
  difficulty: 1,
  ingredients: [
    {
      title: "",
      items: [
        { ing: iJAR.sauerkraut, amount: portions * 100 },
        { ing: iVEG.carrot, amount: portions * 50 },
        { ing: iFAT.oil, amount: portions * 0.5, unit: "lzi" },
        { ing: iLIQ.lemon_juice, amount: portions * 0.25, unit: "lz" },
        { ing: iSPC.black_pepper },
        { ing: iSPC.salt },
      ],
    },
  ],
  steps: [
    {
      title: "",
      steps: [
        "Zetrzyj marchewkę na tarce.",
        "Połącz z kapustą kiszoną.",
        "Dodaj olej oraz sok z cytryny.",
        "Dopraw solą i pieprzem.",
        "Dokładnie wymieszaj.",
      ],
    },
  ],
  keyWords: ["warzywa"],
};

export default surowkaZKiszonejKapusty;
