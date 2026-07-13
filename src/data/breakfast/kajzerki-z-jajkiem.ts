import { iDIR } from "../../ingredients/ingDairy";
import { iMET } from "../../ingredients/ingMeat";
import { iGRN } from "../../ingredients/ingGrain";
import { iFAT } from "../../ingredients/ingFat";
import { iVEG } from "../../ingredients/ingVegetable";
import type { Recipe } from "../../types";
import { iSAU } from "../../ingredients/ingSauce";

const kajzerkiZJajkiem: Recipe = {
  name: "Kajzerki z Jajkiem",
  type: "breakfast",
  images: ["kajzerki-z-jajkiem.jpg"],
  time: 20,
  portions: 1,
  taste: 5,
  difficulty: 1,
  ingredients: [
    {
      title: "",
      items: [
        { ing: iGRN.kaiser_roll, amount: 2, unit: "szt" },
        { ing: iMET.egg, amount: 2, unit: "szt" },
        { ing: iMET.ham_slices, amount: 4, unit: "plas" },
        { ing: iDIR.yellow_cheese, amount: 4, unit: "plas" },
        { ing: iVEG.lettuce, amount: 4, unit: "szt" },
        { ing: iSAU.mayonnaise, amount: 4, unit: "lzi" },
        { ing: iFAT.butter, amount: 10 },
      ],
    },
  ],
  steps: [
    {
      title: "",
      steps: [
        "Jajko ugotuj na twardo, obierz i pokrój w plastry.",
        "Kajzerki przekrój na pół i posmaruj masłem.",
        "Na dolnej części kajzerki ułóż sałatę, ser żółty oraz szynkę.",
        "Na wierzch połóż plastry jajka.",
        "Na każdą kajzerkę dodaj po łyżeczce majonezu.",
      ],
    },
  ],
  keyWords: ["pieczywo", "jajko", "szynka", "ser"],
};

export default kajzerkiZJajkiem;
