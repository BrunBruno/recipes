import { iDIR } from "../../ingredients/ingDairy";
import { iFAT } from "../../ingredients/ingFat";
import { iGRN } from "../../ingredients/ingGrain";
import { iLIQ } from "../../ingredients/ingLiquid";
import { iMET } from "../../ingredients/ingMeat";
import { iVEG } from "../../ingredients/ingVegetable";
import type { Recipe } from "../../types";

const tagliatelleZKurczakiem: Recipe = {
  name: "Tagliatelle z Kurczakiem",
  type: "dinner",
  images: [""],
  time: 0,
  portions: 3,
  taste: null,
  difficulty: null,
  ingredients: [
    {
      title: "",
      items: [
        { ing: iMET.chicken_breast, amount: 200 },
        { ing: iVEG.onion, amount: 150 },
        { ing: iVEG.cherry_tomato, amount: 100 },
        { ing: iGRN.tagliatelle_pasta, amount: 250 },
        { ing: iDIR.cream_18, amount: 100 },
        { ing: iLIQ.water, amount: 0.5, unit: "l" },
        { ing: iFAT.oil, amount: 2, unit: "lz" },
      ],
    },
  ],
  steps: [
    {
      title: "",
      steps: [
        "Makaron ugotuj zgodnie z instrukcją na opakowaniu na sposób al dente.",
        "Na patelni rozgrzej dwie łyżki oleju, dodaj kurczaka pokrojonego w kostkę oraz cebule pokrojoną w piórka.",
        "Smaż na gorącym ogniu do momentu aż kurczak będzie złocisty.",
        "Fix rozmieszaj dokładnie z wodą i śmietaną, wlej na patelnie.",
        "Zagotuj sos, dodaj pomidorki koktajlowe, pokrojone na połówki i ugotowany makaron.",
        "Wymieszaj dokładnie i podawaj na ciepło.",
      ],
    },
  ],
};

export default tagliatelleZKurczakiem;
