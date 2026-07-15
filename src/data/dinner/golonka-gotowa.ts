import { iMET } from "../../ingredients/ingMeat";
import type { Recipe } from "../../types";
import { dinnerSides } from "../../dinnerSides";

const portions = 2;
const golonkaGotowa: Recipe = {
  name: "Golonka Gotowa",
  type: "dinner",
  cookingMethods: [["roasted", 60]],
  images: ["golonka-gotowa.jpg"],
  time: 60,
  portions: portions,
  taste: 3,
  difficulty: 1,
  ingredients: [
    {
      title: "",
      items: [{ ing: iMET.pork_knuckle_ready, amount: 1, unit: "szt" }],
    },
  ],
  extrasMain: {
    options: [
      dinnerSides("kopytka-ready", portions),
      dinnerSides("silesian-dumplings-ready", portions),
      dinnerSides("boiled-potatoes", portions),
    ],

    selected: 0,
  },
  extrasVeg: {
    options: [
      dinnerSides("beets-fried-ready", portions),
      dinnerSides("beets-shredded-ready", portions),
    ],
    selected: 0,
  },
  steps: [
    {
      title: "",
      steps: [
        "Rozgrzej piekarnik do 180°C.",
        "Golonkę wyjmij z opakowania i przełóż do naczynia żaroodpornego razem z sosem z opakowania.",
        "Piecz przez około 50-60 minut, co jakiś czas polewając sosem, aż skórka będzie lekko chrupiąca.",
      ],
    },
  ],
  keyWords: ["mięso", "wieprzowina"],
};

export default golonkaGotowa;
