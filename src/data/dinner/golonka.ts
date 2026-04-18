import { iMET } from "../../ingredients/ingMeat";
import { iSPC } from "../../ingredients/ingSpice";
import { iGRN } from "../../ingredients/ingGrain";
import type { Recipe } from "../../types";
import { iJAR } from "../../ingredients/ingJar";

const portions = 2;
const golonka: Recipe = {
  name: "Golonka Gotowa",
  description:
    "Gotowa golonka pieczona w piekarniku, podawana z kluskami śląskimi polanymi sosem z pieczenia oraz buraczkami zasmażanymi.",
  type: "dinner",
  images: [""],
  time: 60,
  portions: portions,
  executionDifficulty: 1,
  ingredients: [
    {
      title: "",
      items: [
        { ingredient: iMET.pork_knuckle_ready, amount: 1, unit: "szt" },
        { ingredient: iGRN.silesian_dumplings, amount: portions * 250 },
        { ingredient: iJAR.fried_beets, amount: portions * 150 },
        { ingredient: iSPC.salt },
      ],
    },
  ],
  steps: [
    {
      title: "",
      steps: [
        "Rozgrzej piekarnik do 180°C.",
        "Golonkę wyjmij z opakowania i przełóż do naczynia żaroodpornego razem z sosem z opakowania.",
        "Piecz przez około 50-60 minut, co jakiś czas polewając sosem, aż skórka będzie lekko chrupiąca.",
        "W międzyczasie ugotuj kluski śląskie według instrukcji na opakowaniu.",
        "Po upieczeniu wyjmij golonkę, a powstałym sosem polej kluski.",
        "Podawaj golonkę z kluskami śląskimi i buraczkami.",
      ],
    },
  ],
  keyWords: ["wieprzowina"],
};

export default golonka;
