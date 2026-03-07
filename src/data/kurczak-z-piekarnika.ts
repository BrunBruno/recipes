import { iFAT } from "../ingredients/ingFat";
import { iMET } from "../ingredients/ingMeat";
import { iSPC } from "../ingredients/ingSpice";
import { iVEG } from "../ingredients/ingVegetable";
import type { Recipe } from "../types";

const kurczakZPiekarnika: Recipe = {
  name: "Kurczak z Piekarnika",
  type: "dinner",
  images: ["kurczak-z-piekarnika.jpg", "kurczak-z-piekarnika-2.jpg"],
  time: 60,
  portions: 4,
  ingredients: [
    {
      title: "",
      items: [
        { ingredient: iMET.chicken_quarters, amount: 4, unit: "szt" },
        { ingredient: iFAT.butter, amount: 2, unit: "łyżeczka" },
        { ingredient: iSPC.sweet_paprika },
        { ingredient: iSPC.hot_paprika },
        { ingredient: iSPC.smoked_paprika },
        { ingredient: iSPC.granulated_garlic },
        { ingredient: iSPC.black_pepper },
      ],
    },
    {
      title: "Dodatki",
      items: [
        { ingredient: iVEG.potato, amount: "4 × 200" },
        { ingredient: iVEG.beets_whole_vinegar, amount: "4 × 100" },
        { ingredient: iSPC.salt },
      ],
    },
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
    {
      title: "Przykładowe podanie",
      steps: [
        "Obierz ziemniaki i ugotuj je w osolonej wodzie do miękkości.",
        "Podawaj kurczaka na talerzu z porcją ziemniaków.",
        "Ziemniaki polej tłuszczem z pieczenia kurczaka.",
        "Obok dodaj buraki z octu jako dodatek.",
        "Całość możesz udekorować świeżą pietruszką lub koperkiem.",
      ],
    },
  ],
  keyWords: ["kurczak", "xxx"],
};

export default kurczakZPiekarnika;
