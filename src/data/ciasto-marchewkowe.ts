import { iDIR } from "../ingredients/ingDairy";
import { iFAT } from "../ingredients/ingFat";
import { iFRT } from "../ingredients/ingFruit";
import { iGRN } from "../ingredients/ingGrain";
import { iMET } from "../ingredients/ingMeat";
import { iOTH } from "../ingredients/ingOther";
import { iSPC } from "../ingredients/ingSpice";
import { iVEG } from "../ingredients/ingVegetable";
import type { Recipe } from "../types";

const ciastoMarchewkowe: Recipe = {
  name: "Ciasto Marchewkowe",
  type: "dessert",
  image: "",
  time: 0,
  portions: 0,
  ingredients: [
    { ingredient: iMET.egg, amount: 2 },
    { ingredient: iOTH.sugar, amount: 200, unit: "g" },
    { ingredient: iFAT.oil, amount: 150, unit: "ml" },
    { ingredient: iVEG.carrot, amount: 200, unit: "g" },
    { ingredient: iFRT.pineapple, amount: 75, unit: "g" },
    { ingredient: iOTH.walnuts, amount: 50, unit: "g" },
    { ingredient: iOTH.coconut_flakes, amount: 50, unit: "g" },
    { ingredient: iGRN.flour, amount: 200, unit: "g" },
    { ingredient: iOTH.baking_powder, amount: 0.5, unit: "łyżeczka" },
    { ingredient: iOTH.baking_soda, amount: 1, unit: "łyżeczka" },
    { ingredient: iSPC.cinnamon, amount: 1, unit: "łyżeczka" },
    { ingredient: iSPC.salt },
    { ingredient: iDIR.cream_cheese, amount: 125, unit: "g" },
    { ingredient: iFAT.butter, amount: 50, unit: "g" },
    { ingredient: iOTH.powdered_sugar, amount: 100, unit: "g" },
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
  keyWords: ["ciasto", "słodkie", "biszkopt"],
};

export default ciastoMarchewkowe;
