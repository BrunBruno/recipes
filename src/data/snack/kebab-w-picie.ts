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
  ingredients: [
    {
      title: "Mięso",
      items: [
        { ingredient: iMET.ground_beef, amount: 500 },
        { ingredient: iVEG.onion, amount: 1, unit: "szt" },
        { ingredient: iVEG.garlic, amount: 2, unit: "zbk" },
        { ingredient: iDIR.greek_yogurt, amount: 1, unit: "lz" },
        { ingredient: iSPC.cumin },
        { ingredient: iSPC.sweet_paprika },
        { ingredient: iSPC.black_pepper },
        { ingredient: iSPC.salt },
      ],
    },
    {
      title: "Sos",
      items: [
        { ingredient: iDIR.greek_yogurt, amount: 5, unit: "lz" },
        { ingredient: iJAR.mayonnaise, amount: 2, unit: "lz" },
        { ingredient: iVEG.garlic, amount: 2, unit: "zbk" },
        { ingredient: iSPC.granulated_garlic },
        { ingredient: iSPC.cumin },
      ],
    },
    {
      title: "Pity",
      items: [
        { ingredient: iGRN.flour, amount: 500 },
        { ingredient: iFAT.olive, amount: 30, unit: "ml" },
        { ingredient: iOTH.water, amount: 260, unit: "ml" },
        { ingredient: iOTH.yeast, amount: 5 },
        { ingredient: iSPC.salt, amount: 10 },
      ],
    },
    {
      title: "Dodatki",
      items: [
        { ingredient: iJAR.pickled_cucumber, amount: 2, unit: "szt" },
        { ingredient: iVEG.chinese_cabbage, amount: 0.25, unit: "szt" },
        { ingredient: iVEG.red_cabbage, amount: 0.25, unit: "szt" },
        { ingredient: iVEG.tomato, amount: 1, unit: "szt" },
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
