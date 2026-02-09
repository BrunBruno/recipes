import { iDIR } from "../ingredients/ingDairy";
import { iFAT } from "../ingredients/ingFat";
import { iGRN } from "../ingredients/ingGrain";
import { iMET } from "../ingredients/ingMeat";
import { iSAU } from "../ingredients/ingSauce";
import { iSPC } from "../ingredients/ingSpice";
import { iVEG } from "../ingredients/ingVegetable";
import type { Recipe } from "../types";

const roladaWieprzowa: Recipe = {
  name: "Rolada Wieprzowa",
  type: "dinner",
  image: "",
  kcal: 680,
  time: 90,
  portions: 4,
  ingredients: [
    { ingredient: iMET.pork_ham, amount: 1, unit: "opak" },
    { ingredient: iMET.bacon_block, amount: 0.5, unit: "opak" },
    { ingredient: iMET.sausage, amount: 0.5, unit: "pęto" },
    { ingredient: iVEG.pickled_cucumber, amount: 2, unit: "szt" },
    { ingredient: iVEG.onion, amount: 1, unit: "szt" },
    { ingredient: iGRN.flour },
    { ingredient: iDIR.cream },
    { ingredient: iSAU.sarepska_mustard },
    { ingredient: iFAT.margarine },
    { ingredient: iFAT.butter },
    { ingredient: iSPC.salt },
    { ingredient: iSPC.black_pepper },
  ],

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
};

export default roladaWieprzowa;
