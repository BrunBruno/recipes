import { iGRN } from "../ingredients/ingGrain";
import { iMET } from "../ingredients/ingMeat";
import { iSAU } from "../ingredients/ingSauce";
import { iSPC } from "../ingredients/ingSpice";
import { iVEG } from "../ingredients/ingVegetable";
import type { Recipe } from "../types";

const salatkaKuskus: Recipe = {
  name: "Sałatka Kuskus",
  type: "salad",
  image: "",
  time: 25,
  portions: 8,
  ingredients: [
    { ingredient: iGRN.couscous, amount: 1, unit: "opak" },
    { ingredient: iMET.egg, amount: 4, unit: "szt" },
    { ingredient: iMET.canned_tuna, amount: 2, unit: "opak" },
    { ingredient: iVEG.canned_corn, amount: 1, unit: "opak" },
    { ingredient: iVEG.onion, amount: 1, unit: "szt" },
    { ingredient: iSAU.mayonnaise, amount: 1, unit: "opak" },
    { ingredient: iSPC.salt },
    { ingredient: iSPC.black_pepper },
  ],
  steps: [
    {
      title: "",
      steps: [
        "Ugotuj jajka na twardo.",
        "Przygotuj kuskus zgodnie z instrukcją na opakowaniu i ostudź.",
        "Jajka, cebulę oraz tuńczyka pokrój na mniejsze kawałki.",
        "Kukurydzę odsącz z zalewy.",
        "Wszystkie składniki przełóż do miski, dodaj majonez i wymieszaj.",
        "Dopraw solą i pieprzem do smaku.",
      ],
    },
  ],
  keyWords: ["sałatka", "warzywa"],
};

export default salatkaKuskus;
