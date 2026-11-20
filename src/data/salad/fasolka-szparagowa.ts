import { iFAT } from "../../ingredients/ingFat";
import { iGRN } from "../../ingredients/ingGrain";
import { iLIQ } from "../../ingredients/ingLiquid";
import { iSPC } from "../../ingredients/ingSpice";
import { iVEG } from "../../ingredients/ingVegetable";
import type { Recipe } from "../../types";

const portions = 4;
const fasolkaSzparagowa: Recipe = {
  name: "Fasolka Szparagowa",
  type: "salad",
  images: ["fasolka-szparagowa"],
  time: 30,
  portions: portions,
  taste: 3,
  difficulty: 2,
  ingredients: [
    {
      title: "Gotowana fasolka",
      items: [
        { ing: iVEG.green_beans, amount: 1000, kw: true },
        { ing: iLIQ.water, amount: 2500, unit: "ml" },
        { ing: iSPC.salt, amount: 1, unit: "lz" },
      ],
    },
    {
      title: "Zasmażka maślana",
      items: [
        { ing: iGRN.breadcrumbs, amount: 50, unit: "g", kw: true },
        { ing: iFAT.butter, amount: 100, unit: "g", kw: true },
      ],
    },
  ],
  steps: [
    {
      title: "Przygotowanie fasolki",
      steps: [
        "Fasolkę szparagową przełóż na duży durszlak i dokładnie opłucz pod zimną bieżącą wodą.",
        "Małym nożykiem odetnij oba końce każdego strączka, starając się ścinać jak najmniej, aby do środka nie dostawała się woda.",
      ],
    },
    {
      title: "Gotowanie",
      steps: [
        "Oczyszczoną fasolkę przełóż do dużego, szerokiego garnka i zalej 2,5 litra zimnej wody.",
        "Przykryj garnek pokrywką i doprowadź wodę do wrzenia na dużej mocy palnika.",
        "Gdy woda zacznie wrzeć, dodaj łyżkę soli, zmniejsz moc palnika i gotuj pod przykryciem do miękkości (żółtą około 5-12 minut, zieloną około 8-18 minut).",
        "Po ugotowaniu odcedź fasolkę na durszlaku i krótko przelej zimną wodą, aby zatrzymać proces gotowania.",
      ],
    },
    {
      title: "Zasmażka i podanie",
      steps: [
        "Na suchą patelnię wysyp bułkę tartą i praż przez kilka minut na niewielkim ogniu do zarumienienia, cały czas mieszając.",
        "Do rumianej bułki dodaj pokrojone na mniejsze kawałki masło i mieszaj, aż całkowicie się rozpuści i połączy z bułką.",
        "Ugotowaną fasolkę przełóż do salaterki, polej przygotowaną zasmażką maślaną i delikatnie wymieszaj.",
      ],
    },
  ],
  keyWords: ["warzywa"],
};

export default fasolkaSzparagowa;
