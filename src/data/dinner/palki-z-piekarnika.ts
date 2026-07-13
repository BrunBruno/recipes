import { dinnerSides } from "../../dinnerSides";
import { iMET } from "../../ingredients/ingMeat";
import { iSPC } from "../../ingredients/ingSpice";
import type { Recipe } from "../../types";

const portions = 3;

const palkiZPiekarnika: Recipe = {
  name: "Pałki z Piekarnika",
  type: "dinner",
  cookingMethods: [["roasted", 75]],
  images: [
    "palki-z-piekarnika.jpg",
    "palki-z-piekarnika-2.jpg",
    "palki-z-piekarnika-3.jpg",
    "palki-z-piekarnika-4.jpg",
  ],
  time: 75,
  portions: portions,
  taste: 3,
  difficulty: 2,
  ingredients: [
    {
      title: "",
      items: [
        { ing: iMET.chicken_drums, amount: 2, unit: "opak" },
        { ing: iSPC.winiary_chicken_fix, amount: 1, unit: "opak" },
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
      dinnerSides("beets-fried-ready", portions),
      dinnerSides("beets-shredded-ready", portions),
      dinnerSides("beets-whole-vinegar", portions),
    ],
    selected: 0,
  },
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
  ],
  keyWords: ["kurczak", "mięso"],
};

export default palkiZPiekarnika;
