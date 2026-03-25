import { iFAT } from "../ingredients/ingFat";
import { iGRN } from "../ingredients/ingGrain";
import { iOTH } from "../ingredients/ingOther";
import { iSPC } from "../ingredients/ingSpice";
import { iVEG } from "../ingredients/ingVegetable";
import type { Recipe } from "../types";

const kapustaZasmazana: Recipe = {
  name: "Kapusta Zasmażana",
  type: "salad",
  images: [""],
  time: 80,
  portions: 10,
  ingredients: [
    {
      title: "",
      items: [
        { ingredient: iVEG.sauerkraut, amount: 1000 },
        { ingredient: iVEG.onion, amount: 2, unit: "szt" },
        { ingredient: iVEG.carrot, amount: 1, unit: "szt" },
        { ingredient: iOTH.water, amount: 750, unit: "ml" },
        { ingredient: iFAT.oil, amount: 70 },
        { ingredient: iGRN.flour, amount: 30 },
        { ingredient: iSPC.allspice, amount: 4, unit: "ziarno" },
        { ingredient: iSPC.bay_leaf, amount: 1, unit: "szt" },
        { ingredient: iSPC.black_pepper, amount: 0.33, unit: "łyżeczka" },
        { ingredient: iOTH.sugar, amount: 1, unit: "łyżka" },
      ],
    },
  ],
  steps: [
    {
      title: "",
      steps: [
        "Odciśnij kapustę kiszoną z soku. Jeśli jest bardzo kwaśna, możesz przepłukać wodą i ponownie odcisnąć.",
        "Pokrój kapustę z grubsza i umieść w garnku o grubym dnie.",
        "Dodaj 750 ml wody, starte marchewki, ziele angielskie, listek laurowy, pieprz oraz cukier/miód.",
        "Przykryj garnek i zagotuj kapustę. Zmniejsz ogień, gotuj 30 - 40 minut do miękkości.",
        "Na patelni rozgrzej olej, dodaj posiekaną cebulę i smaż 20 - 25 minut, aż się zeszkli i zarumieni.",
        "Do cebuli dodaj mąkę i mieszaj, aż zacznie się pienić. Stopniowo dodaj trochę wywaru z kapusty, mieszając, aby powstała płynna zasmażka.",
        "Przelej zasmażkę do garnka z kapustą, wymieszaj i zagotuj całość.",
        "Dopraw pieprzem i cukrem do smaku. Opcjonalnie dodaj sól według uznania.",
      ],
    },
  ],
};

export default kapustaZasmazana;
