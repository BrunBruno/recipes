import { iDIR } from "../ingredients/ingDairy";
import { iFAT } from "../ingredients/ingFat";
import { iGRN } from "../ingredients/ingGrain";
import { iOTH } from "../ingredients/ingOther";
import type { Recipe } from "../types";

const ciastoCzekoladoweZMikrofali: Recipe = {
  name: "Ciasto Czekoladowe z Mikrofali",
  type: "dessert",
  images: [""],
  time: 15,
  portions: 6,
  ingredients: [
    { ingredient: iFAT.butter, amount: 90 },
    { ingredient: iGRN.flour, amount: 150 },
    { ingredient: iOTH.sugar, amount: 100 },
    { ingredient: iOTH.cocoa, amount: 60 },
    { ingredient: iOTH.baking_powder, amount: 2, unit: "łyżeczka" },
    { ingredient: iOTH.dark_chocolate, amount: 100 },
    { ingredient: iDIR.cream_30, amount: 100, unit: "ml" },
    { ingredient: iOTH.water, amount: 380 },
  ],
  steps: [
    {
      title: "",
      steps: [
        "Wymieszaj mąkę, cukier, kakao, proszek do pieczenia, masło oraz wodę na jednolitą masę.",
        "Przełóż masę do naczynia nadającego się do mikrofali.",
        "Podgrzewaj w mikrofali przez 5-6 minut na mocy 400W.",
        "W osobnym naczyniu wymieszaj czekoladę ze śmietanką.",
        "Polej ciasto przygotowaną polewą.",
        "Wstaw całość do mikrofali na około 1 minutę na mocy 600W.",
      ],
    },
  ],
  keyWords: ["ciasto", "słodkie", "mikrofala"],
};

export default ciastoCzekoladoweZMikrofali;
