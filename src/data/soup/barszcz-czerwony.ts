import { iJAR } from "../../ingredients/ingJar";
import { iLIQ } from "../../ingredients/ingLiquid";
import { iOTH } from "../../ingredients/ingOther";
import { iSPC } from "../../ingredients/ingSpice";
import { iVEG } from "../../ingredients/ingVegetable";
import type { Recipe } from "../../types";

const barszczCzerwony: Recipe = {
  name: "Barszcz Czerwony",
  type: "soup",
  images: [
    "barszcz-czerwony.jpg",
    "barszcz-czerwony-2.jpg",
    "barszcz-czerwony-3.jpg",
  ],
  time: 45,
  portions: 2,
  taste: 4,
  difficulty: 2,
  ingredients: [
    {
      title: "",
      items: [
        { ing: iVEG.beetroot, amount: 2, unit: "szt", exclude: true },
        { ing: iLIQ.water, amount: 700, unit: "ml", exclude: true },
        { ing: iLIQ.beet_broth, amount: 700, unit: "ml", invisible: true },
        { ing: iLIQ.rosol, amount: 300, unit: "ml" },
        { ing: iOTH.citric_acid, amount: 0.5, unit: "lzi" },
        {
          type: "choice",
          options: [
            { ing: iOTH.none },
            { ing: iJAR.frozen_uszka, amount: 400 },
            { ing: iJAR.tortellini_meat, amount: 400 },
            { ing: iJAR.cooked_beets, amount: 200 },
          ],
          selected: 0,
        },
        { ing: iLIQ.maggi },
        { ing: iSPC.black_pepper },
        { ing: iSPC.salt },
      ],
    },
    {
      title: "Proponowane dodatki",
      items: [
        { ing: iJAR.frozen_uszka, exclude: true },
        { ing: iJAR.tortellini_meat, exclude: true },
        { ing: iJAR.cooked_beets, exclude: true },
      ],
    },
  ],
  steps: [
    {
      title: "",
      steps: [
        "Obierz buraki, opłucz i pokrój w plastry lub kawałki.",
        "Włóż do miski lub garnka i zalej wrzątkiem.",
        "Dodaj kwasek cytrynowy - mniej więcej tyle ile soli się wodę. Sprawdź czy woda jest lekko kwaśna.",
        "Odstaw na stole na całą noc.",
        "Rano przecedź płyn z buraków i sprawdź czy ma ładny czerwony kolor.",
        "Dodaj trochę rosołu, ale nie za dużo.",
        "Podgrzej zupe na gazie, uważając aby nie zaczęła się gotować.",
        "Dopraw do smaku solą, pieprzem i odrobiną maggi.",
        "Jeśli buraki są jeszcze czerwone, możesz ponownie zalać je wrzątkiem i wieczorem dolać powstały wywar do barszczu.",
        "Barszcz najlepiej przygotować wieczorem, żeby był gotowy na następny dzień.",
      ],
    },
  ],
  keyWords: ["zupa"],
};

export default barszczCzerwony;
