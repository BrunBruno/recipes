import { iFAT } from "../../ingredients/ingFat";
import { iGRN } from "../../ingredients/ingGrain";
import { iMET } from "../../ingredients/ingMeat";
import type { Recipe } from "../../types";

const maczanka: Recipe = {
  name: "Maczanka",
  description:
    "Prosta i szybka maczanka - kiełbasa podsmażana na maśle i podawana w bułce kajzerce. Idealna przekąska na jeden posiłek.",
  type: "snack",
  images: ["maczanka.jpg"],
  time: 15,
  portions: 1,
  executionDifficulty: 1,
  ingredients: [
    {
      title: "",
      items: [
        { ing: iMET.sausage, amount: 1, unit: "peto" },
        { ing: iFAT.butter, amount: 1, unit: "lzi" },
        { ing: iFAT.clarified_butter, amount: 1, unit: "lzi" },
        { ing: iGRN.kaiser_roll, amount: 1, unit: "szt" },
      ],
    },
  ],
  steps: [
    {
      title: "",
      steps: [
        "Kiełbasę pokrój w plasterki.",
        "Na patelni rozpuść kawałek masła.",
        "Ułóż równomiernie plastry kiełbasy na patelni.",
        "Smaż z jednej i drugiej strony, aż będą lekko przypieczone.",
        "Bułkę kajzerkę przekrój na pół.",
        "Posmaruj wnętrze bułki masłem.",
      ],
    },
  ],
  keyWords: ["pieczywo"],
};

export default maczanka;
