import { iDIR } from "../ingredients/ingDairy";
import { iFAT } from "../ingredients/ingFat";
import { iGRN } from "../ingredients/ingGrain";
import { iMET } from "../ingredients/ingMeat";
import { iOTH } from "../ingredients/ingOther";
import type { Recipe } from "../types";

const babeczki: Recipe = {
  name: "Babeczki",
  description:
    "Proste i szybkie babeczki, które możesz udekorować owocami, orzechami lub czekoladą. Idealne na deser dla całej rodziny.",
  type: "dessert",
  images: [""],
  time: 30,
  portions: 12,
  ingredients: [
    {
      title: "",
      items: [
        { ingredient: iGRN.flour, amount: 2, unit: "szk" },
        { ingredient: iMET.egg, amount: 2, unit: "szt" },
        { ingredient: iOTH.sugar, amount: 1, unit: "szk" },
        { ingredient: iOTH.vanilla_sugar, amount: 1, unit: "opak" },
        { ingredient: iDIR.milk, amount: 1, unit: "szk" },
        { ingredient: iFAT.oil, amount: 0.5, unit: "szk" },
        { ingredient: iOTH.baking_powder, amount: 1, unit: "lzi" },
      ],
    },
  ],
  steps: [
    {
      title: "",
      steps: [
        "Połącz składniki suche w jednej misce.",
        "W drugiej misce wymieszaj składniki mokre, następnie wlej do suchych i krótko wymieszaj.",
        "Zbyt długie mieszanie sprawi, że muffinki będą ciężkie i gumowate.",
        "Dodaj opcjonalne dodatki (owoce, orzechy, wiórki kokosowe, kakao itp.).",
        "Przełóż ciasto do foremek na muffinki (najlepiej silikonowych), wypełniając je do 3/4 wysokości.",
        "Piecz w nagrzanym piekarniku w 180°C przez około 20 minut (do suchego patyczka).",
      ],
    },
  ],
  keyWords: ["ciasto"],
};

export default babeczki;
