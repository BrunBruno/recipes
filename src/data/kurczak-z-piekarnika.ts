import { iFAT } from "../ingredients/ingFat";
import { iMET } from "../ingredients/ingMeat";
import { iSPC } from "../ingredients/ingSpice";
import { iVEG } from "../ingredients/ingVegetable";
import type { Recipe } from "../types";

const kurczakZPiekarnika: Recipe = {
  name: "Kurczak z Piekarnika",
  type: "dinner",
  images: ["kurczak-z-piekarnika.jpg", "kurczak-z-piekarnika-2.jpg"],
  time: 55,
  portions: 4,
  ingredients: [
    {
      title: "Kurczak",
      items: [
        { ingredient: iMET.chicken_quarters, amount: 4, unit: "szt" },
        { ingredient: iFAT.butter },
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
        { ingredient: iVEG.potato, amount: "4 × 150", unit: "g" },
        { ingredient: iVEG.beets_whole_vinegar },
      ],
    },
  ],
  steps: [
    {
      title: "Przygotowanie kurczaka",
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
        "Kurczaka podawaj na talerzu.",
        "Obok ułóż porcję gotowanych ziemniaków i polej je tłuszczem z kurczaka.",
        "Dodaj całe buraki z octu jako dodatek.",
        "Całość możesz udekorować świeżą pietruszką lub koperkiem.",
      ],
    },
  ],
  keyWords: ["kurczak", "pieczone", "mięso", "xxx"],
};

export default kurczakZPiekarnika;
