import { iFAT } from "../../ingredients/ingFat";
import { iGRN } from "../../ingredients/ingGrain";
import { iHRB } from "../../ingredients/ingHerb";
import { iJAR } from "../../ingredients/ingJar";
import { iLIQ } from "../../ingredients/ingLiquid";
import { iMET } from "../../ingredients/ingMeat";
import { iSAU } from "../../ingredients/ingSauce";
import { iSPC } from "../../ingredients/ingSpice";
import type { Recipe } from "../../types";

const salatkaZSuszonychPomidorow: Recipe = {
  name: "Sałatka z Suszonych Pomidorów",
  type: "salad",
  cookingMethods: [
    ["boiled", 10],
    ["fried", 10],
  ],
  images: ["salatka-z-suszonych-pomidorow.jpg"],
  time: 30,
  portions: 4,
  taste: 3,
  difficulty: 2,
  ingredients: [
    {
      title: "",
      items: [
        { ing: iMET.chicken_breast, amount: 500 },
        { ing: iGRN.bow_tie_pasta, amount: 250 },
        { ing: iJAR.canned_corn, amount: 0.75, unit: "opak" },
        { ing: iJAR.sun_dried_tomatoes_in_oil, amount: 10, unit: "szt" },
        { ing: iGRN.sunflower_seeds, amount: 6, unit: "lz" },
        { ing: iHRB.parsley, amount: 3, unit: "lzi" },
        { ing: iFAT.rapeseed_oil, amount: 2, unit: "lz" },
      ],
    },
    {
      title: "Sos",
      items: [
        { ing: iFAT.sun_dried_tomato_oil, amount: 6, unit: "lz" },
        { ing: iSAU.ketchup, amount: 3, unit: "lz" },
        { ing: iSAU.kremser_mustard, amount: 1, unit: "lzi" },
        { ing: iLIQ.warm_water, amount: 1, unit: "lz" },
        { ing: iSPC.sea_salt },
      ],
    },
  ],
  steps: [
    {
      title: "",
      steps: [
        "Makaron ugotuj w osolonej wodzie z łyżeczką oleju. Przelej zimną wodą, odcedź i wystudź.",
        "Filety umyj, osusz, pokrój w drobną kostkę i posyp przyprawą do kurczaka.",
        "Na patelni rozgrzej olej, wrzuć kurczaka i smaż, co jakiś czas mieszając.",
        "Usmażone mięso przełóż do naczynia wyłożonego ręcznikiem papierowym, aby pozbyć się nadmiaru tłuszczu.",
        "Słonecznik podpraż na suchej patelni do lekkiego zbrązowienia.",
        "Składniki na sos dokładnie wymieszaj.",
        "W misce połącz makaron, wystudzonego kurczaka, odsączoną kukurydzę, suszone pomidory pokrojone w paski, posiekaną natkę pietruszki i słonecznik.",
        "Polej sałatkę przygotowanym sosem i w razie potrzeby dopraw solą.",
      ],
    },
  ],
  keyWords: ["sałatka", "kurczak", "makaron"],
};

export default salatkaZSuszonychPomidorow;
