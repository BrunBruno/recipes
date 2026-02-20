import { iFAT } from "../ingredients/ingFat";
import { iGRN } from "../ingredients/ingGrain";
import { iOTH } from "../ingredients/ingOther";
import { iSPC } from "../ingredients/ingSpice";
import type { Recipe } from "../types";

const ciastoNaPierogi: Recipe = {
  name: "Ciasto na Pierogi",
  type: "other",
  images: [""],
  time: 60,
  portions: 6,
  ingredients: [
    {
      title: "",
      items: [
        { ingredient: iGRN.flour, amount: 500 },
        { ingredient: iSPC.salt, amount: 0.5, unit: "łyżeczka" },
        { ingredient: iFAT.oil, amount: 50, unit: "ml" },
        { ingredient: iOTH.water, amount: 250, unit: "ml" },
      ],
    },
  ],
  steps: [
    {
      title: "",
      steps: [
        "Do szerokiej miski przesiej mąkę.",
        "Dodaj sól oraz olej o delikatnym smaku.",
        "Wlej szklankę gorącej, przegotowanej wody i zacznij wyrabiać ciasto. Jeśli jest bardzo gorące, na początku możesz mieszać je łyżką.",
        "Wyrabiaj ciasto ręcznie lub w maszynie (np. Thermomix), aż stanie się miękkie, plastyczne i elastyczne.",
        "Uformuj kulę, zawiń ciasto w folię spożywczą i odłóż na 30 minut, aby odpoczęło.",
        "Po leżakowaniu podziel ciasto na 3 części. Dwie odłóż na bok.",
        "Jedną część cienko rozwałkuj na stolnicy i wycinaj kółka.",
        "Każde kółko delikatnie rozciągnij w dłoniach, nałóż farsz i złóż pieroga, dokładnie sklejając brzegi.",
        "Uformowane pierogi układaj na stolnicy i przykryj lekko wilgotną ściereczką, aby nie wysychały.",
        "Gotuj pierogi partiami w osolonej, wrzącej wodzie.",
        "Wyławiaj pierogi po 3 - 4 minutach od momentu wypłynięcia na powierzchnię.",
      ],
    },
  ],
  keyWords: ["ciasto", "gotowane"],
};

export default ciastoNaPierogi;
