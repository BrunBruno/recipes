import { iFAT } from "../../ingredients/ingFat";
import { iLIQ } from "../../ingredients/ingLiquid";
import { iSPC } from "../../ingredients/ingSpice";
import { iVEG } from "../../ingredients/ingVegetable";
import type { Recipe } from "../../types";

const portions = 3;

const surowkaZPomidoraIOgorka: Recipe = {
  name: "Surówka z Pomidora i Ogórka",
  type: "salad",
  cookingMethods: [["raw", 0]],
  images: [""],
  time: 10,
  portions,
  taste: null,
  difficulty: 1,
  ingredients: [
    {
      title: "",
      items: [
        { ing: iVEG.tomato, amount: portions * 120 },
        { ing: iVEG.cucumber, amount: portions * 100 },
        { ing: iVEG.onion, amount: portions * 30 },
        { ing: iFAT.oil, amount: portions * 0.5, unit: "lz" },
        { ing: iLIQ.lemon_juice, amount: portions * 0.5, unit: "lz" },
        { ing: iSPC.black_pepper },
        { ing: iSPC.salt },
      ],
    },
  ],
  steps: [
    {
      title: "",
      steps: [
        "Pokrój pomidory i ogórki w kostkę.",
        "Cebulę pokrój w cienkie piórka lub drobną kostkę.",
        "Przełóż warzywa do miski.",
        "Dodaj olej oraz sok z cytryny.",
        "Dopraw solą i pieprzem.",
        "Całość delikatnie wymieszaj i podawaj od razu.",
      ],
    },
  ],
  keyWords: ["warzywa", "sałatka"],
};

export default surowkaZPomidoraIOgorka;
