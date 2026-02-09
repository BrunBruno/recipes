import { iFAT } from "../ingredients/ingFat";
import { iGRN } from "../ingredients/ingGrain";
import { iOTH } from "../ingredients/ingOther";
import { iSAU } from "../ingredients/ingSauce";
import { iSPC } from "../ingredients/ingSpice";
import type { Recipe } from "../types";

const sosDoGolabkow: Recipe = {
  name: "Sos do Gołąbków",
  type: "sauce",
  image: "golabki.jpg",
  kcal: 120,
  time: 10,
  portions: 4,
  ingredients: [
    { ingredient: iGRN.flour, amount: 2, unit: "łyżka" },
    { ingredient: iSAU.tomato_passata, amount: 250, unit: "ml" },
    { ingredient: iOTH.water, amount: 0.5, unit: "szklanka" },
    { ingredient: iFAT.butter, amount: 1, unit: "łyżka" },
    { ingredient: iSPC.maggi },
    { ingredient: iSPC.vegetable_seasoning },
    { ingredient: iSPC.salt },
  ],
  steps: [
    "Na patelni lub w garnku rozpuść masło i dodaj mąkę.",
    "Smaż, aż zasmażka będzie lekko brązowa.",
    "Dodaj wodę oraz przecier pomidorowy i dokładnie wymieszaj.",
    "Zagotuj całość, rozbijając ewentualne grudki mąki.",
    "Dopraw solą, Maggi oraz jarzynką do smaku.",
  ],
};

export default sosDoGolabkow;
