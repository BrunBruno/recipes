import { iMET } from "../ingredients/ingMeat";
import { iSAU } from "../ingredients/ingSauce";
import { iSPC } from "../ingredients/ingSpice";
import { iVEG } from "../ingredients/ingVegetable";
import type { Recipe } from "../types";

const salatkaJarzynowa: Recipe = {
  name: "Sałatka Jarzynowa",
  type: "salad",
  image: "",
  time: 30,
  portions: 8,
  ingredients: [
    { ingredient: iVEG.carrot, amount: 3, unit: "szt" },
    { ingredient: iVEG.parsley_root, amount: 1, unit: "szt" },
    { ingredient: iVEG.celery_root, amount: 1, unit: "szt" },
    { ingredient: iVEG.canned_peas, amount: 1, unit: "opak" },
    { ingredient: iMET.egg, amount: 3, unit: "szt" },
    { ingredient: iSAU.mayonnaise, amount: 1, unit: "opak" },
    { ingredient: iSPC.salt },
    { ingredient: iSPC.black_pepper },
  ],
  steps: [
    {
      title: "",
      steps: [
        "Ugotuj warzywa oraz jajka do miękkości i ostudź.",
        "Obierz warzywa i jajka, a następnie pokrój wszystko w drobną kostkę.",
        "Dodaj groszek odsączony z zalewy.",
        "Wymieszaj wszystkie składniki z majonezem.",
        "Dopraw solą i pieprzem do smaku.",
      ],
    },
  ],
  keyWords: ["warzywa", "sałatka"],
};

export default salatkaJarzynowa;
