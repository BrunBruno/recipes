import { iFAT } from "../ingredients/ingFat";
import { iGRN } from "../ingredients/ingGrain";
import { iMET } from "../ingredients/ingMeat";
import { iSAU } from "../ingredients/ingSauce";
import { iSPC } from "../ingredients/ingSpice";
import type { Recipe } from "../types";

const portions = 3;
const kurczakPoSeczuansku: Recipe = {
  name: "Kurczak po Seczuańsku",
  description:
    "Pikantny kurczak w stylu seczuańskim z gotowym sosem Ben's Original Chili Fusion. Szybki i aromatyczny obiad podawany z ryżem.",
  type: "dinner",
  images: [""],
  time: 30,
  portions: portions,
  ingredients: [
    {
      title: "",
      items: [
        { ingredient: iMET.chicken_breast, amount: 400 },
        { ingredient: iGRN.bulgur, amount: portions * 80 },
        { ingredient: iSAU.sechuan_chili_fusion, amount: 1, unit: "opak" },
        { ingredient: iFAT.oil, amount: 2, unit: "lz" },
        { ingredient: iSPC.chilli },
        { ingredient: iSPC.salt },
      ],
    },
  ],
  steps: [
    {
      title: "",
      steps: [
        "Ugotuj kaszę bulgur według instrukcji na opakowaniu.",
        "Pokrój pierś z kurczaka w kostkę i lekko dopraw solą.",
        "Na patelni rozgrzej olej i smaż kurczaka na średnim ogniu, aż się zarumieni.",
        "Dodaj sos Ben's Original Chili Fusion i dokładnie wymieszaj.",
        "Gotuj kilka minut, aż sos zgęstnieje i pokryje mięso.",
        "Opcjonalnie dopraw dodatkowym chili dla większej ostrości.",
        "Podawaj gorące z kaszą bulgur.",
      ],
    },
  ],
  keyWords: ["kurczak"],
};

export default kurczakPoSeczuansku;
