import { iMET } from "../../ingredients/ingMeat";
import { iSPC } from "../../ingredients/ingSpice";
import type { Recipe } from "../../types";

const zeberkaZPiekarnika: Recipe = {
  name: "Żeberka z Piekarnika",
  type: "dinner",
  cookingMethods: [["baked", 70, 200]],
  images: [""],
  time: 75,
  portions: 4,
  taste: null,
  difficulty: null,
  ingredients: [
    {
      title: "",
      items: [
        { ing: iMET.pork_ribs, amount: 1000 },
        { ing: iSPC.winiary_juicy_ribs, amount: 1, unit: "opak" },
      ],
    },
  ],
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
