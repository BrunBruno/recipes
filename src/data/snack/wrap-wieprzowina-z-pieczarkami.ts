import { iDIR } from "../../ingredients/ingDairy";
import { iFAT } from "../../ingredients/ingFat";
import { iGRN } from "../../ingredients/ingGrain";
import { iMET } from "../../ingredients/ingMeat";
import { iSAU } from "../../ingredients/ingSauce";
import { iSPC } from "../../ingredients/ingSpice";
import { iVEG } from "../../ingredients/ingVegetable";
import type { Recipe } from "../../types";

const portions = 4;
const wrapWieprzowinaZPieczarkami: Recipe = {
  name: "Wrap Wieprzowina z Pieczarkami",
  type: "snack",
  images: [""],
  time: 25,
  portions: portions,
  taste: null,
  difficulty: null,
  ingredients: [
    {
      title: "",
      items: [
        { ing: iGRN.tortilla, amount: portions, unit: "szt" },
        { ing: iMET.burger_patties, amount: portions, unit: "szt" },
        { ing: iVEG.mushrooms, amount: 100 },
        { ing: iVEG.potato, amount: 150 },
        { ing: iDIR.cheddar_cheese, amount: portions, unit: "plas" },
        { ing: iSAU.horseradish_sauce, amount: 60 },
        { ing: iFAT.oil, amount: 1, unit: "lzi" },
        { ing: iSPC.salt },
      ],
    },
  ],
  steps: [
    {
      title: "Placki",
      steps: [
        "Zetrzyj ziemniaka na tarce o grubych oczkach.",
        "Odciśnij dokładnie nadmiar wody z ziemniaka (ważne dla chrupkości).",
        "Dodaj szczyptę soli i wymieszaj.",
        "Uformuj płaski placek (hash brown).",
        "Smaż na rozgrzanym oleju 3-4 minuty z każdej strony, aż będzie złoty i chrupiący.",
      ],
    },
    {
      title: "Wrap",
      steps: [
        "Upiecz gotowe kotlety wieprzowe w piekarniku.",
        "Podsmaż pieczarki, aż odparują i lekko się zarumienią.",
        "Podgrzej tortillę na suchej patelni.",
        "Posmaruj środek sosem chrzanowym.",
        "Dodaj kotlet, pieczarki, hash brown i ser cheddar.",
        "Zawiń wrapa i podawaj od razu na gorąco.",
      ],
    },
  ],
  keyWords: ["mięso", "tortilla", "wieprzowina", "sos"],
};

export default wrapWieprzowinaZPieczarkami;
