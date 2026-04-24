import { iDIR } from "../../ingredients/ingDairy";
import { iFAT } from "../../ingredients/ingFat";
import { iFRT } from "../../ingredients/ingFruit";
import { iGRN } from "../../ingredients/ingGrain";
import { iMET } from "../../ingredients/ingMeat";
import { iOTH } from "../../ingredients/ingOther";
import { iSPC } from "../../ingredients/ingSpice";
import { iVEG } from "../../ingredients/ingVegetable";
import type { Recipe } from "../../types";

const ciastoMarchewkowe: Recipe = {
  name: "Ciasto Marchewkowe",
  description:
    "Wilgotne i aromatyczne ciasto marchewkowe z dodatkiem ananasa, orzechów i cynamonu, przełożone kremową polewą serową.",
  type: "dessert",
  images: [""],
  time: 95,
  portions: 10,
  executionDifficulty: null,
  ingredients: [
    {
      title: "Ciasto",
      items: [
        { ing: iGRN.flour, amount: 200 },
        { ing: iMET.egg, amount: 2, unit: "szt" },
        { ing: iFAT.oil, amount: 150, unit: "ml" },
        { ing: iVEG.carrot, amount: 200 },
        { ing: iFRT.pineapple, amount: 75 },
        { ing: iFRT.walnuts, amount: 50 },
        { ing: iFRT.coconut_flakes, amount: 50 },
        { ing: iOTH.sugar, amount: 200 },
        { ing: iOTH.baking_powder, amount: 0.5, unit: "lzi" },
        { ing: iOTH.baking_soda, amount: 1, unit: "lzi" },
        { ing: iSPC.cinnamon, amount: 1, unit: "lzi" },
        { ing: iSPC.salt },
      ],
    },
    {
      title: "Polewa",
      items: [
        { ing: iDIR.cream_cheese, amount: 125 },
        { ing: iFAT.butter, amount: 50 },
        { ing: iOTH.powdered_sugar, amount: 100 },
      ],
    },
  ],
  steps: [
    {
      title: "Ciasto",
      steps: [
        "Jajka ogrzej do temperatury pokojowej, następnie ubij do podwojenia objętości.",
        "Dodaj cukier i ubijaj dalej, aż masa będzie jasna, puszysta i gładka.",
        "Cały czas miksując, wlewaj cienkim strumieniem olej.",
        "Dodaj startą marchewkę, ananasa, posiekane orzechy oraz wiórki kokosowe i delikatnie wymieszaj.",
        "Piekarnik nagrzej do 150°C.",
        "W osobnej misce przesiej mąkę, dodaj proszek do pieczenia, sodę, cynamon i sól, dokładnie wymieszaj.",
        "Połącz delikatnie składniki suche z mokrymi, mieszając łyżką.",
        "Ciasto przełóż do tortownicy o średnicy 24 cm wyłożonej papierem do pieczenia.",
        "Piecz przez około 60 minut, do suchego patyczka.",
        "Po upieczeniu całkowicie wystudź, a następnie przekrój ciasto poziomo na dwie części.",
      ],
    },
    {
      title: "Polewa",
      steps: [
        "Miękkie masło ubij razem z serkiem kremowym i cukrem pudrem na gładką masę.",
        "Wstaw polewę do lodówki na kilkanaście minut, aby lekko stężała.",
        "Spód ciasta posmaruj około 1/3 ilości polewy.",
        "Przykryj drugą częścią ciasta i rozsmaruj pozostałą polewę na wierzchu.",
        "Udekoruj posiekanymi orzechami.",
      ],
    },
  ],
  keyWords: ["ciasto", "biszkopt"],
};

export default ciastoMarchewkowe;
