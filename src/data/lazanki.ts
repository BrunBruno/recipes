import type { Recipe } from "../types";

const lazanki: Recipe = {
  name: "Łazanki",
  type: "dinner",
  image: "lazanki.jpg",
  kcal: 650,
  time: 50,
  portions: 5,
  ingredients: [
    { name: "makaron łazanki", amount: 240, unit: "g", type: "grn" },
    { name: "kiełbasa", amount: 200, unit: "g", type: "met" },
    { name: "boczek", amount: 100, unit: "g", type: "met" },
    { name: "kapusta kiszona", amount: 400, unit: "g", type: "veg" },
    { name: "cebula", amount: 280, unit: "g", type: "veg" },
    { name: "pieczarki", amount: 150, unit: "g", type: "veg" },
    { name: "olej", amount: 10, unit: "łyżka", type: "fat" },
    { name: "liść laurowy", amount: 2, unit: "listek", type: "spc" },
    { name: "ziele angielskie", amount: 3, unit: "ziarno", type: "spc" },
    { name: "pieprz", amount: null, unit: null, type: "spc" },
    { name: "sól", amount: null, unit: null, type: "spc" },
    { name: "kminek", amount: null, unit: null, type: "spc" },
  ],
  steps: [
    "Kapustę drobno poszatkuj i ugotuj do miękkości (ok. 25 min) dodając 2 szklanki wody, liść laurowy oraz ziele angielskie. Po ugotowaniu odstaw do ostygnięcia.",
    "Makaron ugotuj al dente w osolonej wodzie i odcedź.",
    "Pokrój kiełbasę, boczek, cebulę oraz pieczarki.",
    "Na patelni rozgrzej olej i masło, zeszklij cebulę. Dodaj od razu pieczarki.",
    "Dodaj kiełbasę oraz boczek i smaż kilka minut, aż się lekko zarumieni.",
    "Usuń nadmiar wody z kapusty kiszonej.",
    "Dodaj ugotowaną kapustę i smaż całość 5-7 minut.",
    "Dodaj makaron i dokładnie wszystko wymieszaj.",
    "Dopraw solą i pieprzem do smaku.",
  ],
};

export default lazanki;
