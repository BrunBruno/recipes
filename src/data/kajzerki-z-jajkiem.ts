import { iDIR } from "../ingredients/ingDairy";
import { iMET } from "../ingredients/ingMeat";
import { iGRN } from "../ingredients/ingGrain";
import type { Recipe } from "../types";
import { iFAT } from "../ingredients/ingFat";
import { iSAU } from "../ingredients/ingSauce";
import { iVEG } from "../ingredients/ingVegetable";

const kajzerkiZJajkiem: Recipe = {
  name: "Kajzerki z Jajkiem",
  type: "snack",
  images: ["kajzerki-z-jajkiem.jpg"],
  time: 15,
  portions: 1,
  ingredients: [
    {
      title: "",
      items: [
        { ingredient: iGRN.kaiser_roll, amount: 2, unit: "szt" },
        { ingredient: iMET.ham_slices, amount: 4, unit: "plaster" },
        { ingredient: iDIR.yellow_cheese, amount: 4, unit: "plaster" },
        { ingredient: iVEG.lettuce, amount: 4, unit: "szt" },
        { ingredient: iMET.egg, amount: 2, unit: "szt" },
        { ingredient: iSAU.mayonnaise, amount: 4, unit: "łyżeczka" },
        { ingredient: iFAT.butter },
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
  keyWords: ["jajko", "xxx"],
};

export default kajzerkiZJajkiem;
