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
        { ing: iMET.chicken_breast, amount: 400 },
        { ing: iVEG.tomato, amount: 1, unit: "szt" },
        { ing: iVEG.onion, amount: 0.5, unit: "szt" },
        { ing: iDIR.yellow_cheese, amount: 0.5, unit: "kst" },
        { ing: iDIR.cream_18, amount: 1, unit: "lz" },
        { ing: iJAR.mayonnaise, amount: 1, unit: "lz" },
        { ing: iFAT.olive, amount: 2, unit: "lz" },
        { ing: iSPC.herbes_de_provence },
        { ing: iSPC.wild_garlic },
        { ing: iSPC.sweet_paprika },
        { ing: iSPC.black_pepper },
        { ing: iSPC.salt },
      ],
    },
    {
      title: "Przykładowe dodatki",
      items: [
        { ing: iVEG.potato, amount: portions * 200 },
        { ing: iFAT.butter, amount: 1.5, unit: "lzi" },
        { ing: iDIR.milk, amount: 100, unit: "ml" },
        { ing: iJAR.beets_shredded, amount: portions * 150 },
        { ing: iSPC.salt },
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
