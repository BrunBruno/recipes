import { iFAT } from "../ingredients/ingFat";
import { iMET } from "../ingredients/ingMeat";
import { iSPC } from "../ingredients/ingSpice";
import { iVEG } from "../ingredients/ingVegetable";
import type { Recipe } from "../types";

const omlet: Recipe = {
  name: "Omlet",
  type: "snack",
  images: [""],
  time: 15,
  portions: 1,
  ingredients: [
    { ingredient: iMET.egg, amount: 3, unit: "szt" },
    { ingredient: iVEG.bell_pepper, amount: 0.5, unit: "szt" },
    { ingredient: iFAT.butter },
    { ingredient: iSPC.salt },
    { ingredient: iSPC.black_pepper },
  ],
  steps: [
    {
      title: "",
      steps: [
        "Paprykę umyj, usuń gniazdo nasienne i pokrój w drobną kostkę lub paski.",
        "Na patelni rozgrzej niewielką ilość oleju lub masła i podsmaż paprykę przez 2-3 minuty.",
        "Jajka wbij do miski, dopraw solą i pieprzem, a następnie dokładnie roztrzep.",
        "Wlej jajka na patelnię z papryką i smaż na małym ogniu.",
        "Gdy spód omletu się zetnie, przykryj patelnię i smaż do momentu, aż całość będzie ścięta.",
        "Złóż omlet na pół lub podawaj w całości.",
      ],
    },
  ],
  keyWords: ["jajko", "smażone"],
};

export default omlet;
