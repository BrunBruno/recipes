import { dinnerSides } from "../../dinnerSides";
import { iDIR } from "../../ingredients/ingDairy";
import { iFAT } from "../../ingredients/ingFat";
import { iJAR } from "../../ingredients/ingJar";
import { iMET } from "../../ingredients/ingMeat";
import { iSPC } from "../../ingredients/ingSpice";
import { iVEG } from "../../ingredients/ingVegetable";
import type { Recipe } from "../../types";
import { fryingFat } from "../../utils";

const portions = 3;
const kurczakZeSzpinakiem: Recipe = {
  name: "Kurczak ze Szpinakiem",
  type: "dinner",
  cookingMethods: [["fried", 8], ["roasted", 40]],
  images: ["kurczak-ze-szpinakiem.jpg", "kurczak-ze-szpinakiem-2.jpg"],
  time: 40,
  portions: portions,
  taste: 4,
  difficulty: 3,
  ingredients: [
    {
      title: "",
      items: [
        { ing: iMET.chicken_breast, amount: 400 },
        { ing: iJAR.frozen_spinach, amount: 100 },
        { ing: iVEG.onion, amount: 1, unit: "szt" },
        { ing: iVEG.garlic, amount: 1, unit: "zbk" },
        { ing: iDIR.cream_18, amount: 100, unit: "ml" },
        { ing: iDIR.yellow_cheese, amount: 100 },
        ...fryingFat(iFAT.oil, 3, "lz", 0.55),
        { ing: iSPC.knorr_bouillon_cube, amount: 1, unit: "szt" },
        { ing: iSPC.cayenne_pepper },
      ],
    },
  ],
  extrasMain: {
    options: [
      dinnerSides("mashed-potatoes", portions),
      dinnerSides("oven-fries", portions),
    ],
    selected: 0,
  },
  extrasVeg: {
    options: [
      dinnerSides("beets-whole-vinegar", portions),
      dinnerSides("pickled-cucumber", portions),
    ],
    selected: 0,
  },
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
  ],
  keyWords: ["mięso", "kurczak"],
};

export default kurczakZeSzpinakiem;
