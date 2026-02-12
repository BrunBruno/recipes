import { iFAT } from "../ingredients/ingFat";
import { iGRN } from "../ingredients/ingGrain";
import { iMET } from "../ingredients/ingMeat";
import { iOTH } from "../ingredients/ingOther";
import { iSAU } from "../ingredients/ingSauce";
import { iSPC } from "../ingredients/ingSpice";
import { iVEG } from "../ingredients/ingVegetable";
import type { Recipe } from "../types";

const pizzaDomowa: Recipe = {
  name: "Pizza Domowa",
  type: "snack",
  images: [""],
  time: 0,
  portions: 0,
  ingredients: [
    { ingredient: iGRN.flour, amount: 250, unit: "g" },
    { ingredient: iOTH.water, amount: 150, unit: "ml" },
    { ingredient: iFAT.olive, amount: 2, unit: "łyżka" },
    { ingredient: iOTH.instant_yeast, amount: 3.5, unit: "g" },
    { ingredient: iSPC.salt, amount: 0.5, unit: "łyżeczka" },
    { ingredient: iOTH.sugar, amount: 0.5, unit: "łyżeczka" },
    { ingredient: iSPC.herbes_de_provence, amount: 2, unit: "łyżka" },
    { ingredient: iSAU.tomato_passata, amount: 100, unit: "g" },
    { ingredient: iMET.salami, amount: 50, unit: "g" },
    { ingredient: iVEG.olives, amount: 20, unit: "g" },
    { ingredient: iVEG.onion, amount: 30, unit: "g" },
  ],
  steps: [
    {
      title: "",
      steps: [
        "Do dużej miski wsyp mąkę i drożdże, wymieszaj dokładnie.",
        "Dodaj olej, cukier, sól i ponownie wszystko wymieszaj.",
        "Stopniowo dolewaj wodę, mieszając łyżką, a pod koniec wyrabiaj ręką aż powstanie jednolita kula ciasta. Jeśli ciasto się lepi, dodaj odrobinę mąki.",
        "Uformowaną kulę ciasta pozostaw w ciepłym miejscu, przykrytą w misce, na 20-30 minut, aby lekko urosło.",
        "Po tym czasie rozgnieć ciasto dłonią na gruby placek, następnie rozciągnij na okrągły kształt i ułóż na posmarowanej olejem blasze. Dłońmi dopasuj ciasto do kształtu formy.",
        "Na wierzch nałóż sos pomidorowy i dodatki: salami, oliwki, cebulę pociętą w piórka (lub inne ulubione składniki).",
        "Wstaw pizzę do piekarnika nagrzanego do 220°C.",
        "Piec 15-25 minut, w zależności od piekarnika. Sprawdź spód pizzy - jeśli jest przyrumieniony, pizza jest gotowa do podania.",
      ],
    },
  ],
  keyWords: ["ciasto", "ser", "sos", "włoskie", "fast food"],
};

export default pizzaDomowa;
