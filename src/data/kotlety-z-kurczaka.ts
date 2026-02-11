import { iFAT } from "../ingredients/ingFat";
import { iGRN } from "../ingredients/ingGrain";
import { iMET } from "../ingredients/ingMeat";
import { iSPC } from "../ingredients/ingSpice";
import type { Recipe } from "../types";

const kotletyZKurczaka: Recipe = {
  name: "Kotlety z Kurczaka",
  type: "dinner",
  image: "kotlety-z-kurczaka.jpg",
  time: 25,
  portions: 4,
  ingredients: [
    { ingredient: iMET.chicken_breast, amount: 1, unit: "opak" },
    { ingredient: iMET.egg, amount: 1 },
    { ingredient: iGRN.flour, amount: 1, unit: "łyżka" },
    { ingredient: iFAT.oil },
    { ingredient: iSPC.black_pepper },
    { ingredient: iSPC.granulated_garlic },
    { ingredient: iSPC.wild_garlic },
    { ingredient: iSPC.sweet_paprika },
    { ingredient: iSPC.vegetable_seasoning },
    { ingredient: iSPC.marjoram },
    { ingredient: iSPC.herbes_de_provence },
    { ingredient: iSPC.curry },
  ],
  steps: [
    {
      title: "",
      steps: [
        "Kurczaka pokrój na małe kotleciki.",
        "Wbij jajko do garnka i rozbełtaj.",
        "Dodaj czubatą łyżkę mąki i wymieszaj, aby powstało ciasto.",
        "Dodaj przyprawy (opcjonalnie curry jeśli chcemy uzyskać kurczaka curry).",
        "Dokładnie wymieszaj kotlety w cieście.",
        "Na niewielkiej ilości oleju rozgrzanego na patelni smaż kotlety z obu stron, aż będą złociste i usmażone w środku.",
        "Podawaj na ciepło, np. z ziemniakami lub surówką.",
      ],
    },
  ],
  keyWords: ["mięso", "kurczak", "smażone"],
};

export default kotletyZKurczaka;
