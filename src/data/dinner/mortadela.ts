import { dinnerSides } from "../../dinnerSides";
import { iDIR } from "../../ingredients/ingDairy";
import { iFAT } from "../../ingredients/ingFat";
import { iGRN } from "../../ingredients/ingGrain";
import { iMET } from "../../ingredients/ingMeat";
import type { Recipe } from "../../types";
import { fryingFat } from "../../utils";

const portions = 3;
const mortadela: Recipe = {
  name: "Mortadela",
  type: "dinner",
  cookingMethods: ["fried"],
  images: ["mortadela.jpg", "mortadela-2.jpg"],
  time: 25,
  portions: portions,
  taste: null,
  difficulty: 2,
  ingredients: [
    {
      title: "",
      items: [
        { ing: iMET.mortadella, amount: 12, unit: "plas" },
        { ing: iDIR.yellow_cheese, amount: 6, unit: "plas" },
        { ing: iMET.egg, amount: 2, unit: "szt" },
        { ing: iGRN.flour, amount: 4, unit: "lz" },
        { ing: iGRN.breadcrumbs, amount: 8, unit: "lz" },
        ...fryingFat(iFAT.oil, 4, "lz", 0.35),
      ],
    },
  ],
  extrasMain: {
    options: [dinnerSides("mashed-potatoes", portions)],
    selected: 0,
  },
  extrasVeg: {
    options: [dinnerSides("beets-fried-ready", portions)],
    selected: 0,
  },
  steps: [
    {
      title: "",
      steps: [
        "Na plaster mortadeli połóż plaster sera i przykryj drugim plastrem mortadeli.",
        "Przygotuj trzy talerze: z mąką, roztrzepanym jajkiem oraz bułką tartą.",
        "Obtocz mortadelę z serem kolejno w mące, jajku i bułce tartej.",
        "Rozgrzej tłuszcz na patelni.",
        "Smaż po 2-3 minuty z każdej strony, aż panierka będzie złocista, a ser się roztopi.",
        "Podawaj od razu z wybranymi dodatkami.",
      ],
    },
  ],
  keyWords: ["mięso", "ser", "kiełbasa"],
};

export default mortadela;
