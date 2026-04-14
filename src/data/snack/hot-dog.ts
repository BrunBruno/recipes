import { iGRN } from "../../ingredients/ingGrain";
import { iJAR } from "../../ingredients/ingJar";
import { iMET } from "../../ingredients/ingMeat";
import type { Recipe } from "../../types";

const hotHog: Recipe = {
  name: "Hot Dog",
  description:
    "Klasyczny Hot Dog z chrupiącymi bułkami, gorącymi parówkami, ogórkami kiszonymi, kapustą kiszoną, prażoną cebulką i mieszanką sosów: ketchup, musztarda i sos czosnkowy - gotowy w 10 minut dla 2 osób.",
  type: "snack",
  images: ["hot-dog.jpg"],
  time: 10,
  portions: 2,
  ingredients: [
    {
      title: "",
      items: [
        { ingredient: iMET.sausages, amount: 4, unit: "szt" },
        { ingredient: iGRN.hotdog_buns, amount: 4, unit: "szt" },
        { ingredient: iJAR.pickled_cucumber, amount: 2, unit: "szt" },
        { ingredient: iJAR.sauerkraut, amount: 160 },
        { ingredient: iJAR.fried_onion, amount: 2, unit: "lz" },
        { ingredient: iJAR.ketchup, amount: 20 },
        { ingredient: iJAR.mustard, amount: 20 },
        { ingredient: iJAR.garlic_sauce, amount: 20 },
      ],
    },
  ],
  steps: [
    {
      title: "",
      steps: [
        "Podgrzej bułki oraz parówki w mikrofalówce.",
        "Pokrój ogórki kiszone wzdłuż.",
        "Otwórz bułki i ułóż po bokach ogórki kiszone.",
        "Włóż parówkę do bułki.",
        "Polej całość ketchupem, musztardą i sosem czosnkowym.",
        "Dodaj kapustę kiszoną i posyp cebulką prażoną.",
      ],
    },
  ],
  keyWords: ["pieczywo"],
};

export default hotHog;
