import { dinnerSides } from "../../dinnerSides";
import { iFAT } from "../../ingredients/ingFat";
import { iFSH } from "../../ingredients/ingFish";
import { iFRT } from "../../ingredients/ingFruit";
import { iHRB } from "../../ingredients/ingHerb";
import { iSPC } from "../../ingredients/ingSpice";
import { iVEG } from "../../ingredients/ingVegetable";
import type { Recipe } from "../../types";

const portions = 4;
const kalmaryZCebulka: Recipe = {
  name: "Kalmary z Cebulką",
  type: "dinner",
  images: [""],
  time: 75,
  portions: portions,
  taste: null,
  difficulty: null,
  ingredients: [
    {
      title: "",
      items: [
        { ing: iFSH.frozen_squid, amount: 500, kw: true },
        { ing: iVEG.onion, amount: 500 },
        { ing: iFAT.olive_oil, amount: 200, unit: "ml" },
        { ing: iVEG.garlic, amount: 2, unit: "zbk" },
        { ing: iFRT.lemon, amount: 0.5, unit: "szt" },
        { ing: iHRB.parsley, amount: 0.5, unit: "lzi" },
        { ing: iHRB.bay_leaf, amount: 2, unit: "lst" },
        { ing: iSPC.black_pepper },
        { ing: iSPC.salt },
      ],
    },
  ],
  extrasMain: {
    options: [dinnerSides("rice", portions)],
    selected: 0,
  },
  extrasVeg: {
    options: [dinnerSides("sauerkraut-salad", portions)],
    selected: 0,
  },
  steps: [
    {
      title: "",
      steps: [
        "Kalmary pokroić na kawałki wielkości jednego kęsa.",
        "Na głębokiej patelni rozgrzać oliwę, dodać listek laurowy i kalmary.",
        "Smażyć, aż kawałki kalmara nabiorą złotej barwy.",
        "Dorzucić pokrojoną w cienkie plasterki cebulę, posiekany czosnek, pieprz i sól.",
        "Smażyć chwilę, aż cebula lekko się zeszkli.",
        "Następnie przykryć patelnię, zmniejszyć ogień i dusić godzinę, od czasu do czasu mieszając.",
        "Przed podaniem doprawić sokiem z cytryny, posypać natką pietruszki i udekorować kawałkami cytryny.",
      ],
    },
  ],
  keyWords: ["ryba", "morskie", "duszone", "ryż"],
  link: "https://konwaliewkuchni.blogspot.com/2011/08/duszone-kalmary-z-cebula.html",
};

export default kalmaryZCebulka;
