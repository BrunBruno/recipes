import { dinnerSides } from "../../dinnerSides";
import { iFAT } from "../../ingredients/ingFat";
import { iMET } from "../../ingredients/ingMeat";
import { iSPC } from "../../ingredients/ingSpice";
import type { Recipe } from "../../types";

const portions = 4;
const kurczakZPiekarnika: Recipe = {
  name: "Kurczak z Piekarnika",
  type: "dinner",
  cookingMethods: [["roasted", 60]],
  images: ["kurczak-z-piekarnika.jpg", "kurczak-z-piekarnika-2.jpg"],
  time: 60,
  portions: portions,
  taste: 5,
  difficulty: 1,
  ingredients: [
    {
      title: "",
      items: [
        { ing: iMET.chicken_quarters, amount: 4, unit: "szt" },
        { ing: iFAT.butter, amount: 2, unit: "lzi" },
        { ing: iSPC.sweet_paprika },
        { ing: iSPC.hot_paprika },
        { ing: iSPC.smoked_paprika },
        { ing: iSPC.granulated_garlic },
        { ing: iSPC.black_pepper },
      ],
    },
  ],
  extrasMain: {
    options: [
      dinnerSides("boiled-potatoes-dry", portions),
      dinnerSides("oven-fries", portions),
    ],
    selected: 0,
  },
  extrasVeg: {
    options: [
      dinnerSides("beets-whole-vinegar", portions),
      dinnerSides("pickled-cucumber", portions),
    ],
    selected: 0,
  },
  steps: [
    {
      title: "",
      steps: [
        "Rozgrzej piekarnik do 190°C.",
        "Kurczaka umyj i osusz papierowym ręcznikiem.",
        "Ułóż kurczaka w naczyniu żaroodpornym i posyp przyprawami.",
        "Wstaw do piekarnika i piecz około 40-50 minut, aż mięso będzie miękkie, a skórka złocista.",
        "Na ostatnie 5-10 minut pieczenia, na każdej części kurczaka połóż mały kawałek masła, aby uzyskać chrupką skórkę.",
        "Wyjmij z piekarnika i odstaw na kilka minut przed podaniem.",
      ],
    },
  ],
  keyWords: ["mięso", "kurczak"],
};

export default kurczakZPiekarnika;
