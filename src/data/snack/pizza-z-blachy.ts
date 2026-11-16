import { iDIR } from "../../ingredients/ingDairy";
import { iFAT } from "../../ingredients/ingFat";
import { iGRN } from "../../ingredients/ingGrain";
import { iHRB } from "../../ingredients/ingHerb";
import { iJAR } from "../../ingredients/ingJar";
import { iLIQ } from "../../ingredients/ingLiquid";
import { iMET } from "../../ingredients/ingMeat";
import { iOTH } from "../../ingredients/ingOther";
import { iSAU } from "../../ingredients/ingSauce";
import { iSPC } from "../../ingredients/ingSpice";
import { iVEG } from "../../ingredients/ingVegetable";
import type { Recipe } from "../../types";

const pizzaZBlachy: Recipe = {
  name: "Pizza z Blachy",
  type: "snack",
  images: ["pizza-z-blachy", "pizza-z-blachy-2"],
  time: 90,
  portions: 4,
  taste: 3,
  difficulty: 3,
  ingredients: [
    {
      title: "Ciasto",
      items: [
        { ing: iGRN.wheat_flour, amount: 3, unit: "szk" },
        { ing: iLIQ.warm_water, amount: 1, unit: "szk" },
        { ing: iMET.egg, amount: 1, unit: "szt" },
        { ing: iOTH.yeast, amount: 30, unit: "g" },
        { ing: iSPC.salt, amount: 1, unit: "lzi" },
        { ing: iFAT.oil, amount: 1, unit: "lz" },
        { ing: iOTH.sugar, amount: 1, unit: "lz" },
      ],
    },
    {
      title: "Sos pomidorowy",
      items: [
        { ing: iJAR.canned_tomatoes, amount: 1, unit: "opak" },
        { ing: iHRB.oregano, amount: 1, unit: "lz" },
        { ing: iHRB.basil, amount: 1, unit: "lz" },
        { ing: iSPC.granulated_garlic, amount: 1, unit: "lz" },
        { ing: iFAT.oil, amount: 1, unit: "lz" },
      ],
    },
    {
      title: "Dodatki",
      items: [
        { ing: iDIR.yellow_cheese, amount: 0.5, unit: "kst" },
        { ing: iMET.ham_canned, amount: 6, unit: "plas" },
        { ing: iVEG.mushrooms, amount: 120 },
        { ing: iSAU.ketchup },
      ],
    },
  ],
  steps: [
    {
      title: "Przygotowanie ciasta",
      steps: [
        "Do naczynia wlej ciepłą wodę, dodaj sól, cukier i drożdże.",
        "Wymieszaj kilkoma okrężnymi ruchami i odstaw na chwilę, aby drożdże zaczęły pracować.",
        "Dodaj jajko, olej oraz mąkę.",
        "Wyrób ciasto (minimum 5 min), aż będzie jednolite i elastyczne.",
        "Przykryj ciasto i pozostaw w ciepłym miejscu do wyrośnięcia.",
      ],
    },
    {
      title: "Przygotowanie sosu",
      steps: [
        "Do naczynia przełóż pomidory z puszki.",
        "Dodaj oregano, bazylię, sól czosnkową oraz olej.",
        "Wymieszaj wszystkie składniki na jednolity sos.",
      ],
    },
    {
      title: "Przygotowanie pizzy",
      steps: [
        "Wyrośnięte ciasto rozprowadź równomiernie na blasze.",
        "Posmaruj ciasto przygotowanym sosem pomidorowym.",
        "Nałóż plastry szynki, pieczarki, lub inne ulubione dodatki.",
        "Na koniec posyp pizzę startym, żółtym serem.",
        "Piecz w piekarniku 30 minut do zarumienienia ciasta i roztopienia sera.",
      ],
    },
  ],
  keyWords: ["szynka", "ser", "ciasto"],
};

export default pizzaZBlachy;
