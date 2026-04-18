import { iDIR } from "../../ingredients/ingDairy";
import { iFAT } from "../../ingredients/ingFat";
import { iFRT } from "../../ingredients/ingFruit";
import { iGRN } from "../../ingredients/ingGrain";
import { iJAR } from "../../ingredients/ingJar";
import { iMET } from "../../ingredients/ingMeat";
import { iSPC } from "../../ingredients/ingSpice";
import { iVEG } from "../../ingredients/ingVegetable";
import type { Recipe } from "../../types";

const tacos: Recipe = {
  name: "Tacos",
  description:
    "Klasyczne tacos z aromatycznym mięsem wołowym, świeżymi warzywami i dodatkiem limonki oraz śmietany - szybkie i pełne smaku danie.",
  type: "snack",
  images: [""],
  time: 35,
  portions: 4,
  executionDifficulty: null,
  ingredients: [
    {
      title: "Farsz mięsny",
      items: [
        { ingredient: iMET.ground_beef, amount: 500 },
        { ingredient: iFAT.oil, amount: 2, unit: "lz" },
        { ingredient: iVEG.garlic, amount: 3, unit: "zbk" },
        { ingredient: iSPC.cinnamon },
        { ingredient: iSPC.cumin },
        { ingredient: iSPC.sweet_paprika },
        { ingredient: iSPC.chilli },
        { ingredient: iSPC.black_pepper },
        { ingredient: iSPC.salt },
      ],
    },
    {
      title: "Dodatki",
      items: [
        { ingredient: iGRN.tortilla_mini, amount: 12, unit: "szt" },
        {
          ingredient: iGRN.taco_shell_corn,
          amount: 12,
          unit: "szt",
          alt: true,
        },
        { ingredient: iDIR.sour_cream, amount: 4, unit: "lz" },
        { ingredient: iVEG.lettuce_romaine, amount: 1, unit: "szt" },
        {
          ingredient: iVEG.lettuce_iceberg,
          amount: 0.5,
          unit: "szt",
          alt: true,
        },
        { ingredient: iVEG.tomato, amount: 2, unit: "szt" },
        { ingredient: iVEG.red_onion, amount: 0.5, unit: "szt" },
        { ingredient: iVEG.chili_pepper, amount: 1, unit: "szt" },
        { ingredient: iFRT.avocado, amount: 1, unit: "szt" },
        { ingredient: iFRT.lime, amount: 1, unit: "szt" },
        { ingredient: iJAR.lime_juice, amount: 50, unit: "ml", alt: true },
        { ingredient: iSPC.coriander },
      ],
    },
  ],
  steps: [
    {
      title: "",
      steps: [
        "Mięso mielone wymieszaj z przeciśniętym przez praskę czosnkiem oraz wszystkimi przyprawami.",
        "Na patelni rozgrzej olej i smaż mięso na średnim ogniu przez około 10 minut, aż będzie dobrze wysmażone, mieszając, aby rozdzielić grudki.",
        "Awokado obierz, usuń pestkę i pokrój w kostkę lub rozgnieć widelcem z dodatkiem soku z limonki i chili.",
        "Cebulę pokrój w cienkie piórka, a pomidory w drobną kostkę.",
        "Sałatę poszatkuj, a kolendrę drobno posiekaj.",
        "Tortille lub muszle taco podgrzej na patelni, w piekarniku lub mikrofalówce.",
        "Na każdym placku lub muszli ułóż porcję mięsa, następnie dodaj warzywa i zioła.",
        "Skrop całość sokiem z limonki i dodaj łyżkę kwaśnej śmietany.",
        "Podawaj od razu po przygotowaniu.",
      ],
    },
  ],
  keyWords: ["wołowina"],
};

export default tacos;
