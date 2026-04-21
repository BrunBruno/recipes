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
  images: ["spaghetti-bolognese.jpg"],
  time: 60,
  portions: portions,
  executionDifficulty: 1,
  ingredients: [
    {
      title: "",
      items: [
        { ingredient: iGRN.spaghetti_pasta, amount: portions * 100 },
        { ingredient: iMET.ground_beef, amount: 500 },
        { ingredient: iMET.ground_pork, amount: 500, alt: true },
        { ingredient: iJAR.tomato_passata, amount: 400 },
        { ingredient: iJAR.canned_tomatoes, amount: 400, alt: true },
        { ingredient: iVEG.onion, amount: 1, unit: "szt" },
        { ingredient: iVEG.garlic, amount: 2, unit: "zbk" },
        { ingredient: iFAT.olive, amount: 1, unit: "lz" },
        { ingredient: iFAT.oil, amount: 1, unit: "lz", alt: true },
        { ingredient: iSPC.basil },
        { ingredient: iSPC.oregano },
        { ingredient: iSPC.knorr_bolognese_fix },
        { ingredient: iSPC.black_pepper },
        { ingredient: iSPC.salt },
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
