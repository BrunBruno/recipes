import { iMET } from "../../ingredients/ingMeat";
import { iFAT } from "../../ingredients/ingFat";
import { iVEG } from "../../ingredients/ingVegetable";
import { iJAR } from "../../ingredients/ingJar";
import { iHRB } from "../../ingredients/ingHerb";
import { iLIQ } from "../../ingredients/ingLiquid";
import { iGRN } from "../../ingredients/ingGrain";
import { iDIR } from "../../ingredients/ingDairy";
import type { Recipe } from "../../types";
import { iSPC } from "../../ingredients/ingSpice";

const golabki: Recipe = {
  name: "Gołąbki",
  type: "dinner",
  cookingMethods: [
    ["fried", 15],
    ["stewed", 30],
  ],
  images: [""],
  time: 60,
  portions: 4,
  taste: null,
  difficulty: null,
  ingredients: [
    {
      title: "",
      items: [
        { ing: iMET.ground_pork, amount: 500 },
        { ing: iVEG.cabbage, amount: 300 },
        { ing: iGRN.rice_basmati, amount: 300 },
        { ing: iVEG.onion, amount: 1, unit: "szt" },
        { ing: iFAT.butter, amount: 20 },
        { ing: iFAT.oil, amount: 2, unit: "lz" },
        { ing: iMET.egg, amount: 1, unit: "szt" },
        { ing: iSPC.black_pepper },
        { ing: iSPC.salt },
      ],
    },
    {
      title: "Sos",
      items: [
        { ing: iJAR.tomato_passata, amount: 500 },
        { ing: iJAR.tomato_paste, amount: 30 },
        { ing: iLIQ.vegetable_broth, amount: 300 },
        { ing: iGRN.flour, amount: 20 },
        { ing: iDIR.sour_cream, amount: 100 },
        { ing: iHRB.dill },
        { ing: iSPC.salt },
      ],
    },
  ],
  steps: [
    {
      title: "",
      steps: [
        "Kapustę pokrój drobno, posól, wymieszaj i odstaw na 10 minut.",
        "Cebulę przesmaż na maśle i oleju.",
        "Dodaj odciśniętą kapustę i przesmaż przez 5–10 minut.",
        "Przełóż kapustę do miski i dodaj ugotowany ryż, mięso, sól, pieprz, koperek oraz jajko.",
        "Dokładnie wymieszaj masę, uformuj pulpety i usmaż je na oleju z każdej strony.",
        "Na patelnię po smażeniu wlej przecier pomidorowy, dodaj koncentrat, sól, koperek, pieprz i wywar.",
        "Zagotuj sos, dodaj pulpety i gotuj przez 30 minut.",
        "Sos zaciągnij mąką i zabiel śmietaną.",
      ],
    },
  ],
  keyWords: ["mięso", "ryż"],
};

export default golabki;
