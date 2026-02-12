import { iFAT } from "../ingredients/ingFat";
import { iMET } from "../ingredients/ingMeat";
import { iSPC } from "../ingredients/ingSpice";
import type { Recipe } from "../types";

const kurczakZPiekarnika: Recipe = {
  name: "Kurczak z Piekarnika",
  type: "dinner",
  images: [""],
  time: 55,
  portions: 4,
  ingredients: [
    { ingredient: iMET.chicken_quarters, amount: 4, unit: "szt" },
    { ingredient: iFAT.butter },
    { ingredient: iSPC.sweet_paprika },
    { ingredient: iSPC.hot_paprika },
    { ingredient: iSPC.smoked_paprika },
    { ingredient: iSPC.granulated_garlic },
    { ingredient: iSPC.black_pepper },
  ],
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
  keyWords: ["kurczak", "pieczone", "mięso"],
};

export default kurczakZPiekarnika;
