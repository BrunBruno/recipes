import { iDIR } from "../../ingredients/ingDairy";
import { iFAT } from "../../ingredients/ingFat";
import { iJAR } from "../../ingredients/ingJar";
import { iMET } from "../../ingredients/ingMeat";
import { iSPC } from "../../ingredients/ingSpice";
import { iVEG } from "../../ingredients/ingVegetable";
import type { Recipe } from "../../types";

const portions = 3;
const kurczakZeSzpinakiem: Recipe = {
  name: "Kurczak ze Szpinakiem",
  description:
    "Soczysty kurczak nadziewany szpinakiem i serem, zapiekany w piekarniku i podawany z puree ziemniaczanym i burakami. Idealny obiad dla 3 osób.",
  type: "dinner",
  images: ["kurczak-ze-szpinakiem.jpg", "kurczak-ze-szpinakiem-2.jpg"],
  time: 40,
  portions: portions,
  executionDifficulty: 3,
  ingredients: [
    {
      title: "Kurczak",
      items: [
        { ingredient: iMET.chicken_breast, amount: 400 },
        { ingredient: iJAR.frozen_spinach, amount: 100 },
        { ingredient: iVEG.onion, amount: 1, unit: "szt" },
        { ingredient: iVEG.garlic, amount: 1, unit: "zbk" },
        { ingredient: iDIR.cream_18, amount: 100, unit: "ml" },
        { ingredient: iDIR.yellow_cheese, amount: 100 },
        { ingredient: iFAT.oil, amount: 3, unit: "lz" },
        { ingredient: iSPC.knorr_bouillon_cube, amount: 1, unit: "szt" },
        { ingredient: iSPC.cayenne_pepper },
      ],
    },
    {
      title: "Przykładowe dodatki",
      items: [
        { ingredient: iVEG.potato, amount: portions * 200 },
        { ingredient: iFAT.butter, amount: 1.5, unit: "lzi" },
        { ingredient: iDIR.milk, amount: 100, unit: "ml" },
        { ingredient: iJAR.beets_whole_vinegar, amount: portions * 100 },
        { ingredient: iSPC.salt },
      ],
    },
  ],
  steps: [
    {
      title: "",
      steps: [
        "Pierś z kurczaka rozetnij wzdłuż na cienkie płaty, aby uzyskać 6 porcji.",
        "Pół kostki rosołowej wymieszaj z olejem i natrzyj nią mięso.",
        "Na patelni zeszklij pokrojoną w kostkę cebulę i dodaj odsączony lub mrożony szpinak.",
        "Opcjonalnie dodaj czosnek i szczyptę pieprzu cayenne.",
        "Dodaj śmietanę i drugą połowe kostki, dokładnie wymieszaj.",
        "Gotuj, aż śmietana zgęstnieje.",
        "Farsz nałóż na piersi kurczaka i posyp żółtym serem.",
        "Piecz w piekarniku nagrzanym do 190°C do upieczenie mięsa.",
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

export default kurczakZeSzpinakiem;
