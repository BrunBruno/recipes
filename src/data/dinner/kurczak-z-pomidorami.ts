import { iDIR } from "../../ingredients/ingDairy";
import { iFAT } from "../../ingredients/ingFat";
import { iGRN } from "../../ingredients/ingGrain";
import { iLIQ } from "../../ingredients/ingLiquid";
import { iMET } from "../../ingredients/ingMeat";
import { iSPC } from "../../ingredients/ingSpice";
import { iVEG } from "../../ingredients/ingVegetable";
import type { Recipe } from "../../types";

const kurczakZPomidorami: Recipe = {
  name: "Kurczak z Pomidorami",
  type: "dinner",
  cookingMethods: [
    ["fried", 8],
    ["boiled", 10],
    ["baked", 30, 200],
  ],
  images: [""],
  time: 45,
  portions: 4,
  taste: null,
  difficulty: null,
  ingredients: [
    {
      title: "",
      items: [
        { ing: iMET.chicken_breast, amount: 250 },
        { ing: iGRN.penne_pasta, amount: 200 },
        { ing: iVEG.cherry_tomato, amount: 100 },
        { ing: iDIR.cream_18, amount: 100, unit: "ml" },
        { ing: iLIQ.water, amount: 400, unit: "ml" },
        { ing: iDIR.yellow_cheese, amount: 50 },
        { ing: iFAT.rapeseed_oil, amount: 14, unit: "ml" },
        { ing: iSPC.knorr_chicken_with_tomatoes_fix, amount: 1, unit: "opak" },
      ],
    },
  ],
  steps: [
    {
      title: "",
      steps: [
        "Rozgrzej piekarnik do 200°C.",
        "Pierś z kurczaka pokrój w kostkę, a pomidorki przekrój na połówki.",
        "W dużym garnku rozgrzej olej i podsmaż kurczaka, aż będzie złocisty.",
        "Zawartość saszetki Fix Kurczak z Pomidorami wymieszaj z wodą oraz śmietaną.",
        "Dodaj przygotowany sos do garnka z kurczakiem.",
        "Doprowadź sos do wrzenia i gotuj, mieszając przez około 2 minuty.",
        "Dodaj makaron penne oraz pomidorki i dokładnie wymieszaj.",
        "Przełóż całość do naczynia żaroodpornego.",
        "Posyp startym serem i piecz przez 25-30 minut, aż makaron będzie ugotowany, a ser stanie się złocistobrązowy.",
      ],
    },
  ],
  keyWords: ["makaron", "kurczak"],
};

export default kurczakZPomidorami;
