import { iFAT } from "../../ingredients/ingFat";
import { iGRN } from "../../ingredients/ingGrain";
import { iHRB } from "../../ingredients/ingHerb";
import { iJAR } from "../../ingredients/ingJar";
import { iMET } from "../../ingredients/ingMeat";
import { iSPC } from "../../ingredients/ingSpice";
import { iVEG } from "../../ingredients/ingVegetable";
import type { Recipe } from "../../types";
import { fryingFat } from "../../utils";

const lazanki: Recipe = {
  name: "Łazanki",
  type: "dinner",
  cookingMethods: [["fried", 8]],
  images: ["lazanki.jpg"],
  time: 50,
  portions: 5,
  taste: 4,
  difficulty: 3,
  ingredients: [
    {
      title: "",
      items: [
        { ing: iGRN.lazanki_pasta, amount: 240 },
        { ing: iMET.sausage, amount: 200 },
        { ing: iMET.bacon_block, amount: 100 },
        { ing: iJAR.sauerkraut, amount: 400 },
        { ing: iVEG.onion, amount: 280 },
        { ing: iVEG.mushrooms, amount: 150 },
        ...fryingFat(iFAT.oil, 10, "lz", 0.7),
        { ing: iHRB.bay_leaf },
        { ing: iHRB.caraway },
        { ing: iSPC.allspice },
        { ing: iSPC.black_pepper },
        { ing: iSPC.salt },
      ],
    },
  ],
  steps: [
    {
      title: "",
      steps: [
        "Kapustę drobno poszatkuj i ugotuj do miękkości (ok. 25 min) dodając 2 szklanki wody, liść laurowy oraz ziele angielskie. Po ugotowaniu odstaw do ostygnięcia.",
        "Makaron ugotuj al dente w osolonej wodzie i odcedź.",
        "Pokrój kiełbasę, boczek, cebulę oraz pieczarki.",
        "Na patelni rozgrzej olej i masło, zeszklij cebulę. Dodaj od razu pieczarki.",
        "Dodaj kiełbasę oraz boczek i smaż kilka minut, aż się lekko zarumieni.",
        "Usuń nadmiar wody z kapusty kiszonej. Wyrzuć także liście laurowe oraz ziele.",
        "Dodaj ugotowaną kapustę i smaż całość 5-7 minut.",
        "Usmażone składniki połącz z makaronem i dokładnie wszystko wymieszaj.",
        "Dopraw solą i pieprzem do smaku.",
      ],
    },
  ],
  keyWords: ["makaron", "kiełbasa", "boczek", "mięso"],
};

export default lazanki;
