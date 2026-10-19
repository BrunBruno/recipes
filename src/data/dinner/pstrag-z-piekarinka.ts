import { dinnerSides } from "../../dinnerSides";
import { iFAT } from "../../ingredients/ingFat";
import { iFSH } from "../../ingredients/ingFish";
import { iFRT } from "../../ingredients/ingFruit";
import { iSPC } from "../../ingredients/ingSpice";
import { iVEG } from "../../ingredients/ingVegetable";
import type { Recipe } from "../../types";

const portions = 2;
const pstragZPiekarnika: Recipe = {
  name: "Pstrąg z Piekarnika",
  type: "dinner",
  images: ["pstrag-z-piekarnika"],
  time: 35,
  portions: portions,
  taste: 3,
  difficulty: 2,
  ingredients: [
    {
      title: "",
      items: [
        { ing: iFSH.rainbow_trout, amount: 2, unit: "szt", kw: true },
        { ing: iFAT.butter, amount: 2, unit: "lzi" },
        { ing: iVEG.garlic, amount: 2, unit: "zbk" },
        { ing: iFRT.lemon, amount: 2, unit: "plas" },
        { ing: iSPC.fish_seasoning, amount: 1, unit: "lz" },
      ],
    },
  ],
  extrasMain: {
    options: [dinnerSides("oven-potatoes-boats", portions)],
    selected: 0,
  },
  extrasVeg: {
    options: [dinnerSides("pickled-cucumber", portions)],
    selected: 0,
  },
  steps: [
    {
      title: "",
      steps: [
        "Piekarnik rozgrzej do 200°C.",
        "Ryby oczyść, umyj i dokładnie osusz ręcznikiem papierowym.",
        "Czosnek przeciśnij przez praskę i dokładnie natrzyj pstrągi z zewnątrz oraz wewnątrz.",
        "Oprósz ryby przyprawą do ryb.",
        "Do środka każdej ryby włóż po kawałku masła.",
        "Ułóż pstrągi w naczyniu żaroodpornym lub na blasze wyłożonej papierem do pieczenia, a na wierzchu każdej ryby połóż po plastrze cytryny.",
        "Piecz przez około 20-25 minut, aż mięso będzie w pełni upieczone i łatwo odchodziło od ości.",
      ],
    },
  ],
  keyWords: ["ryba", "pieczone", "ziemniaki"],
};

export default pstragZPiekarnika;
