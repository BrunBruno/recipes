import { iDIR } from "../ingredients/ingDairy";
import { iFAT } from "../ingredients/ingFat";
import { iGRN } from "../ingredients/ingGrain";
import { iMET } from "../ingredients/ingMeat";
import { iOTH } from "../ingredients/ingOther";
import { iSPC } from "../ingredients/ingSpice";
import type { Recipe } from "../types";

const biszkopciki: Recipe = {
  name: "Biszkopty",
  type: "dessert",
  images: [""],
  time: 25,
  portions: 2,
  ingredients: [
    {
      title: "",
      items: [
        { ingredient: iMET.egg, amount: 2 },
        { ingredient: iGRN.flour, amount: 60 },
        { ingredient: iFAT.oil, amount: 10 },
        { ingredient: iDIR.milk, amount: 20 },
        { ingredient: iOTH.sugar, amount: 60 },
        { ingredient: iOTH.cocoa, amount: 5 },
        { ingredient: iSPC.salt },
      ],
    },
  ],
  steps: [
    // {
    //   title: "",
    //   steps: [
    //     "Oddziel białka od żółtek.",
    //     "Białka ubij ze szczyptą soli na sztywną pianę.",
    //     "Stopniowo dodawaj cukier, cały czas ubijając, aż piana będzie gęsta i lśniąca.",
    //     "Dodaj żółtka i krótko zmiksuj na niskich obrotach.",
    //     "Dodaj olej oraz mleko i delikatnie wymieszaj.",
    //     "Wsyp przesianą mąkę i ostrożnie wymieszaj szpatułką.",
    //     "Jeśli robisz wersję kakaową oddziel część ciasta i dodaj do niej kakao.",
    //     "Przełóż masę do rękawa cukierniczego lub nakładaj łyżką na blachę wyłożoną papierem do pieczenia.",
    //     "Piecz w piekarniku nagrzanym do 170°C przez około 10 - 12 minut, aż biszkopciki lekko się zarumienią.",
    //     "Po upieczeniu ostudź na kratce.",
    //   ],
    // },
  ],
  keyWords: ["ciasto", "słodkie", "biszkopt"],
};

export default biszkopciki;
