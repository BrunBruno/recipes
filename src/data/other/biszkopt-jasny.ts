import { iDIR } from "../../ingredients/ingDairy";
import { iFAT } from "../../ingredients/ingFat";
import { iGRN } from "../../ingredients/ingGrain";
import { iMET } from "../../ingredients/ingMeat";
import { iOTH } from "../../ingredients/ingOther";
import { iSPC } from "../../ingredients/ingSpice";
import type { Recipe } from "../../types";

const biszkoptJasny: Recipe = {
  name: "Biszkopt Jasny",
  type: "other",
  cookingMethods: [["baked", 25, 170]],
  images: [""],
  time: 40,
  portions: 1,
  taste: null,
  difficulty: null,
  ingredients: [
    {
      title: "",
      items: [
        { ing: iMET.egg, amount: 1, unit: "szt" },
        { ing: iOTH.sugar, amount: 30 },
        { ing: iGRN.flour, amount: 30 },
        { ing: iDIR.milk, amount: 30 },
        { ing: iFAT.oil, amount: 5 },
        { ing: iSPC.salt },
      ],
    },
  ],
  steps: [
    {
      title: "",
      steps: [
        "Rozgrzej piekarnik do 170°C (góra-dół).",
        "Formę wyłóż papierem do pieczenia lub lekko natłuść.",
        "Jajko ubij z cukrem na jasną, puszystą masę.",
        "Dodaj mleko oraz olej i krótko wymieszaj.",
        "Przesiej mąkę z odrobiną soli i delikatnie wmieszaj do masy szpatułką.",
        "Przelej ciasto do przygotowanej formy i wyrównaj powierzchnię.",
        "Piecz około 20-25 minut, do suchego patyczka.",
        "Po upieczeniu pozostaw biszkopt na kilka minut w formie, następnie wyjmij i wystudź na kratce.",
      ],
    },
  ],
  keyWords: ["biszkopt", "ciasto"],
};

export default biszkoptJasny;
