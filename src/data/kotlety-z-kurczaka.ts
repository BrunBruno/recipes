import { iFAT } from "../ingredients/ingFat";
import { iGRN } from "../ingredients/ingGrain";
import { iMET } from "../ingredients/ingMeat";
import { iSPC } from "../ingredients/ingSpice";
import { iVEG } from "../ingredients/ingVegetable";
import type { Recipe } from "../types";

const portions = 3;
const kotletyZKurczaka: Recipe = {
  name: "Kotlety z Kurczaka",
  description:
    "Delikatne kotleciki z piersi kurczaka obtoczone w jajku, mące i aromatycznych przyprawach, smażone na złoty kolor. Podawane z ziemniakami i buraczkami w occie.",
  type: "dinner",
  images: ["kotlety-z-kurczaka.jpg", "kotlety-z-kurczaka-2.jpg"],
  time: 30,
  portions: portions,
  ingredients: [
    {
      title: "Składniki na kotlety",
      items: [
        { ingredient: iMET.chicken_breast, amount: 1, unit: "opak" },
        { ingredient: iMET.egg, amount: 3, unit: "szt" },
        { ingredient: iGRN.flour, amount: 3, unit: "lz" },
        { ingredient: iFAT.oil, amount: 6, unit: "lz" },
        { ingredient: iSPC.wild_garlic },
        { ingredient: iSPC.herbes_de_provence },
        { ingredient: iSPC.marjoram },
        { ingredient: iSPC.black_pepper },
        { ingredient: iSPC.granulated_garlic },
        { ingredient: iSPC.sweet_paprika },
        { ingredient: iSPC.vegetable_seasoning },
        { ingredient: iSPC.curry },
      ],
    },
    {
      title: "Przykładowe dodatki",
      items: [
        { ingredient: iVEG.potato, amount: `${portions} × 200` },
        { ingredient: iVEG.beets_whole_vinegar, amount: `${portions} × 100` },
        { ingredient: iSPC.dill },
        { ingredient: iSPC.black_pepper },
        { ingredient: iSPC.salt },
      ],
    },
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
      ],
    },
    {
      title: "Przykładowe podanie",
      steps: [
        "Obierz ziemniaki i ugotuj je w osolonej wodzie do miękkości.",
        "Podawaj kotlety na talerzu z porcją ziemniaków.",
        "Obok dodaj buraki z octu jako dodatek.",
      ],
    },
  ],
  keyWords: ["kurczak"],
};

export default kotletyZKurczaka;
