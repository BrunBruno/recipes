import { iDIR } from "../../ingredients/ingDairy";
import { iFAT } from "../../ingredients/ingFat";
import { iGRN } from "../../ingredients/ingGrain";
import { iHRB } from "../../ingredients/ingHerb";
import { iJAR } from "../../ingredients/ingJar";
import { iMET } from "../../ingredients/ingMeat";
import { iOTH } from "../../ingredients/ingOther";
import { iSPC } from "../../ingredients/ingSpice";
import { iVEG } from "../../ingredients/ingVegetable";
import type { Recipe } from "../../types";

const portions = 4;
const deepDishPizza: Recipe = {
  name: "Deep Dish Pizza",
  type: "snack",
  images: [""],
  time: 90,
  portions: portions,
  taste: null,
  difficulty: null,
  ingredients: [
    {
      title: "Ciasto",
      items: [
        { ing: iGRN.wheat_flour, amount: 400 },
        { ing: iFAT.butter, amount: 80 },
        { ing: iFAT.oil, amount: 30 },
        { ing: iOTH.yeast, amount: 7, unit: "g" },
        { ing: iOTH.sugar, amount: 1, unit: "lz" },
        { ing: iSPC.salt, amount: 1, unit: "lz" },
      ],
    },
    {
      title: "Sos pomidorowy",
      items: [
        { ing: iJAR.tomato_passata, amount: 300 },
        { ing: iVEG.garlic, amount: 2, unit: "zbk" },
        { ing: iHRB.oregano, amount: 1, unit: "lz" },
        { ing: iHRB.basil, amount: 1, unit: "lz" },
        { ing: iSPC.salt },
        { ing: iSPC.black_pepper },
      ],
    },
    {
      title: "Nadzienie",
      items: [
        { ing: iDIR.mozzarella, amount: 300 },
        { ing: iDIR.cheddar_cheese, amount: 150 },
        { ing: iMET.sausage, amount: 250 },
        { ing: iVEG.red_onion, amount: 1, unit: "szt" },
        { ing: iVEG.red_bell_pepper, amount: 1, unit: "szt" },
      ],
    },
  ],
  steps: [
    {
      title: "Przygotowanie ciasta",
      steps: [
        "Wymieszaj drożdże z cukrem i około 200 ml letniej wody. Odstaw na kilka minut.",
        "Do miski wsyp mąkę i sól, dodaj miękkie masło, olej oraz zaczyn drożdżowy.",
        "Wyrabiaj ciasto, aż będzie gładkie i elastyczne. W razie potrzeby dodaj odrobinę wody lub mąki.",
        "Przykryj ciasto i odstaw w ciepłe miejsce na około 45 minut do wyrośnięcia.",
      ],
    },
    {
      title: "Sos i nadzienie",
      steps: [
        "Przełóż passatę do rondelka.",
        "Dodaj przeciśnięty czosnek, oregano, bazylię, sól oraz pieprz.",
        "Gotuj na małym ogniu przez około 10 minut, aż sos lekko zgęstnieje.",
        "Pokrój kiełbasę, cebulę i paprykę na niewielkie kawałki.",
        "Zetrzyj mozzarellę i cheddar, jeśli używasz sera w kawałku.",
      ],
    },
    {
      title: "Składanie pizzy",
      steps: [
        "Rozgrzej piekarnik do 220°C, grzanie góra-dół.",
        "Wysmaruj masłem wysoką formę o średnicy około 26-28 cm.",
        "Rozwałkuj ciasto i wyłóż nim dno oraz wysokie boki formy.",
        "Na dnie rozłóż większość mozzarelli.",
        "Dodaj kiełbasę, cebulę i paprykę.",
        "Rozprowadź sos pomidorowy na nadzieniu i posyp pozostałymi serami.",
      ],
    },
    {
      title: "Pieczenie",
      steps: [
        "Wstaw pizzę do nagrzanego piekarnika.",
        "Piecz przez około 25-35 minut, aż brzegi ciasta będą złociste, a ser roztopiony.",
        "Po wyjęciu odstaw pizzę na 5-10 minut, aby nadzienie lekko się ustabilizowało.",
        "Pokrój na porcje i podawaj na gorąco.",
      ],
    },
  ],
  keyWords: ["ser", "ciasto", "sos"],
};

export default deepDishPizza;
