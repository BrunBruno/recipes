import { dinnerSides } from "../../dinnerSides";
import { iFAT } from "../../ingredients/ingFat";
import { iFSH } from "../../ingredients/ingFish";
import { iFRT } from "../../ingredients/ingFruit";
import { iSPC } from "../../ingredients/ingSpice";
import type { Recipe } from "../../types";

const portions = 3;
const pstragZPiekarnika: Recipe = {
  name: "Pstrąg z Piekarnika",
  type: "dinner",
  cookingMethods: [["roasted", 20, 200]],
  images: ["pstrag-z-piekarnika.jpg"],
  time: 30,
  portions: portions,
  taste: 5,
  difficulty: 1,
  ingredients: [
    {
      title: "",
      items: [
        { ing: iFSH.rainbow_trout_fillet, amount: 2, unit: "szt" },
        { ing: iFAT.butter, amount: 3, unit: "lzi" },
        { ing: iFRT.lemon, amount: 3, unit: "plas" },
        { ing: iSPC.black_pepper },
        { ing: iSPC.salt },
      ],
    },
  ],
  extrasMain: {
    options: [
      dinnerSides("oven-twisted-fries", portions),
      dinnerSides("oven-fries", portions),
    ],
    selected: 0,
  },
  steps: [
    {
      title: "",
      steps: [
        "Piekarnik rozgrzej do 200°C.",
        "Filety z pstrąga osusz i ułóż skórą do dołu w naczyniu żaroodpornym lub na blasze wyłożonej papierem do pieczenia.",
        "Wyjmij pozostałe ości pęsetą, jeśli nadal są obecne w filecie.",
        "Na każdym filecie rozłóż po cienkich kawałeczkach masła, następnie posól i oprósz czarnym pieprzem.",
        "Na filetach ułóż plasterki cytryny.",
        "Piecz przez około 15-20 minut, aż pstrąg będzie upieczony, ale nadal soczysty.",
      ],
    },
  ],
  keyWords: ["ryba"],
};

export default pstragZPiekarnika;
