import { dinnerSides } from "../../dinnerSides";
import { iDIR } from "../../ingredients/ingDairy";
import { iFAT } from "../../ingredients/ingFat";
import { iGRN } from "../../ingredients/ingGrain";
import { iJAR } from "../../ingredients/ingJar";
import { iLIQ } from "../../ingredients/ingLiquid";
import { iMET } from "../../ingredients/ingMeat";
import { iSAU } from "../../ingredients/ingSauce";
import { iSPC } from "../../ingredients/ingSpice";
import { iVEG } from "../../ingredients/ingVegetable";
import type { Recipe } from "../../types";
import { fryingFat } from "../../utils";

const portions = 4;
const roladaSlaska: Recipe = {
  name: "Rolada Śląska",
  type: "dinner",
  images: ["rolada-wieprzowa.jpg"],
  time: 90,
  portions: portions,
  taste: 5,
  difficulty: 5,
  ingredients: [
    {
      title: "",
      items: [
        {
          type: "choice",
          options: [
            { ing: iMET.beef_round, amount: 800 },
            { ing: iMET.pork_ham, amount: 800 },
          ],
          selected: 0,
        },
        { ing: iMET.bacon_block, amount: 120 },
        { ing: iMET.sausage, amount: 180 },
        { ing: iJAR.pickled_cucumber, amount: 120 },
        { ing: iVEG.onion, amount: 120 },
        { ing: iGRN.flour, amount: 20 },
        { ing: iDIR.cream_18, amount: 100 },
        { ing: iSAU.mustard_sarepska, amount: 25 },
        ...fryingFat(iFAT.margarine, 10, "g", 0.5),
        ...fryingFat(iFAT.butter, 10, "g", 0.5),
        { ing: iLIQ.water, amount: 400, unit: "ml" },
        { ing: iSPC.black_pepper },
        { ing: iSPC.salt },
      ],
    },
  ],
  extrasMain: {
    options: [dinnerSides("silesian-dumplings-ready", portions)],
    selected: 0,
  },
  extrasVeg: {
    options: [
      dinnerSides("red-cabbage-ready", portions),
      dinnerSides("beets-fried-ready", portions),
    ],
    selected: 0,
  },
  steps: [
    {
      title: "",
      steps: [
        "Pokrój mięso na 4 kotlety i dokładnie je rozbij.",
        "Posmaruj każdy plaster musztardą, dopraw solą i pieprzem.",
        "Pokrój kiełbasę, boczek, ogórki oraz cebulę w drobną kostkę.",
        "Rozłóż farsz równomiernie na mięsie.",
        "Zawiń mięso w rolady i zwiąż nicią lub zabezpiecz wykałaczkami.",
        "Na patelni rozgrzej margarynę z masłem i obsmaż rolady z każdej strony.",
        "Przełóż rolady do garnka, dodaj wodę i duś pod przykryciem około 1 godzinę.",
        "Pod koniec zagęść sos mąką wymieszaną ze śmietaną.",
      ],
    },
  ],
  keyWords: ["wołowina"],
};

export default roladaSlaska;
