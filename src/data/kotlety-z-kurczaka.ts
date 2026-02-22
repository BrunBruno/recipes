import { iFAT } from "../ingredients/ingFat";
import { iGRN } from "../ingredients/ingGrain";
import { iMET } from "../ingredients/ingMeat";
import { iSPC } from "../ingredients/ingSpice";
import { iVEG } from "../ingredients/ingVegetable";
import type { Recipe } from "../types";

const kotletyZKurczaka: Recipe = {
  name: "Kotlety z Kurczaka",
  type: "dinner",
  images: ["kotlety-z-kurczaka.jpg"],
  time: 25,
  portions: 3,
  ingredients: [
    {
      title: "",
      items: [
        { ingredient: iMET.chicken_breast, amount: 1, unit: "opak" },
        { ingredient: iMET.egg, amount: 1, unit: "szt" },
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
    },
    {
      title: "Dodatki",
      items: [
        { ingredient: iVEG.potato, amount: "3 × 150" },
        { ingredient: iVEG.beets_whole_vinegar, amount: "3 × 150", unit: "g" },
        { ingredient: iSPC.salt },
        { ingredient: iSPC.black_pepper },
      ],
      excludeFromCalc: true,
    },
  ],
  steps: [
    {
      title: "Przygotowanie kotletów",
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
        "Kotlety podawaj na talerzu.",
        "Obok ułóż porcję gotowanych ziemniaków, posypanych solą i pieprzem.",
        "Dodaj całe buraki z octu jako dodatek.",
        "Całość możesz udekorować świeżą pietruszką lub koperkiem.",
      ],
    },
  ],
  keyWords: ["mięso", "kurczak", "smażone"],
};

export default kotletyZKurczaka;
