import { iFAT } from "../../ingredients/ingFat";
import { iLIQ } from "../../ingredients/ingLiquid";
import { iMET } from "../../ingredients/ingMeat";
import { iSPC } from "../../ingredients/ingSpice";
import { iVEG } from "../../ingredients/ingVegetable";
import type { Recipe } from "../../types";
import { fryingFat } from "../../utils";

const chlopskiGarnek: Recipe = {
  name: "Chłopski Garnek",
  type: "dinner",
  cookingMethods: [
    ["fried", 10],
    ["stewed", 25],
  ],
  images: [""],
  time: 35,
  portions: 4,
  taste: null,
  difficulty: null,
  ingredients: [
    {
      title: "",
      items: [
        { ing: iMET.sausage, amount: 350 },
        { ing: iVEG.potato, amount: 450 },
        { ing: iVEG.cabbage, amount: 200 },
        { ing: iVEG.bell_pepper, amount: 1, unit: "szt" },
        ...fryingFat(iFAT.oil, 3, "lz", 0.7),
        { ing: iLIQ.water, amount: 400, unit: "ml" },
        { ing: iSPC.winiary_peasant_stew_fix, amount: 1, unit: "opak" },
      ],
    },
  ],
  steps: [
    {
      title: "",
      steps: [
        "Kiełbasę pokrój w półksiężyce.",
        "Ziemniaki obierz i pokrój w średnią kostkę.",
        "Paprykę pokrój w kostkę, a kapustę poszatkuj.",
        "W głębokiej patelni lub garnku rozgrzej olej i lekko podsmaż kiełbasę.",
        "Dodaj paprykę i smaż razem przez kilka minut.",
        "Dodaj ziemniaki oraz kapustę i dokładnie wymieszaj.",
        "Zawartość Fixu wymieszaj z 400 ml zimnej wody.",
        "Zalej danie przygotowanym sosem, zagotuj i duś pod przykryciem na średnim ogniu przez około 20-25 minut, aż ziemniaki będą miękkie.",
        "Podczas duszenia od czasu do czasu wymieszaj.",
      ],
    },
  ],
  keyWords: [],
};

export default chlopskiGarnek;
