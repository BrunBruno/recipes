import { iDIR } from "../../ingredients/ingDairy";
import { iFAT } from "../../ingredients/ingFat";
import { iGRN } from "../../ingredients/ingGrain";
import { iMET } from "../../ingredients/ingMeat";
import { iOTH } from "../../ingredients/ingOther";
import type { Recipe } from "../../types";

const ciastoMurzyn: Recipe = {
  name: "Ciasto Murzyn",
  description:
    "Proste i wilgotne ciasto czekoladowe o intensywnym smaku kakao, polane słodką polewą, idealne na szybki deser.",
  type: "dessert",
  images: ["ciasto-murzyn.jpg"],
  time: 45,
  portions: 10,
  executionDifficulty: 3,
  ingredients: [
    {
      title: "",
      items: [
        { ingredient: iGRN.flour, amount: 2, unit: "szk" },
        { ingredient: iMET.egg, amount: 3, unit: "szt" },
        { ingredient: iFAT.butter, amount: 1, unit: "kst" },
        { ingredient: iDIR.milk, amount: 0.5, unit: "szk" },
        { ingredient: iOTH.sugar, amount: 1, unit: "szk" },
        { ingredient: iGRN.cocoa, amount: 3, unit: "lz" },
        { ingredient: iOTH.baking_powder, amount: 1, unit: "lzi" },
      ],
    },
  ],
  steps: [
    {
      title: "",
      steps: [
        "Masło, kakao, cukier i mleko podgrzewaj w garnku do zagotowania.",
        "Odlej niewielką ilość masy i odstaw ją na polewę.",
        "Do pozostałej masy dodaj jajka, mąkę oraz proszek do pieczenia.",
        "Całość dokładnie wymieszaj mikserem.",
        "Wlej ciasto do małej formy.",
        "Piecz przez około 30 minut.",
        "Sprawdź patyczkiem, czy ciasto jest upieczone.",
        "Po upieczeniu polej ciasto przygotowaną wcześniej polewą.",
      ],
    },
  ],
  keyWords: ["ciasto", "biszkopt"],
};

export default ciastoMurzyn;
