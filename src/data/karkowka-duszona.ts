import { iFAT } from "../ingredients/ingFat";
import { iMET } from "../ingredients/ingMeat";
import { iSAU } from "../ingredients/ingSauce";
import { iSPC } from "../ingredients/ingSpice";
import { iVEG } from "../ingredients/ingVegetable";
import type { Recipe } from "../types";

const karkowkaDuszona: Recipe = {
  name: "Karkówka Duszona",
  type: "dinner",
  images: ["karkowka-duszona.jpg"],
  time: 60,
  portions: 5,
  ingredients: [
    {
      title: "",
      items: [
        { ingredient: iMET.pork_neck, amount: 2, unit: "opak" },
        { ingredient: iFAT.oil, amount: 5, unit: "łyżka" },
        { ingredient: iSAU.sarepska_mustard, amount: 10, unit: "łyżeczka" },
        { ingredient: iVEG.onion, amount: 1, unit: "szt" },
        { ingredient: iSPC.black_pepper },
        { ingredient: iSPC.salt },
      ],
    },
    {
      title: "Dodatki",
      items: [
        { ingredient: iVEG.potato, amount: "5 × 200" },
        { ingredient: iVEG.coleslaw, amount: "5 × 180" },
        { ingredient: iSPC.salt },
      ],
    },
  ],
  steps: [
    {
      title: "",
      steps: [
        "Karkówkę posól, popieprz i dokładnie natrzyj musztardą.",
        "Krótko podsmaż mięso na patelni z olejem.",
        "Przełóż mięso do garnka i dodaj olej pozostały ze smażenia oraz niewielką ilość wody.",
        "Duś pod przykryciem przez około 40 minut.",
        "Cebulę pokrój i podsmaż na patelni z masłem.",
        "Dodaj cebulę do duszącego się mięsa i wymieszaj.",
      ],
    },
    {
      title: "Przykładowe podanie",
      steps: [
        "Obierz ziemniaki i ugotuj je w osolonej wodzie do miękkości.",
        "Po ugotowaniu odcedź ziemniaki i polej je sosem z karkówki.",
        "Podawaj karkówkę z ziemniakami i porcją surówki colesław.",
      ],
    },
  ],
  keyWords: ["wieprzowina", "xxx"],
};

export default karkowkaDuszona;
