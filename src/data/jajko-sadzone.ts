import { iFAT } from "../ingredients/ingFat";
import { iMET } from "../ingredients/ingMeat";
import { iSPC } from "../ingredients/ingSpice";
import { iVEG } from "../ingredients/ingVegetable";
import type { Recipe } from "../types";

const jajkoSadzone: Recipe = {
  name: "Jajko Sadzone",
  type: "dinner",
  image: "jajko-sadzone.jpg",
  time: 10,
  portions: 1,
  ingredients: [
    { ingredient: iMET.egg, amount: "2-3" },
    { ingredient: iFAT.butter, amount: 1, unit: "łyżka" },
    { ingredient: iVEG.potato, amount: 200, unit: "g" },
    { ingredient: iVEG.canned_peas, amount: 100, unit: "g" },
    { ingredient: iSPC.salt },
    { ingredient: iSPC.black_pepper },
    { ingredient: iSPC.dill },
  ],
  steps: [
    {
      title: "Jajko sadzone",
      steps: [
        "Rozgrzej patelnię na średnim ogniu i dodaj masło.",
        "Wbij jajka na patelnię, uważając, aby nie uszkodzić żółtka.",
        "Smaż 2-3 minuty, aż białko się zetnie, a żółtko pozostanie płynne (lub dłużej, jeśli wolisz bardziej ścięte).",
        "Delikatnie posól i popieprz według smaku.",
      ],
    },
    {
      title: "Dodatki",
      steps: [
        "Obierz ziemniaki, ugotuj w osolonej wodzie do miękkości i posyp świeżym koperkiem.",
        "Otwórz puszkę groszku, odcedź i podawaj jako dodatek do jajka i ziemniaków.",
      ],
    },
  ],
  keyWords: ["jajko", "smażone"],
};

export default jajkoSadzone;
