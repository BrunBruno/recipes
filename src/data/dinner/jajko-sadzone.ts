import { iFAT } from "../../ingredients/ingFat";
import { iMET } from "../../ingredients/ingMeat";
import { iSPC } from "../../ingredients/ingSpice";
import { iVEG } from "../../ingredients/ingVegetable";
import type { Recipe } from "../../types";

const jajkoSadzone: Recipe = {
  name: "Jajka Sadzone",
  description:
    "Proste jajka sadzone smażone na maśle klarowanym, podawane z ziemniakami i groszkiem konserwowym, doprawione solą, pieprzem i koperkiem.",
  type: "dinner",
  images: ["jajko-sadzone.jpg"],
  time: 10,
  portions: 1,
  ingredients: [
    {
      title: "Jajka sadzone",
      items: [
        { ingredient: iMET.egg, amount: "2-3", unit: "szt" },
        { ingredient: iFAT.clarified_butter, amount: 1, unit: "lz" },
        { ingredient: iSPC.salt },
      ],
    },
    {
      title: "Przykładowe dodatki",
      items: [
        { ingredient: iVEG.potato, amount: 200 },
        { ingredient: iVEG.canned_peas, amount: 100 },
        { ingredient: iSPC.dill },
        { ingredient: iSPC.black_pepper },
        { ingredient: iSPC.salt },
      ],
    },
  ],
  steps: [
    {
      title: "",
      steps: [
        "Rozgrzej patelnię na średnim ogniu i dodaj masło.",
        "Wbij jajka na patelnię, uważając, aby nie uszkodzić żółtka.",
        "Smaż 2-3 minuty, aż białko się zetnie, a żółtko pozostanie płynne (lub dłużej, jeśli wolisz bardziej ścięte).",
        "Delikatnie posól i popieprz według smaku.",
      ],
    },
    {
      title: "Przykładowe podanie",
      steps: [
        "Obierz ziemniaki i ugotuj je w osolonej wodzie do miękkości.",
        "Otwórz puszkę groszku i odcedź.",
        "Podawaj jajka na talerzu z porcją ziemniaków i groszkiem jako dodatkiem.",
      ],
    },
  ],
  keyWords: ["jajko", "xxx"],
};

export default jajkoSadzone;
