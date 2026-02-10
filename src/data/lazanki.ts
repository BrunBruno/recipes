import { iFAT } from "../ingredients/ingFat";
import { iGRN } from "../ingredients/ingGrain";
import { iMET } from "../ingredients/ingMeat";
import { iSPC } from "../ingredients/ingSpice";
import { iVEG } from "../ingredients/ingVegetable";
import type { Recipe } from "../types";

const lazanki: Recipe = {
  name: "Łazanki",
  type: "dinner",
  image: "lazanki.jpg",
  time: 50,
  portions: 5,
  ingredients: [
    { ingredient: iMET.sausage, amount: 200 },
    { ingredient: iMET.bacon_block, amount: 100 },
    { ingredient: iVEG.sauerkraut, amount: 400 },
    { ingredient: iVEG.onion, amount: 280 },
    { ingredient: iVEG.mushrooms, amount: 150 },
    { ingredient: iGRN.lazanki_pasta, amount: 240 },
    { ingredient: iFAT.oil, amount: 10, unit: "łyżka" },
    { ingredient: iSPC.bay_leaf, amount: 2, unit: "listek" },
    { ingredient: iSPC.caraway },
    { ingredient: iSPC.allspice, amount: 3, unit: "ziarno" },
    { ingredient: iSPC.black_pepper },
    { ingredient: iSPC.salt },
  ],
  steps: [
    "Kapustę drobno poszatkuj i ugotuj do miękkości (ok. 25 min) dodając 2 szklanki wody, liść laurowy oraz ziele angielskie. Po ugotowaniu odstaw do ostygnięcia.",
    "Makaron ugotuj al dente w osolonej wodzie i odcedź.",
    "Pokrój kiełbasę, boczek, cebulę oraz pieczarki.",
    "Na patelni rozgrzej olej i masło, zeszklij cebulę. Dodaj od razu pieczarki.",
    "Dodaj kiełbasę oraz boczek i smaż kilka minut, aż się lekko zarumieni.",
    "Usuń nadmiar wody z kapusty kiszonej. Wyrzuć także liście laurowe oraz ziele.",
    "Dodaj ugotowaną kapustę i smaż całość 5 - 7 minut.",
    "Usmażone składniki połącz z makaronem i dokładnie wszystko wymieszaj.",
    "Dopraw solą i pieprzem do smaku.",
  ],
  keyWords: ["makaron", "mięso"],
};

export default lazanki;
