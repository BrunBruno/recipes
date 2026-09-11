import { iDIR } from "../../ingredients/ingDairy";
import { iFRT } from "../../ingredients/ingFruit";
import { iGRN } from "../../ingredients/ingGrain";
import { iOTH } from "../../ingredients/ingOther";
import { iSNK } from "../../ingredients/ingSnack";
import type { Recipe } from "../../types";

const kaszaZMalinami: Recipe = {
  name: "Kasza z Malinami",
  type: "dessert",
  images: [""],
  time: 15,
  portions: 1,
  taste: null,
  difficulty: null,
  ingredients: [
    {
      title: "",
      items: [
        { ing: iGRN.semolina, amount: 50 },
        { ing: iDIR.milk, amount: 250, unit: "ml" },
        { ing: iFRT.raspberries, amount: 140 },
        { ing: iDIR.vanilla_skyr, amount: 0.5, unit: "szt" },
        { ing: iSNK.chocolate_dark, amount: 1, unit: "kst" },
        { ing: iOTH.vanilla_flavor, amount: 1, unit: "ml" },
        { ing: iOTH.xylitol, amount: 10 },
      ],
    },
  ],

  steps: [
    {
      title: "",
      steps: [
        "Do małego garnka wlej mleko i wsyp kaszę mannę.",
        "Gotuj na średniej mocy, cały czas mieszając, aż kasza manna zgęstnieje do pożądanej konsystencji.",
        "W międzyczasie przełóż mrożone maliny do drugiego garnka i delikatnie podgrzewaj na małym ogniu, aż się rozmrożą. Następnie rozgnieć je widelcem na mus.",
        "W wersji ekspresowej maliny możesz rozmrozić w mikrofalówce, a następnie rozgnieść widelcem.",
        "Wyłącz kuchenkę. Do gorącej kaszki dodaj skyr waniliowy oraz ksylitol i dokładnie wymieszaj. Opcjonalnie dodaj kilka kropel aromatu waniliowego.",
        "Przełóż kaszkę do miseczki, a na wierzchu wyłóż mus malinowy.",
        "Na wierzchu ułóż kostkę gorzkiej czekolady. Pod wpływem gorącej kaszy czekolada się rozpuści i utworzy polewę.",
      ],
    },
  ],

  keyWords: ["kasza", "owoce"],
};

export default kaszaZMalinami;
