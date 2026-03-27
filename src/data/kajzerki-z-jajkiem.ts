import { iDIR } from "../ingredients/ingDairy";
import { iMET } from "../ingredients/ingMeat";
import { iGRN } from "../ingredients/ingGrain";
import type { Recipe } from "../types";
import { iFAT } from "../ingredients/ingFat";
import { iSAU } from "../ingredients/ingSauce";
import { iVEG } from "../ingredients/ingVegetable";

const kajzerkiZJajkiem: Recipe = {
  name: "Kajzerki z Jajkiem",
  description:
    "Kajzerki z jajkiem na twardo, szynką, serem żółtym, sałatą i majonezem, szybka i prosta kanapka.",
  type: "snack",
  images: ["kajzerki-z-jajkiem.jpg"],
  time: 20,
  portions: 1,
  ingredients: [
    {
      title: "Lista składników",
      items: [
        { ingredient: iGRN.kaiser_roll, amount: 2, unit: "szt" },
        { ingredient: iMET.egg, amount: 2, unit: "szt" },
        { ingredient: iMET.ham_slices, amount: 4, unit: "plas" },
        { ingredient: iDIR.yellow_cheese, amount: 4, unit: "plas" },
        { ingredient: iVEG.lettuce, amount: 4, unit: "szt" },
        { ingredient: iSAU.mayonnaise, amount: 4, unit: "lzi" },
        { ingredient: iFAT.butter, amount: 10 },
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
  keyWords: ["pieczywo", "jajko", "xxx"],
};

export default kajzerkiZJajkiem;
