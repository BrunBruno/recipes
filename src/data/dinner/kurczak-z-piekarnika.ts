import { iFAT } from "../../ingredients/ingFat";
import { iJAR } from "../../ingredients/ingJar";
import { iMET } from "../../ingredients/ingMeat";
import { iSPC } from "../../ingredients/ingSpice";
import { iVEG } from "../../ingredients/ingVegetable";
import type { Recipe } from "../../types";

const portions = 4;
const kurczakZPiekarnika: Recipe = {
  name: "Kurczak z Piekarnika",
  description:
    "Soczysty kurczak pieczony w piekarniku z aromatycznymi przyprawami, podawany z ziemniakami i burakami. Idealny obiad dla 4 osób.",
  type: "dinner",
  images: ["kurczak-z-piekarnika.jpg", "kurczak-z-piekarnika-2.jpg"],
  time: 60,
  portions: portions,
  executionDifficulty: 1,
  ingredients: [
    {
      title: "Kurczak",
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
    {
      title: "Przykładowe dodatki",
      items: [
        { ing: iVEG.potato, amount: portions * 200 },
        { ing: iJAR.beets_whole_vinegar, amount: portions * 100 },
        { ing: iSPC.salt },
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
        "Podawaj kurczaka z porcją ziemniaków.",
        "Ziemniaki polej tłuszczem z pieczenia kurczaka.",
        "Obok dodaj buraki z octu jako dodatek.",
      ],
    },
  ],
  keyWords: ["kurczak"],
};

export default kurczakZPiekarnika;
