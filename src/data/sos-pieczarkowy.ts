import { iDIR } from "../ingredients/ingDairy";
import { iFAT } from "../ingredients/ingFat";
import { iGRN } from "../ingredients/ingGrain";
import { iOTH } from "../ingredients/ingOther";
import { iSPC } from "../ingredients/ingSpice";
import { iVEG } from "../ingredients/ingVegetable";
import type { Recipe } from "../types";

const sosPieczarkowy: Recipe = {
  name: "Sos Pieczarkowy",
  type: "other",
  image: "",
  time: 15,
  portions: 2,
  ingredients: [
    { ingredient: iVEG.mushrooms, amount: 0.5, unit: "opak" },
    { ingredient: iVEG.onion, amount: 0.5, unit: "szt" },
    { ingredient: iDIR.cream_18, amount: 1, unit: "łyżka" },
    { ingredient: iGRN.flour, amount: 1, unit: "łyżka" },
    { ingredient: iSPC.maggi },
    { ingredient: iFAT.butter },
    { ingredient: iSPC.vegetable_seasoning },
    { ingredient: iOTH.water },
  ],
  steps: [
    "Cebulę pokrój i podsmaż na maśle.",
    "Pieczarki pokrój i dodaj do cebuli.",
    "Przełóż wszystko do garnka i dodaj kilka łyżek wody.",
    "Dopraw jarzynką i Maggi.",
    "Gotuj na małym ogniu, pilnując aby sos się nie przypalił (w razie potrzeby dodaj wodę).",
    "W kubku rozrób mąkę z wodą.",
    "Dodaj śmietanę oraz odrobinę masła i dokładnie wymieszaj.",
    "Wlej mieszankę do sosu i gotuj jeszcze chwilę, cały czas mieszając.",
  ],
  keyWords: ["sos"],
};

export default sosPieczarkowy;
