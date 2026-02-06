import type { Recipe } from "../types";

const lazanki: Recipe = {
  name: "Łazanki",
  type: "dinner",
  image: "",
  ingredients: [
    { name: "makaron łazanki", amount: 240, unit: "g" },
    { name: "kiełbasa", amount: 200, unit: "g" },
    { name: "kapusta kiszona", amount: 400, unit: "g" },
    { name: "cebula", amount: 280, unit: "g" },
    { name: "pieczarki", amount: 150, unit: "g" },
    { name: "olej", amount: 10, unit: "łyżek" },
    { name: "liść laurowy", amount: 2, unit: "listki" },
    { name: "ziele angielskie", amount: 3, unit: "ziarna" },
    { name: "pieprz", unit: "szczypta" },
    { name: "sól", unit: "szczypta" },
    { name: "kminek", unit: "szczypta" },
  ],
  steps: [
    "Kapustę drobno poszatkuj i ugotuj do miękkości (ok. 25 min) dodając 2 szklanki wody, liść laurowy oraz ziele angielskie.",
    "Makaron ugotuj al dente w osolonej wodzie i odcedź.",
    "Kiełbasę pokrój w półplasterki, cebulę w kostkę.",
    "Na patelni rozgrzej olej i masło, zeszklij cebulę.",
    "Dodaj kiełbasę i smaż kilka minut, aż się lekko zarumieni.",
    "Dodaj ugotowaną kapustę i smaż całość 5-7 minut.",
    "Dopraw solą i pieprzem do smaku.",
    "Na koniec dodaj makaron i dokładnie wszystko wymieszaj.",
  ],
};

export default lazanki;
