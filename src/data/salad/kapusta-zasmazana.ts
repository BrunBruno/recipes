import { iFAT } from "../../ingredients/ingFat";
import { iGRN } from "../../ingredients/ingGrain";
import { iJAR } from "../../ingredients/ingJar";
import { iOTH } from "../../ingredients/ingOther";
import { iSPC } from "../../ingredients/ingSpice";
import { iVEG } from "../../ingredients/ingVegetable";
import type { Recipe } from "../../types";

const kapustaZasmazana: Recipe = {
  name: "Kapusta Zasmażana",
  description:
    "Tradycyjna kapusta zasmażana z kiszonej kapusty z marchewką, cebulą i przyprawami, z delikatną zasmażką z mąki i oleju.",
  type: "salad",
  images: [""],
  time: 80,
  portions: 10,
  executionDifficulty: null,
  ingredients: [
    {
      title: "",
      items: [
        { ing: iJAR.sauerkraut, amount: 1000 },
        { ing: iVEG.onion, amount: 2, unit: "szt" },
        { ing: iVEG.carrot, amount: 1, unit: "szt" },
        { ing: iOTH.water, amount: 750, unit: "ml" },
        { ing: iFAT.oil, amount: 70 },
        { ing: iGRN.flour, amount: 30 },
        { ing: iOTH.sugar, amount: 1, unit: "lz" },
        { ing: iSPC.bay_leaf, amount: 1, unit: "lst" },
        { ing: iSPC.allspice, amount: 4, unit: "ziar" },
        { ing: iSPC.black_pepper, amount: 0.33, unit: "lzi" },
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
