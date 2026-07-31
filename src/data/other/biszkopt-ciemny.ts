import { iDIR } from "../../ingredients/ingDairy";
import { iFAT } from "../../ingredients/ingFat";
import { iGRN } from "../../ingredients/ingGrain";
import { iMET } from "../../ingredients/ingMeat";
import { iOTH } from "../../ingredients/ingOther";
import { iSPC } from "../../ingredients/ingSpice";
import type { Recipe } from "../../types";

const biszkoptCiemny: Recipe = {
  name: "Biszkopt Ciemny",
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
        { ing: iGRN.flour, amount: 25 },
        { ing: iDIR.milk, amount: 30 },
        { ing: iFAT.oil, amount: 5 },
        { ing: iGRN.cocoa, amount: 5 },
        { ing: iSPC.salt },
      ],
    },
  ],
  steps: [
    {
      title: "",
      steps: [
        "Rozgrzej piekarnik do 170°C (góra-dół).",
        "Przygotuj formę, wykładając ją papierem do pieczenia lub lekko natłuszczając.",
        "Jajko ubij z cukrem na puszystą, jasną masę.",
        "Dodaj mleko i olej, a następnie krótko wymieszaj.",
        "Przesiej mąkę, kakao oraz szczyptę soli i delikatnie połącz z masą.",
        "Przelej ciasto do formy i wyrównaj powierzchnię.",
        "Piecz przez około 20-25 minut, aż patyczek będzie suchy.",
        "Po upieczeniu pozostaw biszkopt na kilka minut, następnie wyjmij z formy i całkowicie ostudź.",
      ],
    },
  ],
  keyWords: ["biszkopt", "ciasto"],
};

export default biszkoptCiemny;
