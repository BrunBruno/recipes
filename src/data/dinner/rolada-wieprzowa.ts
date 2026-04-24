import { iDIR } from "../../ingredients/ingDairy";
import { iFAT } from "../../ingredients/ingFat";
import { iGRN } from "../../ingredients/ingGrain";
import { iJAR } from "../../ingredients/ingJar";
import { iMET } from "../../ingredients/ingMeat";
import { iSPC } from "../../ingredients/ingSpice";
import { iVEG } from "../../ingredients/ingVegetable";
import type { Recipe } from "../../types";

const roladaWieprzowa: Recipe = {
  name: "Rolada Wieprzowa",
  description:
    "Soczysta rolada wieprzowa z boczkiem, kiełbasą i ogórkiem konserwowym, duszona w aromatycznym sosie śmietanowo-musztardowym - idealna na obiad dla całej rodziny.",
  type: "dinner",
  images: [""],
  time: 90,
  portions: 4,
  executionDifficulty: 5,
  ingredients: [
    {
      title: "Składniki na rolady",
      items: [
        { ing: iMET.pork_ham, amount: 1, unit: "opak" },
        { ing: iMET.bacon_block, amount: 0.5, unit: "opak" },
        { ing: iMET.sausage, amount: 0.5, unit: "peto" },
        { ing: iJAR.pickled_cucumber, amount: 2, unit: "szt" },
        { ing: iVEG.onion, amount: 1, unit: "szt" },
        { ing: iGRN.flour },
        { ing: iDIR.cream_18 },
        { ing: iJAR.mustard_sarepska },
        { ing: iFAT.margarine },
        { ing: iFAT.butter },
        { ing: iSPC.salt },
        { ing: iSPC.black_pepper },
      ],
    },
  ],
  steps: [
    {
      title: "",
      steps: [
        "Pokrój mięso na kotlety i dokładnie je rozbij.",
        "Posmaruj mięso musztardą, posól i popieprz.",
        "Pokrój kiełbasę, boczek, ogórki oraz cebulę w drobną kostkę.",
        "Wymieszaj farsz i rozłóż go równomiernie na mięsie.",
        "Zawiń mięso w roladę i zwiąż nicią lub zabezpiecz wykałaczkami.",
        "Na patelni rozgrzej margarynę lub olej z masłem i podsmaż roladę po około 5 minut z każdej strony pod przykryciem.",
        "Przełóż roladę do dużego garnka, dodaj niewielką ilość wody i duś przez około 1 godzinę.",
        "Zagęść sos, dodając mąkę i śmietanę.",
      ],
    },
  ],
  keyWords: ["wieprzowina"],
};

export default roladaWieprzowa;
