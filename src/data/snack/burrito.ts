import { iMET } from "../../ingredients/ingMeat";
import { iVEG } from "../../ingredients/ingVegetable";
import { iGRN } from "../../ingredients/ingGrain";
import { iDIR } from "../../ingredients/ingDairy";
import { iJAR } from "../../ingredients/ingJar";
import { iFAT } from "../../ingredients/ingFat";
import { iSPC } from "../../ingredients/ingSpice";
import type { Recipe } from "../../types";
import { iBAK } from "../../ingredients/ingBakery";

const portions = 2;
const burrito: Recipe = {
  name: "Burrito",
  type: "snack",
  country: "MEX",
  images: [""],
  time: 40,
  portions: portions,
  taste: null,
  difficulty: null,
  ingredients: [
    {
      title: "Farsz",
      items: [
        { ing: iMET.ground_beef, amount: 250 },
        { ing: iGRN.rice, amount: 100 },
        { ing: iJAR.canned_red_beans, amount: 150 },
        { ing: iJAR.canned_corn, amount: 100 },
        { ing: iVEG.tomato, amount: 1, unit: "szt" },
        { ing: iVEG.onion, amount: 0.5, unit: "szt" },
        { ing: iVEG.garlic, amount: 1, unit: "zbk" },
        { ing: iFAT.oil, amount: 1, unit: "lz" },
        { ing: iSPC.sweet_paprika, amount: 1, unit: "lzi" },
        { ing: iSPC.hot_paprika, amount: 0.5, unit: "lzi" },
        { ing: iSPC.cumin, amount: 0.5, unit: "lzi" },
        { ing: iSPC.black_pepper },
        { ing: iSPC.salt },
      ],
    },
    {
      title: "Dodatki",
      items: [
        { ing: iBAK.tortilla, amount: 2, unit: "szt" },
        { ing: iDIR.yellow_cheese, amount: 80 },
        { ing: iVEG.tomato, amount: 1, unit: "szt" },
        { ing: iVEG.onion, amount: 0.5, unit: "szt" },
      ],
    },
  ],
  steps: [
    {
      title: "Farsz",
      steps: [
        "Ryż ugotuj zgodnie z instrukcją na opakowaniu.",
        "Cebulę drobno posiekaj, a czosnek przeciśnij przez praskę.",
        "Na patelni rozgrzej olej i zeszklij cebulę.",
        "Dodaj czosnek oraz mieloną wołowinę i smaż, rozdrabniając mięso, aż będzie dobrze wysmażone.",
        "Dodaj słodką i ostrą paprykę, kumin, sól oraz pieprz. Wymieszaj.",
        "Dodaj pokrojonego pomidora, fasolę oraz kukurydzę.",
        "Smaż jeszcze kilka minut, aż pomidor zmięknie, a nadmiar płynu odparuje.",
      ],
    },
    {
      title: "Burrito",
      steps: [
        "Podgrzej tortille na suchej patelni, aby stały się elastyczne.",
        "Na środku każdej tortilli ułóż porcję ryżu.",
        "Dodaj farsz z wołowiny, fasoli i kukurydzy.",
        "Dodaj pokrojonego pomidora, cebulę oraz starty ser.",
        "Zawiń boki tortilli do środka, a następnie zwiń ją ciasno w burrito.",
        "Burrito możesz dodatkowo podsmażyć na suchej patelni, zaczynając od strony łączenia.",
        "Podawaj od razu.",
      ],
    },
  ],

  keyWords: ["wołowina", "ryż"],
};

export default burrito;
