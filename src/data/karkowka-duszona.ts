import { iFAT } from "../ingredients/ingFat";
import { iMET } from "../ingredients/ingMeat";
import { iSAU } from "../ingredients/ingSauce";
import { iSPC } from "../ingredients/ingSpice";
import { iVEG } from "../ingredients/ingVegetable";
import type { Recipe } from "../types";

const karkowkaDuszona: Recipe = {
  name: "Karkówka Duszona",
  type: "dinner",
  image: "",
  time: 50,
  portions: 5,
  ingredients: [
    { ingredient: iMET.pork_neck, amount: 2, unit: "opak" },
    { ingredient: iVEG.potato, amount: 750 },
    { ingredient: iVEG.onion, amount: 1, unit: "szt" },
    { ingredient: iVEG.coleslaw, amount: 2.5, unit: "opak" },
    { ingredient: iSAU.sarepska_mustard, amount: 10, unit: "łyżeczka" },
    { ingredient: iFAT.oil, amount: 5, unit: "łyżka" },
    { ingredient: iSPC.salt },
    { ingredient: iSPC.black_pepper },
  ],

  steps: [
    {
      title: "Karkówka",
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
      title: "Ziemniaki Gotowane i Podanie",
      steps: [
        "Obierz ziemniaki i ugotuj w osolonej wodzie do miękkości.",
        "Po ugotowaniu odcedź ziemniaki, a następnie polej je sosem, w którym duszona była karkówka.",
        "Podaj porcję gotowej surówki colesław razem z mięsem i ziemniakami.",
      ],
    },
  ],
  keyWords: ["mięso", "wieprzowina", "duszone"],
};

export default karkowkaDuszona;
