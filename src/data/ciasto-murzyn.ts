import { iDIR } from "../ingredients/ingDairy";
import { iFAT } from "../ingredients/ingFat";
import { iGRN } from "../ingredients/ingGrain";
import { iMET } from "../ingredients/ingMeat";
import { iOTH } from "../ingredients/ingOther";
import type { Recipe } from "../types";

const ciastoMurzyn: Recipe = {
  name: "Ciasto Murzyn",
  type: "dessert",
  images: ["ciasto-murzyn.jpg"],
  time: 45,
  portions: 8,
  ingredients: [
    { ingredient: iMET.egg, amount: 3 },
    { ingredient: iFAT.butter, amount: 1, unit: "kostka" },
    { ingredient: iGRN.flour, amount: 2, unit: "szklanka" },
    { ingredient: iOTH.sugar, amount: 1, unit: "szklanka" },
    { ingredient: iOTH.cocoa, amount: 3, unit: "łyżka" },
    { ingredient: iOTH.baking_powder, amount: 1, unit: "łyżeczka" },
    { ingredient: iDIR.milk, amount: 0.5, unit: "szklanka" },
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
  keyWords: ["ciasto", "słodkie", "czekolada", "biszkopt"],
};

export default ciastoMurzyn;
