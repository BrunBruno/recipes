import { iDIR } from "../../ingredients/ingDairy";
import { iFAT } from "../../ingredients/ingFat";
import { iFRT } from "../../ingredients/ingFruit";
import { iGRN } from "../../ingredients/ingGrain";
import { iMET } from "../../ingredients/ingMeat";
import { iOTH } from "../../ingredients/ingOther";
import type { Recipe } from "../../types";

const portions = 5;
const jagodzianki: Recipe = {
  name: "Jagodzianki",
  type: "dessert",
  images: [""],
  time: 100,
  portions: portions,
  taste: null,
  difficulty: null,
  ingredients: [
    {
      title: "Rozczyn",
      items: [
        { ing: iDIR.milk, amount: 120, unit: "ml" },
        { ing: iOTH.sugar, amount: 30 },
        { ing: iOTH.yeast, amount: 20 },
        { ing: iGRN.wheat_flour, amount: 25 },
      ],
    },
    {
      title: "Ciasto",
      items: [
        { ing: iFAT.butter, amount: 20 },
        { ing: iMET.egg_yolk, amount: 2, unit: "szt" },
        { ing: iGRN.wheat_flour, amount: 220, kw: true },
        { ing: iFRT.bilberries, amount: 100, kw: true },
        { ing: iDIR.milk, amount: 1, unit: "lz" },
        { ing: iOTH.powdered_sugar, amount: 2, unit: "lz" },
      ],
    },
  ],
  steps: [
    {
      title: "Przygotowanie rozczynu i ciasta",
      steps: [
        "W misce wymieszaj świeże drożdże (20 g), dwie łyżki cukru, pół szklanki lekko ciepłego mleka oraz łyżkę mąki, po czym przykryj i odstaw w ciepłe miejsce na 15-20 minut do wyrośnięcia[cite: 2].",
        "Do większej miski wsyp mąkę pszenną, dodaj miękkie lub roztopione masło, dwa żółtka oraz wyrośnięty rozczyn[cite: 2].",
        "Wyrabiaj ciasto przez około 5 minut (mikserem z hakami lub ręcznie), aż będzie jednolite, choć dość lepkie[cite: 2].",
        "Przykryj miskę ściereczką lub folią i odstaw w ciepłe miejsce na 30-40 minut do wyrośnięcia[cite: 2].",
      ],
    },
    {
      title: "Formowanie i pieczenie",
      steps: [
        "Wyrośnięte ciasto podziel na 5 równych części, uformuj kule i odstaw je pod przykryciem na 10 minut[cite: 2].",
        "Każdą kulę spłaszcz na placek, na środek nałóż pełną łyżkę umytych i osuszonych jagód, a następnie zawiń jak pieroga i uformuj bułeczkę[cite: 2].",
        "Ułóż jagodzianki na blaszce z papierem do pieczenia, przykryj ściereczką i odstaw na 20 minut do ponownego wyrośnięcia[cite: 2].",
        "Posmaruj wierzch bułeczek mlekiem i piecz w piekarniku nagrzanym do 170°C (góra/dół, środkowa półka) przez około 25 minut, aż staną się rumiane[cite: 2].",
        "Po upieczeniu ostudź na kratce i przed podaniem oprósz cukrem pudrem[cite: 2].",
      ],
    },
  ],
  keyWords: ["ciasto", "deser", "owoce"],
  link: "https://aniagotuje.pl/przepis/jagodzianki",
};

export default jagodzianki;
