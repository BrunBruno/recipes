import { iDIR } from "../../ingredients/ingDairy";
import { iFAT } from "../../ingredients/ingFat";
import { iGRN } from "../../ingredients/ingGrain";
import { iHRB } from "../../ingredients/ingHerb";
import { iJAR } from "../../ingredients/ingJar";
import { iMET } from "../../ingredients/ingMeat";
import { iSPC } from "../../ingredients/ingSpice";
import { iVEG } from "../../ingredients/ingVegetable";
import type { Recipe } from "../../types";

const lasagna: Recipe = {
  name: "Lasagna",
  type: "dinner",
  cookingMethods: [["fried", 8], ["roasted", 90]],
  images: [""],
  time: 90,
  portions: 8,
  taste: null,
  difficulty: null,
  ingredients: [
    {
      title: "Sos z mięsem",
      items: [
        { ing: iMET.pork_shoulder, amount: 700 },
        { ing: iVEG.onion, amount: 2, unit: "szt" },
        { ing: iVEG.garlic, amount: 6, unit: "zbk" },
        { ing: iVEG.mushrooms, amount: 200 },
        { ing: iJAR.tomato_puree, amount: 330 },
        { ing: iJAR.tomato_paste, amount: 200 },
        { ing: iFAT.oil, amount: 4, unit: "lz" },
        { ing: iHRB.marjoram, amount: 1, unit: "lzi" },
        { ing: iHRB.herbes_de_provence, amount: 1, unit: "lzi" },
        { ing: iSPC.sweet_paprika, amount: 1, unit: "lzi" },
        { ing: iSPC.black_pepper, amount: 1, unit: "lzi" },
        { ing: iSPC.salt, amount: 1, unit: "lzi" },
      ],
    },
    {
      title: "Pozostałe",
      items: [
        { ing: iGRN.lasagne_pasta, amount: 215 },
        { ing: iDIR.mozzarella, amount: 250 },
        { ing: iDIR.yellow_cheese, amount: 250 },
        { ing: iDIR.cream_30, amount: 100 },
        { ing: iDIR.milk, amount: 0.33, unit: "szk" },
        { ing: iSPC.sweet_paprika, amount: 1, unit: "lzi" },
      ],
    },
  ],
  steps: [
    {
      title: "Przygotowanie farszu",
      steps: [
        "Mięso mielone wymieszaj z majerankiem, ziołami prowansalskimi, solą, pieprzem i słodką papryką.",
        "Cebulę pokrój w drobną kostkę, czosnek przeciśnij przez praskę, a pieczarki pokrój na mniejsze kawałki.",
        "Na patelni rozgrzej olej i podsmaż cebulę, czosnek oraz pieczarki przez około 5 minut, aż cebula się zeszkli.",
        "Dodaj przyprawione mięso mielone i smaż, cały czas rozdrabniając mięso drewnianą łyżką.",
        "Gdy mięso zmieni kolor, dodaj przecier pomidorowy oraz koncentrat pomidorowy.",
        "Dokładnie wymieszaj i gotuj jeszcze około 2 minuty, następnie odstaw farsz.",
      ],
    },
    {
      title: "Przygotowanie składników",
      steps: [
        "Mozzarellę oraz ser żółty zetrzyj na tarce i wymieszaj razem.",
        "Formę do zapiekania wysmaruj cienką warstwą oleju.",
        "Płaty makaronu lasagne zanurzaj pojedynczo we wrzątku na około 60 sekund, aby lekko zmiękły.",
      ],
    },
    {
      title: "Układanie lazanii",
      steps: [
        "Na dnie formy ułóż pierwszą warstwę miękkiego makaronu lasagne.",
        "Na makaron wyłóż cienką warstwę farszu mięsnego i posyp serem.",
        "Powtarzaj układanie warstw: makaron, farsz mięsny, ser.",
        "Po czwartej warstwie makaronu nie dodawaj już mięsa.",
        "Na wierzchu rozłóż pozostały ser.",
        "Zalej lazanię mieszanką śmietanki i mleka z dodatkiem słodkiej papryki.",
      ],
    },
    {
      title: "Pieczenie",
      steps: [
        "Piecz lazanię w piekarniku nagrzanym do 180°C przez około 50 minut.",
        "Po upieczeniu odczekaj kilka minut przed krojeniem, aby warstwy się ustabilizowały.",
        "Podawaj na ciepło.",
      ],
    },
  ],
  keyWords: ["makaron"],
};

export default lasagna;
