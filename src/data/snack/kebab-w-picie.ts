import { iDIR } from "../../ingredients/ingDairy";
import { iFAT } from "../../ingredients/ingFat";
import { iGRN } from "../../ingredients/ingGrain";
import { iJAR } from "../../ingredients/ingJar";
import { iMET } from "../../ingredients/ingMeat";
import { iOTH } from "../../ingredients/ingOther";
import { iSPC } from "../../ingredients/ingSpice";
import { iVEG } from "../../ingredients/ingVegetable";
import type { Recipe } from "../../types";

const kebab: Recipe = {
  name: "Kebab w Picie",
  description:
    "Domowy kebab w picie z mieloną wołowiną, świeżymi warzywami i aromatycznym sosem jogurtowo-majonezowym - idealny na sycący posiłek dla całej rodziny.",
  type: "snack",
  images: ["kebab-w-picie.jpg"],
  time: 90,
  portions: 4,
  executionDifficulty: 5,
  ingredients: [
    {
      title: "Mięso",
      items: [
        { ing: iMET.ground_beef, amount: 500 },
        { ing: iVEG.onion, amount: 1, unit: "szt" },
        { ing: iVEG.garlic, amount: 2, unit: "zbk" },
        { ing: iDIR.greek_yogurt, amount: 1, unit: "lz" },
        { ing: iSPC.cumin },
        { ing: iSPC.sweet_paprika },
        { ing: iSPC.black_pepper },
        { ing: iSPC.salt },
      ],
    },
    {
      title: "Sos",
      items: [
        { ing: iDIR.greek_yogurt, amount: 5, unit: "lz" },
        { ing: iJAR.mayonnaise, amount: 2, unit: "lz" },
        { ing: iVEG.garlic, amount: 2, unit: "zbk" },
        { ing: iSPC.granulated_garlic },
        { ing: iSPC.cumin },
      ],
    },
    {
      title: "Pity",
      items: [
        { ing: iGRN.flour, amount: 500 },
        { ing: iFAT.olive, amount: 30, unit: "ml" },
        { ing: iOTH.water, amount: 260, unit: "ml" },
        { ing: iOTH.yeast, amount: 5 },
        { ing: iSPC.salt, amount: 10 },
      ],
    },
    {
      title: "Dodatki",
      items: [
        { ing: iJAR.pickled_cucumber, amount: 2, unit: "szt" },
        { ing: iVEG.chinese_cabbage, amount: 0.25, unit: "szt" },
        { ing: iVEG.red_cabbage, amount: 0.25, unit: "szt" },
        { ing: iVEG.tomato, amount: 1, unit: "szt" },
      ],
    },
  ],
  steps: [
    {
      title: "Mięsa",
      steps: [
        "Cebulę i czosnek drobno posiekaj.",
        "Do mięsa mielonego dodaj cebulę, czosnek, łyżkę jogurtu i przyprawy.",
        "Dokładnie wyrabiaj masę przez kilka minut.",
        "Mięso rozłóż między dwa arkusze papieru do pieczenia i rozwałkuj jak najcieniej.",
        "Zwiń w kilka warstw i piecz w piekarniku nagrzanym do 190°C przez 20 - 25 minut.",
      ],
    },
    {
      title: "Pity",
      steps: [
        "Do miski dodaj mąkę, wodę, drożdże, oliwę i sól.",
        "Dokładnie wyrób ciasto i odstaw na około godzinę do wyrośnięcia.",
        "Podziel ciasto na małe bułeczki i odstaw na kolejne 30 minut.",
        "Rozwałkuj i piecz na suchej patelni kilka minut, często obracając.",
      ],
    },
    {
      title: "Sos",
      steps: [
        "Do miski dodaj jogurt naturalny oraz majonez.",
        "Dodaj przeciśnięty przez praskę czosnek oraz czosnek granulowany.",
        "Dokładnie wymieszaj.",
      ],
    },
    {
      title: "Podanie",
      steps: [
        "Warzywa umyj i drobno posiekaj.",
        "Upieczone mięso pokrój w cienkie paski.",
        "Do pity dodaj mięso, warzywa i polej przygotowanym sosem.",
      ],
    },
  ],
  keyWords: ["wołowina", "naleśnik"],
};

export default kebab;
