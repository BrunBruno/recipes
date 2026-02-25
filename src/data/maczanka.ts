import { iFAT } from "../ingredients/ingFat";
import { iGRN } from "../ingredients/ingGrain";
import { iMET } from "../ingredients/ingMeat";
import type { Recipe } from "../types";

const maczanka: Recipe = {
  name: "Maczanka",
  type: "snack",
  images: [""],
  time: 15,
  portions: 1,
  ingredients: [
    {
      title: "",
      items: [
        { ingredient: iMET.sausage, amount: 1, unit: "pęto" },
        { ingredient: iFAT.butter, amount: 2, unit: "łyżeczka" },
        { ingredient: iGRN.kaiser_roll, amount: 1, unit: "szt" },
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
