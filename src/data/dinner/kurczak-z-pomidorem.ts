import { iDIR } from "../../ingredients/ingDairy";
import { iFAT } from "../../ingredients/ingFat";
import { iJAR } from "../../ingredients/ingJar";
import { iMET } from "../../ingredients/ingMeat";
import { iSPC } from "../../ingredients/ingSpice";
import { iVEG } from "../../ingredients/ingVegetable";
import type { Recipe } from "../../types";

const portions = 3;
const kurczakZPomidorem: Recipe = {
  name: "Kurczak z Pomidorami",
  description:
    "Pieczony kurczak z plasterkami pomidora, cebulą i ziołowym sosem majonezowo-śmietanowym, podawany z puree ziemniaczanym i burakami. Idealny obiad dla 3 osób.",
  type: "dinner",
  images: ["kurczak-z-pomidorem.jpg"],
  time: 70,
  portions: portions,
  executionDifficulty: 3,
  ingredients: [
    {
      title: "Kurczak",
      items: [
        { ingredient: iMET.chicken_breast, amount: 400 },
        { ingredient: iVEG.tomato, amount: 1, unit: "szt" },
        { ingredient: iVEG.onion, amount: 0.5, unit: "szt" },
        { ingredient: iDIR.yellow_cheese, amount: 0.5, unit: "kst" },
        { ingredient: iDIR.cream_18, amount: 1, unit: "lz" },
        { ingredient: iJAR.mayonnaise, amount: 1, unit: "lz" },
        { ingredient: iFAT.olive, amount: 2, unit: "lz" },
        { ingredient: iSPC.herbes_de_provence },
        { ingredient: iSPC.wild_garlic },
        { ingredient: iSPC.sweet_paprika },
        { ingredient: iSPC.black_pepper },
        { ingredient: iSPC.salt },
      ],
    },
    {
      title: "Przykładowe dodatki",
      items: [
        { ingredient: iVEG.potato, amount: portions * 200 },
        { ingredient: iFAT.butter, amount: 1.5, unit: "lzi" },
        { ingredient: iDIR.milk, amount: 100, unit: "ml" },
        { ingredient: iJAR.beets_shredded, amount: portions * 150 },
        { ingredient: iSPC.salt },
      ],
    },
  ],
  steps: [
    {
      title: "",
      steps: [
        "Natłuść naczynie żaroodporne oliwą lub olejem i ułóż paski cebuli.",
        "Pokrój mięso z kurczaka w duże i cienkie plastry a następnie rozłóż je równomiernie w naczyniu.",
        "Przypraw mięso solą, pieprzem, papryką oraz czosnkiem.",
        "W miseczce wymieszaj majonez ze śmietaną i ziołami.",
        "Posmaruj kurczaka przygotowaną mieszanką.",
        "Pokrój pomidory i ułóż je na mięsie.",
        "Posyp całość startym serem.",
        "Piecz przez około 60 minut (lub dłużej, aż mięso będzie miękkie).",
      ],
    },
    {
      title: "Przykładowe podanie",
      steps: [
        "Obierz ziemniaki i ugotuj je w osolonej wodzie do miękkości.",
        "Ubij ziemniaki z masłem i ciepłym mlekiem na puree.",
        "Dopraw puree solą do smaku.",
        "Podawaj kurczaka z puree ziemniaczanym i burakami.",
      ],
    },
  ],
  keyWords: ["kurczak"],
};

export default kurczakZPomidorem;
