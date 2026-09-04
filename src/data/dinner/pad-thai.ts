import { iFAT } from "../../ingredients/ingFat";
import { iGRN } from "../../ingredients/ingGrain";
import { iLIQ } from "../../ingredients/ingLiquid";
import { iMET } from "../../ingredients/ingMeat";
import { iFSH } from "../../ingredients/ingFish";
import { iSPC } from "../../ingredients/ingSpice";
import { iVEG } from "../../ingredients/ingVegetable";
import type { Recipe } from "../../types";
import { iOTH } from "../../ingredients/ingOther";

const padThai: Recipe = {
  name: "Pad Thai",
  type: "dinner",
  cookingMethods: [
    ["boiled", 8],
    ["fried", 8],
    ["stewed", 5],
  ],
  images: ["pad-thai.jpg"],
  time: 20,
  portions: 2,
  taste: null,
  difficulty: null,
  ingredients: [
    {
      title: "",
      items: [
        { ing: iGRN.rice_noodles, amount: 200 },
        {
          type: "choice",
          options: [
            { ing: iMET.chicken_breast, amount: 300 },
            { ing: iFSH.shrimp, amount: 300 },
          ],
          selected: 0,
        },
        { ing: iVEG.leek, amount: 100 },
        { ing: iVEG.sweet_pepper, amount: 150 },
        { ing: iVEG.ginger, amount: 5 },
        { ing: iFAT.oil, amount: 15, unit: "ml" },
        { ing: iLIQ.water, amount: 350, unit: "ml" },
        { ing: iSPC.kania_pad_thai_fix, amount: 1, unit: "opak" },
        { ing: iLIQ.lime_juice },
        { ing: iOTH.brown_sugar },
      ],
    },
  ],
  steps: [
    {
      title: "",
      steps: [
        "Wrzuć makaron do wrzącej wody i gotuj prez 4-6 minut.",
        "Odcedź makaron na sitku i przelej zimną wodą. Po przelaniu odczekaj, aż makaron dobrze odcieknie.",
        "Pierś z kurczaka pokrój w cienkie paski. Jeśli używasz krewetek, oczyść je w razie potrzeby.",
        "Por pokrój w półplasterki, słodką paprykę w cienkie paski, a imbir zetrzyj na tarce.",
        "Na rozgrzanym oleju usmaż kurczaka lub krewetki.",
        "Dodaj por, paprykę oraz starty imbir i smaż jeszcze przez kilka minut, aż warzywa lekko zmiękną.",
        "Zawartość opakowania Fix Pad Thai rozpuść w 350 ml wody i wlej na patelnię.",
        "Doprowadź sos do wrzenia.",
        "Dodaj ugotowany makaron ryżowy i dokładnie wymieszaj.",
        "Podgrzewaj jeszcze przez 2-3 minuty, aż makaron wchłonie większość sosu.",
        "Dla jeszcze lepszego efektu danie skrop odrobiną sku z limonki i posyp szczyptą cukru trzcinowego.",
      ],
    },
  ],
  keyWords: ["makaron", "kurczak", "warzywa"],
};

export default padThai;
