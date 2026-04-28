import { iDIR } from "../../ingredients/ingDairy";
import { iFAT } from "../../ingredients/ingFat";
import { iGRN } from "../../ingredients/ingGrain";
import { iJAR } from "../../ingredients/ingJar";
import { iMET } from "../../ingredients/ingMeat";
import { iOTH } from "../../ingredients/ingOther";
import { iSPC } from "../../ingredients/ingSpice";
import { iVEG } from "../../ingredients/ingVegetable";
import type { Recipe } from "../../types";

const portions = 4;
const roladaWieprzowa: Recipe = {
  name: "Rolada Śląska",
  description:
    "Soczysta rolada wieprzowa z boczkiem, kiełbasą i ogórkiem konserwowym, duszona w aromatycznym sosie śmietanowo-musztardowym, podawana z kluskami śląskimi i modrą kapustą.",
  type: "dinner",
  images: ["rolada-wieprzowa.jpg"],
  time: 90,
  portions: portions,
  executionDifficulty: 5,
  ingredients: [
    {
      title: "Składniki na rolady",
      items: [
        { ing: iMET.beef_round, amount: 800 },
        { ing: iMET.pork_ham, alt: true },
        { ing: iMET.bacon_block, amount: 120 },
        { ing: iMET.sausage, amount: 180 },
        { ing: iJAR.pickled_cucumber, amount: 120 },
        { ing: iVEG.onion, amount: 120 },
        { ing: iGRN.flour, amount: 20 },
        { ing: iDIR.cream_18, amount: 100 },
        { ing: iJAR.mustard_sarepska, amount: 25 },
        { ing: iFAT.margarine, amount: 10 },
        { ing: iFAT.butter, amount: 10 },
        { ing: iOTH.water, amount: 400, unit: "ml" },
        { ing: iSPC.black_pepper },
        { ing: iSPC.salt },
      ],
    },
    {
      title: "Przykładowe dodatki",
      items: [
        { ing: iGRN.silesian_dumplings, amount: portions * 250 },
        { ing: iJAR.red_cabbage, amount: portions * 180 },
      ],
    },
  ],
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
    {
      title: "Przykładowe podanie",
      steps: [
        "Ugotuj kluski śląskie zgodnie z instrukcją na opakowaniu.",
        "Podawaj roladę z porcją sosu, kluskami śląskimi oraz modrą kapustą.",
      ],
    },
  ],
  keyWords: ["wieprzowina"],
};

export default roladaWieprzowa;
