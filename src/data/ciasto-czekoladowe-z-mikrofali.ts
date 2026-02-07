import type { Recipe } from "../types";

const ciastoCzekoladoweZMikrofali: Recipe = {
  name: "Ciasto Czekoladowe z Mikrofali",
  type: "dessert",
  image: "",
  ingredients: [
    { name: "mąka", amount: 150, unit: "g", type: "grn" },
    { name: "cukier", amount: 100, unit: "g", type: "oth" },
    { name: "kakao", amount: 60, unit: "g", type: "oth" },
    { name: "proszek do pieczenia", amount: 2, unit: "łyżeczka", type: "oth" },
    { name: "masło lub margaryna", amount: 90, unit: "g", type: "fat" },
    { name: "ciepła woda", amount: 380, unit: "ml", type: "wat" },
    { name: "czekolada gorzka", amount: 100, unit: "g", type: "oth" },
    { name: "śmietanka kremówka", amount: 100, unit: "ml", type: "dir" },
  ],
  steps: [
    "Wymieszaj mąkę, cukier, kakao, proszek do pieczenia, masło oraz wodę na jednolitą masę.",
    "Przełóż masę do naczynia nadającego się do mikrofali.",
    "Podgrzewaj w mikrofali przez 5-6 minut na mocy 400W.",
    "W osobnym naczyniu wymieszaj czekoladę ze śmietanką.",
    "Polej ciasto przygotowaną polewą.",
    "Wstaw całość do mikrofali na około 1 minutę na mocy 600W.",
  ],
};

export default ciastoCzekoladoweZMikrofali;
