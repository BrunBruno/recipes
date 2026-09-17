import { iBAK } from "../../ingredients/ingBakery";
import { iDIR } from "../../ingredients/ingDairy";
import { iFAT } from "../../ingredients/ingFat";
import { iHRB } from "../../ingredients/ingHerb";
import { iLIQ } from "../../ingredients/ingLiquid";
import { iMET } from "../../ingredients/ingMeat";
import { iSPC } from "../../ingredients/ingSpice";
import { iVEG } from "../../ingredients/ingVegetable";
import type { Recipe } from "../../types";

const zupaCzosnkowa: Recipe = {
  name: "Zupa Czosnkowa",
  type: "soup",
  country: "CZE",
  images: [""],
  time: 80,
  portions: 4,
  taste: null,
  difficulty: null,
  ingredients: [
    {
      title: "Zupa",
      items: [
        { ing: iLIQ.rosol, amount: 2000, unit: "ml" },
        { ing: iVEG.garlic, amount: 8, unit: "zbk" },
        { ing: iHRB.marjoram },
        { ing: iSPC.cumin },
        { ing: iSPC.black_pepper },
        { ing: iSPC.salt },
      ],
    },
    {
      title: "Grzanki",
      items: [
        { ing: iBAK.wheat_bread, amount: 4, unit: "krom" },
        { ing: iFAT.butter, amount: 1, unit: "lzi" },
        { ing: iVEG.garlic, amount: 1, unit: "zbk" },
      ],
    },
    {
      title: "Dodatki",
      items: [
        { ing: iMET.egg, amount: 4, unit: "szt" },
        { ing: iDIR.yellow_cheese, amount: 60 },
        { ing: iDIR.sour_cream, amount: 80 },
        { ing: iHRB.parsley },
      ],
    },
  ],

  steps: [
    {
      title: "Bulion",
      steps: [
        "Przygotuj bulion mięsno-warzywny, używając niewielkiej ilości warzyw, aby ich smak nie zdominował zupy.",
        "Dodaj 3 przekrojone ząbki czosnku oraz kminek.",
        "Gotuj bulion na małym ogniu przez ponad godzinę.",
        "Pod koniec gotowania dodaj odrobinę majeranku.",
        "Dopraw solą i pieprzem, a następnie odcedź bulion.",
      ],
    },
    {
      title: "Grzanki",
      steps: [
        "Z kromek chleba odkrój skórki.",
        "Miąższ natrzyj przekrojonym ząbkiem czosnku.",
        "Pokrój chleb w kostkę.",
        "Podsmaż grzanki na patelni z minimalną ilością masła, aż będą chrupiące. Możesz również przygotować je w piekarniku.",
      ],
    },
    {
      title: "Zupa czosnkowa",
      steps: [
        "Do odcedzonego, gorącego bulionu dodaj 4-5 przeciśniętych przez praskę ząbków czosnku.",
        "Gotuj około 10 minut.",
        "Spróbuj zupy i w razie potrzeby dopraw solą oraz pieprzem.",
      ],
    },
    {
      title: "Podanie",
      steps: [
        "Gorącą zupę przelej do żaroodpornych miseczek.",
        "Opcjonalnie do każdej porcji delikatnie dodaj surowe żółtko.",
        "Podaj starty żółty ser oraz przygotowane grzanki.",
        "Na wierzch możesz dodać łyżkę kwaśnej śmietany.",
        "Posyp drobno posiekaną natką pietruszki.",
      ],
    },
  ],

  keyWords: ["zupa", "ser"],
};

export default zupaCzosnkowa;
