import { iFAT } from "../ingredients/ingFat";
import { iGRN } from "../ingredients/ingGrain";
import { iMET } from "../ingredients/ingMeat";
import { iSPC } from "../ingredients/ingSpice";
import { iVEG } from "../ingredients/ingVegetable";
import type { Recipe } from "../types";

const kotletyZKurczaka: Recipe = {
  name: "Kotlety z Kurczaka",
  type: "dinner",
  images: [""],
  time: 30,
  portions: 3,
  ingredients: [
    {
      title: "",
      items: [
        { ingredient: iMET.chicken_breast, amount: 1, unit: "opak" },
        { ingredient: iMET.egg, amount: 3, unit: "szt" },
        { ingredient: iGRN.flour, amount: 3, unit: "łyżka" },
        { ingredient: iFAT.oil },
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
      title: "Dodatki",
      items: [
        { ingredient: iVEG.potato, amount: "3 × 150" },
        { ingredient: iVEG.beets_whole_vinegar, amount: "3 × 100" },
        { ingredient: iSPC.salt },
        { ingredient: iSPC.black_pepper },
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
        "Kotlety podawaj na talerzu.",
        "Obok ułóż porcję gotowanych ziemniaków, posypanych solą i pieprzem.",
        "Dodaj całe buraki z octu jako dodatek.",
        "Całość możesz udekorować świeżą pietruszką lub koperkiem.",
      ],
    },
  ],
  keyWords: ["kurczak"],
};

export default kotletyZKurczaka;
