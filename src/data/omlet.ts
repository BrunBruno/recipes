import { iFAT } from "../ingredients/ingFat";
import { iMET } from "../ingredients/ingMeat";
import { iSPC } from "../ingredients/ingSpice";
import { iVEG } from "../ingredients/ingVegetable";
import type { Recipe } from "../types";

const omlet: Recipe = {
  name: "Omlet",
  description:
    "Prosty omlet z jajek z dodatkiem podsmażonej cebuli i papryki. Szybkie śniadanie lub przekąska, delikatne i puszyste, doprawione solą i pieprzem.",
  type: "snack",
  images: ["omlet.jpg"],
  time: 15,
  portions: 1,
  ingredients: [
    {
      title: "",
      items: [
        { ingredient: iMET.egg, amount: 3, unit: "szt" },
        { ingredient: iVEG.bell_pepper, amount: 0.5, unit: "szt" },
        { ingredient: iVEG.onion, amount: 0.25, unit: "szt" },
        { ingredient: iFAT.clarified_butter, amount: 1, unit: "lzi" },
        { ingredient: iSPC.salt },
        { ingredient: iSPC.black_pepper },
      ],
    },
  ],
  steps: [
    {
      title: "",
      steps: [
        "Warzywa pokrój w drobną kostkę.",
        "Na patelni rozgrzej niewielką ilość masła i podsmaż warzywa przez 2 - 3 minuty.",
        "Jajka wbij do miski, dopraw solą i pieprzem, a następnie dokładnie roztrzep.",
        "Wlej jajka na patelnię z warzywami i smaż na małym ogniu pod przykryciem.",
        "Gdy spód omletu się zetnie, ostrożnie przewróć omlet na drugą stronę.",
        "Złóż omlet na pół lub podawaj w całości.",
      ],
    },
  ],
  keyWords: ["jajko", "xxx"],
};

export default omlet;
