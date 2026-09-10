import { dinnerSides } from "../../dinnerSides";
import { iFAT } from "../../ingredients/ingFat";
import { iGRN } from "../../ingredients/ingGrain";
import { iHRB } from "../../ingredients/ingHerb";
import { iMET } from "../../ingredients/ingMeat";
import { iSPC } from "../../ingredients/ingSpice";
import type { Recipe } from "../../types";
import { fryingFat } from "../../utils";

const portions = 3;
const kotletyZKurczaka: Recipe = {
  name: "Kotlety z Kurczaka",
  type: "dinner",
  images: [
    "kotlety-z-kurczaka.jpg",
    "kotlety-z-kurczaka-2.jpg",
    "kotlety-z-kurczaka-3.jpg",
  ],
  time: 30,
  portions: portions,
  taste: 5,
  difficulty: 2,
  ingredients: [
    {
      title: "",
      items: [
        { ing: iMET.chicken_breast, amount: 1, unit: "opak" },
        { ing: iMET.egg, amount: 3, unit: "szt" },
        { ing: iGRN.flour, amount: 3, unit: "lz" },
        ...fryingFat(iFAT.oil, 6, "lz", 0.45),
      ],
    },
    {
      title: "Standardowe",
      items: [
        { ing: iHRB.marjoram },
        { ing: iHRB.herbes_de_provence },
        { ing: iHRB.wild_garlic },
        { ing: iSPC.sweet_paprika },
        { ing: iSPC.vegetable_seasoning },
        { ing: iSPC.black_pepper },
      ],
    },
    {
      title: "Curry",
      items: [
        { ing: iSPC.curry },
        { ing: iSPC.granulated_garlic },
        { ing: iSPC.sweet_paprika },
        { ing: iSPC.hot_paprika },
        { ing: iSPC.smoked_paprika },
        { ing: iSPC.black_pepper },
      ],
    },
    {
      title: "Ziołowe",
      items: [
        { ing: iHRB.herbes_de_provence },
        { ing: iHRB.wild_garlic },
        { ing: iHRB.marjoram },
        { ing: iHRB.thyme },
        { ing: iHRB.rosemary },
        { ing: iSPC.salt },
      ],
    },
  ],
  extrasMain: {
    options: [
      dinnerSides("boiled-potatoes", portions),
      dinnerSides("oven-fries", portions),
    ],
    selected: 0,
  },
  extrasVeg: {
    options: [
      dinnerSides("beets-whole-vinegar", portions),
      dinnerSides("pickled-cucumber", portions),
    ],
    selected: 0,
  },
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
  ],
  keyWords: ["mięso", "kurczak"],
};

export default kotletyZKurczaka;
