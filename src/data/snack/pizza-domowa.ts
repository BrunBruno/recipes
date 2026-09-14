import { iDIR } from "../../ingredients/ingDairy";
import { iFAT } from "../../ingredients/ingFat";
import { iFRT } from "../../ingredients/ingFruit";
import { iGRN } from "../../ingredients/ingGrain";
import { iJAR } from "../../ingredients/ingJar";
import { iLIQ } from "../../ingredients/ingLiquid";
import { iMET } from "../../ingredients/ingMeat";
import { iOTH } from "../../ingredients/ingOther";
import { iSPC } from "../../ingredients/ingSpice";
import { iVEG } from "../../ingredients/ingVegetable";
import type { Recipe } from "../../types";

const pizzaDomowa: Recipe = {
  name: "Pizza Domowa",
  type: "dinner",
  images: [""],
  time: 60,
  portions: 3,
  taste: null,
  difficulty: null,
  ingredients: [
    {
      title: "Ciasto",
      items: [
        { ing: iGRN.flour, amount: 750 },
        { ing: iFAT.olive_oil, amount: 6, unit: "lz" },
        { ing: iLIQ.water, amount: 450, unit: "ml" },
        { ing: iOTH.instant_yeast, amount: 18 },
        { ing: iSPC.salt },
      ],
    },
    {
      title: "Capricciosa",
      items: [
        { ing: iJAR.tomato_sauce, amount: 100 },
        { ing: iDIR.mozzarella, amount: 125 },
        { ing: iMET.ham_slices, amount: 80 },
        { ing: iVEG.mushrooms, amount: 80 },
        { ing: iFRT.olives, amount: 40 },
      ],
    },
    {
      title: "Salame",
      items: [
        { ing: iJAR.tomato_sauce, amount: 100 },
        { ing: iDIR.mozzarella, amount: 125 },
        { ing: iMET.salami, amount: 80 },
      ],
    },
    {
      title: "Farmerska",
      items: [
        { ing: iJAR.tomato_sauce, amount: 100 },
        { ing: iDIR.mozzarella, amount: 125 },
        { ing: iMET.ham_slices, amount: 60 },
        { ing: iMET.sausage, amount: 60 },
        { ing: iVEG.mushrooms, amount: 70 },
        { ing: iJAR.canned_corn, amount: 50 },
        { ing: iVEG.onion, amount: 40 },
      ],
    },
  ],

  steps: [
    {
      title: "Ciasto",
      steps: [
        "Przesiej mąkę przez sitko do miski.",
        "Drożdże dodaj do letniej wody i wymieszaj, odstaw na kilka minut, aby się rozpuściły.",
        "Do mąki dodaj sól, oliwę oraz wodę z drożdżami i wymieszaj wszystko łyżką.",
        "Wyrób ciasto dłońmi przez około 10 minut, aż będzie miękkie, sprężyste i nie będzie lepiło się do rąk.",
        "Podsyp ciasto odrobiną mąki i przykryj. Odstaw na około 30 minut, aby podrosło.",
        "Po wyrośnięciu podziel ciasto na 3 części i uformuj z każdej kulkę.",
        "Każdą porcję ciasta rozciągnij na kształt pizzy i ułóż na formie.",
      ],
    },
    {
      title: "Pizza Capricciosa",
      steps: [
        "Posmaruj ciasto sosem pomidorowym.",
        "Rozłóż mozzarellę, szynkę, pieczarki oraz oliwki.",
        "Nagrzej piekarnik do 250°C, grzanie góra-dół.",
        "Włóż pizzę na najniższą półkę piekarnika i piecz przez około 6-8 minut.",
      ],
    },
    {
      title: "Pizza Salame",
      steps: [
        "Posmaruj ciasto sosem pomidorowym.",
        "Rozłóż mozzarellę i plastry salami.",
        "Nagrzej piekarnik do 250°C, grzanie góra-dół.",
        "Włóż pizzę na najniższą półkę piekarnika i piecz przez około 6-8 minut.",
      ],
    },
    {
      title: "Pizza Farmerska",
      steps: [
        "Posmaruj ciasto sosem pomidorowym.",
        "Rozłóż mozzarellę, szynkę, kiełbasę, pieczarki, kukurydzę oraz cebulę.",
        "Nagrzej piekarnik do 250°C, grzanie góra-dół.",
        "Włóż pizzę na najniższą półkę piekarnika i piecz przez około 6-8 minut.",
      ],
    },
  ],

  keyWords: ["ciasto", "ser", "szynka"],
};

export default pizzaDomowa;
