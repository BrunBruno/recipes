import { iDIR } from "../ingredients/ingDairy";
import { iFAT } from "../ingredients/ingFat";
import { iFRT } from "../ingredients/ingFruit";
import { iGRN } from "../ingredients/ingGrain";
import { iMET } from "../ingredients/ingMeat";
import { iOTH } from "../ingredients/ingOther";
import { iSPC } from "../ingredients/ingSpice";
import type { Recipe } from "../types";

const cynamonki: Recipe = {
  name: "Cynamonki",
  type: "dessert",
  image: "",
  kcal: 0,
  time: 0,
  portions: 0,
  ingredients: [
    { ingredient: iDIR.milk, amount: 250, unit: "ml" },
    { ingredient: iMET.egg, amount: 2 },
    { ingredient: iGRN.flour, amount: 600, unit: "g" },
    { ingredient: iOTH.sugar, amount: 210, unit: "g" },
    { ingredient: iFAT.butter, amount: 185, unit: "g" },
    { ingredient: iOTH.yeast, amount: 40, unit: "g" },
    { ingredient: iSPC.salt },
    { ingredient: iSPC.cinnamon },
    { ingredient: iFRT.raisins },
    { ingredient: iOTH.powdered_sugar, amount: 1, unit: "szklanka" },
    { ingredient: iOTH.water, amount: "2-3", unit: "łyżka" },
  ],
  steps: [
    {
      title: "Ciasto drożdżowe",
      steps: [
        "Mąkę wymieszaj z suchymi drożdżami (jeśli używasz świeżych, przygotuj wcześniej rozczyn).",
        "Dodaj mleko, jajka, cukier i sól, a następnie wyrób ciasto.",
        "Pod koniec wyrabiania dodaj roztopione masło i wyrabiaj do uzyskania miękkiego, elastycznego ciasta.",
        "Uformuj kulę, przełóż do oprószonej mąką miski, przykryj i odstaw w ciepłe miejsce na około 1,5 godziny do podwojenia objętości.",
        "Wyrośnięte ciasto wyłóż na stolnicę, krótko zagnieć i podziel na dwie części.",
        "Każdą część rozwałkuj na prostokąt o wymiarach około 35 × 30 cm.",
        "Posmaruj roztopionym masłem, posyp cukrem i cynamonem, opcjonalnie dodaj rodzynki.",
        "Zwiń ciasno w roladę i pokrój ostrym nożem na plastry.",
        "Ułóż bułeczki na blasze wyłożonej papierem do pieczenia, zachowując odstępy.",
        "Przykryj ściereczką i odstaw na około 30 minut do ponownego wyrośnięcia.",
        "Piecz bułeczki w piekarniku nagrzanym do 180°C przez 15-17 minut.",
        "Po upieczeniu wyjmij i wystudź na kratce.",
      ],
    },
    {
      title: "Lukier",
      steps: [
        "Cukier puder utrzyj z wrzątkiem do uzyskania gładkiego lukru.",
        "Reguluj konsystencję, dodając wodę lub cukier puder.",
        "Wystudzone bułeczki polej lukrem.",
      ],
    },
  ],
  keyWords: ["ciasto", "słodkie", "cynamon"],
};

export default cynamonki;
