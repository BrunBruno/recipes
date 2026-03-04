import { iDIR } from "../ingredients/ingDairy";
import { iFAT } from "../ingredients/ingFat";
import { iMET } from "../ingredients/ingMeat";
import { iSPC } from "../ingredients/ingSpice";
import { iVEG } from "../ingredients/ingVegetable";
import type { Recipe } from "../types";

const kurczakZeSzpinakiem: Recipe = {
  name: "Kurczak ze Szpinakiem",
  type: "dinner",
  images: ["kurczak-ze-szpinakiem.jpg"],
  time: 40,
  portions: 6,
  ingredients: [
    {
      title: "",
      items: [
        { ingredient: iMET.chicken_breast, amount: 400 },
        { ingredient: iVEG.frozen_spinach, amount: 100 },
        { ingredient: iVEG.onion, amount: 1, unit: "szt" },
        { ingredient: iVEG.garlic, amount: 1, unit: "ząbek" },
        { ingredient: iDIR.cream_18, amount: 100, unit: "ml" },
        { ingredient: iDIR.yellow_cheese, amount: 100 },
        { ingredient: iFAT.oil, amount: 3, unit: "łyżka" },
        { ingredient: iSPC.knorr_bouillon_cube, amount: 2, unit: "szt" },
        { ingredient: iSPC.cayenne_pepper },
      ],
    },
  ],
  steps: [
    {
      title: "",
      steps: [
        "Pierś z kurczaka rozetnij wzdłuż na cienkie płaty, aby uzyskać 6 porcji.",
        "Jedną kostkę rosołową wymieszaj z olejem i natrzyj nią mięso.",
        "Na patelni zeszklij pokrojoną w kostkę cebulę i dodaj odsączony lub mrożony szpinak.",
        "Opcjonalnie dodaj czosnek i szczyptę pieprzu cayenne.",
        "Dodaj śmietanę i drugą kostkę Knorr.",
        "Dokładnie wymieszaj i gotuj, aż śmietana zgęstnieje.",
        "Farsz nałóż na piersi kurczaka i posyp żółtym serem.",
        "Piecz w piekarniku nagrzanym do 190°C do upieczenie mięsa.",
      ],
    },
  ],
  keyWords: ["kurczak", "xxx"],
};

export default kurczakZeSzpinakiem;
