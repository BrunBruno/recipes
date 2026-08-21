import { dinnerSides } from "../../dinnerSides";
import { iMET } from "../../ingredients/ingMeat";
import { iSPC } from "../../ingredients/ingSpice";
import type { Recipe } from "../../types";

const portions = 4;
const zeberkaZPiekarnika: Recipe = {
  name: "Żeberka z Piekarnika",
  type: "dinner",
  cookingMethods: [["baked", 70, 200]],
  images: ["zeberka-z-piekarnika.jpg", "zeberka-z-piekarnika-2.jpg"],
  time: 75,
  portions: portions,
  taste: 4,
  difficulty: 1,
  ingredients: [
    {
      title: "",
      items: [
        { ing: iMET.pork_ribs, amount: 1000 },
        { ing: iSPC.winiary_juicy_ribs, amount: 1, unit: "opak" },
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
        "Żeberka pokrój na porcje o długości około 5 cm (jedna lub dwie kostki w porcji).",
        "Rozgrzej piekarnik do 200°C. Nie używaj funkcji grill.",
        "Przełóż żeberka do woreczka do pieczenia i dodaj zawartość saszetki Fix Soczyste Żeberka.",
        "Zamknij woreczek i dokładnie wymieszaj jego zawartość, aby przyprawa równomiernie pokryła mięso.",
        "Ułóż woreczek na naczyniu żaroodpornym. Nie przykrywaj go.",
        "Włóż do rozgrzanego piekarnika i piecz na najniższym poziomie przez około 70 minut.",
      ],
    },
  ],
  keyWords: ["mięso"],
};

export default zeberkaZPiekarnika;
