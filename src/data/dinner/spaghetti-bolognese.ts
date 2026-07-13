import { iFAT } from "../../ingredients/ingFat";
import { iGRN } from "../../ingredients/ingGrain";
import { iHRB } from "../../ingredients/ingHerb";
import { iJAR } from "../../ingredients/ingJar";
import { iMET } from "../../ingredients/ingMeat";
import { iSPC } from "../../ingredients/ingSpice";
import { iVEG } from "../../ingredients/ingVegetable";
import type { Recipe } from "../../types";

const portions = 3;
const spaghettiBolognese: Recipe = {
  name: "Spaghetti Bolognese",
  type: "dinner",
  images: [
    "spaghetti-bolognese.jpg",
    "spaghetti-bolognese-2.jpg",
    "spaghetti-bolognese-3.jpg",
  ],
  time: 60,
  portions: portions,
  taste: 5,
  difficulty: 1,
  ingredients: [
    {
      title: "",
      items: [
        { ing: iGRN.spaghetti_pasta, amount: portions * 100 },
        {
          type: "choice",
          options: [
            { ing: iMET.ground_pork, amount: 500 },
            { ing: iMET.ground_beef, amount: 500 },
          ],
          selected: 0,
        },
        {
          type: "choice",
          options: [
            { ing: iJAR.tomato_passata, amount: 400 },
            { ing: iJAR.canned_tomatoes, amount: 400 },
          ],
          selected: 0,
        },
        { ing: iVEG.onion, amount: 1, unit: "szt" },
        { ing: iVEG.garlic, amount: 2, unit: "zbk" },
        {
          type: "choice",
          options: [
            { ing: iFAT.olive, amount: 1, unit: "lz", exclude: true },
            { ing: iFAT.oil, amount: 1, unit: "lz", exclude: true },
          ],
          selected: 0,
        },
        { ing: iFAT.olive, amount: 1 * 0.45, unit: "lz", invisible: true },
        { ing: iHRB.basil },
        { ing: iHRB.oregano },
        { ing: iSPC.knorr_bolognese_fix },
        { ing: iSPC.black_pepper },
        { ing: iSPC.salt },
      ],
    },
  ],
  steps: [
    {
      title: "",
      steps: [
        "Posiekaj cebulę i czosnek na drobną kostkę.",
        "Rozgrzej oliwę na głębokiej patelni i dodaj mięso mielone.",
        "Smaż mięso, aż stanie się lekko brązowe, rozbijając je na małe kawałki.",
        "Dodaj cebulę i czosnek, smaż do zeszklenia i miękkości.",
        "Dopraw solą, pieprzem oraz przyprawą do spaghetti.",
        "Dodaj passatę pomidorową lub pomidory z puszki i dokładnie wymieszaj.",
        "Gotuj sos na małym ogniu przez około 30 minut, aż zgęstnieje.",
        "Ugotuj makaron spaghetti w osolonej wodzie według instrukcji (najlepiej al dente).",
        "Podawaj makaron z sosem bolognese.",
      ],
    },
  ],
  keyWords: ["mięso", "mięso", "makaron", "wołowina", "wieprzowina", "sos"],
};

export default spaghettiBolognese;
