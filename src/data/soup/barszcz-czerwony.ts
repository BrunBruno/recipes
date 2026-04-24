import { iOTH } from "../../ingredients/ingOther";
import { iSPC } from "../../ingredients/ingSpice";
import { iVEG } from "../../ingredients/ingVegetable";
import type { Recipe } from "../../types";

const barszczCzerwony: Recipe = {
  name: "Barszcz Czerwony",
  description:
    "Domowy barszcz czerwony o intensywnym kolorze i lekko kwaśnym smaku, przygotowywany na bazie kiszonych buraków. Idealny na zimno lub na ciepło.",
  type: "soup",
  images: [""],
  time: 720,
  portions: 4,
  executionDifficulty: null,
  ingredients: [
    {
      title: "",
      items: [
        { ing: iVEG.beetroot, amount: 2, unit: "szt" },
        { ing: iOTH.water, amount: 700, unit: "ml" },
        { ing: iOTH.rosol, amount: 300, unit: "ml" },
        { ing: iOTH.citric_acid, amount: 0.5, unit: "lzi" },
        { ing: iOTH.maggi },
        { ing: iSPC.black_pepper },
        { ing: iSPC.salt },
      ],
    },
  ],
  steps: [
    {
      title: "",
      steps: [
        "Obierz buraki, opłucz i pokrój w plastry lub kawałki.",
        "Włóż do miski lub garnka i zalej wrzątkiem.",
        "Dodaj kwasek cytrynowy - mniej więcej tyle jakbyś solił wodę. Sprawdź czy woda jest lekko kwaśna.",
        "Odstaw na stole na całą noc.",
        "Rano przecedź płyn z buraków i sprawdź czy ma ładny czerwony kolor.",
        "Dodaj trochę rosołu, ale nie za dużo.",
        "Dopraw do smaku solą, pieprzem i odrobiną maggi.",
        "Jeśli buraki są jeszcze czerwone, możesz ponownie zalać je wrzątkiem i wieczorem dolać powstały wywar do barszczu.",
        "Barszcz najlepiej przygotować wieczorem, żeby był gotowy na następny dzień.",
      ],
    },
  ],
  keyWords: ["zupa"],
};

export default barszczCzerwony;
