import { iMET } from "../ingredients/ingMeat";
import { iSAU } from "../ingredients/ingSauce";
import { iSPC } from "../ingredients/ingSpice";
import { iVEG } from "../ingredients/ingVegetable";
import type { Recipe } from "../types";

const palkiBarbecue: Recipe = {
  name: "Pałki Barbecue",
  type: "dinner",
  images: ["palki-barbecue.jpg"],
  time: 60,
  portions: 3,
  ingredients: [
    {
      title: "Pałki",
      items: [
        { ingredient: iMET.chicken_drums, amount: 2, unit: "opak" },
        { ingredient: iSAU.barbecue_sauce },
        { ingredient: iSPC.sweet_paprika },
        { ingredient: iSPC.hot_paprika },
        { ingredient: iSPC.smoked_paprika },
        { ingredient: iSPC.granulated_garlic },
      ],
    },
    {
      title: "Dodatki",
      items: [
        { ingredient: iVEG.oven_fries, amount: "3 × 150", unit: "g" },
        { ingredient: iVEG.pickled_cucumber, amount: "3 × 2", unit: "szt" },
      ],
    },
  ],
  steps: [
    {
      title: "Przygotowanie pałek",
      steps: [
        "Ułóż pałki w naczyniu żaroodpornym.",
        "Posyp kurczaka mieszanką przypraw: słodką, ostrą i wędzoną papryką oraz czosnkiem granulowanym.",
        "Przykryj naczynie i piecz w piekarniku przez około 40 minut w 220°C.",
        "Wyjmij naczynie i otwórz je, odlej nadmiar tłuszczu z kurczaka.",
        "Polej pałki sosem barbecue.",
        "Wstaw naczynie ponownie do piekarnika, tym razem otwarte, i piecz w 160°C aż sos się skarmelizuje.",
      ],
    },
    {
      title: "Przykładowe podanie",
      steps: [
        "Pałki barbecue podawaj na talerzu.",
        "Obok ułóż porcję frytek z piekarnika.",
        "Dodaj ogórka kiszonego jako dodatek.",
        "Całość możesz udekorować świeżą pietruszką lub koperkiem.",
      ],
    },
  ],
  keyWords: ["mięso", "kurczak", "pieczone"],
};

export default palkiBarbecue;
