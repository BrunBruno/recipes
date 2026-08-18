import { dinnerSides } from "../../dinnerSides";
import { iFAT } from "../../ingredients/ingFat";
import { iFSH } from "../../ingredients/ingFish";
import { iLIQ } from "../../ingredients/ingLiquid";
import { iSPC } from "../../ingredients/ingSpice";
import type { Recipe } from "../../types";

const portions = 2;
const lososZPiekarnika: Recipe = {
  name: "Łosoś z Piekarnika",
  type: "dinner",
  cookingMethods: [["roasted", 20]],
  images: ["losos-z-piekarnika.jpg"],
  time: 30,
  portions: portions,
  taste: 5,
  difficulty: 1,
  ingredients: [
    {
      title: "",
      items: [
        { ing: iFSH.salmon, amount: 500 },
        { ing: iFAT.butter, amount: 2, unit: "lzi" },
        { ing: iLIQ.lemon_juice, amount: 20, unit: "ml" },
        { ing: iSPC.black_pepper },
        { ing: iSPC.salt },
      ],
    },
  ],
  extrasMain: {
    options: [
      dinnerSides("oven-potatoes-boats", portions),
      dinnerSides("oven-potatoes", portions),
      dinnerSides("oven-fries", portions),
    ],
    selected: 0,
  },
  steps: [
    {
      title: "",
      steps: [
        "Piekarnik rozgrzej do 200°C.",
        "Łososia osusz i ułóż skórą do dołu w naczyniu żaroodpornym lub na blasze wyłożonej papierem do pieczenia.",
        "Posmaruj rybę roztopionym masłem, następnie posól i oprósz czarnym pieprzem.",
        "Skrop sokiem z cytryny.",
        "Piecz przez około 15-20 minut, aż łosoś będzie upieczony, ale nadal soczysty.",
      ],
    },
  ],
  keyWords: ["ryba"],
};

export default lososZPiekarnika;
