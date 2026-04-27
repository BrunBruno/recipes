import { iFAT } from "../../ingredients/ingFat";
import { iGRN } from "../../ingredients/ingGrain";
import { iJAR } from "../../ingredients/ingJar";
import { iMET } from "../../ingredients/ingMeat";
import { iSPC } from "../../ingredients/ingSpice";
import { iVEG } from "../../ingredients/ingVegetable";
import type { Recipe } from "../../types";

const portions = 3;
const spaghettiBolognese: Recipe = {
  name: "Spaghetti Bolognese",
  description:
    "Klasyczne spaghetti bolognese z mięsem mielonym w aromatycznym sosie pomidorowym z dodatkiem czosnku, cebuli i ziół.",
  type: "dinner",
  images: ["spaghetti-bolognese.jpg", "spaghetti-bolognese-2.jpg"],
  time: 60,
  portions: portions,
  executionDifficulty: 1,
  ingredients: [
    {
      title: "",
      items: [
        { ing: iGRN.spaghetti_pasta, amount: portions * 100 },
        { ing: iMET.ground_pork, amount: 500 },
        { ing: iMET.ground_beef, alt: true },
        { ing: iJAR.tomato_passata, amount: 400 },
        { ing: iJAR.canned_tomatoes, alt: true },
        { ing: iVEG.onion, amount: 1, unit: "szt" },
        { ing: iVEG.garlic, amount: 2, unit: "zbk" },
        { ing: iFAT.olive, amount: 1, unit: "lz" },
        { ing: iFAT.oil, amount: 1, alt: true },
        { ing: iSPC.basil },
        { ing: iSPC.oregano },
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
  keyWords: ["makaron"],
};

export default spaghettiBolognese;
