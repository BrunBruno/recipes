import { iJAR } from "../../ingredients/ingJar";
import { iMET } from "../../ingredients/ingMeat";
import { iSPC } from "../../ingredients/ingSpice";
import { iVEG } from "../../ingredients/ingVegetable";
import type { Recipe } from "../../types";

const portions = 3;

const palkiZPiekarnika: Recipe = {
  name: "Pałki z Piekarnika",
  description:
    "Proste i soczyste pałki z kurczaka pieczone w rękawie do pieczenia z mieszanką przypraw. Podawane z ziemniakami i buraczkami zasmażanymi.",
  type: "dinner",
  images: [
    "palki-z-piekarnika.jpg",
    "palki-z-piekarnika-2.jpg",
    "palki-z-piekarnika-3.jpg",
    "palki-z-piekarnika-4.jpg",
  ],
  time: 75,
  portions: portions,
  executionDifficulty: 2,
  ingredients: [
    {
      title: "",
      items: [
        { ing: iMET.chicken_drums, amount: 2, unit: "opak" },
        { ing: iSPC.winiary_chicken_fix, amount: 1, unit: "opak" },
      ],
    },
    {
      title: "",
      isAdd: true,
      items: [
        { ing: iVEG.potato, amount: portions * 250 },
        { ing: iJAR.fried_beets, amount: portions * 150 },
        { ing: iSPC.salt },
      ],
    },
  ],
  steps: [
    {
      title: "Pałki z kurczaka",
      steps: [
        "Rozgrzej piekarnik do 200°C. Nie używaj funkcji grilla.",
        "Włóż pałki z kurczaka do rękawa do pieczenia.",
        "Wsyp mieszankę przypraw do kurczaka.",
        "Zamknij rękaw za pomocą dołączonej zapinki.",
        "Delikatnie obracaj rękaw, aby równomiernie rozprowadzić przyprawy po mięsie.",
        "Ułóż rękaw w naczyniu żaroodpornym. Nie przykrywaj naczynia.",
        "Piecz na najniższym poziomie piekarnika przez około 60 minut.",
        "Jeśli chcesz uzyskać bardziej chrupiącą skórkę, na 10 minut przed końcem pieczenia rozetnij rękaw i rozchyl jego brzegi.",
        "Po upieczeniu odetnij końcówkę rękawa i przełóż zawartość do naczynia do serwowania.",
      ],
    },
    {
      title: "Przykładowe podanie",
      steps: [
        "Ugotuj ziemniaki w osolonej wodzie.",
        "Podgrzej buraczki zasmażane.",
        "Podawaj pałki z kurczaka z ziemniakami i buraczkami.",
      ],
    },
  ],
  keyWords: ["kurczak"],
};

export default palkiZPiekarnika;
